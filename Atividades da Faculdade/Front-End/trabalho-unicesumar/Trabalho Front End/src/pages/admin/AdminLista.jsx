const receitas = [
  { id: 1, nome: "Bolo de Chocolate", categoria: "Sobremesa" },
  { id: 2, nome: "Pizza Margherita", categoria: "Salgado" },
  { id: 3, nome: "Frango Grelhado", categoria: "Prato Principal" },
  { id: 4, nome: "Salada Caesar", categoria: "Entrada" },
];

export default function AdminLista() {
  return (
    <div>
      <h2>Lista de Receitas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {receitas.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.nome}</td>
              <td>{r.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}