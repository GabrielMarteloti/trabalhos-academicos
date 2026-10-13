import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <Link to="/admin/lista">Lista</Link><br />
      <Link to="/admin/nova">Nova</Link>
    </div>
  );
}