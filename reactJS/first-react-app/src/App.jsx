import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import ChangeName from './components/ChangeName'
import ControlledName from './components/ControlledName'
import ContolledInfo from './components/ContolledInfo'

function App() {
  const [name,setName]=useState("Kotlin");
  return (
    // <div>                   
    //   {/* <h1>JAVA</h1>
    //   <h2>SCRIPT</h2> */}
    // </div>
    <>
        {/* <Counter/> */}
        <ControlledName/>
        <ContolledInfo/>
    </>
  )
}

export default App
