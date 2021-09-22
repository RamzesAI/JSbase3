const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

let salesProducts = []

products.forEach(value => {
  value.price = value.price * 0.85
})

console.log(products);