import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/Todo/todoSlice';


const Todos = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()


  return (
    <>
      <div className='mt-9 text-xl'> Todos</div>
      {todos.map((todo) => (
        <li
          className='mt-4 flex justify-between items-center bg-gray-800 rounded py-2 px-4 text-white'
          key={todo.id}>
          <div className='text-white text-xl'>{todo.title}</div>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className='text-white bg-red-500 border-0 py-2 px-8 focus:outline-none
            hover:bg-red-600 rounded text-lg '
          > X </button>
          <button
            onClick={() => {
              const newTitle = prompt('Enter new title for the todo:');
              if (newTitle) {
                dispatch(updateTodo({ id: todo.id, title: newTitle }));
              }
            }}
            className='text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg'
          >
            Edit
          </button>

        </li>
      ))}
    </>
  )
}

export default Todos