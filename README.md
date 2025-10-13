# Task Manager App

A full-stack Task Management application built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can register, log in, and manage their personal tasks with full CRUD operations.

## 🚀 Features

### Backend Features
- **User Authentication**: JWT-based authentication with bcrypt password hashing
- **RESTful API**: Clean API endpoints for user and task management
- **Data Validation**: Input validation using express-validator
- **Security**: Password hashing, JWT tokens, and CORS protection
- **Database**: MongoDB with Mongoose ODM

### Frontend Features
- **React Router**: Navigation between login, register, and dashboard
- **Context API**: Global state management for authentication
- **Responsive Design**: Mobile-friendly interface
- **Task Management**: Add, edit, delete, and mark tasks as complete
- **Filtering**: Filter tasks by status (All, Pending, Completed)
- **Real-time Updates**: Immediate UI updates after operations

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- CORS
- express-validator

### Frontend
- React 18
- React Router DOM
- Axios
- Context API
- CSS3

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn**

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd task-manager-app
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
# Copy the example and update with your values
cp .env.example .env
```

**Update the `.env` file with your configuration:**

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secret_jwt_key_here
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running on your system:

```bash
# For Windows
net start MongoDB

# For macOS (using Homebrew)
brew services start mongodb-community

# For Linux
sudo systemctl start mongod
```

## 🏃‍♂️ Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
The backend server will start on `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```
The frontend will start on `http://localhost:3000`

### Production Mode

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
# Serve the build folder with a static server
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Tasks (All protected with JWT)
- `GET /api/tasks` - Get all tasks for logged-in user
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/:id` - Get a specific task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

### Health Check
- `GET /api/health` - Server health check

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=5000                          # Server port
MONGO_URI=mongodb://localhost:27017/taskmanager  # MongoDB connection string
JWT_SECRET=your_jwt_secret_key     # Secret key for JWT tokens
```

## 📁 Project Structure

```
task-manager-app/
├── backend/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── middleware/
│   │   └── auth.js              # JWT authentication middleware
│   ├── models/
│   │   ├── User.js              # User model
│   │   └── Task.js              # Task model
│   ├── routes/
│   │   ├── auth.js              # Authentication routes
│   │   └── tasks.js             # Task routes
│   ├── .env                     # Environment variables
│   ├── package.json
│   └── server.js                # Main server file
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js     # Main dashboard
│   │   │   ├── Header.js        # Navigation header
│   │   │   ├── Login.js         # Login component
│   │   │   ├── Register.js      # Registration component
│   │   │   ├── TaskForm.js      # Add task form
│   │   │   ├── TaskItem.js      # Individual task item
│   │   │   └── TaskList.js      # Task list component
│   │   ├── contexts/
│   │   │   └── AuthContext.js   # Authentication context
│   │   ├── App.js               # Main app component
│   │   ├── index.js             # React entry point
│   │   └── index.css            # Global styles
│   └── package.json
└── README.md
```

## 🎯 Usage

1. **Register**: Create a new account with name, email, and password
2. **Login**: Sign in with your credentials
3. **Dashboard**: View all your tasks with filtering options
4. **Add Tasks**: Create new tasks with title and description
5. **Manage Tasks**: Edit, delete, or mark tasks as complete
6. **Filter**: View all tasks, only pending, or only completed tasks

## 🔒 Security Features

- **Password Hashing**: bcryptjs for secure password storage
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured for secure cross-origin requests
- **Protected Routes**: All task operations require authentication

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check the MONGO_URI in your .env file
   - Verify MongoDB is accessible on the specified port

2. **JWT Token Errors**
   - Check if JWT_SECRET is set in .env
   - Ensure token is being sent in Authorization header
   - Verify token hasn't expired

3. **CORS Issues**
   - Backend CORS is configured for localhost:3000
   - Update CORS settings if using different ports

4. **Port Already in Use**
   - Change PORT in .env file
   - Kill processes using the ports: `npx kill-port 3000` or `npx kill-port 5000`

## 🚀 Deployment

### Backend Deployment (Render/Vercel)
1. Set environment variables in your hosting platform
2. Ensure MongoDB Atlas connection string is configured
3. Deploy the backend folder

### Frontend Deployment (Netlify/Vercel)
1. Build the frontend: `npm run build`
2. Deploy the build folder
3. Update API endpoints to point to your deployed backend

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you encounter any issues or have questions, please open an issue in the repository.

---

**Happy Task Managing! 🎉**
