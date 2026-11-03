/*

  1- Props (funciones)
  2- Estado en el padre

*/

import { useState } from "react"
import TarjetaMenu from "../components/TarjetaMenu"
import BotonAgregar from "../components/BotonAgregar"
import { COMBOS } from "../data/combos"

const Sexto = () => {

  const [carrito, setCarrito] = useState([])

  // Esta función vive en el padre y se pasa como prop al botón hijo
  const agregarAlCarrito = (combo) => {
    setCarrito((actual) => {
      const existe = actual.find((item) => item.id === combo.id)

      if (existe) {
        return actual.map((item) =>
          item.id === combo.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      }

      return [...actual, { id: combo.id, nombre: combo.nombre, precio: combo.precio, cantidad: 1 }]
    })
  }

  const totalItems = carrito.reduce((suma, item) => suma + item.cantidad, 0)
  const totalPagar = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0)

  return (
    <>
      <h1 className="font-bold text-2xl">Props / Estado</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Una función también se puede pasar como prop: el hijo la ejecuta y el padre actualiza su estado.
        </li>
        <li>
          <strong>BotonAgregar</strong> recibe <strong>onAgregar</strong>; al hacer clic, el padre actualiza el carrito.
        </li>
      </ul>

      <h2 className="text-green-700 text-center mt-8">Padre</h2>

      <div className="border-2 border-green-500 p-4 mb-8">

        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {COMBOS.map((combo) => (
            <TarjetaMenu
              key={combo.id}
              nombrePlatillo={combo.nombre}
              precio={combo.precio}
              ingredientes={combo.ingredientes}
              imagen={combo.imagen}
            >
              <BotonAgregar onAgregar={() => agregarAlCarrito(combo)} />
            </TarjetaMenu>
          ))}
        </div>

        <div className="border rounded-lg p-4 max-w-md mx-auto">
          <h3 className="font-bold mb-2">🛒 Carrito (estado del padre)</h3>

          {carrito.map((item) => (
            <p key={item.id} className="text-sm text-left">
              {item.nombre} x{item.cantidad} — ${(item.precio * item.cantidad).toFixed(2)}
            </p>
          ))}

          <p className="mt-2">Items: {totalItems}</p>
          <p className="font-bold">Total: ${totalPagar.toFixed(2)}</p>

          <button
            className="bg-gray-600 text-white py-1 px-3 rounded mt-3"
            onClick={() => setCarrito([])}
          >
            Vaciar
          </button>
        </div>

      </div>
    </>
  )
}

export default Sexto
