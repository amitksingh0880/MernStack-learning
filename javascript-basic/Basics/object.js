//Everything in java is OBJECT

let studentInfo={
    Name:"Amit singh",
    Roll:3,
    College:"KIET",
    Course: "MCA",
    Marks:[98,89,80,87],
    Music:()=>console.log("Play"),
    Play: function playfunction(){console.log("Play Cricket")},
}
console.log(studentInfo.Play());

//TO ACCESS IT THROUGH FOR LOOP WE HAVE TO PUT IT IN ARRAY
let arrayValue=[studentInfo];
arrayValue.forEach(item=>console.log(item.Name));
arrayValue.forEach(item=>console.log(item.Marks));