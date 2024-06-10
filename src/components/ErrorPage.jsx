import React from 'react';
import './ErrorPage.css'; 

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <h2 className="error-title">Errasse ein!</h2>
        <p className="error-message">Oops! Erro na página, desculpe o incomodo tente novamente.</p>
      </div>
    </div>
  );
};

export default ErrorPage;