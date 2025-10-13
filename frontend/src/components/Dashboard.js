import React, { useState, useEffect } from 'react';
import api from '../config/api';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all'); // all, completed, pending

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/tasks');
      setTasks(response.data.tasks);
      setError('');
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setError('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskData) => {
    try {
      const response = await api.post('/api/tasks', taskData);
      setTasks([response.data.task, ...tasks]);
      setError('');
    } catch (error) {
      console.error('Error adding task:', error);
      setError('Failed to add task');
    }
  };

  const updateTask = async (taskId, updateData) => {
    try {
      const response = await api.put(`/api/tasks/${taskId}`, updateData);
      setTasks(tasks.map(task => 
        task._id === taskId ? response.data.task : task
      ));
      setError('');
    } catch (error) {
      console.error('Error updating task:', error);
      setError('Failed to update task');
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/api/tasks/${taskId}`);
      setTasks(tasks.filter(task => task._id !== taskId));
      setError('');
    } catch (error) {
      console.error('Error deleting task:', error);
      setError('Failed to delete task');
    }
  };

  const toggleComplete = async (taskId, completed) => {
    await updateTask(taskId, { completed });
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  if (loading) {
    return <div className="loading">Loading tasks...</div>;
  }

  return (
    <div className="container">
      <div className="tasks-header">
        <h1 className="tasks-title">My Tasks</h1>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({tasks.length})
          </button>
          <button
            className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            Pending ({tasks.filter(t => !t.completed).length})
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed ({tasks.filter(t => t.completed).length})
          </button>
        </div>
      </div>

      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}

      <TaskForm onAddTask={addTask} />
      
      <TaskList
        tasks={filteredTasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default Dashboard;
