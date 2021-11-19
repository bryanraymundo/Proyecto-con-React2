import React from "react";
import "./main.css";
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';


function MenuPrincipal()
{
    return(
     <>
     
    <section>
        <div className="rectangulo">
                    <h1>¿Qué puedes hacer con nosotros?</h1>
                    <div className="galeria">
                            <div className="elementos1">
                                <ul>
                                    <li className="lista"><a>Realiza denuncias</a></li>
                                    <li className="lista"><a>Realiza peticiones</a></li>
                                    <li className="lista"><a>Realiza contribuciones</a></li>
                                    <li className="lista"><a>Recibe asesorías </a></li>
                                </ul>
                            </div>
                            <div className="elementos2">
                                <img src="img/Denuncia-06-06.png" alt=""/>
                            </div>                        
            </div>
        </div>
    </section>
    <section className="portafolio">
        <div className="contenedor">
            <h2 className="titulo">Evidencias</h2>
            <div className="galeria-port">
                <div className="imagen-port">
                    <img src={img1} alt=""/>
                    <div className="hover-galeria">
                    </div>
                </div>
                <div className="imagen-port">
                    <img src={img2} alt=""/>
                    <div className="hover-galeria">
                    </div>
                </div>
                <div className="imagen-port">
                    <img src={img3} alt=""/>
                    <div className="hover-galeria">
                    </div>
                </div>
                <div className="imagen-port">
                    <img src={img4} alt=""/>
                    <div className="hover-galeria">
                    </div>
                </div>
                <div className="imagen-port">
                    <img src={img5} alt=""/>
                    <div className="hover-galeria">
                    </div>
                </div>
                <div className="imagen-port">
                    <img src={img6} alt=""/>
                    <div className="hover-galeria">
                    </div>
                </div>
            </div>
        </div>
    </section>

     </>   
    );
}

export default MenuPrincipal;