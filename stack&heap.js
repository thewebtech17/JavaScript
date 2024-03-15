//  stack -> all Primitive data types
//  Queue -> all non primitive(reference) data types

//  examaple of Stack 
// let userName = "Nagendra singh"
// let usertwo = userName
// usertwo = "kailash singh"
// console.log(userName);
// console.log(usertwo);

//  stack and primitive data type logic is that they dont change actual value they have only copy of the variable.

//  example of queue
let userOne = {
    name:"nagendra singh",
    class:"bca graduated",
    JobStatus: "unemployee"
}
let usertwo = userOne;
usertwo.class = "think about mca"
console.log(userOne.class);
console.log(usertwo.class);

//  queue and non primitive data type logic is that they change actual value because thay have access the actual value that menas they are refernciable.