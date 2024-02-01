function logAndReturn<T>(value:T):T{
        return value
}
// 1. Type Assertion
const numberResult=logAndReturn(23);
const StringResult:"Samir" =logAndReturn("Samir");
const booleanResult:true=logAndReturn(true);
console.log(numberResult);
console.log(StringResult);
console.log(booleanResult);

