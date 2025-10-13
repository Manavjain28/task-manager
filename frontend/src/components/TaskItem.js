import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: task.title,
    description: task.description
  });
  const [loading, setLoading] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({
      title: task.title,
      description: task.description
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({
      title: task.title,
      description: task.description
    });
  };

  const handleSave = async () => {
    if (!editData.title.trim()) {
      return;
    }

    setLoading(true);
    try {
      await onUpdate(task._id, editData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setLoading(true);
      try {
        await onDelete(task._id);
      } catch (error) {
        console.error('Error deleting task:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleToggleComplete = async () => {
    setLoading(true);
    try {
      await onToggleComplete(task._id, !task.completed);
    } catch (error) {
      console.error('Error toggling task:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        {isEditing ? (
          <div style={{ width: '100%' }}>
            <input
              type="text"
              name="title"
              value={editData.title}
              onChange={handleChange}
              className="form-input"
              style={{ marginBottom: '10px' }}
              disabled={loading}
            />
            <input
              type="text"
              name="description"
              value={editData.description}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter description..."
              disabled={loading}
            />
          </div>
        ) : (
          <>
            <h4 className={`task-title ${task.completed ? 'completed' : ''}`}>
              {task.title}
            </h4>
            {task.description && (
              <p className="task-description">{task.description}</p>
            )}
          </>
        )}
      </div>
      
      <div className="task-actions">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="btn btn-success"
              disabled={loading || !editData.title.trim()}
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={handleCancel}
              className="btn btn-secondary"
              disabled={loading}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleToggleComplete}
              className="task-checkbox"
              disabled={loading}
            />
            <button
              onClick={handleEdit}
              className="btn btn-primary"
              disabled={loading}
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="btn btn-danger"
              disabled={loading}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
