import React from 'react'
import Column from './Column'

function Board() {
  return (
    <div className='flex justify-around'>
      <Column/>
      <Column/>
      <Column/>
      <Column/>
    </div>
  )
}

export default Board
