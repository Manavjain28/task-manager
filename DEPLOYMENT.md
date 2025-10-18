# Task Manager Deployment Guide

This guide will help you deploy your Task Manager MERN application to the cloud.

## 🚀 Quick Deployment Options

### Option 1: Render + Netlify (Recommended)

#### Backend Deployment (Render)
1. Go to [render.com](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Set:
   - **Name**: `task-manager-backend`
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: A secure random string
   - `NODE_ENV`: `production`

#### Frontend Deployment (Netlify)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`
5. Add Environment Variables:
   - `REACT_APP_API_URL`: Your backend URL

## 📋 Prerequisites

### 1. MongoDB Atlas Setup
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Replace `<password>` with your database user password
6. Add your IP address to the whitelist

### 2. Environment Variables

#### Backend (.env)
```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-here
NODE_ENV=production
```

#### Frontend (.env)
```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

## 🔗 Example URLs

After deployment, your URLs will look like:
- **Frontend**: `https://task-manager-frontend.netlify.app`
- **Backend**: `https://task-manager-backend.onrender.com`

## 🛠️ Manual Deployment Commands

If you prefer manual deployment:

### Backend (Render CLI)
```bash
cd backend
npm install
npm start
```

### Frontend (Netlify CLI)
```bash
cd frontend
npm run build
npx netlify deploy --prod --dir=build
```

## 🐛 Troubleshooting

### Common Issues:
1. **CORS Errors**: Make sure your backend CORS is configured for your frontend domain
2. **Environment Variables**: Double-check all environment variables are set correctly
3. **MongoDB Connection**: Ensure your MongoDB Atlas cluster is accessible and whitelisted
4. **Build Failures**: Check the build logs in your deployment platform

### Testing Your Deployment:
1. Visit your frontend URL
2. Try registering a new user
3. Create a task
4. Check if everything works correctly

## 📱 Mobile Responsive
Your app is already mobile-responsive and will work on all devices!

## 🔒 Security Notes
- Never commit `.env` files to git
- Use strong JWT secrets
- Keep your MongoDB credentials secure
- Enable HTTPS in production (most platforms do this automatically)

---

**Happy Deploying! 🚀**

