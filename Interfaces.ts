interface Product{
   name:string;
   price:number;
   quality:number;
   
}
const Product1:Product={
    name:"Laptop",
    price:2000,
    quality:4
}

const calculatetotalprice:(product:Product)=>number=(product:Product):number=>{
   const{price,quality}=product;
    return price*quality
}
console.log(calculatetotalprice(Product1));
