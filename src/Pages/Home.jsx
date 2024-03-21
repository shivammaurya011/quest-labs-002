import React, { useState, useEffect } from 'react';
import HomeLayout from '../Layout/HomeLayout';
import Column from '../components/Board/Column';
import axios from 'axios';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  const fetchTasks = () => {
    axios
      .get('https://quest-server.vercel.app/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => console.error('Error fetching tasks:', error));
  };

  const handleDrop = (taskId, newStatus) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === parseInt(taskId)) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);

    axios
      .patch(`https://quest-server.vercel.app/tasks/${taskId}`, { status: newStatus })
      .then(response => {
        fetchTasks();
      })
      .catch(error => console.error('Error updating task status:', error));
  };
  return (
    <HomeLayout>
      <div className='flex bg-blue-600 min-h-screen p-6 justify-center gap-4 flex-wrap'>
        <Column
          name='To Do'
          data={tasks.filter(task => task.status === 'to_do')}
          onDrop={handleDrop}
          setTasks={setTasks}
        />
        <Column
          name='In Progress'
          data={tasks.filter(task => task.status === 'in_progress')}
          onDrop={handleDrop}
          setTasks={setTasks}
        />
        <Column
          name='Review'
          data={tasks.filter(task => task.status === 'review')}
          onDrop={handleDrop}
          setTasks={setTasks}
        />
        <Column
          name='Done'
          data={tasks.filter(task => task.status === 'done')}
          onDrop={handleDrop}
          setTasks={setTasks}
        />
      </div>
    </HomeLayout>
  );
}

export default Home;
