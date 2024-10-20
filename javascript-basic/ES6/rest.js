//++++++++++++++++++++++++++++++++++++++ REST PARAMETERS +++++++++++++++++++++++++++++++++++++++++++++++
// const sum=(num1,num2)=>{
//     console.log(`Sum of ${num1} and ${num2} is ${num1+num2}`);
// }
// sum(12,23)

const sum = (num1, num2, ...numbers) => {                                //num1=0 , num2=0   ----- default parameter
    let s = 0;
    if (numbers.length > 0) {
        s = numbers.reduce((a,b)=> a + b)
     }
console.log(`Sum of ${num1} and ${num2} and is ${num1 + num2 + s}`);
}
sum(12, 23, 45, 35, 21)

