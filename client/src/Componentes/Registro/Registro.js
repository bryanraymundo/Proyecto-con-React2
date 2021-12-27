import React, { useState } from "react";
import "./Registro.css";
import Axios from 'axios'



function Login()
{

    const [usernameReg, setUsername] = useState('');
    const [passwordReg, setPassword] = useState('');

    const Registro = ()  => {
        Axios.post('localhost:3001/registro', {
         username: usernameReg, 
         password: passwordReg,
        }).then((Response) => {console.log(Response);
        });
    };

    return(
    <React.Fragment>
        <form class="caja1" method="post">
            <h2>Ingresa tus datos</h2>
            <p>Nombre(s)</p>
            <input type="text" onChange={(e)=>{setUsername(e.target.value)}} name="log" class="field"/>
            <p>Contraseña</p>
            <input type="text" onChange={(e)=>{setPassword(e.target.value)}} name="log" class="field"/>
            <button onClick={Registro} className="boton2">Dar de alta</button>
        </form>

    </React.Fragment>
    );
}

export default Login;