import { useState } from "react";
import { Estadisticas } from "./componentes/Estadisticas";
import { Formulario } from "./componentes/Formulario";
import { Palabra } from "./componentes/Palabra";
import { PalabrasDestino } from "./componentes/PalabrasDestino";
import { PalabrasOrigen } from "./componentes/PalabrasOrigen";
import { palabras } from "./datos/palabras";

function App() {
  const [palabrasOrigen, setPalabrasOrigen] = useState(palabras);
  const [palabrasDestino, setPalabrasDestino] = useState([]);
  const idMasAlta = (palabras) =>
    palabras
      .map((palabra) => palabra.id)
      .reduce((acumulador, id) => (id > acumulador ? id : acumulador), 0);
  const anyadirPalabraOrigen = (palabra) => {
    if (
      palabrasOrigen
        .map((palabra) => palabra.texto.toLowerCase())
        .includes(palabra.texto.toLowerCase())
    ) {
      return;
    }
    setPalabrasOrigen([
      ...palabrasOrigen,
      { ...palabra, id: idMasAlta(palabrasOrigen) + 1 },
    ]);
  };
  const anyadirPalabraDestino = (palabra) => {
    const nVecesAnyadida = palabrasDestino.filter(
      (palabraDestino) => palabraDestino.texto === palabra.texto
    ).length;
    if (palabra.maximo > 0 && nVecesAnyadida === palabra.maximo) {
      return;
    }
    setPalabrasDestino([
      ...palabrasDestino,
      { ...palabra, id: idMasAlta(palabrasDestino) + 1 },
    ]);
  };
  const borrarPalabraDestino = (idPalabra) => {
    setPalabrasDestino(
      palabrasDestino.filter((palabra) => palabra.id !== idPalabra)
    );
  };
  return (
    <>
      <section className="palabras">
        <PalabrasOrigen
          palabras={palabrasOrigen}
          anyadirPalabraDestino={anyadirPalabraDestino}
        />
        <PalabrasDestino
          palabras={palabrasDestino}
          borrarPalabra={borrarPalabraDestino}
        />
      </section>
      <section className="crear-palabras">
        <Formulario anyadirPalabraOrigen={anyadirPalabraOrigen} />
      </section>
      <Estadisticas palabras={palabrasDestino} />
    </>
  );
}

export default App;
