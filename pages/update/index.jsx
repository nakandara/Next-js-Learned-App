import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "product 1",
      price: 4000,
      description: "Description 1",
    },
    {
      id: 2,
      title: "product 2",
      price: 3000,
      description: "Description 2",
    },
    {
      id: 3,
      title: "product 3",
      price: 3000,
      description: "Description 3",
    },
  ]);

  function handleUpdateProduct(id) {
    const updatedProducts = products.map((product) => {
      console.log(product.id);
      if (product.id === id) {
        return { ...product, price: product.price + 1000 };
      } else {
        return product;
      }
    });
    setProducts(updatedProducts);
    console.log(updatedProducts);
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => handleUpdateProduct(product.id)}>
            Update Price
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
