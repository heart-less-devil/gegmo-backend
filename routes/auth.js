const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Google authentication route
router.post('/google', async (req, res) => {
  try {
    const { credential, clientId } = req.body;

    if (!credential) {
      return res.status(400).json({
        success: false,
        message: 'Google credential is required'
      });
    }

    // In production, you would verify the Google token
    // For now, we'll simulate the verification
    console.log('Google authentication attempt:', { credential, clientId });

    // Simulate Google token verification
    const googleUser = {
      email: 'user@gmail.com', // In production, extract from verified token
      name: 'Google User',
      picture: 'https://via.placeholder.com/150',
      sub: 'google_user_id'
    };

    // Check if user exists
    let user = await User.findOne({ email: googleUser.email });

    if (!user) {
      // Create new user
      user = new User({
        name: googleUser.name,
        email: googleUser.email,
        profilePicture: googleUser.picture,
        googleId: googleUser.sub,
        isVerified: true,
        authMethod: 'google'
      });

      await user.save();
      console.log('New Google user created:', user.email);
    } else {
      // Update existing user's Google info
      user.googleId = googleUser.sub;
      user.profilePicture = googleUser.picture;
      user.authMethod = 'google';
      user.isVerified = true;
      await user.save();
      console.log('Existing user updated with Google:', user.email);
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      message: 'Google authentication successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture
      },
      token: token
    });

  } catch (error) {
    console.error('Google authentication error:', error);
    res.status(500).json({
      success: false,
      message: 'Google authentication failed. Please try again.'
    });
  }
});

// Development mode Google authentication (for testing)
router.post('/google-dev', async (req, res) => {
  try {
    console.log('Development Google authentication');

    // Create or find user for development
    let user = await User.findOne({ email: 'dev@gmail.com' });

    if (!user) {
      user = new User({
        name: 'Development User',
        email: 'dev@gmail.com',
        profilePicture: 'https://via.placeholder.com/150',
        googleId: 'dev_google_id',
        isVerified: true,
        authMethod: 'google'
      });

      await user.save();
      console.log('Development user created');
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      message: 'Development Google authentication successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture
      },
      token: token
    });

  } catch (error) {
    console.error('Development Google authentication error:', error);
    res.status(500).json({
      success: false,
      message: 'Development authentication failed.'
    });
  }
});

module.exports = router; 