import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { logout } = useAuth();

  return (
    <div>
      <button onClick={logout}>Sair</button>
    </div>
  );
}