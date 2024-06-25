import { useReducer, useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // step-3
  const initialState=0;

  // step-2
  const reducer=(state,action)=>{
    // console.log(state,action);

   switch(action.type){
    case "INC":
      return state+1
    case "Dcr":
      return state-1
    default:
      return state
   }
    // return state
  }
  // step -1
  const[state , dispatch]=useReducer(reducer,initialState)

  return (
  <div className='d-flex  align-items-center justify-content-center'>
    <div className='text-center'>
      <p className='text-3xl' >{state}</p>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  ' onClick={()=>dispatch({type:"INC"})}>Inc</button>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2' onClick={()=>dispatch({type:"Dcr"})}>Dcr</button>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2' onClick={()=>dispatch({type:"Dcr"})}>Dcr</button>

    </div>
  </div>
  )
}

export default App



//with usestate 

// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//   <div className='d-flex  align-items-center justify-content-center'>
//     <div className='text-center'>
//       <p className='text-3xl' >{count}</p>
//       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  ' onClick={()=>{setCount(count+1)}}>Inc</button>
//       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2' onClick={()=>{setCount(count-1)}}>Dcr</button>
//     </div>
//   </div>
//   )
// }

// export default App

