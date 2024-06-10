import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Products from './components/Products';
import Services from './components/Services';
import Users from './components/Users';
import Layout from './components/Layout';
import AddProduct from './components/AddProd';
import EditProduct from './components/EditProd';
import ErrorPage from './components/ErrorPage';
import EditUser from './components/EditUser';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/error" element={<h2>Erro ao realizar Login. Verique o nome de usuário e/ou senha.</h2>} />
      <Route path="/produtos" element={<Layout><Products /></Layout>} />
      <Route path="/servicos" element={<Layout><Services /></Layout>} />
      <Route path="/usuarios" element={<Layout><Users /></Layout>} />
      <Route path="/produtos/adicionar" element={<AddProduct />} />
      <Route path="/produtos/editar/:id" element={<EditProduct />} />
      <Route path="/usuarios/editar/:id" element={<EditUser />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
   </div> 
  </Router>
);

export default App;