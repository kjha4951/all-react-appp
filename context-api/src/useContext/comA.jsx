import React, { createContext } from 'react'
import { ComB } from './comB';

const Biodata=createContext();

const ComA = () => {
  const data={
    
    name:"komal",
    age:20,
    address:"kanpur"
  }
  
  const data1=[1,2,3,"komal",5,6,7,4,"jha"];
  const combination={
    channel:"komal",
    data,
    data1,
  }
  return (
     <Biodata.Provider  value={combination}>
       <ComB/>
     </Biodata.Provider>
  )
}

export default ComA;
export {Biodata};