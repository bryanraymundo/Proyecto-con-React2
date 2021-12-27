import React, { useState } from "react";
import "./Login.css";
// import Axios from 'axios'



function Login()
{

/*
    const [usernameReg, setUsername] = useState('');
    const [passwordReg, setPassword] = useState('');

    const Registro = ()  => {
        Axios.post('https://localhost:3001/registro', 
        {username: usernameReg, password: passwordReg,
        }).then((Response) => {console.log(Response);
        });
    };
*/
    return(
    <React.Fragment>

        <form class="caja" method="post">
            <h2>Inicia sesión</h2>
            <p>Nombre de Usuario</p>
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