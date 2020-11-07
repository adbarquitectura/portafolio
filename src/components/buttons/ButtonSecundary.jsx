import React from 'react';
import './EstilosBotones.css';


const ButtonSecundary = (props) => {
  return (
    <button className="btnSecundary"
      onClick={props.funcion}
    >
      <img src={props.imgsrc} alt='' />
      {props.contenidobtn}
    </button>
  );
};

export default ButtonSecundary;