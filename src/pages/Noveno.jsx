/*

  1- Rederizado condicional
  2- Renderizado de listas

*/

import { useState } from "react"
import { COMBOS } from "../data/combos"
import TarjetaMenu from "../components/TarjetaMenu"
import BotonAgregar from "../components/BotonAgregar"

const Noveno = () => {

  const [comboSeleccionado, setComboSeleccionado] = useState(null)
  const [mostrarMenu, setMostrarMenu] = useState(true)

  return (
    <>
      <h1 className="font-bold text-2xl">
        Renderizado condicional y listas
      </h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          <strong>Renderizado condicional:</strong> permite mostrar
          elementos dependiendo de una condición.
        </li>
        <li>
          <strong>Renderizado de listas:</strong> permite generar
          elementos de interfaz recorriendo un arreglo mediante map().
        </li>
      </ul>

      <h2 className="text-blue-700 text-center mt-8 mb-4 text-xl font-bold">
        Menú Sport Pizza
      </h2>

      <div className="text-center mb-6">
        <button
          className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800"
          onClick={() => setMostrarMenu(!mostrarMenu)}
        >
          {mostrarMenu ? "Ocultar menú" : "Mostrar menú"}
        </button>
      </div>

      {/* Renderizado condicional del menú */}
      {mostrarMenu ? (

        <div className="flex flex-wrap justify-center gap-6">

          {/* Renderizado de listas */}
          {COMBOS.map((combo) => (

            <TarjetaMenu
              key={combo.id}
              nombrePlatillo={combo.nombre}
              precio={combo.precio}
              ingredientes={combo.ingredientes}
              imagen={combo.imagen}
            >
              <BotonAgregar
                texto="Ver detalles"
                onAgregar={() => setComboSeleccionado(combo)}
              />
            </TarjetaMenu>

          ))}

        </div>

      ) : (

        <p className="text-center text-gray-600">
          El menú se encuentra oculto.
        </p>

      )}

      {/* Renderizado condicional del detalle */}
      <div className="mt-8">

        {comboSeleccionado ? (

          <div className="border rounded-lg p-5 max-w-md mx-auto text-center">

            <h2 className="text-xl font-bold mb-4">
              Detalles del pedido
            </h2>

            <p className="font-semibold">
              {comboSeleccionado.nombre}
            </p>

            <p className="text-red-700 font-bold mt-2">
              ${comboSeleccionado.precio.toFixed(2)}
            </p>

            <p className="mt-3">
              Porciones: {comboSeleccionado.porciones}
            </p>

            <p className="mt-2">
              Bebida: {comboSeleccionado.bebida}
            </p>

            <button
              className="bg-gray-600 text-white py-1 px-4 rounded mt-4"
              onClick={() => setComboSeleccionado(null)}
            >
              Cerrar detalles
            </button>

          </div>

        ) : (

          <p className="text-center text-gray-500">
            Selecciona un combo para consultar sus detalles.
          </p>

        )}

      </div>

    </>
  )
}

export default Noveno