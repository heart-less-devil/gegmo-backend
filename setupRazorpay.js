const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Razorpay Setup Helper');
console.log('========================\n');

console.log('To get your Razorpay API keys:');
console.log('1. Go to https://dashboard.razorpay.com/');
console.log('2. Sign up and complete KYC');
console.log('3. Go to Settings → API Keys');
console.log('4. Generate Key Pair');
console.log('5. Copy your Key ID and Key Secret\n');

rl.question('Enter your Razorpay Key ID (starts with rzp_test_): ', (keyId) => {
  rl.question('Enter your Razorpay Key Secret: ', (keySecret) => {
    rl.close();
    
    // Read existing .env file
    let envContent = '';
    try {
      envContent = fs.readFileSync('.env', 'utf8');
    } catch (error) {
      console.log('No existing .env file found, creating new one...');
    }
    
    // Split into lines
    const lines = envContent.split('\n');
    
    // Update or add Razorpay keys
    let keyIdUpdated = false;
    let keySecretUpdated = false;
    
    const updatedLines = lines.map(line => {
      if (line.startsWith('RAZORPAY_KEY_ID=')) {
        keyIdUpdated = true;
        return `RAZORPAY_KEY_ID=${keyId}`;
      }
      if (line.startsWith('RAZORPAY_KEY_SECRET=')) {
        keySecretUpdated = true;
        return `RAZORPAY_KEY_SECRET=${keySecret}`;
      }
      return line;
    });
    
    // Add keys if they don't exist
    if (!keyIdUpdated) {
      updatedLines.push(`RAZORPAY_KEY_ID=${keyId}`);
    }
    if (!keySecretUpdated) {
      updatedLines.push(`RAZORPAY_KEY_SECRET=${keySecret}`);
    }
    
    // Write back to .env file
    fs.writeFileSync('.env', updatedLines.join('\n'));
    
    console.log('\n✅ Razorpay API keys saved to .env file!');
    console.log('\nNext steps:');
    console.log('1. Restart your backend server: npm start');
    console.log('2. Test payment on your frontend');
    console.log('3. Use test card: 4111 1111 1111 1111');
  });
}); 