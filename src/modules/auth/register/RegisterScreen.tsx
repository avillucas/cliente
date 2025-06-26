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
    <form onSubmit={handleSubmit}>
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
  );
};

export default RegisterScreen;
