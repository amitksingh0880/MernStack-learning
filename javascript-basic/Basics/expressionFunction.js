const msg=function massage(){
    console.log("This is function expression");
};
msg();

const ms=function(){
    console.log("This is annonymous expression");
};
msg();

const sum=function (num1,num2){
    let sum=num1+num2;
    console.log("Sum==",sum);
};
sum(23,45);

const mul = function(num1,num2){
   return num1*num2;
};
console.log("Multiply==",mul(12,12));