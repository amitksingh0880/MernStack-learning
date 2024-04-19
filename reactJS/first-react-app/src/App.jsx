import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChangeName from "./components/ChangeName";
import ControlledName from "./components/ControlledName";
import ContolledInfo from "./components/ContolledInfo";
import MyCounter from "./components/MyCounter";
import MyCard from "./components/MyCard";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Counter from "./components/Counter";
import { Route, Routes } from "react-router-dom";
import Languages from "./components/Languages";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Student from "./components/Student";

// function App() {
//   // const [name,setName]=useState("Kotlin");
//   return (
//     // <div>
//     //   {/* <h1>JAVA</h1>
//     //   <h2>SCRIPT</h2> */}
//     // </div>
//     <>
//       <Navbar/>
//            <MyCounter/>
//            {/* <MyCard/> */}
//         {/* <ControlledName/>
//         <ContolledInfo/> */}
//     </>
//   )
// }

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Card" element={<MyCard />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Languages" element={<Languages />} />
          <Route path="/About" element={<About />} />
          {/* <Route path='/Students' element={<Students/>}>
          <Route path='/Students/:name' element={<Students/>} />
         </Route> */}

          <Route path="/Student" element={<Student />}>
            <Route path="/Student/:name" element={<Student />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
