# 🚀 Force Redeploy Script

## The Issue:
Your backend is still running old code that tries to serve frontend files. The new code is ready but needs to be deployed.

## Solution:
You need to trigger a new deployment in Render with the updated code.

## Steps:

### 1. Commit Your Changes
```bash
git add .
git commit -m "Fix backend - remove frontend serving logic"
git push origin main
```

### 2. Force Redeploy in Render
1. Go to your Render dashboard
2. Find `task-manager-backend-300e`
3. Click "Manual Deploy"
4. Choose "Deploy latest commit"
5. Wait for deployment

### 3. Add Environment Variables (if not done)
In Render Environment tab, add:
```
MONGO_URI=mongodb+srv://taskmanager:TaskManager123!@taskmanager.t4ip0zv.mongodb.net/taskmanager?retryWrites=true&w=majority
JWT_SECRET=f4bcb83b7b3c0f8fffa7c9e5e93a2fbd0b61ab5f3b12bfa0caa8b9e84ad9dc1b
NODE_ENV=production
```

### 4. Test
Visit: https://task-manager-backend-300e.onrender.com/api/health

Should show: `{"message": "Server is running"}`

## Alternative: Quick Fix
If you can't commit/push, you can also:
1. Go to Render dashboard
2. Click "Manual Deploy"
3. Choose "Clear build cache and deploy"
4. This will force a fresh build with current code
