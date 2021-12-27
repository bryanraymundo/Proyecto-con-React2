import React from "react";
import "./main.css";
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import slide1 from './imagenes/Basura.jpg';
import slide2 from './imagenes/tuberia rota.jpg';
import slide3 from './imagenes/Denuncia.png';
import slide4 from './imagenes/Señora enojada.jpg';
import '../Slider/css de slider.css';



function MenuPrincipal()
{
    return(
    <div>
     <section>
        <div className="rectangulo">       
         <div className="container">
            <ul className="slider">
              <li id="slide1">
                <img src={slide1} alt="Slide"/>
              </li>
              <li id="slide2">
                <img src={slide2} />
              </li>
              <li id="slide3">
                <img src={slide3} />
              </li>
              <li id="slide4">
                <img src={slide4} />
              </li>
            </ul>

            <ul className="menu">
              <li>
                <a href="#slide1">1</a>
              </li>
              <li>
                <a href="#slide2">2</a>
              </li>
              <li>
                <a href="#slide3">3</a>
              </li>
              <li>
                <a href="#slide4">4</a>
              </li>
            </ul>
          </div>            
        </div>
        </section>
        
        <section>
            <div className="rectangulo">
                        <h1 className="titulopal">¿Qué puedes hacer con nosotros?</h1>
                        <div className="galeria">
                                <div className="elementos1">
                                    <ul>
                                        <li className="listas"><p><i class="fa fa-flag"></i>Realiza denuncias</p></li>
                                        <li className="listas"><p><i class="fa fa-envelope-open"></i>Realiza peticiones</p></li>
                                        <li className="listas"><p><i class="fa fa-quote-right"></i>Realiza contribuciones</p></li>
                                        <li className="listas"><p><i class="fa fa-users"></i>Recibe asesorías </p></li>
                                    </ul>
                                </div>
                                <div className="elementos2">
                                    <img src={img1} alt=""/>
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

    </div>   
    );
}

export default MenuPrincipal;