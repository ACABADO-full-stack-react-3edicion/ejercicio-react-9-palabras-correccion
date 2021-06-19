import { useState } from "react";

export const useFormulario = (datosIniciales) => {
  const [datos, setDatos] = useState(datosIniciales);
  const [formularioValido, setFormularioValido] = useState(false);
  const setDato = (e) => {
    const elemento = e.target;
    setDatos({
      ...datos,
      [elemento.id]:
        elemento.type === "checkbox" ? elemento.checked : elemento.value,
    });
  };
  const resetFormulario = () => {
    setDatos(datosIniciales);
  };
  return {
    datos,
    formularioValido,
    setFormularioValido,
    setDato,
    resetFormulario,
  };
};
