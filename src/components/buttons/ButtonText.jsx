import React from 'react';
import './EstilosBotones.css';


const ButtonText = (props) => {
  return (
    <button className="btnText"
      onClick={props.funcion}
    >
      {props.contenidobtn}
    </button>
  );
};

export default ButtonText;