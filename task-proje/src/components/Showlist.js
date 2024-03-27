import React from 'react'

function Showlist({task}) {
  return (
    <div className='Show-task'>
    <h1 className='Show-task-title'>Göreviniz</h1>
      <h6 className='Show-task-data-title'>{task.title}</h6>
      <h1 className='Show-task-title'>Yapılacaklar</h1>
      <p className='Show-task-data-desc'>{task.desc}</p>
      <div className='Show-task-button-area'>
      <button className='Show-task-delete'>Sil</button>
      <button className='Show-task-update'>Düzenle</button>
      </div>
    </div>
  )
}

export default Showlist