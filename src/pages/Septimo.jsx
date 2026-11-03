/*

  1- Zustand

*/

import storeCarrito from "../context/storeCarrito"
import HeaderCarrito from "../components/HeaderCarrito"
import TarjetaMenu from "../components/TarjetaMenu"
import BotonAgregar from "../components/BotonAgregar"
import PaginaPago from "./PaginaPago"
import { COMBOS } from "../data/combos"

const Septimo = () => {

  const agregar = storeCarrito((state) => state.agregar)

  return (
    <>
      <h1 className="font-bold text-2xl">Zustand</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Librería para manejar el estado global. Funciona como un store que cualquier componente puede usar.
        </li>
        <li>
          El <strong>Header</strong> y la <strong>Página de pago</strong> leen el mismo carrito sin recibir props.
        </li>
      </ul>

      <h2 className="text-blue-700 text-center mt-8">Menú</h2>

      <div className="border-2 border-blue-500 p-4 mb-8">

        <HeaderCarrito />

        <div className="flex flex-wrap justify-center gap-6">
          {COMBOS.map((combo) => (
            <TarjetaMenu
              key={combo.id}
              nombrePlatillo={combo.nombre}
              precio={combo.precio}
              ingredientes={combo.ingredientes}
              imagen={combo.imagen}
            >
              <BotonAgregar onAgregar={() => agregar(combo)} />
            </TarjetaMenu>
          ))}
        </div>

      </div>

      <PaginaPago />
    </>
  )
}

export default Septimo
