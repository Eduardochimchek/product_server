import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProd.css';

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verificar se algum campo está vazio
    if (!product.name || !product.description || !product.price || !product.stock) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    try {
      await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      navigate('/produtos');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="add-product-container">
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Nome'
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <textarea
            id="description"
            name="description"
            placeholder='Descrição'
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            id="price"
            name="price"
            placeholder='Preço'
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            id="stock"
            name="stock"
            placeholder='Estoque'
            value={product.stock}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn product-add-btn">Adicionar</button>
        <button type="button" className="btn product-back-btn" onClick={() => navigate(-1)}>Voltar</button>
      </form>
    </div>
  );
};

export default AddProduct;