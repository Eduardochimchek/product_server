// Products.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  
  const handleRemove = async (productId) => {
    try {
      await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE',
      });
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div className="products-container">
      <h2>Produtos</h2>
      <Link to="/produtos/adicionar" className="btn product-add-btn">Adicionar Produto</Link>
      {products.length === 0 ? (
        <p className="no-products">Não há nenhum produto cadastrado.</p>
      ) : (
        <ul className="product-list">
          {products.map(product => (
            <li key={product.id} className="product-item">
              <div className="product-item-info">
                <div className="product-item-name"><strong>Nome: </strong>{product.name}</div>
                <div className="product-item-description"><strong>Descrição:</strong> {product.description}</div>
                <div className="product-item-price"><strong>Preço:</strong> R$ {product.price}</div>
                <div className="product-item-stock"><strong>Estoque:</strong> {product.stock}</div>
              </div>
              <div className="product-buttons">
                <Link to={`/produtos/editar/${product.id}`} className="btn edit-btn">Editar</Link>
                <button onClick={() => handleRemove(product.id)} className="btn delete-btn">Remover</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;