'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const EditTopicForm = ({id,title,description}) => {

  const router = useRouter()

  const [newTitle,setNewTitle] = useState(title)
  const [newDescription,setNewDescription] = useState(description)

  const handleSubmit = async e=>{
    e.preventDefault()

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
        method:'PUT',
        headers:{
          "Content-type":"application/json"
        },
        body: JSON.stringify({newTitle,newDescription})
      })
      if (!res.ok) {
        throw Error('Failed to update topic!')
      }
      router.refresh()
      router.push("/")
    } catch (error) {
      console.log(error);
      
    }

  }
  
  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <input 
          onChange={(e)=>{setNewTitle(e.target.value)}}
          value={newTitle}
          className='border border-slate-500 px-8 py-2' 
          type="text" 
          placeholder='Topic Title'
        />
        <input 
          onChange={(e)=>{setNewDescription(e.target.value)}}
          value={newDescription}
          className='border border-slate-500 px-8 py-2' 
          type="text" 
          placeholder='Topic Description'
        />
        <button className='text-white bg-green-600 font-bold py-3 px-6 w-fit'>
            Update Topic
        </button>
    </form>
  )
}

export default EditTopicForm