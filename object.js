//  we create objects like this ;
let mySym = Symbol("key1");
let a = Symbol("key2")

let myUser = {
    name : "kailash Singh",
    [mySym]: "key1",
    Dob : "30/01/2001",
    pob : "Pakistan",
    occupation : "Aatankwadi",
    Sangatan : "Alkayda",
    Aim : "Mumbai Blast",
    Case : "Murder,Half-murder"
}
// console.table(typeof myUser[mySym]);
// console.log(typeof [mySym]) 


//  => MOST IMPORTANT
// console.log(typeof([mySym][0]))
// console.table(typeof [mySym][0]);


// when the interviwer says implement symbol in the object (MOST IMPORTANT)
// mySym : "key-1" => this way is wrong accordingg this type of string but we want symbol


