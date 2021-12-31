import React from "react";
import './Navegacion.css';


function Navegacion()
{
    return (
        <div>
          <nav>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/acerca">Acerca</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/login">Acceder</a></li>
          </ul>
          </nav>
        </div>
      );
}
export default Navegacion;