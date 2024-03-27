import React from 'react'
import Showlist from './Showlist'

function Tasklist({tasks}) {
  return (
    <div className='Show-Task-area'>
      {
        tasks.map(task =>{
          return <Showlist key={task.id} task={task}/>
        })
      }
    </div>
  )
}

export default Tasklist