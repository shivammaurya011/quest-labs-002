import React, { useState } from 'react';
import HomeLayout from '../Layout/HomeLayout';
import Column from '../components/Board/Column';

const initialTasks = [
    {
      "id": "2",
      "priority": "high",
      "title": "Task 2",
      "description": "This is task 2",
      "status": "to_do"
    },
    {
      "id": "3",
      "priority": "high",
      "title": "Task 3",
      "description": "This is task 3",
      "status": "done"
    },
    {
      "id": "4",
      "priority": "medium",
      "title": "Task 4",
      "description": "This is task 4",
      "status": "in_progress"
    },
    
    {
      "id": "8",
      "priority": "urgent",
      "title": "Task 8",
      "description": "This is task 8",
      "status": "to_do"
    },
    {
      "id": "15",
      "priority": "low",
      "title": "Task 15",
      "description": "This is task 15",
      "status": "to_do"
    },
    {
      "id": "16",
      "priority": "high",
      "title": "Task 16",
      "description": "This is task 16",
      "status": "done"
    },
    {
      "id": "17",
      "priority": "low",
      "title": "Task 17",
      "description": "This is task 17",
      "status": "review"
    },
    {
      "id": "18",
      "priority": "medium",
      "title": "Task 18",
      "description": "This is task 18",
      "status": "review"
    },
    {
      "id": "19",
      "priority": "high",
      "title": "Task 19",
      "description": "This is task 19",
      "status": "in_progress"
    },
    
]

function Home() {
  const [tasksData, setTasksData] = useState(initialTasks);

  const handleDrop = (taskId, newStatus) => {
    const updatedTasks = tasksData.map(task => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    
    setTasksData(updatedTasks);
    console.log("Tasks updated:", updatedTasks);
  };

  return (
    <HomeLayout>
      <div className='flex bg-blue-600 min-h-screen p-6 justify-center gap-4 flex-wrap'>
        <Column
          name='To Do'
          data={tasksData.filter(task => task.status === 'to_do')}
          onDrop={handleDrop}
          setTasksData={setTasksData}
        />
        <Column
          name='In Progress'
          data={tasksData.filter(task => task.status === 'in_progress')}
          onDrop={handleDrop}
          setTasksData={setTasksData}
        />
        <Column
          name='Review'
          data={tasksData.filter(task => task.status === 'review')}
          onDrop={handleDrop}
          setTasksData={setTasksData}
        />
        <Column
          name='Done'
          data={tasksData.filter(task => task.status === 'done')}
          onDrop={handleDrop}
          setTasksData={setTasksData}
        />
      </div>
    </HomeLayout>
  );
}

export default Home;