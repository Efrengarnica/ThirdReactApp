import React from "react";
import '../hojas-de-estilo/Logo.css'
import genereishopLogo from '../imagenes/Genereishop1.png'
function Logo(){
    return(
        <img
        className='genereishop-logo'
        src={genereishopLogo}
        alt='Logo de Genereishop' />
    );
};
export default Logo;