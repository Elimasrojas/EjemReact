import React, { useRef } from "react";
import PropTypes from "prop-types";
import { NIVEL } from "./model/estado.enum";
import { Contacto } from "./model/Contacto.class";

const CrearContacto = ({adicianarCont}) => {
  const nameRef = useRef("");
  const apellidosRef = useRef("");
  const nivelRef = useRef(NIVEL.ACTIVO);

  function addContacto(e) {
    e.preventDefault();
    const newContacto = new Contacto(
      nameRef.current.value,
      apellidosRef.current.value,
      false,
      nivelRef.current.value
    );
    adicianarCont(newContacto);
  }

  return (
    <form   onSubmit={addContacto}>
      <div class="mb-3">
        <label for="nombre" class="form-label">
          Nombre
        </label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          aria-describedby="emailHelp"
          ref={nameRef}
        />
        <div id="emailHelp" class="form-text">
          Nombre es obligatorio papa.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputDescrption" class="form-label">
          Description
        </label>
        <input
          ref={apellidosRef}
          type="text"
          class="form-control"
          id="exampleInputDescrption"
        />
      </div>
      <div class="mb-3">
        <select
          ref={nivelRef}
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>Seleccione un estado</option>
          <option value={NIVEL.ACTIVO}>Activo</option>
          <option value={NIVEL.INACTIVO}>Inactivo</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">
        Crear Contacto
      </button>
    </form>
  );
};

CrearContacto.propTypes = {
    adicianarCont: PropTypes.func.isRequired,
};

export default CrearContacto;
