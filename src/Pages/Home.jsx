import React, { useState, useEffect } from 'react';
import HomeLayout from '../Layout/HomeLayout';
import Column from '../components/Board/Column';
import { tasks as initialTasks } from '../Config/data'; 

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(initialTasks);
  }, []);

  const handleDrop = (taskId, newStatus) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <HomeLayout>
      <div className='flex bg-blue-600 min-h-screen p-6 justify-center gap-4 flex-wrap'>
        <Column
          name='To Do'
          data={tasks.filter(task => task.status === 'to_do')}
          onDrop={handleDrop}
        />
        <Column
          name='In Progress'
          data={tasks.filter(task => task.status === 'in_progress')}
          onDrop={handleDrop}
        />
        <Column
          name='Review'
          data={tasks.filter(task => task.status === 'review')}
          onDrop={handleDrop}
        />
        <Column
          name='Done'
          data={tasks.filter(task => task.status === 'done')}
          onDrop={handleDrop}
        />
      </div>
    </HomeLayout>
  );
}

export default Home;
