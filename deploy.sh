#!/bin/bash

# 🚀 Task Manager Quick Deployment Script
# This script helps you deploy your Task Manager to production

echo "🚀 Task Manager Deployment Setup"
echo "================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the project root directory"
    exit 1
fi

echo "✅ Project structure verified"
echo ""

# Display current configuration
echo "📋 Current Configuration:"
echo "- Backend: Ready for Render deployment"
echo "- Frontend: Ready for Netlify deployment"
echo "- Database: Needs MongoDB Atlas setup"
echo ""

echo "🔧 Next Steps:"
echo "1. Set up MongoDB Atlas (5 minutes)"
echo "2. Deploy backend to Render"
echo "3. Deploy frontend to Netlify"
echo ""

echo "📖 Detailed instructions are in SETUP_COMPLETE.md"
echo ""

# Check if backend is configured
if grep -q "mongodb+srv://" backend/env.example; then
    echo "✅ Backend environment template is ready"
else
    echo "❌ Backend environment needs MongoDB Atlas connection string"
fi

# Check if frontend build exists
if [ -d "frontend/build" ]; then
    echo "✅ Frontend build directory exists"
else
    echo "⚠️  Frontend needs to be built (will happen during Netlify deployment)"
fi

echo ""
echo "🎯 Your URLs will be:"
echo "- Frontend: https://task-manager-frontend.netlify.app"
echo "- Backend: https://task-manager-backend.onrender.com"
echo ""
echo "Happy deploying! 🚀"
