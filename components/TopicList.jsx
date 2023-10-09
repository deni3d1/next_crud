import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

const getTopics = async() => {
  try {
    const res = await fetch('http://localhost:3000/api/topics',{ cache:'no-cache' })

    if (!res.ok) {
      throw new Error('Failed to fecth topics')
    }

    return res.json()

  } catch (error) {
    console.log('Error loading topics: ',error);
    
  }
}

const TopicList = async() => {

  const {topics} = await getTopics()  

  return (
    <>
    {topics.map((t)=> (
      <div
        key={t._id} 
        className='p-4 border gap-5 border-separate-300 my-3 flex justify-between'
      >
        <div>
          <h2 className='font-bold text-2xl'>{t.title}</h2>
          <div>
            {t.description}
          </div>
        </div>
        <div className='flex gap-2 items-start'>
          <RemoveBtn id={t._id} />
          <Link href={`/editTopic/${t._id}`}>
            <HiPencilAlt size={24}/>
          </Link>
        </div>
      </div>
    ))}
    </>
  )
}

export default TopicList