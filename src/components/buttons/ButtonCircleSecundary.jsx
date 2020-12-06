import React from 'react';
import './EstilosBotones.css';


const ButtonCircleSecundary = (props) => {
  return (
    <button className="btnCircleSec"
      onClick={props.funcion}
    >
      {props.contenidobtn}
    </button>
  );
};

export default ButtonCircleSecundary;