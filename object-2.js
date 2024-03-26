let zomatoUser = {
    name : "kailash Singh",
    email : "kalya@gmail.com",
    Address : "Kanakpura,Jaipur",
    Mobile_number : "8723647832",
    isLoggedIN : false
}
let Swiggyuser = {
    name1 : "Mangal Singh",
    email1 : "mangal@gmail.com",
    Address1 : "Shekhawat Marg,Jaipur",
    Mobile_number1 : "7877611346",
    isLoggedIN1 : false
}

let a = []
a.push(zomatoUser)
a.push(Swiggyuser)

console.log(a);
// console.table(Object.keys(zomatoUser));
// console.table(Object.values(zomatoUser));
// console.table(Object.entries(zomatoUser))
// let data = Object.assign( zomatoUser, Swiggyuser);

// const users = {...Swiggyuser,...zomatoUser};
// console.log(users)
// console.log(data);

// => in merging the objects key name can't be same this is the default behaviour , for this we can use only push method or array inside the array.

