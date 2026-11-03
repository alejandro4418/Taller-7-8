
/*

  1- customHook

*/

import { useCupon } from "../customHook/useCupon"
import { COMBOS } from "../data/combos"

const PedidoPizza = ({ titulo, combo, cantidad }) => {

  const subtotal = combo.precio * cantidad
  const { cupon, setCupon, aplicarCupon, descuento, total, mensaje } = useCupon(subtotal)

  return (
    <div className="border rounded-lg p-4 w-72 text-center">

      <h2 className="text-lg font-semibold mb-1 underline">{titulo}</h2>
      <p className="font-bold">{combo.nombre} x{cantidad}</p>
      <p className="text-sm mb-3">
        {combo.porciones} porciones
        {combo.hamburguesas > 0 && ` + ${combo.hamburguesas} hamburguesas`}
        {" + "}{combo.bebida}
      </p>

      <p className="text-left">Subtotal: ${subtotal.toFixed(2)}</p>
      <p className="text-left">Descuento: -${descuento.toFixed(2)}</p>
      <p className="text-left font-bold mb-3">Total: ${total.toFixed(2)}</p>

      <input
        type="text"
        placeholder="Código de cupón"
        className="border rounded px-2 py-1 w-full mb-2"
        value={cupon}
        onChange={(e) => setCupon(e.target.value)}
      />

      <button className="bg-red-700 text-white py-1 px-3 rounded"
        onClick={aplicarCupon}>Aplicar cupón</button>

      <p className="mt-2 text-sm">{mensaje}</p>

    </div>
  )
}

const Cuarto = () => {
  return (
    <>
      <h1 className="font-bold text-2xl">customHook</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite encapsular lógica reutilizable y que puede ser utilizado en cualquier componente.
        </li>
      </ul>

      <div className="flex flex-wrap justify-center gap-6 mb-8 mt-8">
        <PedidoPizza titulo="Pedido personal" combo={COMBOS[2]} cantidad={1} />
        <PedidoPizza titulo="Pedido familiar" combo={COMBOS[1]} cantidad={2} />
        <PedidoPizza titulo="Pedido de la oficina" combo={COMBOS[0]} cantidad={3} />
      </div>
    </>
  )
}

export default Cuarto