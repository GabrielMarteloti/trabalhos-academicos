import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import Receitas from "./pages/Receitas";
import ReceitaDetalhe from "./pages/ReceitaDetalhe";
import Login from "./pages/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminLista from "./pages/admin/AdminLista";
import AdminNova from "./pages/admin/AdminNova";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/receita/:id" element={<ReceitaDetalhe />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="lista" replace />} />
          <Route path="lista" element={<AdminLista />} />
          <Route path="nova" element={<AdminNova />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;