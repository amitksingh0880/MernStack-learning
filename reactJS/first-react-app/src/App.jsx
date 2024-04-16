import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChangeName from './components/ChangeName'
import ControlledName from './components/ControlledName'
import ContolledInfo from './components/ContolledInfo'
import MyCounter from './components/MyCounter'
import MyCard from './components/MyCard'
import Navbar from './components/Navbar'

function App() {
  // const [name,setName]=useState("Kotlin");
  return (
    // <div>                   
    //   {/* <h1>JAVA</h1>
    //   <h2>SCRIPT</h2> */}
    // </div>
    <>
      <Navbar/>
           <MyCounter/>
           {/* <MyCard/> */}
        {/* <ControlledName/>
        <ContolledInfo/> */}
    </>
  )
}

export default App
