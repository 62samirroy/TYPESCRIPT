type Student={
    name:string;
    age:number;
    greet:(country:string)=>string //methord call signature
}

const student1:Student={
    name:"samir",
    age:22,
    greet:(country):string=>`Weelocome my name is ${student1.name},i am ${student1.age} old ${country}`
}
console.log(student1.greet ('india'));
