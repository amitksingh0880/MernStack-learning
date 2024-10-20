import React from 'react'
import Info from './Info'

const ContolledInfo = () => {
    // const lang=["C","C++","java","kotlin"]
    const lang = [
        { id: 1, name: "java" },
        { id: 2, name: "C" },
        { id: 3, name: "kotlin" },
        { id: 4, name: "javaScript" },
      ];
  return (
    <div>
        <Info lang={lang}/>
    </div>
  )
}

export default ContolledInfo