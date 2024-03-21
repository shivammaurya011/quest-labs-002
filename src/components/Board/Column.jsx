import React, { useState } from 'react';
import Card from './Card';
import { FiPlus, FiMoreHorizontal } from 'react-icons/fi';
import AddTaskModal from '../Modal/AddTaskModal';
import axios from 'axios';

function Column({ name, data, onDrop, setTasks }) {
  const [isOpen, setIsOpen] = useState(false); 
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('taskId', taskId);
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = (e, newStatus) => {
    const taskId = e.dataTransfer.getData('taskId');
    onDrop(taskId, newStatus);
  };

  const handleModal = () => {
    setIsOpen(true); // Open the modal when the button is clicked
  };

  const handleCloseModal = () => {
    setIsOpen(false); // Close the modal
  };

  const handleSubmitTask = async (taskData) => {
    try {
      taskData.status = data.length > 0 ? data[0].status : '';
  
      await axios.post('http://localhost:3001/tasks', taskData);
  
      console.log('Task submitted successfully:', taskData);
  
      setTasks([...data, taskData]);
  
      handleCloseModal();
    } catch (error) {
      console.error('Error submitting task:', error);
    }
  };
  
  

  return (
    <section
      className='bg-gray-200 p-4 rounded-xl min-w-72 shadow-md'
      onDragOver={handleDragOver}
      onDrop={e => handleDrop(e, name.toLowerCase().replace(' ', '_'))}
    >
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-semibold'>{name}</h2>
        <div className='text-gray-600'>
          <FiMoreHorizontal />
        </div>
      </div>
      <div className='grid gap-4'>
        {data.map(task => (
          <Card key={task.id} {...task} onDragStart={e => handleDragStart(e, task.id)} />
        ))}
      </div>
      <button onClick={handleModal} className='flex items-center cursor-pointer mt-4 text-sm text-gray-600'>
        <FiPlus className='mr-2' />
        Add to card
      </button>
      <AddTaskModal isOpen={isOpen} onClose={handleCloseModal} onSubmit={handleSubmitTask} /> {/* Render the AddTaskModal component */}
    </section>
  );
}

export default Column;
