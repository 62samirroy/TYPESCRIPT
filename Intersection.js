"use strict";
// create a new User with the given properties.
const User = { name: "Samir", age: 22, email: "20203024.it@gmail.com" };
const myAccount = { id: "2020", accountType: "savig", balance: 2020202 };
const createUserProfile = (User, myAccount) => {
    return Object.assign(Object.assign({}, User), myAccount);
};
const mycompletinfo = createUserProfile(User, myAccount);
console.log(mycompletinfo);
