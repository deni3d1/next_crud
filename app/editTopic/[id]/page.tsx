import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`,{cache:'no-store'})

    if (!res.ok) {
      throw new Error('Failed to fetch topic')
    }
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const page = async({params}) => {
  const {id} = params  
  const {topic} = await getTopicById(id)
  const {title, description} = topic
  return (
    <EditTopicForm id={id} title={title} description={description} />
  )
}

export default page