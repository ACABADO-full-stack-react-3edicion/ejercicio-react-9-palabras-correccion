import { useState } from "react";

export const Estadisticas = (props) => {
  const { palabras } = props;
  const lenguajes = palabras
    .filter((palabra) => palabra.esLenguaje)
    .map((palabra) => palabra.texto)
    .filter((palabra, i, palabras) => palabras.indexOf(palabra) === i)
    .sort(); // ToDo: ordenar teniendo en cuenta las mayúsculas
  const nPalabras = palabras.length;
  const nCaracteres = palabras.map((palabra) => palabra.texto).join("").length;
  const longitudMedia = nPalabras === 0 ? 0 : nCaracteres / nPalabras;
  return (
    <section className="info">
      <ul>
        <li>
          Nº de palabras <span>{nPalabras}</span>
        </li>
        <li>
          Nº de caracteres <span>{nCaracteres}</span>
        </li>
        <li>
          Longitud media <span>{longitudMedia.toFixed(2)}</span>
        </li>
        <li>
          Contiene {lenguajes.length} lenguaje/s de programación
          <ul>
            {lenguajes.map((lenguaje) => (
              <li key={lenguaje}>{lenguaje}</li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};
