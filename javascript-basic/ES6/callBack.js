// const sum=(num1,num2)=>{
//     return num1+num2;
// }

// const print=(msg)=>{
//     console.log(msg);
// }
// let msg = sum(11,23);
// print(msg);

// const sum=(num1,num2)=>{
//     print(num1+num2);
// }

// const print=(msg)=>{
//     console.log(msg);
// }
// sum(11,23);

const sum=(num1,num2,add)=>{
    let s=num1+num2;
    add(s);                          
}
sum(11,23,(sum)=>{                     //the function than call another function as a parameter is called higher order function......
    if(sum>20)                         // i.e. sum is is higher order function
    {
        console.log("greater than 20");
    }
    else{
      console.log("Less than 20");         // function that can be used as (parameter, variable, function, callback) known as first class function
    }                                      
})
