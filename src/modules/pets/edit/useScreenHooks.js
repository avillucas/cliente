import { useState, useEffect, useRef } from "react";
import { ApiService } from "./api";
import { useSpinner } from "../../../context/SpinnerContext";
import { useNavigate, useParams } from "react-router-dom";
import { AlertService } from "../../../services/alertService";

export default function useScreenHooks() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const { show, hide, isLoading } = useSpinner();
  const { id } = useParams();
  const petId = Number(id);
  const [tipo, setTipo] = useState("");
  const [raza, setRaza] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [tamanio, setTamanio] = useState("");
  const [tipos] = useState([
    { value: "cat", name: "Gato" },
    { value: "dog", name: "Perro" },
  ]);
  const [tamanios] = useState([
    { value: "small", name: "Chico ( 1 a 5kg )" },
    { value: "medium", name: "Mediano ( 6 a 15kg )" },
    { value: "large", name: "Grande ( 16 a 50kg )" },
  ]);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }
    try {
      if (!isLoading) show();
      await ApiService.updatePet({
        id: petId,
        type: tipo,
        breed: raza,
        name: nombre,
        age: edad,
        size: tamanio,
      });
      hide();
      const alertResponse = await AlertService.showSuccess(
        "La mascota ha sido creada correctamente"
      );
      if (alertResponse.value) navigate("/pets");
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  useEffect(() => {
    document.title = "Crear Mascotas";
    const fetchData = async () => {
      try {
        if (petId) {
          if (!isLoading) show();
          const petData = await ApiService.getPetById(petId);
          if (petData.data) {
            setTipo(petData.data.type);
            setRaza(petData.data.breed);
            setNombre(petData.data.name);
            setEdad(petData.data.age);
            setTamanio(petData.data.size);
          }
          hide();
        }
      } catch (error) {
        console.log("Error fetching data:", error);
        hide();
      }
    };

    if (petId) {
      fetchData();
    }
  }, [petId, hide, show, isLoading]);

  return {
    petId,
    formRef,
    raza,
    setRaza,
    nombre,
    setNombre,
    edad,
    setEdad,
    tamanio,
    setTamanio,
    tipo,
    setTipo,
    tamanios,
    tipos,
    handleSubmit,
    navigate,
  };
}
