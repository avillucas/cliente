import React from "react";
import useScreenHooks from "./useScreenHooks";
import { Link } from "react-router-dom";

type Pet = {
  name: string;
  age: number;
  type: string;
  size: string;
  breed: string;
};

export const DetailScreen: React.FC = () => {
    const { pet, errors, navigate } = useScreenHooks() as {
      pet: Pet | null;
      errors: any;
      navigate: any;
    };
  return (<>
   {pet && !errors &&(
     <div className="row">
  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">Sobre la mascota {pet.name}</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        <Link to="/pets" className="btn btn-sm btn-outline-secondary">
          Volver al listado
        </Link>
      </div>
    </div>
    <ul>
      <li><strong>Nombre:</strong> {pet.name}</li>
      <li><strong>Edad:</strong> {pet.age}</li>
      <li><strong>Tipo:</strong> {pet.type}</li>
      <li><strong>Tamaño:</strong> {pet.size}</li>
      <li><strong>Raza:</strong> {pet.breed}</li>
    </ul>
  </main>
</div> 
  )}
  </>
  );
};