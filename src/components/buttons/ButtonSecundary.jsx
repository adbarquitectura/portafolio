import React from 'react';
import './EstilosBotones.css';


const ButtonSecundary = (props) => {
  return (
    <button className="btnSecundary"
      onClick={props.funcion}
    >
      {props.contenidobtn}
    </button>
  );
};

export default ButtonSecundary;