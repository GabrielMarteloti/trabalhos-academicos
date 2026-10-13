import { useParams } from "react-router-dom";

export default function ReceitaDetalhe() {
  const { id } = useParams();

  return <h1>Receita ID: {id}</h1>;
}