import React from 'react';
import './Header.css';
import Image from './LogoPWEB.png';

function Header(){
    return(
        <header>
        <img src={Image} alt="Logo" width="120"/>
        </header>
    );
}
export { Header };