import React from "react";
import "./Registro.css";

function Login()
{
    return(
    <React.Fragment>
        <form class="caja1" method="post">
            <h2>Ingresa tus datos</h2>
            <p>Nombre(s)</p>
            <input type="text" name="log" class="field"/>
            <p>Apellidos</p>
            <input type="text" name="log" class="field"/>
            <p>Direccion</p>
            <input type="text" name="log" class="field"/>
            <input type="submit" class="boton" value="Registrarme"/>
        </form>

    </React.Fragment>
    );
}

export default Login;