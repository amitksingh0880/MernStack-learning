import React, { useState } from "react";
import Counter from "./Counter";

const MyCounter = () => {
  const [counter, setCounters] = useState([
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
    { id: 4, count: 0 },
    { id: 5, count: 0 },
  ]);

  const decrement = (aCounter) => {
    if (aCounter.count > 0) {
      const lcounter = [ ...counter ];
      const index = lcounter.indexOf(aCounter);
      lcounter[index].count--;
      setCounters(lcounter);
    }
   }; 
    const increment = (aCounter) => {
      const lcounter = [ ...counter ];
      const index = lcounter.indexOf(aCounter);
      lcounter[index].count++;
      setCounters(lcounter);
    };

    const deleteCounter = (aCounter) => {
      const lcounter = counter.filter(item => item !== aCounter);
      setCounters(lcounter);
    };

    const reset = () => {
      const lcounter = counter.map((item) => {
        item.count = 0;
        return item;
      });
      setCounters(lcounter);
    };
    const getCount = () => {
      return counter.filter( item => item.count > 0).length;
    };

    return (
      <div>
         <div className="container ">
          <button className="btn btn-success" onClick={reset}>
            Reset
          </button>
         </div>
         <div className="container ">
          <p>Active Counters:- {getCount()}</p>
         </div>
         {counter.map((item) => (
          <Counter
            key={item.id}
            counter={item}
            decrement={decrement}
            increment={increment}
            deleteCounter={deleteCounter}
          />
         ))}
      </div>
    );
  };
export default MyCounter;
