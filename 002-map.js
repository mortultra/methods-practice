const products = [
  {
    name: 'laptop',
    price: 2500,
    count: 5
  },
  {
    name: 'desktop',
    price: 3000,
    count: 3
  },
  {
    name: 'phone',
    price: 500,
    count: 10
  }
];

// to add up the total value of the inventory of the products array, we will map over each object targeting the price and multiplying by the count. We will then return in a new array

// const totalProductsValue = products.map(item => item.price * item.count);

// console.log(totalProductsValue);

const totalProductsValue = products.map(item => 
    ({
      name: item.name,
      totalValue: item.price * item.count
    })
  );

console.log(totalProductsValue);