import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './compoment/AddTodo'
import Todos from './compoment/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-2xl '>Learn about redux</h1>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
