export const Palabra = (props) => {
  const { children, accion, inicialMayuscula } = props;
  const palabra = inicialMayuscula
    ? children[0].toUpperCase() + children.slice(1)
    : children;
  return <li onClick={accion}>{palabra}</li>;
};
