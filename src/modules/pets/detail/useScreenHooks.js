import { useState, useEffect } from "react";
import { useSpinner } from "../../../context/SpinnerContext";
import { useParams, useNavigate } from "react-router-dom";
import { ApiService } from "./api";

export default function useScreenHooks() {
  const [pet, setPet] = useState(null);
  const [errors, setErrors] = useState(null);
  const { show, hide, isLoading } = useSpinner();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Detalle Mascota";
    const fetchPet = async () => {
      if (!id) return;

      try {
        if (!isLoading) show();
        const response = await ApiService.getPetById(Number(id));
        setPet(response.data);
        hide();
      } catch (error) {
        setErrors(error);
      }
    };

    fetchPet();
  }, [id, hide, isLoading, show]);

  return { pet, errors, navigate };
}
