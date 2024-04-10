import React from 'react'

export default function Languages() {
    let lang=["java","kotlin","javaScript","C","C#"]
  return (
    <div>
         <h1>Best Programming Language</h1>
         <ul>
            {
                lang.map((items,index)=>(
                    <li key={index} >{items}</li>
                ))
            }
         </ul>
    </div>
  )
}
