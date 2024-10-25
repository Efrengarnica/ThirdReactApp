import React from "react";
import '../hojas-de-estilo/Pantalla.css'
//El componente también lo podemos definir como una función flecha
const Pantalla = ( {input} ) => (
    <div className="input">
        {input}
    </div>
);
export default Pantalla;


