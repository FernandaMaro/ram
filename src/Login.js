import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const [usuario, setUser] = useState("");
  const [contraseña, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = () => {
    if (usuario === "Rick" && contraseña === "Morty") {
      setAuth(true);
      navigate("/home");
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <main>
      <section className="container">
        <div className="login">
          <h1>Inicia sesión</h1>
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
          <button className="btn" onClick={login}>Ingresar</button>
          {error && <p id="error">{error}</p>}
        </div>
      </section>
    </main>
  );
};

export default Login;
