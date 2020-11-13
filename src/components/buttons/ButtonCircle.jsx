import React from 'react';
import './EstilosBotones.css';


const ButtonCircle = (props) => {
  return (
    <button className="btnCircle"
      onClick={props.funcion}
    >
      {props.contenidobtn}
    </button>
  );
};

export default ButtonCircle;