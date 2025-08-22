// Simple script to generate NEXTAUTH_SECRET
const crypto = require('crypto');

// Generate a secure random string
const secret = crypto.randomBytes(32).toString('base64');

console.log('🔐 Generated NEXTAUTH_SECRET:');
console.log(secret);
console.log('\n📋 Copy this value and update it in your Vercel environment variables.');
console.log('⚠️  Keep this secret secure and never share it publicly.');
