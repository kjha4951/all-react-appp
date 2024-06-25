import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/Todo/todoSlice'


function AddTodo() {

    const [input , setInput] = React.useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('');
    }
  return (
    <form onSubmit={addTodoHandler} className='space-x-4 mt-12'>

     <input type="text"
     className='bg-gray-800 rounded border border-gray-700 
     focus:border-indigo-500 text-base outline-none text-gray-100
     py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
     placeholder='Enter Todo'
     value={input}
     onChange={(e)=>setInput(e.target.value)}
     />
     <button type='submit'
     className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none
     hover:bg-indigo-600 rounded text-lg'
     > ADD TODO</button>
    </form>
  )
}

export default AddTodo