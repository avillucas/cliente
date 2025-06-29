import { useState, useEffect, useCallback } from "react";
import { ApiService } from "./api";
import { useSpinner } from "../../../context/SpinnerContext";
import { useGlobal } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function useScreenHooks() {
  const { user } = useGlobal();
  const [pets, setPets] = useState([]);
  const [errors] = useState(null);
  const { show, hide, isLoading } = useSpinner();
  const navigate = useNavigate();

  const fetchAll = useCallback(async () => {
    try {
      if (!isLoading) show();
      const response = await ApiService.getAll();
      setPets(response.data);
      hide();
    } catch (error) {
      console.error("Error fetching pets:", error);
      hide();
    }
  }, [isLoading, show, hide]);

  useEffect(() => {
    document.title = "Lista de Mascotas";
    fetchAll();
  }, [fetchAll]);

  const handleDetail = (e, petId) => {
    e.preventDefault();
    navigate(`/pet/${petId}`);
  };
  const handleEdit = (e, petId) => {
    e.preventDefault();
    navigate(`/pet/edit/${petId}`);
  };

  const handleDelete = (e, petId) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Estás seguro de que quieres eliminar la mascota?",
      text: "¡Esta acción no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        //@todo realizar la peticion y refrezcar
        navigate(`/pets/delete/${petId}`);
      }
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    navigate(`/pets/create`);
  };

  return {
    pets,
    isLoading,
    user,
    errors,
    handleDetail,
    handleEdit,
    handleDelete,
    handleCreate,
  };
}
