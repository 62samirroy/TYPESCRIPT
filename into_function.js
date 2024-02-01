"use strict";
// var greate=(name:string,id:number):void=>
// {
//     console.log(`Hello Mr:${name} please enter youer id ${id}`);
// }
// greate("Samir",1);
var isplendrom = (numbe) => {
    let myplain = numbe.split("").reverse().join("");
    return myplain === numbe;
};
console.log(isplendrom("123201"));
