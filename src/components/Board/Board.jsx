import React from 'react';
import Column from './Column';

function Board() {

  return (
    <div className="bg-blue-600 min-h-screen p-4">
      <div className='flex justify-center gap-6 flex-wrap'>
        <Column name="To Do"/>
        <Column name="In Progress" />
        <Column name="Review" />
        <Column name="Done" />
      </div>
    </div>
  );
}

export default Board;
