# 🚀 Render Deployment - Step by Step

## Step 1: Access Your Render Service
1. Go to https://render.com
2. Sign in to your account
3. Find your `task-manager-backend-300e` service
4. Click on it

## Step 2: Update Environment Variables
1. Click "Environment" tab
2. Add these variables:

```
MONGO_URI=mongodb+srv://taskmanager:TaskManager123!@taskmanager.t4ip0zv.mongodb.net/taskmanager?retryWrites=true&w=majority
JWT_SECRET=f4bcb83b7b3c0f8fffa7c9e5e93a2fbd0b61ab5f3b12bfa0caa8b9e84ad9dc1b
NODE_ENV=production
```

**Important:** Your MongoDB connection string is ready to use!

## Step 3: Redeploy
1. Click "Manual Deploy"
2. Choose "Deploy latest commit"
3. Wait 2-3 minutes

## Step 4: Test
Visit: https://task-manager-backend-300e.onrender.com/api/health

Should show: `{"message": "Server is running"}`
