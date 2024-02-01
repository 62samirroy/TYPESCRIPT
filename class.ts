class person {
    name:string;
    age:number;
    hobbies:string[];

    constructor(name:string,age:number,hobbies:string[]) {
        this.name=name;
        this.age=age;
        this.hobbies=hobbies
    }
}

const person1:person=new person("samir",23,["coding","singing"])
const person2:person=new person("roy",23,["coding","singing"])
console.log(person2);
