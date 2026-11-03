/*

  1- Props

*/

import TarjetaMenu from "../components/TarjetaMenu"
import { COMBOS } from "../data/combos"

const Quinto = () => {

  return (
    <>
      <h1 className="font-bold text-2xl">Props</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Permiten pasar datos de un componente padre a un hijo.
        </li>
        <li>
          El hijo <strong>TarjetaMenu</strong> recibe <strong>nombrePlatillo, precio, ingredientes e imagen</strong> y se reutiliza para cada combo de Sport Pizza.
        </li>
      </ul>

      <h2 className="text-green-700 text-center mt-8">Padre</h2>

      <div className="border-2 border-green-500 p-4 mb-8">

        <h2 className="text-orange-800 text-center mb-4">Hijos: TarjetaMenu</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {COMBOS.map((combo) => (
            <TarjetaMenu
              key={combo.id}
              nombrePlatillo={combo.nombre}
              precio={combo.precio}
              ingredientes={combo.ingredientes}
              imagen={combo.imagen}
            />
          ))}
        </div>

      </div>

    </>
  )
}

export default Quinto
