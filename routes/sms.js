const express = require('express');
const router = express.Router();
const axios = require('axios');

// SMS API Configuration - Multiple Providers
const SMS_PROVIDER = process.env.SMS_PROVIDER || 'msg91'; // 'msg91', 'twilio', 'fast2sms', '2factor'
const MSG91_API_KEY = process.env.MSG91_API_KEY || 'YOUR_MSG91_API_KEY';
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID || 'YOUR_TWILIO_ACCOUNT_SID';
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || 'YOUR_TWILIO_AUTH_TOKEN';
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER || 'YOUR_TWILIO_PHONE_NUMBER';
const FAST2SMS_API_KEY = process.env.FAST2SMS_API_KEY || 'YOUR_FAST2SMS_API_KEY';
const TWO_FACTOR_API_KEY = process.env.TWO_FACTOR_API_KEY || 'YOUR_2FACTOR_API_KEY';

// Generate OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Send SMS via MSG91
const sendViaMSG91 = async (phoneNumber, otp) => {
  const response = await axios.post('https://api.msg91.com/api/v5/flow/', {
    flow_id: process.env.MSG91_FLOW_ID || 'YOUR_FLOW_ID',
    mobiles: phoneNumber,
    VAR1: otp
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authkey': MSG91_API_KEY
    }
  });
  return response.data;
};

// Send SMS via Twilio
const sendViaTwilio = async (phoneNumber, otp) => {
  const response = await axios.post(`https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, {
    To: `+${phoneNumber}`,
    From: TWILIO_PHONE_NUMBER,
    Body: `Your Gegmo verification code is: ${otp}. Valid for 5 minutes.`
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64')}`
    }
  });
  return response.data;
};

// Send SMS via Fast2SMS
const sendViaFast2SMS = async (phoneNumber, otp) => {
  const response = await axios.get('https://www.fast2sms.com/dev/bulkV2', {
    params: {
      authorization: FAST2SMS_API_KEY,
      variables_values: otp,
      route: 'otp',
      numbers: phoneNumber
    }
  });
  return response.data;
};

// Send SMS via 2Factor
const sendVia2Factor = async (phoneNumber, otp) => {
  const response = await axios.get('https://2factor.in/API/V1/2factor_api_key/SMS/+' + phoneNumber + '/' + otp);
  return response.data;
};

// Main SMS sending function with provider selection
const sendSMS = async (phoneNumber, otp) => {
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  const phoneWithCode = formattedPhone.startsWith('91') ? formattedPhone : `91${formattedPhone}`;

  try {
    switch (SMS_PROVIDER.toLowerCase()) {
      case 'msg91':
        return await sendViaMSG91(phoneWithCode, otp);
      
      case 'twilio':
        return await sendViaTwilio(phoneWithCode, otp);
      
      case 'fast2sms':
        return await sendViaFast2SMS(phoneWithCode, otp);
      
      case '2factor':
        return await sendVia2Factor(phoneWithCode, otp);
      
      default:
        throw new Error(`Unsupported SMS provider: ${SMS_PROVIDER}`);
    }
  } catch (error) {
    console.error(`SMS sending failed with ${SMS_PROVIDER}:`, error);
    throw error;
  }
};

// Send OTP via SMS
router.post('/send-otp', async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber || phoneNumber.length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid phone number'
      });
    }

    const otp = generateOTP();
    
    // Try to send SMS
    try {
      const smsResult = await sendSMS(phoneNumber, otp);
      console.log(`OTP sent via ${SMS_PROVIDER} to ${phoneNumber}: ${otp}`);
      
      res.json({
        success: true,
        message: 'OTP sent successfully',
        otp: otp, // In production, don't send OTP back
        phoneNumber: phoneNumber,
        provider: SMS_PROVIDER
      });
    } catch (smsError) {
      console.error('SMS sending error:', smsError);
      
      // For development/testing, still return success with OTP
      if (process.env.NODE_ENV === 'development') {
        console.log(`Development OTP for ${phoneNumber}: ${otp}`);
        
        return res.json({
          success: true,
          message: 'OTP sent successfully (development mode)',
          otp: otp,
          phoneNumber: phoneNumber,
          provider: 'development'
        });
      }
      
      res.status(500).json({
        success: false,
        message: 'Failed to send OTP. Please try again.'
      });
    }

  } catch (error) {
    console.error('OTP generation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate OTP. Please try again.'
    });
  }
});

// Verify OTP
router.post('/verify-otp', async (req, res) => {
  try {
    const { phoneNumber, otp, expectedOtp } = req.body;

    if (!otp || otp.length !== 6) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid 6-digit OTP'
      });
    }

    // In production, you would verify against stored OTP in database
    if (otp === expectedOtp) {
      res.json({
        success: true,
        message: 'OTP verified successfully'
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Invalid OTP. Please try again.'
      });
    }

  } catch (error) {
    console.error('OTP verification error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to verify OTP. Please try again.'
    });
  }
});

module.exports = router; 