/*
  Componente hijo: no sabe nada del carrito.
  Solo ejecuta la función que el padre le pasó por la prop "onAgregar".
*/

const BotonAgregar = ({ onAgregar, texto = "Agregar al carrito" }) => {
  return (
    <button
      className="bg-red-700 text-white py-1 px-3 rounded w-full hover:bg-red-800"
      onClick={onAgregar}
    >
      {texto}
    </button>
  )
}

export default BotonAgregar
