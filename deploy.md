# 🚀 Task Manager Deployment Guide

Your project is ready for deployment! Choose from the following deployment options.

## 🎯 Option 1: Render + Netlify (Recommended)

### Backend (Render)
1. Go to [render.com](https://render.com)
2. New Web Service → Connect GitHub
3. Select your repo, set root directory to `backend`
4. Add environment variables (same as above)
5. Deploy

### Frontend (Netlify)
1. Go to [netlify.com](https://netlify.com)
2. New site from Git
3. Set base directory to `frontend`
4. Add environment variable with your backend URL
5. Deploy

## 📋 Prerequisites (5 minutes)

### MongoDB Atlas Setup
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create free account
3. Create cluster → Get connection string
4. Replace `<password>` with your password
5. Add IP address to whitelist (0.0.0.0/0 for all)

## 🔗 Your URLs Will Be:
- **Frontend**: `https://task-manager-frontend.netlify.app`
- **Backend**: `https://task-manager-backend.onrender.com`

## ⚡ Quick Test:
1. Visit your frontend URL
2. Register a new account
3. Create a task
4. Everything should work! 🎉

---

**Need help?** Check the detailed `DEPLOYMENT.md` file in your repo!
