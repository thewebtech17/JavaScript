let myArr = [18,28,34,35,67,84,26,78]
console.log("original array:", myArr);
// push opeartion :
myArr.push(23);
console.log("push try :",myArr);
// pop opeartion :
myArr.pop();  //in pop opearation we dont give arguments it auto delete recent pop element from array
console.log("pop try :",myArr);

// unshift operation :
myArr.unshift(45);
console.log(myArr)  // unshift the enter the element where , where original array starts
// shift opeartion :
myArr.shift();
console.log(myArr);  // same as pop but it deletes from start to recent element otherwise it deletes first element


//      METHODS IN ARRAY :- 

console.log( myArr.includes(4))
=> IT ACTUALLLY TELLS US THAT OUR ENTERED VALUE IS PRESENT OR NOT IN THE ARRAY.

console.log(myArr.length);
=> IT ACTUALLY TELL'S US THE WHAT IS THE SIZE OF THE ARRAY

console.log(myArr.toString());
console.log(typeof myArr.toString());
=> it actually change the array means remove the brackets and seprate them by comma(,) and also change the type means (typeof = string)

console.log(myArr.join("*"));
 it actually do this => 18*28*34*35*67*84*26*78

console.log(myArr.copyWithin(2,0));
=> there output look like this =>  18, 28, 18, 28, 34, 35, 67, 84 => means first argument define knha pe value deni h or second argumennt means knha se value leni h 

const myarray = [[1,2],[3,4],[5,6],[7,8],[9,10]];
console.log(myarray.flat());
  1, 2, 3, 4,  5, 6, 7, 8, 9, 10 => it actually remove the inside bracket and separte them from comma

const newarr = myArr.slice(1,3);
console.log("after slice :",newarr);
/* => original array: [
  18, 28, 34, 35,
  67, 84, 26, 78
]
after slice : [ 28, 34 ] */

const prarray = myArr.splice(1,3);
console.log("after splice", prarray);
console.log("after splice array :", myArr);
/* 
  original array: [
  18, 28, 34, 35,
  67, 84, 26, 78
]
after splice [ 28, 34, 35 ]
after splice array : [ 18, 67, 84, 26, 78 ]
*/
=> slice or splice m main difference yhi hota h ki jab hm koi value slice ko dete h to vo us value ke according unhi index position ki value ko return krta h last wale argument ki value ko include nhi krta h 

=> splice same slice h but vo last wali value bhi include krta h lekin uske baaad jab aap original array ko print kroge to jo argument aapne splice ko diye the vo unko chordk original value ko print kr dega jo index position as a argument pass h unhe ignore krkr; 










