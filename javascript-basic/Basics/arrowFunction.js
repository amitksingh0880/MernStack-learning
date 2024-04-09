//also known as lambda function

const massage=()=>{
    console.log("This is arrow function");
};
massage();

const sum=(num1,num2)=>console.log("Sum=",(num1+num2));
sum(23,54);

const mul=(num1,num2)=>{
    return num1*num2;
};
console.log("Mul=",mul(46,67));

const sum2=(num1,num2)=>num1+num2;
console.log("sum2=",sum2(23,34));

/////////////////////////////////////////////////////////////////////////////////////////////////////


//return multiple things without bracket
//used in react---
// const mas=()=>(
//     console.log("Welcome to arrow function"));
//     console.log("Welcome to second function");
// );
// mas();