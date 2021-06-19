import { Palabra } from "./Palabra";

export const PalabrasOrigen = (props) => {
  const { palabras, anyadirPalabraDestino } = props;
  return (
    <ul className="lista-palabras">
      {palabras.map((palabra) => (
        <Palabra key={palabra.id} accion={() => anyadirPalabraDestino(palabra)}>
          {palabra.texto}
        </Palabra>
      ))}
    </ul>
  );
};
