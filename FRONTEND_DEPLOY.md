# 🚀 Frontend Auto-Deploy Script

## Quick Netlify Deployment

### Option 1: Netlify CLI (Automated)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from frontend directory
cd frontend
netlify deploy --prod --dir=build
```

### Option 2: Manual Netlify (Easiest)
1. Go to https://netlify.com
2. Click "New site from Git"
3. Connect GitHub → Select your repo
4. Settings:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/build`
5. Add environment variable:
   ```
   REACT_APP_API_URL=https://task-manager-backend-300e.onrender.com
   ```
6. Click "Deploy site"

### Option 3: Drag & Drop (Super Easy)
1. Build the frontend locally:
   ```bash
   cd frontend
   npm run build
   ```
2. Go to https://netlify.com
3. Drag the `frontend/build` folder to the deploy area
4. Your site will be live instantly!

## Your Frontend URL Will Be:
`https://task-manager-frontend.netlify.app`

## Test After Deployment:
1. Visit your frontend URL
2. Register a new account
3. Create a task
4. Everything should work! 🎉
