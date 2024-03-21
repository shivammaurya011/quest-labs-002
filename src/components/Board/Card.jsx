import React from 'react';
import { FiAlignLeft } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";

function Card({ priority, title, id }) {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("taskId", id);
  };

  // Define mapping between priority levels and colors
  const priorityColors = {
    low: 'bg-green-300',
    medium: 'bg-yellow-300',
    high: 'bg-red-300',
    urgent: 'bg-purple-300',
    critical: 'bg-pink-300',
    emergency: 'bg-orange-300',
  };

  // Get the appropriate background color based on priority
  const priorityColor = priorityColors[priority] || 'bg-gray-300';

  return (
    <section
      className={`bg-gray-50 rounded-xl p-4 shadow-md border border-gray-200`}
      draggable={true}
      onDragStart={e => handleDragStart(e)}
    >
      <div className={`h-2 w-10 rounded-full ${priorityColor}`}></div>
      <h1 className="text-lg font-semibold mb-2">{title}</h1>
      <div className="flex items-center text-gray-600">
        <FiAlignLeft className="mr-2" />
        <FaRegCommentAlt className="mr-2" />
      </div>
    </section>
  );
}

export default Card;
