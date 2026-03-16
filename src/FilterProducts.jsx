import React, { useState } from 'react';
import './FilterProducts.css';

const FilterProducts = () => {
  const initialProducts = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Mouse", price: 3000 }
  ];

  const [products, setProducts] = useState(initialProducts);

  const filterItems = () => {
    const threshold = 10000;
    const filteredProducts = initialProducts.filter(product => product.price < threshold);
    setProducts(filteredProducts);
  };

  return (
    <div className="filter-container d-flex justify-content-center align-items-center vh-100">
      <div className="container-box">
        <button className="btn btn-custom mb-3" onClick={filterItems}>
          Items Below ₹10000
        </button>
        <ul id="result" className="list-group">
          {products.map((product) => (
            <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
              {product.name}
              <span>₹{product.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterProducts;
