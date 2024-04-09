// const sum=(num1,num2)=>{
//     return (num1+num2);
// }

// const mul=(num1,num2)=>{
//     return (num1*num2);
// }
//export {sum,mul};       /// error   to  solve we used mjs----- modular javascript to convert it into module


const sum=(num1,num2)=>{
    return (num1+num2);
}

const mul=(num1,num2)=>{
    return (num1*num2);
}
export {sum as add,mul as multiply};        //change the name of 

const print=(msg)=>{
    console.log(msg);                         
}
export default print;                 //Only one default value in the module in allowed;