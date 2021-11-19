import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header/Header';
import Navegacion from './Navegacion/Navegacion';

import Home from './main/Home';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import Login from './IniciarSesion/Login';
import Registro from './Registro/Registro'

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
