///формат json

// const product = {
//     id: 1,
//     price: 2000,
//     name: 'Iphone'
// }
//
//
// const jsonProduct = JSON.stringify(product);
//
// console.log(product);
// console.log(jsonProduct);
//
// localStorage.setItem('products', jsonProduct)
//
// const data = localStorage.getItem('products');
// console.log(JSON.parse(data));

const car = {
    id: 1,
    color: 'black',
    price: 30000
}
const jsonCar = JSON.stringify(car);

console.log(car);
console.log(jsonCar);

const carr = localStorage.getItem('cars');
console.log(JSON.parse(carr));