@echo off
echo 🚀 Frontend Deployment Script
echo =============================
echo.

REM Check if we're in the right directory
if not exist "frontend" (
    echo ❌ Please run this script from the project root directory
    pause
    exit /b 1
)

echo ✅ Building frontend...
cd frontend

REM Install dependencies if needed
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Build the frontend
echo 🔨 Building React app...
npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)

echo ✅ Frontend built successfully!
echo.

echo 📁 Build files are in: frontend\build
echo.

echo 🚀 Next steps:
echo 1. Go to https://netlify.com
echo 2. Drag the 'frontend\build' folder to deploy
echo 3. Or connect your GitHub repo
echo.

echo 🎯 Your frontend will be live at:
echo https://task-manager-frontend.netlify.app
echo.

echo 📋 Environment variable to add in Netlify:
echo REACT_APP_API_URL=https://task-manager-backend-300e.onrender.com
echo.

echo Happy deploying! 🚀
pause
