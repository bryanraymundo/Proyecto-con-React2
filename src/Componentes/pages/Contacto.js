import { Axios } from "axios";
import React, { useState } from "react";
import './Contacto.css';
import axios from 'axios'
//import { useState } from "react";

function Contacto()
{
    const [nombre, setnombre] = useState("");
    const [email, setemail] = useState("");   
    const [telefono, settelefono] = useState("");   
    const [descripcion, setdescripcion] = useState("");

    const AddEmployee = () => {
    Axios.post('http://localhost:3001/contacto', {
        nombre:nombre,
        email:email,
        telefono:telefono,
        descripcion:descripcion,
    }).then(() => {
        console.log("success");
    });
    };
    return(
        <div>
              <div className="container">
                <h2 className="Encabezado">¡Contactanos!</h2>
                    <div className="contact-info">
                        <form action="" >
                            <h3>Escribe tus dudas aquí</h3>
                            <input className="form2" type="text"    onChange={(event) => {setnombre(event.target.value);}}      name="fullname" id="fullname" placeholder="Nombre Completo" required/>
                            <input className="form2" type="email"   onChange={(event) => {setnombre(event.target.value);}}      name="email" id="email" placeholder="Email" required/>
                            <input className="form2" type="tel"     onChange={(event) => {setnombre(event.target.value);}}      name="tel" id="tel" placeholder="Telefono" required/>
                            <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Cuentanos tus inquietudes..."></textarea>
                            <button className="btn" type="submit"   onClick={AddEmployee}>Send</button>
                        </form>

                        <div className="details">
                            <h3 className="textoabajo">Datos de la Empresa</h3>
                            <div className="contact-items-wrapper">
                                <div className="contact-items">
                                    <span className="material-icons">location_on</span>
                                    <p><strong>Direccion:</strong> Calle Real Col Centro</p>
                                </div>
                                <div className="contact-items">
                                    <span className="material-icons">local_phone</span>
                                    <p><strong>Telefono:</strong> +52 744123456</p>
                                </div>
                                <div className="contact-items">
                                    <span className="material-icons">alternate_email</span>
                                    <p><strong>Email:</strong><a href="#"> contacto@qc.mx</a> </p>
                                </div>
                                <div className="contact-items">
                                    <span className="material-icons">public</span>
                                    <p><strong>Sitio Web</strong><a href="#"> www.qc.com.mx</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
             </div>
    </div>
    );
}

export default Contacto;