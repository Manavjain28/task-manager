@echo off
cd "C:\Users\Victus\Downloads\Task Manager Project\backend"
set PORT=5000
set MONGO_URI=mongodb://localhost:27017/taskmanager
set JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_12345
node server.js
