import React from "react";
import "./EstilosLogin.css";


function Login()
{
    return(
    <>
        <form class="caja" method="post">
            <h2>Inicia sesión</h2>
            <p>Correo electronico</p>
            <input type="text" name="log" class="field"/>
            <p>Contraseña</p>
            <input type="password" class="field"/>  
            <input type="submit" class="boton" value="Iniciar sesion"/>  
        </form>
    </>
    );
}

export {Login};