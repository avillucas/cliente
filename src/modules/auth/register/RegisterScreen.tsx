import React from "react";
import { Link } from "react-router-dom";
import useScreenHooks from "./useScreenHooks";
import "./style.css";
interface RegisterScreenProps {}

const RegisterScreen: React.FC<RegisterScreenProps> = () => {
  const {
    name,
    email,
    password,
    confirmPassword,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSubmit,
  } = useScreenHooks();
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="login-container bg-dark text-white p-4 rounded shadow col-10 col-md-6">
          <h3 className="text-center mb-4">Iniciar Sesión</h3>
          <form
            onSubmit={handleSubmit}
            className="bg-dark text-white p-4 rounded shadow col-10 col-md-6 form-signin"
          >
            <img
              className="mb-4"
              src="/assets/img/logo-guardianes.png"
              alt=""
              width="129"
              height="41"
            />
            <h1 className="h3 mb-3 font-weight-normal">Por favor registrese</h1>
            <label htmlFor="inputName" className="sr-only">
              Nombre
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="inputName"
              className="form-control"
              placeholder="Nombre"
              required
            />
            <label htmlFor="inputEmail" className="sr-only">
              Correo eléctronico
            </label>
            <input
              type="email"
              name="email"
              id="inputEmail"
              className="form-control"
              placeholder="Correo eléctronico"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              autoComplete="new-password"
            />
            <label htmlFor="confirmPassword" className="sr-only">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="form-control"
              placeholder="Confirmar Contraseña"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Registrarse
            </button>
          </form>
          <div className="text-center mt-3">
            <small>
              <Link to="/login" className="text-light text-decoration-none">
                Ya tienes cuenta? Inicia sesión
              </Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
