import { NavLink, useNavigate } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";

export default function Header() {
  const { user, logout } = useGlobal();
  const navigate = useNavigate();

  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    logout(); 
    navigate("/login");
  };

  return (user && (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <NavLink to="/pets" className="text-white text-decoration-none">
        Guardianes de patitas
      </NavLink>

      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <form onSubmit={handleLogout} className="d-inline">
            <button type="submit" className="nav-link px-3">
              Cerrar sesión
            </button>
          </form>
        </div>
      </div>
    </header>
  ));
}
