"use strict";
const chaeck = (persion) => {
    const [name, age, hasDiver] = persion;
    return `${name} your age ${age} and you are driv:${hasDiver ? "yes" : "no"}`;
};
const p1 = ['samir', 12, true];
const p2 = ['Roy', 11, false];
console.log(chaeck(p1));
console.log(chaeck(p2));
