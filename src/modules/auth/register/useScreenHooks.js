import { useState, useEffect } from "react";
import { ApiService } from "../../../services/apiService";
import { useSpinner } from "../../../context/SpinnerContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function useScreenHooks() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { show } = useSpinner();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    show();
    const response = await ApiService.register({
      email,
      password,
      confirmPassword,
      name,
    });
    Swal.fire({
      icon: "success",
      title: "Exito",
      text: response.message,
    });
    navigate("/login");
  }

  useEffect(() => {
    document.title = "Registrarse";
  }, []);

  return {
    name,
    email,
    password,
    confirmPassword,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSubmit,
  };
}