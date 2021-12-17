import React from "react";
import "./Login.css";

function Login()
{
    return(
    <React.Fragment>
        <form class="caja" method="post">
            <h2>Inicia sesión</h2>
            <p>Correo electronico</p>
            <input type="text" name="log" class="field"/>
            <p>Contraseña</p>
            <input type="password" class="field"/>  
            <input type="submit" class="boton" value="Iniciar sesion"/>
            <div className={'text'}>
                <br/>
                <a>O bien, puedes </a>
                <a href='/registro'>Registrarse</a>  
            </div>
        </form>

    </React.Fragment>
    );
}

export default Login;