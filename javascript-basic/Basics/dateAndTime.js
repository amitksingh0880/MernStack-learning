
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString());
console.log(typeof myDate);  //OBJECT

let myCreatedDate = new Date(2024, 0, 12)
console.log(myCreatedDate.toDateString());

let myCreatedDateAndTime = new Date(2024, 0, 12, 11,30,50)
console.log(myCreatedDateAndTime.toLocaleString());

let desiredFormat = new Date("12-01-2024")
console.log(desiredFormat.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.toLocaleString(`default`, {
    dateStyle: "full",
    timeStyle:"long",
}));
