import storeSeleccionCombo from "../context/storeSeleccionCombo"
import TarjetaMenu from "../components/TarjetaMenu"
import BotonAgregar from "../components/BotonAgregar"
import { COMBOS } from "../data/combos"

const MenuCombos = () => {

  const seleccionarCombo = storeSeleccionCombo(
    (state) => state.seleccionarCombo
  )

  return (
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
            texto="Seleccionar combo"
            onAgregar={() => seleccionarCombo(combo)}
          />
        </TarjetaMenu>
      ))}
    </div>
  )
}

const DetalleCombo = () => {

  const comboSeleccionado = storeSeleccionCombo(
    (state) => state.comboSeleccionado
  )

  const limpiarSeleccion = storeSeleccionCombo(
    (state) => state.limpiarSeleccion
  )

  return (
    <div className="border rounded-lg p-4 max-w-md mx-auto mt-8 text-center">

      <h2 className="text-xl font-bold mb-4">
        🍕 Detalle del combo seleccionado
      </h2>

      {comboSeleccionado ? (
        <>
          <h3 className="font-semibold">
            {comboSeleccionado.nombre}
          </h3>

          <p className="text-red-700 font-bold mt-2">
            ${comboSeleccionado.precio.toFixed(2)}
          </p>

          <ul className="list-disc pl-5 text-left mt-3">
            {comboSeleccionado.ingredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>

          <button
            className="bg-gray-600 text-white py-1 px-3 rounded mt-4"
            onClick={limpiarSeleccion}
          >
            Limpiar selección
          </button>
        </>
      ) : (
        <p>Selecciona un combo para ver sus detalles.</p>
      )}

    </div>
  )
}

const Octavo = () => {

  return (
    <>
      <h1 className="font-bold text-2xl">Zustand - Comunicación entre hijos</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          Zustand permite compartir información entre componentes
          sin necesidad de pasar propiedades mediante props.
        </li>
        <li>
          En este ejemplo, un componente selecciona un combo y
          otro componente muestra sus detalles mediante un store global.
        </li>
      </ul>

      <h2 className="text-blue-700 text-center mt-8 mb-4">
        Menú Sport Pizza
      </h2>

      <MenuCombos />

      <DetalleCombo />
    </>
  )
}

export default Octavo