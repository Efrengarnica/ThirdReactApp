import './App.css';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear.jsx';
import Logo from './componentes/Logo.jsx'
import { useState } from 'react';
import {evaluate} from 'mathjs'; //Libreria para JS y Node.js//Nos ayuda a relaizar las opereaciones que todo lo que hay en el input
function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    if (input && !/\d$/.test(input) && isNaN(val)) {
      setInput(input.slice(0, -1) + val);
    } else {
      setInput(input + val);
    }
  };

  const agregarInputMasporEntre = val => {
    if(input){
        if (!/\d$/.test(input) && isNaN(val)) {
          setInput(input.slice(0, -1) + val);
        } else {
          setInput(input + val);
        }
    }else {
      alert("Por favor ingrese un valor")
    }
  };

  const calcularResultado = () => {
    if(input){
      try {
        setInput(evaluate(input));
      } catch (error) {
        setInput('');
        alert('Ingrese la operación que quiere realizar de manera correcta ');
      }
    } else{
      alert("Por favor ingrese valores para realizar los cálculos");
    }
  };

  return (
    <div className='App'>
      <div className='genereishop-logo-contenedor'>
      <Logo/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla
        input={input}
        />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInputMasporEntre}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInputMasporEntre}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInputMasporEntre}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear= { () => setInput('') }>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
