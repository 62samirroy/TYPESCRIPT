type PersonInfo=[string,number,boolean];


const chaeck:(persion:PersonInfo)=>void=(persion:PersonInfo):string=>{
    const [name,age,hasDiver]=persion;
    return `${name} your age ${age} and you are driv:${hasDiver ? "yes":"no"}`;
}
const p1:PersonInfo=['samir',12,true];
const p2:PersonInfo=['Roy',11,false];

console.log(chaeck(p1));
console.log(chaeck(p2));

