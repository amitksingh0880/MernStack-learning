const tableId=document.getElementById("table");
// const fetchData = async () => {
//     const dataJSON = await fetch("https://api.github.com/users");
//     const data = await dataJSON.json();
      
//     let displayInfo="<table>";
//     displayInfo+="<tr>"
//     displayInfo+="<th>ID</th><th>Name</th><th>Photo</th>";
//     displayInfo+="</tr>"
//     for(person of data){
//         displayInfo+="<tr>";
//         displayInfo+=`<td>${person.id}</td>
//                       <td>${person.login}</td>
//                       <td><img src=${person.avatar_url} width=${100} height=${100}></td>`;
//         displayInfo+="</tr>"
//     }
//     displayInfo+="</table>"

//     tableId.innerHTML = displayInfo;
// }
// fetchData();


//promise
fetch("https://api.github.com/users")
   .then(dataJSON=>dataJSON.json())
   .then(data=>{
    let displayInfo="<table>";
    displayInfo+="<tr>"
    displayInfo+="<th>ID</th><th>Name</th><th>Photo</th>";
    displayInfo+="</tr>"
    for(person of data){
        displayInfo+="<tr>";
        displayInfo+=`<td>${person.id}</td>
                      <td>${person.login}</td>
                      <td><img src=${person.avatar_url} width=${100} height=${100}></td>`;
        displayInfo+="</tr>"
    }
    displayInfo+="</table>"
    tableId.innerHTML = displayInfo;
})

