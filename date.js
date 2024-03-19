// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.getDay());
// console.log(myDate.toLocaleDateString());

let newDate = new Date();

console.log( newDate.toLocaleString('default',{
    month:"long",
    day : "2-digit",
    dayPeriod : "long",
    // dateStyle : "full",
    // hour : "numeric",
    // minute : "numeric",
    // second : "2-digit",
    // timeStyle : "full",
    // timeZoneName : "long",
    // weekday : "long",
    // year :"2-digit",
}))
