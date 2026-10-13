import { Link } from "react-router-dom";

const receitas = [
  { id: 1, nome: "Bolo de Chocolate", categoria: "Sobremesa" },
  { id: 2, nome: "Pizza Margherita", categoria: "Salgado" },
  { id: 3, nome: "Frango Grelhado", categoria: "Prato Principal" },
  { id: 4, nome: "Salada Caesar", categoria: "Entrada" },
];

export default function Receitas() {
  return (
    <div>
      <h1>Receitas</h1>
      {receitas.map((r) => (
        <div key={r.id}>
          <Link to={`/receita/${r.id}`}>{r.nome}</Link>
        </div>
      ))}
    </div>
  );
}