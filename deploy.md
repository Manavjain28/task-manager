# 🚀 Single URL Deployment Guide for Task Manager

Your project is now configured for **single URL deployment**! Both frontend and backend will be served from one URL.

## 🎯 Vercel Deployment (Recommended - 5 minutes)

### Single URL Deployment
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"New Project"**
3. Import your `task-manager` repository
4. **Keep Root Directory as default** (don't change it)
5. Add these Environment Variables:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager
   JWT_SECRET=your-super-secret-jwt-key-here-make-it-long
   NODE_ENV=production
   ```
6. Click **"Deploy"**
7. Your app will be available at a single URL! 🎉

## 🎯 Option 2: Render + Netlify (Alternative)

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

## 🔗 Your Single URL Will Be:
- **App**: `https://task-manager.vercel.app` (both frontend and backend!)

## ⚡ Quick Test:
1. Visit your frontend URL
2. Register a new account
3. Create a task
4. Everything should work! 🎉

---

**Need help?** Check the detailed `DEPLOYMENT.md` file in your repo!
