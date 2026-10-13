import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminNova() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [sucesso, setSucesso] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSucesso(true);
    setTimeout(() => {
      navigate("/admin/lista");
    }, 1500);
  }

  return (
    <div>
      <h2>Nova Receita</h2>
      {sucesso && <p>Receita cadastrada com sucesso! Redirecionando...</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome da Receita</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Categoria</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="">Selecione...</option>
            <option value="Sobremesa">Sobremesa</option>
            <option value="Salgado">Salgado</option>
            <option value="Prato Principal">Prato Principal</option>
            <option value="Entrada">Entrada</option>
          </select>
        </div>
        <div>
          <label>Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            rows={4}
            required
          />
        </div>
        <button type="submit">Cadastrar Receita</button>
      </form>
    </div>
  );
}