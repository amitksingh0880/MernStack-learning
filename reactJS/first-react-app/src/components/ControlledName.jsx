import React from 'react'
import { useState } from 'react'
import ChangeName from './ChangeName';
const ControlledName = () => {
    const [name,setName]=useState("Kotlin");
  return (
    <div>
        <ChangeName name={name} onUpdate={()=>setName("C++")}/>
    </div>
  )
}

export default ControlledName