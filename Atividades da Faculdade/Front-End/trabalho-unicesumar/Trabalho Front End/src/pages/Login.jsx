import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  if (user) return <Navigate to="/admin/lista" />;

  function handleLogin(e) {
    e.preventDefault();
    login();
    navigate("/admin/lista");
  }

  return (
    <div className="login">
      <div className="login__card">
        <h1 className="login__title">👨‍🍳 ChefPro</h1>
        <form className="login__form" onSubmit={handleLogin}>
          <div>
            <label className="login__label">Usuário</label>
            <input
              className="login__input"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="admin"
            />
          </div>
          <div>
            <label className="login__label">Senha</label>
            <input
              className="login__input"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••"
            />
          </div>
          <button className="login__btn" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}