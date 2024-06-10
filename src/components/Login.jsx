import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/users');
            if (!response.ok) {
                throw new Error('Usuário ou senha incorretos. Por favor, tente novamente.');
            }
            const users = await response.json();
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                navigate('/produtos');
            } else {
                setError('Usuário ou senha incorretos. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('Ocorreu um erro ao efetuar o login. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <div className="login-container">
            {error && <p className="error-message">{error}</p>}
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <input
                        type="text"
                        id="username"
                        placeholder="Usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    );
};

export default Login;