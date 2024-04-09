let age=10;
const info=new Promise((resolve,reject)=>{
       if(age>=18){                               //class always have capital start.......
        resolve("You can vote");
       }else{
        reject("You can't vote");
       }
})
info.then(result=>console.log(result))             //resolve--- 
     .catch(error=>console.log(error));            //reject----

/// async and await always works on function--- oldest method for promise

// const resultInfo = async()=>{
//     let result = await info;                //do not ask for false conditon so the error is shows when condition
//     console.log(result);                      // is false............
// }                                           //           we use try - catch to show both the conditions
// resultInfo();

const resultInfotc = async()=>{
    try{
        let result = await info;               
        console.log(result);   
    }
    catch(error) {
        console.log(error);
    }                
}                                         
resultInfotc();