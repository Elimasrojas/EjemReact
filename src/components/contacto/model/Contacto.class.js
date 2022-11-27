import { NIVEL } from "./estado.enum";


export class Contacto {
    name='';
    apellidos='';   
    estado= '';
    nivel= NIVEL.ACTIVO;
    

    constructor(name,apellidos,estado,nivel){
        this.name=name
        this.apellidos=apellidos
        this.estado=estado    
        this.nivel=nivel
    }

}