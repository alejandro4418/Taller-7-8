/*
  Header con el ícono del carrito. NO recibe props:
  lee la cantidad directamente del store global de Zustand.
*/

import storeCarrito from "../context/storeCarrito"

const HeaderCarrito = () => {

  const cantidad = storeCarrito((state) =>
    state.items.reduce((suma, item) => suma + item.cantidad, 0)
  )

  return (
    <div className="flex items-center justify-between bg-red-700 text-white rounded-lg px-4 py-2 mb-6">
      <span className="font-bold">🍕 Sport Pizza</span>
      <span className="font-bold">🛒 Carrito: {cantidad}</span>
    </div>
  )
}

export default HeaderCarrito
