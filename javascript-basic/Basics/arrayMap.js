let array=[1,2,3,4,5,6,7,8,9,10];
array.push(11);
console.log(array);

//Uses Hashing which is faster than for loop thus it is used over for loop.

array.map(item=>console.log(`Value X 10 = ${item*10}`));

//Reduce function of map..
let sumValue=array.reduce((a,b)=>a+b);
console.log(`Sum of Array value= ${sumValue}`);

let mulValue=array.reduce((a,b)=>a*b);
console.log(`Mul of Array value= ${mulValue}`);

//filter function of map..
let evenNum = array.filter(item=>item%2===0);
console.log(evenNum);
console.log(typeof array);