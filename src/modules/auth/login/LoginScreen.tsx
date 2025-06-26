import { Link } from "react-router-dom";
import useScreenHooks from "./useScreenHooks";
import "./login.css"
interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const { email, password, setEmail, setPassword, handleSubmit } =
    useScreenHooks();

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="login-container bg-dark text-white p-4 rounded shadow col-10 col-md-6">
        <h3 className="text-center mb-4">Iniciar Sesión</h3>
        <form className="form-signin" onSubmit={handleSubmit}>
        
          <img
            className="mb-4"
            src="/assets/img/logo-guardianes.png"
            
            width="129"
            height="41"
          />
          <h1 className="h3 mb-3 font-weight-normal">
            Por favor ingrese sus datos
          </h1>
          <label htmlFor="inputEmail" className="sr-only">
            Correo eléctronico
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Correo eléctronico"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />
          <label htmlFor="inputPassword" className="sr-only">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="inputPassword"
            className="form-control"
            placeholder="Contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Acceder
          </button>
        </form>
        <div className="text-center mt-3">
          <small>
            <Link to="/register" className="text-light text-decoration-none">
              Registrate
            </Link>
          </small>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default LoginScreen;