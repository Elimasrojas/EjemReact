import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "./model/Contacto.class";
import { NIVEL } from "./model/estado.enum";

const ContactoForm = ({ contacto ,completaAct ,eliminar}) => {
  function tipoEstado() {
    switch (contacto.nivel) {
      case NIVEL.ACTIVO:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{contacto.nivel}</span>
          </h6>
        );
      case NIVEL.INACTIVO:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{contacto.nivel}</span>
          </h6>
        );
      default:
        break;
    }
  }
  function contactoCompletedIcon() {
    console.log("entra contactoCompletedIcon");    
    if (contacto.estado) {
      return (
        <i onClick={()=>completaAct(contacto)} className="bi-toggle-on task-action" style={{ color: "green" }}></i>
      );
    } else {
      return (
        <i onClick={()=>completaAct(contacto)} className="bi-toggle-off task-action" style={{ color: "grey" }}></i>
      );
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{contacto.name}</span>
      </th>
      <td className="align-baseline">
        <span>{contacto.apellidos}</span>
      </td>
      <td className="align-baseline">
        <span>{tipoEstado()}</span>
      </td>
      <td className="align-baseline">
        {/* Execution of function to return icon depending on completion */}
        {contactoCompletedIcon()}
        <i className="bi-trash task-action " style={{ color: "tomato" }} onClick={()=>eliminar(contacto)} ></i>
      </td>
    </tr>
  );
};

ContactoForm.propTypes = {
  contacto: PropTypes.instanceOf(Contacto).isRequired,
  completaAct: PropTypes.func.isRequired,
  eliminar: PropTypes.func.isRequired
};

export default ContactoForm;
