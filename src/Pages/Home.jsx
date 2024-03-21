import React, { useState, useEffect } from 'react';
import HomeLayout from '../Layout/HomeLayout';
import Column from '../components/Board/Column';
import axios from 'axios';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get('http://localhost:3001/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => console.error('Error fetching tasks:', error));
  };
  
  const handleDrop = (taskId, newStatus) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  console.log(tasks)
  return (
    <HomeLayout>
      <div className='flex bg-blue-600 min-h-screen p-4 justify-center gap-6 flex-wrap'>
        <Column name="To Do" data={tasks ? tasks.filter(task => task.status === "todo") : []} onDrop={handleDrop} />
        <Column name="In Progress" data={tasks ? tasks.filter(task => task.status === "in_progress") : []} onDrop={handleDrop} />
        <Column name="Review" data={tasks ? tasks.filter(task => task.status === "review") : []} onDrop={handleDrop} />
        <Column name="Done" data={tasks ? tasks.filter(task => task.status === "done") : []} onDrop={handleDrop} />
      </div>
    </HomeLayout>
  );
}

export default Home;
