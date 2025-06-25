import { NavLink } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";

export default function Nav() {
  const { user } = useGlobal();

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/" className="nav-link ">
              <span data-feather="home"></span>
              Panel de control
            </NavLink>

            <NavLink to="/pets" className="nav-link ">
              <span data-feather="file"></span>
              Mascotas
            </NavLink>
          </li>
          <li className="nav-item dropdown "></li>
        </ul>
      </div>
    </nav>
  );
}
