import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Contacto } from "./model/Contacto.class";
import { NIVEL } from "./model/estado.enum";
import ContactoForm from "./contactoForm";
import CrearContacto from "./crearContacto";

const ListaContactos = () => {
  const contacto1 = new Contacto("elkin", "limas rojas", true,NIVEL.ACTIVO);
  const contacto2 = new Contacto("Juan", "limas rojas", false,NIVEL.INACTIVO);
  const contacto3 = new Contacto("Maria paula","Rodriguez rojas", false,NIVEL.INACTIVO);

  const [contactos, setContactos] = useState([contacto1, contacto2, contacto3]);

    function completarAccion(contacto) {
        console.log("Cambiar estado de el contacto");    
        const index = contactos.indexOf(contacto);    
        const temp = [...contactos];
        temp[index].estado = !temp[index].estado;    
        setContactos(temp);
    }
 
    function eliminarContacto(contacto){
        console.log("eliminar este contacto:", contacto);
        const index = contactos.indexOf(contacto);
        const temp = [...contactos];
        temp.splice(index, 1);
        setContactos(temp);
    }
    function agregarContacto(contacto){
      console.log("Agregar contacto", contacto);
      const index = contactos.indexOf(contacto);
      const temp = [...contactos];
      temp.push(contacto);
      setContactos(temp);
    }
    
  return (
    <div>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>            
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Estado</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, index) => {            
            return (
                <ContactoForm 
                  key={index} 
                  contacto={contacto}
                  completaAct={completarAccion}
                  eliminar={eliminarContacto}  >                                    
                </ContactoForm>
                );
          })}
        </tbody>
      </table>
      <CrearContacto adicianarCont={agregarContacto}></CrearContacto>
    </div>
  );
};



export default ListaContactos;
