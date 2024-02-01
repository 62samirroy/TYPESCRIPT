enum Roles{
    user="user",
    admin="admin"
}

type logindetail={

    name:string;
    email:string;
    password:string;
    role:Roles
}
const user1:logindetail={

     name:"samir",
     email:"samir@gmail.com",
     password:"1234567890",
     role:Roles.user
}
const user2:logindetail={

    name:"sami",
    email:"sami@gmail.com",
    password:"123456780",
    role:Roles.admin
}

const isadmin:(user:logindetail)=>string=(user:logindetail):string=>{
    const {name,role}=user;
    return role==="admin"? `${name} is allow website`:`${name} donot allow website`;
}
console.log(isadmin(user1));
console.log(isadmin(user2));
