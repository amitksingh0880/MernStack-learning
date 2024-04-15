// import React, { useEffect } from "react";
// import { useState } from "react";

// const Counter = ()=> {
//     const [count , setCount]=useState(0);
//     const checkValue=()=>{
//         return count===0?"Zero":count;
//     }
//       const checkCounter=()=>{
//         return count===0?"bg-secondary m-3 p-2 rounded text-white":"badge bg-warning m-3 p-3 text-dark";
//       }
//       let Count=0;
    
//       const decrement=()=> {
//         count===0?count=0:setCount(count-1);
//       }
//       const increment=()=> {
//         setCount(count+1);
//       } 
//       useEffect(() =>{
//         console.log(count);
//       },[count])
//     return (
//         <div>
//             <button className="btn btn-primary" onClick={decrement}>
//                 Decrement
//             </button>
//             <span className={checkCounter()}>{checkValue()}</span>
//             <button className="btn btn-danger" onClick={increment}>
//                 Increment
//             </button>
//         </div>
//     )
// }
// export default Counter

import React, { useEffect } from "react";
import { useState } from "react";

const Counter = ()=> {
    const [count , setCount]=useState(0);
    const checkValue=()=>{
        return count===0?"Zero":count;
    }
      const checkCounter=()=>{
        return count===0?"bg-secondary m-3 p-2 rounded text-white":"badge bg-warning m-3 p-3 text-dark";
      }
      let Count=0;
    
      const decrement=()=> {
        count===0?count===0:setCount(count-1);
      }
      const increment=()=> {
        setCount(count+1);
      } 
      useEffect(() =>{
        console.log(count);
      },[count])
    return (
        <div>
            <button className="btn btn-primary" onClick={decrement}>
                Decrement
            </button>
            <span className={checkCounter()}>{checkValue()}</span>
            <button className="btn btn-danger" onClick={increment}>
                Increment
            </button>
        </div>
    )
}
export default Counter