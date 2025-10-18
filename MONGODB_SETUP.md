# 🗄️ MongoDB Atlas Setup - Step by Step

## Step 1: Create Account
1. Go to https://mongodb.com/atlas
2. Click "Try Free"
3. Sign up with Google/GitHub (faster)

## Step 2: Create Cluster
1. Click "Create Cluster"
2. Choose "M0 Sandbox" (FREE)
3. Select region (choose closest to you)
4. Click "Create Cluster"
5. Wait 2-3 minutes

## Step 3: Create Database User
1. Click "Database Access" (left sidebar)
2. Click "Add New Database User"
3. Choose "Password"
4. Username: `taskmanager`
5. Password: `TaskManager123!` (or any strong password)
6. Click "Add User"

## Step 4: Allow Network Access
1. Click "Network Access" (left sidebar)
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere"
4. Click "Confirm"

## Step 5: Get Connection String
1. Click "Clusters" (left sidebar)
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Select "Node.js"
5. Copy the connection string

## Your Connection String Will Look Like:
```
mongodb+srv://taskmanager:TaskManager123!@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

## For Render, Use This Format:
```
mongodb+srv://taskmanager:TaskManager123!@cluster0.xxxxx.mongodb.net/taskmanager?retryWrites=true&w=majority
```

**Note:** Replace `cluster0.xxxxx` with your actual cluster name from MongoDB Atlas!
