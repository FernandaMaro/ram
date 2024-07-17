import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from './img/Rick-And-Morty-Logo.png';


const Login = ({ setAuth }) => {
  const [usuario, setUser] = useState("");
  const [contraseña, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (usuario === "Rick" && contraseña === "Morty") {
      setAuth(true);
      navigate("/home");
    } else {
      setError("User or password incorrect");
    }
  };

  return (
    <main>
      <section>
        <div className="login">
          <img id="logo" src={logo} alt="rick and morty logo" />
          <h1>Log In</h1>
          <input className="label"
            type="text"
            placeholder="User"
            value={usuario}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            className="label"
            type="password"
            placeholder="Pasword"
            value={contraseña}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" onClick={login}>
          Log In
          </button>
          {error && <p id="error">{error}</p>}
        </div>
      </section>
    </main>
  );
};

export default Login;
