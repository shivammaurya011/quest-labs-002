import React, { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';

function AddTaskModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    priority: '',
    status: '',
    comments: []
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newFormData = { ...formData, id: generateRandomId() };
    onSubmit(newFormData);
    onClose();
  };

  function generateRandomId() {
    return Math.random().toString(36).substr(2, 9);
  }

  return (
    <>
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg'>
            <div className="flex justify-between items-center mb-4">
              <h2 className='text-lg font-semibold'>Add New Task</h2>
              <button onClick={onClose}><FiX /></button>
            </div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
              <div className="mb-4">
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className='input-field border w-full border-gray-300 rounded-md px-4 py-2 mb-2'
                >
                    <option value="">Select Priority </option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="mb-4">
                <input
                  type='text'
                  id='title'
                  name='title'
                  placeholder='Title'
                  value={formData.title}
                  onChange={handleChange}
                  className='input-field border border-gray-300 rounded-md px-4 py-2 mb-2'
                />
              </div>
              <div className="mb-4">
                <input
                  type='text'
                  id='description'
                  name='description'
                  placeholder='Description'
                  value={formData.description}
                  onChange={handleChange}
                  className='input-field border border-gray-300 rounded-md px-4 py-2 mb-2'
                />
              </div>
              <button type='submit' className='btn-primary px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600'>
                Add Task
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTaskModal;
