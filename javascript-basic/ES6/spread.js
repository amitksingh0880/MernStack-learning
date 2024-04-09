const sum = (num1,num2,num3,...numbers)=>{
    let s=0;
    if(numbers.length>0)
    {
        s=numbers.reduce((a,b)=>a+b);
    }
    console.log("Sum=",(num1+num2+num3+s));
}
let value=[10,20,30,50,60];
sum(...value);                                  //{...}===spread operator