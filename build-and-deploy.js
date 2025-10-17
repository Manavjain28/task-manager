const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building and preparing Task Manager for single URL deployment...\n');

try {
  // Step 1: Install frontend dependencies
  console.log('📦 Installing frontend dependencies...');
  execSync('npm install', { cwd: './frontend', stdio: 'inherit' });
  
  // Step 2: Build frontend
  console.log('🔨 Building frontend for production...');
  execSync('npm run build', { cwd: './frontend', stdio: 'inherit' });
  
  // Step 3: Install backend dependencies
  console.log('📦 Installing backend dependencies...');
  execSync('npm install', { cwd: './backend', stdio: 'inherit' });
  
  console.log('\n✅ Build completed successfully!');
  console.log('\n📋 Next steps:');
  console.log('1. Deploy to Vercel: vercel --prod');
  console.log('2. Set environment variables:');
  console.log('   - MONGO_URI: Your MongoDB Atlas connection string');
  console.log('   - JWT_SECRET: A secure random string');
  console.log('   - NODE_ENV: production');
  console.log('\n🌐 Your app will be available at a single URL!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

