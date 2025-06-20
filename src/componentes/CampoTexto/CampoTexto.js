import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const [valor, setValor] = useState("");

  const aoDigitado = (e) => {
    setValor(e.target.value);
    console.log("Valor digitado:", valor);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export default CampoTexto;
