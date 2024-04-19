// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'

// const Students = () => {
//     const param = useParams();
//     const [ studentInfo , setStudentInfo] =useState([
//         { sID:"1",
//            sName: "Ayush",
//            sMarks: "99%"
//         },
//         { sID:"2",
//            sName: "Amit",
//            sMarks: "100%"
//         },
//         { sID:"3",
//            sName: "Aamir",
//            sMarks: "96%"
//         },
//         { sID:"4",
//            sName: "Utkarsh",
//            sMarks: "94%"
//         }
//     ])
//   return (
//     <div>
//         {param.name ?(
//             <p>
//                 Student Name : {param.name}
//                 <br />
//                 Marks : {studentInfo.find((student) => student.sName === param.sName)?.sMarks}
//             </p>
//         ): (
//             studentInfo.map((student) =>{
//                 <div key={student.sID}>
//                      <p>Student's Name: {student.sName}</p>
//                      <p>Student's Marks: {student.sMarks}</p>
//                 </div>
//             })
//         )}
//     </div>
//   )
// }

// export default Students;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Student = () => {
    const param = useParams();
    const [studentInfo, setStudentInfo] = useState([
        // { sid: "1", sname: "Student1", marks: "90%" },
        // { sid: "2", sname: "Student2", marks: "80%" },
        // { sid: "3", sname: "Student3", marks: "70%" },
        // { sid: "4", sname: "Student4", marks: "60%" },
        // { sID:"1",
        //    sName: "Ayush",
        //    sMarks: "99%"
        // },
        // { sID:"2",
        //    sName: "Amit",
        //    sMarks: "100%"
        // },
        // { sID:"3",
        //    sName: "Aamir",
        //    sMarks: "96%"
        // },
        // { sID:"4",
        //    sName: "Utkarsh",
        //    sMarks: "94%"
        // }

    ]);
    useEffect(() => {
        fetch("https://freetestapi.com/api/v1/students")
            .then(result => result.json())
            .then((data) => {
                setStudentInfo(data);
            });
    },[]);

    return (
        <>
            {param.name ? (
                <>
                    {studentInfo.map((student) => {
                        if (student.name === param.name) {
                              return(
                                   <div>
                                       <h4>Student's Name : {student.name}</h4>
                                       <h5>Student's id : {student.id} </h5>
                                   </div>
                              ) 
                        }
                    })}
                </>
            ) : (
                studentInfo.map((student) => (
                    <div key={student.id}>
                        <p>Student's ID : {student.id}</p>
                        <p>Student's Name : {student.name}</p>
                        <p>Student's age : {student.age}</p>
                        <p>Student's gender : {student.gender}</p>
                         <p>Student's Address : 
                                <p> {student.address.street} </p>
                                 <p> {student.address.city} </p>
                                 <p> {student.address.zip} </p>
                                 <p> {student.address.country} </p>
                         </p>
                    </div>
                ))
            )}
        </>
    );
}    

export default Student;