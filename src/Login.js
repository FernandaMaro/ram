import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuth }) => {
    const [usuario, setUser] = useState('');
    const [contraseña, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (usuario === 'Rick' && contraseña === 'Morty') {
            setAuth(true);
            navigate('/home');
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div>
            <h2>Inicia sesión</h2>
            <input
                type="text"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUser(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={contraseña}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Ingresar</button>
        </div>
    );
};

export default Login;
