import React from "react";
import './Navegacion.css';


function Navegacion(props)
{
    return(
    <nav>
        <ul>
             {props.children}   
        </ul>
    </nav>
    );
}

export {Navegacion};