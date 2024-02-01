function add<T,U>(a:T,b:U) {
 console.log(typeof a);
 console.log(typeof b);
    
}
const result1:void=add<number,string>(2,"samir");
const result2:void=add<number,boolean>(2,true);

