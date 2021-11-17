import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//import './App.css';

import {Header} from './Header/Header';
import {NavList} from './Navegacion/NavList';
import {Navegacion} from './Navegacion/Navegacion';
import { Login } from './IniciarSesion/Login';
import MenuPrincipal from './MenuPrincipal';

let ses = 5;
const navegacion = [
  { text: 'Inicio', ruta: {ses} },
  { text: 'Contactanos', ruta: 'rutas'},
  { text: 'Acerca de', ruta: 'rutas'},
  { text: 'Iniciar sesión', ruta: './IniciarSesion/Login.js'},
];

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login}/>
    </BrowserRouter>
    /*
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
      <MenuPrincipal/>
    <Login/>
 </React.Fragment>*/

  );
}

export default App;
