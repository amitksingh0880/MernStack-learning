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
    //   let Count=0;
    
      const decrement=()=> {
        count===0?count=0:setCount(count-1);
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

// import React from "react";

// const Counter = (props) => {
//     const { counter, increment, decrement, deleteCounter } = props;
//     const checkValue = () => {
//         return counter.count === 0 ? "Zero" : counter.count;
//     };

//     const checkCounter = () => {
//         return counter.count === 0 ? "bg-secondary m-3 p-2 rounded text-white" : "badge bg-warning m-3 p-3 text-dark";
//     };

//     return (
//         <div>
//             <button className="btn btn-primary m-3 p-3" onClick={() => decrement(counter)}>
//                 Decrement
//             </button>
//             <span className={checkCounter()}>{checkValue()}</span>
//             <button className="btn btn-danger m-3 p-3" onClick={() => increment(counter)}>
//                 Increment
//             </button>
//             <button className="btn btn-dark m-3 p-3" onClick={() => deleteCounter(counter)}>
//                 Delete
//             </button>
//         </div>
//     );
// };

// export default Counter;
