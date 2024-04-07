//Everything is javascript in object.
const massage=()=>console.log("Arrow function");
let data=[10,20,30,40,50,60,massage];
console.log(data);
data[6]();

// for(let i=0;i<data.length;i++)
// {   
//     //tilt operator, string literals
//     console.log(`value of ${i} is ${data[i]}`);
// }

//******************************************************************************** */

//for in loop--
for(let index in data){
    console.log(`value of ${index} is ${data[index]}`);
}
  //
//********************************************************************************* */

//for of loop--
for(let value of data)
{
    console.log(`value of= ${value} `);
}

  //
//******************************************************************************** */

//for each
// data.forEach(value=>console.log(`Value of Array=${value}`));

//*************************************************************/

//to access individual elements
let arr=[1,2,3,3,4,5,6,7,8,9,10];
console.log(arr.at(0));

//********************************************************************** */
  arr.fill(50, 3, 4);
  console.log(arr);