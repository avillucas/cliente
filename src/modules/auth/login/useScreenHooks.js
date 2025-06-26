
import { useState, useEffect } from "react";
import { ApiService } from "../../../services/apiService";
import { useGlobal } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function useScreenHooks() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useGlobal();
 
  async function handleSubmit( event) {
    event.preventDefault();
    const response = await ApiService.login({ email, password });
    login(response.payload.token, response.payload.user);
    navigate("/pets");
  }

  useEffect(() => {
    document.title = "Iniciar Sesión";
  }, []);

  return { email, password, setEmail, setPassword, handleSubmit };
}
