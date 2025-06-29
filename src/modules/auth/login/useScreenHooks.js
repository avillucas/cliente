import { useState, useEffect } from "react";
import { ApiService } from "./api";
import { useGlobal } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { useSpinner } from "../../../context/SpinnerContext";

export default function useScreenHooks() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { show, isLoading } = useSpinner();
  const { login } = useGlobal();


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (!isLoading) show();
      const response = await ApiService.login({ email, password });
      login(response.token, response.user);
      navigate("/pets");
    } catch (error) {
      console.error("Error on login:", error);
    }
  }

  useEffect(() => {
    document.title = "Iniciar Sesión";
  }, []);

  return { email, password, setEmail, setPassword, handleSubmit };
}