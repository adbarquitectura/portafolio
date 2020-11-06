import React from 'react';
import './EstilosBotones.css';


const ButtonPrimary = (props) => {
  return (
    <button className="btnPrimary"
      onClick={props.funcion}
    >
      {props.contenidobtn}
    </button>
  );
};

export default ButtonPrimary;