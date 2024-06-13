import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditProd.css';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: ''
  });

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      navigate('/produtos');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleCancel = () => {
    navigate('/produtos');
  };

  return (
    <div className="edit-product-container">
      <h2>Editar Produto</h2>
      <form onSubmit={handleSubmit} className="edit-product-form">
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
        <button type="submit" className="btn edit-save-btn">Salvar</button>
        <button type="button" className="cancel-btn" onClick={handleCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default EditProduct;