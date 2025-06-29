import React from "react";
import useScreenHooks from "./useScreenHooks";
import { Button } from "react-bootstrap";

export const EditScreen: React.FC = () => {
  const {
   petId,
    isLoading,
    errors,
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
    formRef,
  } = useScreenHooks();
  return (
    <>
      {!isLoading && !errors && (
        <div className="row">
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Editar  mascota{ nombre} </h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <a
                  href="/pets"
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Volver al listado
                </a>
              </div>
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="id" value={petId} />

              <div className="mb-3">
                <label htmlFor="petName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  aria-describedby="petNameValue"
                  value={nombre ?? ""}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <div id="petNameValue" className="form-text">
                  Definir el nombre de la mascota
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="petAge" className="form-label">
                  Edad
                </label>
                <input
                  type="number"
                  name="age"
                  min="1"
                  max="150"
                  className="form-control"
                  id="petAge"
                  aria-describedby="petAgeValue"
                  value={edad ?? ""}
                  onChange={(e) => setEdad(e.target.value)}
                />
                <div id="petAgeValue" className="form-text">
                  Definir la edad en meses
                </div>
              </div>
              <div className="mb-3">
                <select
                  className="form-select"
                  name="size"
                  aria-label="mediano"
                  value={tamanio ?? ""}
                  onChange={(e) => setTamanio(e.target.value)}
                >
                  <option value="">Seleccione el tamaño</option>
                  {tamanios.map((tamanio) => (
                    <option key={tamanio.value} value={tamanio.value}>
                      {tamanio.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="petRaza" className="form-label">
                  Raza
                </label>
                <input
                  type="text"
                  name="breed"
                  className="form-control"
                  id="petRaza"
                  aria-describedby="petRazaValue"
                  value={raza ?? ""}
                  onChange={(e) => setRaza(e.target.value)}
                />
                <div id="petRazaValue" className="form-text">
                  Definir la raza de la mascota
                </div>
              </div>

              <div className="mb-3">
                <select
                  className="form-select"
                  aria-label="Tipo"
                  name="type"
                  value={tipo ?? ""}
                  onChange={(e) => setTipo(e.target.value)}
                >
                  <option>Tipo</option>
                  {tipos.map((tipo) => (
                    <option key={tipo.value} value={tipo.value}>
                      {tipo.name}
                    </option>
                  ))}
                </select>
              </div>
              <Button type="submit">Editar</Button>
            </form>
          </main>
        </div>
      )}
    </>
  );
};
