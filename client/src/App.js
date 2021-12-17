import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Componentes/Header/Header';
import Navegacion from './Componentes/Navegacion/Navegacion';

import Home from './Componentes/main/Home';
import Acerca from './Componentes/pages/Acerca';
import Contacto from './Componentes/pages/Contacto';
import Login from './Componentes/Header/IniciarSesion/Login';
import Registro from './Componentes/Registro/Registro';


function App() 
{
  return (
    <>
      <Header/>
      <Navegacion />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/acerca' element={<Acerca/>} />
          <Route exact path='/contacto' element={<Contacto/>} />
          <Route exact path='/login' element= {<Login/>} />     
          <Route exact path='/registro' element= {<Registro/>} />         
        </Routes>
      </Router>
    </>
  );
}

export default App;
