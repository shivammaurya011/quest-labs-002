import React from 'react';
import { FiAlignLeft } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";

function Card({ title, id }) {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("taskId", id);
  };
  return (
    <section
      className={`bg-gray-50 rounded-xl p-4 shadow-md border border-gray-200`}
      draggable={true}
      onDragStart={e=>handleDragStart(e)}
    >
      <div className={`h-2 w-10 rounded-full`}></div>
      <h1 className="text-lg font-semibold mb-2">{title}</h1>
      <div className="flex items-center text-gray-600">
        <FiAlignLeft className="mr-2" />
        <FaRegCommentAlt className="mr-2" />
      </div>
    </section>
  )
}

export default Card;
