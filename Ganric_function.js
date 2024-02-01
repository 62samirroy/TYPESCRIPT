"use strict";
function logAndReturn(value) {
    return value;
}
// 1. Type Assertion
const numberResult = logAndReturn(23);
const StringResult = logAndReturn("Samir");
const booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(StringResult);
console.log(booleanResult);
