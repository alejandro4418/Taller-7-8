/*

  1- Localstorage

*/

import { useEffect, useState } from "react"
import { COMBOS } from "../data/combos"
import TarjetaMenu from "../components/TarjetaMenu"
import BotonAgregar from "../components/BotonAgregar"

const Decimo = () => {

  // Recuperar el pedido guardado al iniciar la página
  const [pedido, setPedido] = useState(() => {
    try {
      const guardado = localStorage.getItem("sport-pizza-pedido")
      return guardado ? JSON.parse(guardado) : []
    } catch {
      return []
    }
  })

  // Guardar automáticamente cada modificación del pedido
  useEffect(() => {
    localStorage.setItem("sport-pizza-pedido", JSON.stringify(pedido))
  }, [pedido])

  // Agregar un combo al pedido
  const agregarCombo = (combo) => {
    setPedido((actual) => {
      const existe = actual.find((item) => item.id === combo.id)

      if (existe) {
        return actual.map((item) =>
          item.id === combo.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      }

      return [
        ...actual,
        {
          id: combo.id,
          nombre: combo.nombre,
          precio: combo.precio,
          cantidad: 1
        }
      ]
    })
  }

  // Quitar una unidad del pedido
  const quitarCombo = (id) => {
    setPedido((actual) =>
      actual
        .map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    )
  }

  // Vaciar el pedido
  const vaciarPedido = () => {
    setPedido([])
  }

  // Calcular el total
  const total = pedido.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0
  )

  return (
    <>
      <h1 className="font-bold text-2xl">
        LocalStorage
      </h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          LocalStorage permite almacenar información en el navegador
          incluso después de cerrar o recargar la página.
        </li>
        <li>
          JSON.stringify() convierte los objetos en texto para guardarlos.
        </li>
        <li>
          JSON.parse() recupera el texto y lo convierte nuevamente
          en un objeto JavaScript.
        </li>
      </ul>

      <h2 className="text-blue-700 text-center mt-8 mb-4 text-xl font-bold">
        Menú Sport Pizza
      </h2>

      <div className="flex flex-wrap justify-center gap-6">

        {COMBOS.map((combo) => (
          <TarjetaMenu
            key={combo.id}
            nombrePlatillo={combo.nombre}
            precio={combo.precio}
            ingredientes={combo.ingredientes}
            imagen={combo.imagen}
          >
            <BotonAgregar
              onAgregar={() => agregarCombo(combo)}
            />
          </TarjetaMenu>
        ))}

      </div>

      <div className="border rounded-lg p-5 mt-10">

        <h2 className="text-xl font-bold mb-4">
          🛒 Mi pedido
        </h2>

        {pedido.length > 0 ? (

          <>
            {pedido.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-3 gap-3"
              >
                <div>
                  <p className="font-semibold">
                    {item.nombre}
                  </p>

                  <p className="text-sm text-gray-600">
                    {item.cantidad} x ${item.precio.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center gap-2">

                  <p className="font-bold">
                    ${(item.precio * item.cantidad).toFixed(2)}
                  </p>

                  <button
                    className="bg-red-700 text-white px-3 py-1 rounded"
                    onClick={() => quitarCombo(item.id)}
                  >
                    -
                  </button>

                </div>
              </div>
            ))}

            <p className="text-right font-bold text-xl mt-5">
              Total: ${total.toFixed(2)}
            </p>

            <button
              className="bg-gray-700 text-white px-4 py-2 rounded mt-4"
              onClick={vaciarPedido}
            >
              Vaciar pedido
            </button>
          </>

        ) : (

          <p className="text-gray-500">
            No tienes productos en tu pedido.
          </p>

        )}

      </div>

    </>
  )
}

export default Decimo