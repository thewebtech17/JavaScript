const MyNumber = 700          // this is common way to represent or declare a number
console.log(MyNumber);        // this output is direct --> 400

const MyNumber = new Number(400);  // this is new way tp represent a number
console.log(MyNumber);             // this output is --> [number:400]
 
//---> Methods in number
--> console.log(MyNumber.toExponential(1));  // JavaScript Number toExponential() method is used to convert a number to its exponential form. It returns a string representing the Number object in exponential notation. The toExponential() method is used with a number as shown in the above syntax using the ‘.’ operator. 

--> console.log(MyNumber.toFixed(2))  // It is commonly used in E-commerce WEebsite for repreting values in this form 400.00


--> const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(date.toLocaleString("en-IN"))
// --> THIS METHOD IS USED WHEN WE CONVERT A DATE  OR TIME IN INDIAN WAY

--> let mynum = 400.22323
console.log(mynum.toPrecision(1)); // this is used for representing float values into normal values
