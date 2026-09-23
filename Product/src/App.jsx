const App = () => {
  const product = [
    {
      id: 1,
      name: "laptop",
      price: 30000,
      category: "Electronics",
    },

    {
      id: 2,
      name: "Mobile",
      price: 25000,
      category: "Electronics",
    },
    {
      id: 3,
      name: "shoes",
      price: 3000,
      category: "fashion",
    },
  ];
  return (
    <div>
      <h1>Product List</h1>
      {product.map((productList) => (
        <div key={productList.id}>
          {productList.name}
          {productList.price} {productList.category}
        </div>
      ))}
    </div>

    
  );
};

export default App;
