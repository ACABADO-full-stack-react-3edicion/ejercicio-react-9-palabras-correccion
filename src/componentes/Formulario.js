import { useEffect, useState } from "react";
import { useFormulario } from "../hooks/useFormulario";

export const Formulario = (props) => {
  const { anyadirPalabraOrigen } = props;
  const datosIniciales = {
    texto: "",
    maximo: "",
    esLenguaje: false,
  };

  const {
    datos: datosFormulario,
    formularioValido,
    setDato,
    setFormularioValido,
    resetFormulario,
  } = useFormulario(datosIniciales);
  const enviarPalabra = (e) => {
    e.preventDefault();
    anyadirPalabraOrigen({
      texto: datosFormulario.texto,
      maximo: +datosFormulario.maximo,
      esLenguaje: datosFormulario.esLenguaje,
    });
    resetFormulario();
  };
  useEffect(() => {
    setFormularioValido(
      datosFormulario.texto !== "" && datosFormulario.maximo !== ""
    );
  }, [datosFormulario, setFormularioValido]);

  return (
    <form className="form-palabras" noValidate onSubmit={enviarPalabra}>
      <div className="form-grupo">
        <input
          type="text"
          value={datosFormulario.texto}
          onChange={setDato}
          id="texto"
          placeholder="Nueva palabra"
          required
        />
      </div>
      <div className="form-grupo">
        <select
          required
          id="maximo"
          value={datosFormulario.maximo}
          onChange={setDato}
        >
          <option value="">Máximo de veces</option>
          <option value="0">Sin límite</option>
          <option value="1">1 vez</option>
          <option value="2">2 veces</option>
          <option value="3">3 veces</option>
        </select>
      </div>
      <div className="form-grupo">
        <label>
          <input
            type="checkbox"
            id="esLenguaje"
            checked={datosFormulario.esLenguaje}
            onChange={setDato}
          />{" "}
          Es un lenguaje de programación
        </label>
      </div>
      <div className="form-grupo">
        <button type="submit" disabled={!formularioValido}>
          Crear
        </button>
      </div>
    </form>
  );
};
