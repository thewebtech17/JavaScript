//  merging array problem

//  first appoarch [push method] :- 

 let myArr = ["Diljit Dosanjh","Parmish Verma","Laadi Chahal","Honey Singh"];
 let newArr = ["Guru Randhawa","Karan Aujla","Jasmine Sandlas","Akay"];
 myArr.push(newArr);
 console.log(myArr);
//  conclusion ;- It creates array inside array problem. => 
 [
  'Diljit Dosanjh',
  'Parmish Verma',
  'Laadi Chahal',
  'Honey Singh',
  [ 'Guru Randhawa', 'Karan Aujla', 'Jasmine Sandlas', 'Akay' ]
]

//  Second Appoarch [concat] :-
let myArr = ["Diljit Dosanjh","Parmish Verma","Laadi Chahal","Honey Singh"];
 let newArr = ["Guru Randhawa","Karan Aujla","Jasmine Sandlas","Akay"];
 const original_Arr = myArr.concat(newArr);
 console.log(original_Arr);
// conclusion ;- it do best it merge the array without array inside array 
/* 
[
  'Diljit Dosanjh',
  'Parmish Verma', 
  'Laadi Chahal',  
  'Honey Singh',
  'Guru Randhawa',
  'Karan Aujla',
  'Jasmine Sandlas',
  'Akay'
]
*/

//  when we have array like this :
let fcarr = ['Diljit Dosanjh','Parmish Verma','Laadi Chahal','Honey Singh',[ 'Guru Randhawa', 'Karan Aujla', 'Jasmine Sandlas', 'Akay' ]]

// we solve this from --> flat() method

console.log(fcarr.flat(Infinity));

//  conculsion : - it remove array inside array;
/* 
[
  'Diljit Dosanjh',
  'Parmish Verma',
  'Laadi Chahal',
  'Honey Singh',
  'Guru Randhawa',
  'Karan Aujla',
  'Jasmine Sandlas',
  'Akay'
]
*/

//  when we want to check is array or not

console.log(Array.isArray("Nagendra"));
//  conclusion :- false;

// when we want make them array

console.log(Array.from("Nagendra"));

/*conclusion :-
['N', 'a', 'g','e', 'n', 'd','r', 'a']
*/

//  when we make 4,5 variable inside a array then :

let cast1 = "Rajput";
let cast2 = "Shekhawat";
let cast3 = "Rathore";
let cast4 = "chouhan";
console.log(Array.of(cast1,cast2,cast3,cast4));
//  Conclusion : -
// [ 'Rajput', 'Shekhawat', 'Rathore', 'chouhan' ]