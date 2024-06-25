import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { id } = useParams()
  return (
    <div className='text-center text-3xl bg-gray-600 text-white p-4'>User: {id}</div>
  )
}

export default User