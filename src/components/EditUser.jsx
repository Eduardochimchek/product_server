import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditUser.css';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      navigate('/usuarios');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="edit-user-container">
      <h2>Editar Usuário</h2>
      <form onSubmit={handleSubmit} className="edit-user-form">
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Nome'
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder='E-mail'
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Senha'
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn user-save-btn">Salvar</button>
        <button type="button" className="cancel-btn" onClick={handleGoBack}>Cancelar</button>
      </form>
    </div>
  );
};

export default EditUser;