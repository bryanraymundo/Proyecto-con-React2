import React from 'react';
//import './App.css';

import {Header} from './Header';
import {NavList} from './NavList';
import {Navegacion} from './Navegacion';

const navegacion = [
  { text: 'Inicio', ruta: 'rutas' },
  { text: 'Servicios', ruta: 'rutas' },
  { text: 'Aviso de responsabilidad', ruta: 'rutas' },
  { text: 'Contactanos', ruta: 'rutas'},
  { text: 'Acerca de', ruta: 'rutas'},
  { text: 'Iniciar sesión', ruta: './IniciarSesion/iniciarsesion.html'},
];

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Navegacion>
        {navegacion.map(elementos => (
            <NavList
              key={elementos.text}
              text={elementos.text}
              ruta={elementos.ruta}
            />
          ))}  
      </Navegacion>
    </React.Fragment>
  );
}

export default App;
