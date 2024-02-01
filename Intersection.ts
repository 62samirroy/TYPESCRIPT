type user={
  name:string,
  age:number,
  email:string
}

type Account={
    id: string, // optional property
    accountType:string,
    balance:number
}
// create a new User with the given properties.
const User:user={name:"Samir",age:22,email:"20203024.it@gmail.com"};
const myAccount:Account={id:"2020",accountType:"savig",balance:2020202};


const createUserProfile = (User: user ,myAccount: Account) => {
    return {...User, ...myAccount};
}
  
  const mycompletinfo:user&Account=createUserProfile(User,myAccount);
    console.log(mycompletinfo);