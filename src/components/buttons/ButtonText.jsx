import React from 'react';
import './EstilosBotones.css';


const ButtonText = (props) => {
  return (
    <button className="btnText"
      onClick={props.funcion}
    >
      {props.contenidobtn}
      {/* <img src={props.imgsrc} alt='' /> */}
    </button>
  );
};

export default ButtonText;