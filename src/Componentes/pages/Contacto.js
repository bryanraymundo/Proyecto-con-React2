import React from "react";
import './Contacto.css';

function Contacto()
{
    return(
        <div>
                <div className="container">
                <h2 className="Encabezado">¡Contactanos!</h2>
                    <div className="contact-info">
                        <form action="" >
                            <h3>Escribe tus dudas aquí</h3>
                            <input className="form2" type="text" name="fullname" id="fullname" placeholder="Nombre Completo" required/>
                            <input className="form2" type="email" name="email" id="email" placeholder="Email" required/>
                            <input className="form2" type="tel" name="tel" id="tel" placeholder="Telefono" required/>
                            <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Cuentanos tus inquietudes..."></textarea>
                            <button className="btn" type="submit">Send</button>
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