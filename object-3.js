const user = {
    name : "falana dimkan",
    adddress : "falanagarh",
    plot_no : "97A",
    mob : "89813888331"
}
// const { name : nm} = user;
// console.log(nm);
//  => this is the destructure of an object;
const { name : nm, adddress:adr, plot_no : p_no,mob:mo} = user;
console.log(nm,adr,p_no,mo);
