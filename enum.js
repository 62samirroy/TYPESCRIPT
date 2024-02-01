"use strict";
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "samir",
    email: "samir@gmail.com",
    password: "1234567890",
    role: Roles.user
};
const user2 = {
    name: "sami",
    email: "sami@gmail.com",
    password: "123456780",
    role: Roles.admin
};
const isadmin = (user) => {
    const { name, role } = user;
    return role === "admin" ? `${name} is allow website` : `${name} donot allow website`;
};
console.log(isadmin(user1));
console.log(isadmin(user2));
