import React from "react";

export default function Languages() {
  // let lang=["java","kotlin","javaScript","C","C#"]
  // return (
  // <div>
  //      <h1>Best Programming Language</h1>
  //      <ul>
  //         {
  //             lang.map((items,index)=>(
  //                 <li key={index} >{items}</li>
  //             ))
  //         }
  //      </ul>
  // </div>
  // <div>
  const lang = [
    { id: 1, name: "java" },
    { id: 2, name: "C" },
    { id: 3, name: "kotlin" },
    { id: 4, name: "javaScript" },
  ];
  var check=true;
  return (
    <div>
      <h1 className= {check?"bg-warning":"bg-success text-white "}
      > {check ? "Best programming language":"Top five programming language"}
      {/* >Best Programming Language */}
      </h1>
      <ul>
        {lang.map((items) => (
          <li key={items.id}>{items.name}</li>
        ))}
      </ul>
    </div>
  );
}
