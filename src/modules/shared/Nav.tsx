import { NavLink } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";

export default function Nav() {
  const { user } = useGlobal();

  return (
    user && // Check if user is defined
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/pets" className="nav-link ">
              <span data-feather="file"></span>
              Listar Mascotas
            </NavLink>
          </li>
          <li className="nav-item dropdown "></li>
        </ul>
      </div>
    </nav>
  );
}
