import { Palabra } from "./Palabra";

export const PalabrasDestino = (props) => {
  const { palabras, borrarPalabra } = props;
  return (
    <ul className="resultado">
      {palabras.map((palabra, i) => (
        <Palabra
          key={palabra.id}
          inicialMayuscula={i === 0}
          accion={() => borrarPalabra(palabra.id)}
        >
          {palabra.texto}
        </Palabra>
      ))}
    </ul>
  );
};
