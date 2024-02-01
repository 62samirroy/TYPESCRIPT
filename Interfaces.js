"use strict";
const Product1 = {
    name: "Laptop",
    price: 2000,
    quality: 4
};
const calculatetotalprice = (product) => {
    const { price, quality } = product;
    return price * quality;
};
console.log(calculatetotalprice(Product1));
