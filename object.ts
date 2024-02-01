// const persion:{
//     name:string;
//     age:number;
//     address:{city:string,contry:string}
// }={
//     name:"samir",
//     age:30,
//     address:{
//         city:"cairo",
//         contry:"india"
//     }
// }
// console.log(persion.address.city);


// predefine data type

type Persion={
    name:string;
    age:number;
    address:{city:string,contry:string}
}

const persion1:Persion={
    name:"samir",
    age:30,
    address:{
        city:"cairo",
        contry:"india"
    }
}
console.log(persion1.address.city);
