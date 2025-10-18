@echo off
echo 🚀 Task Manager Deployment Setup
echo =================================
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Please run this script from the project root directory
    pause
    exit /b 1
)

echo ✅ Project structure verified
echo.

echo 📋 Current Configuration:
echo - Backend: Ready for Render deployment
echo - Frontend: Ready for Netlify deployment  
echo - Database: Needs MongoDB Atlas setup
echo.

echo 🔧 Next Steps:
echo 1. Set up MongoDB Atlas (5 minutes)
echo 2. Deploy backend to Render
echo 3. Deploy frontend to Netlify
echo.

echo 📖 Detailed instructions are in SETUP_COMPLETE.md
echo.

REM Check if backend is configured
findstr /C:"mongodb+srv://" backend\env.example >nul
if %errorlevel% equ 0 (
    echo ✅ Backend environment template is ready
) else (
    echo ❌ Backend environment needs MongoDB Atlas connection string
)

REM Check if frontend build exists
if exist "frontend\build" (
    echo ✅ Frontend build directory exists
) else (
    echo ⚠️  Frontend needs to be built (will happen during Netlify deployment)
)

echo.
echo 🎯 Your URLs will be:
echo - Frontend: https://task-manager-frontend.netlify.app
echo - Backend: https://task-manager-backend.onrender.com
echo.
echo Happy deploying! 🚀
pause
