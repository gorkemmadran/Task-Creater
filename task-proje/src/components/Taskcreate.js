import React from 'react'
import { useState } from 'react'


function Taskcreate({onCreate}) {
     const [title, setTitle] = useState('')
     const [desc, setDesc] = useState('')

    const handleChange = (e) =>{
        setTitle(e.target.value)
    }
    const handleChange2 = (e) =>{
        setDesc(e.target.value)
    }
    const handleClick = (e) =>{
    e.preventDefault()
    onCreate(title, desc)
    setTitle('')
    setDesc('')
    }
  return (
    <div className='Task-area'>
        <form  className='Task-form'>
        <label className='Task-name-title'>Task Adını Giriniz</label>
        <input value={title} onChange={handleChange}  className='Task-input' />
        <label className='Task-quest-title'>Task Görevini Giriniz</label>
        <textarea value={desc} onChange={handleChange2} rows={7}  className='Task-textarea' />
        <button onClick={handleClick} className='Task-create-button'>Oluştur</button>
        </form>
    </div>
  )
}

export default Taskcreate