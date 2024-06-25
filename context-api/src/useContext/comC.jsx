import React, { useContext } from 'react'
import { Biodata } from './comA'
import "./com.css"


const ComC = () => {
    const {channel,data: {name,age,address},data1}=useContext(Biodata)
  return (
      <div>
    <div> hello comC {channel}</div>
      <h1>hello my name is {name} and my age is {age} and im from  {address}</h1>
      <p className='p'>{data1}</p>
    </div>
  )
}

export default ComC;