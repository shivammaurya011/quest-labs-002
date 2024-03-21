import React from 'react';
import Card from './Card';
import {FiPlus, FiMoreHorizontal} from 'react-icons/fi'

function Column({ name, data, onDrop }) {
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
      <div className='flex items-center mt-4'>
        <FiPlus className='mr-2' />
        <p className='text-sm text-gray-600'>Add to card</p>
      </div>
    </section>
  );
}

export default Column;
