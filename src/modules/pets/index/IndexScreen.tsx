import React from "react";
import useScreenHooks from "./useScreenHooks";
import { Button } from "react-bootstrap";

export const IndexScreen: React.FC = () => {
  const {
    pets,
    isLoading,
    user,
    errors,
    handleDelete,
    handleCreate,
    handleDetail,
    handleEdit,
  } = useScreenHooks();

  return (
    <>
      {!isLoading && !errors && (
        <div className="row">
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Mascotas</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <a
                  onClick={(e) => {
                    handleCreate(e);
                  }}
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Agregar mascota
                </a>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Tipo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(pets) && pets.length === 0 ? (
                    <tr>
                      <td colSpan={4}>No hay mascotas disponibles.</td>
                    </tr>
                  ) : Array.isArray(pets) ? (
                    pets.map((pet) => (
                      <tr key={pet.id}>
                        <td>{pet.name}</td>
                        <td>{pet.age}</td>
                        <td>{pet.type}</td>
                        <td>
                          <Button
                            variant="info"
                            onClick={(e) => {
                              handleDetail(e, pet.id);
                            }}
                          >
                            Ver
                          </Button>
                          <Button
                            variant="primary"
                            onClick={(e) => {
                              handleEdit(e, pet.id);
                            }}
                          >
                            Editar
                          </Button>
                          <Button
                            variant="danger"
                            onClick={(e) => {
                              handleDelete(e, pet.id);
                            }}
                          >
                            Borrar
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4}>No hay mascotas disponibles.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default IndexScreen;
