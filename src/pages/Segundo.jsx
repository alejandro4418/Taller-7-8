
/*

  1- useState

*/


import { useState } from "react"

const PRECIO_COMBO = 19.99
const PEDAZOS_POR_COMBO = 48

const Segundo = () => {

  const [cantidad, setCantidad] = useState(0)
  const [bebida, setBebida] = useState("Coca-Cola")

  const handleReset = () =>
  {
    setCantidad(0)
    setBebida("Coca-Cola")
  }

  return (
    <>
      <h1 className="font-bold text-2xl">useState</h1>
      
      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite manejar el estado dentro de un componente.
        </li>
      </ul>
        
        <div className="text-center mb-8">
        
          <h2 className="mt-4 mb-4">Combo 1 metro y 20cm</h2>
          <p className="text-sm mb-3">1 pizza de 48 pedazos de 4 especialidades + 1 jarra de bebida</p>
          <p className="mb-2">Precio: ${PRECIO_COMBO}</p>
          <label className="block mb-3">
            Bebida:{" "}
            <select
              className="border rounded px-2 py-1"
              value={bebida}
              onChange={(e) => setBebida(e.target.value)}
            >
              <option>Coca-Cola</option>
              <option>Fanta</option>
              <option>Sprite</option>
              <option>Jugo natural</option>
            </select>
          </label>

        
          <h3 className="mb-1 font-bold">Combos en el pedido: {cantidad}</h3>
          <p>Total de pedazos: {cantidad * PEDAZOS_POR_COMBO}</p>
          <p>Bebida: {cantidad > 0 ? bebida : "-"}</p>
          <p className="mb-4 font-bold">Subtotal: ${(cantidad * PRECIO_COMBO).toFixed(2)}</p>

          <button className="bg-green-700 text-white py-1 px-3 mx-1 rounded"
            onClick={() => setCantidad(cantidad + 1)}>Agregar</button>

          <button className="bg-red-700 text-white py-1 px-3 mx-1 rounded"
            onClick={handleReset}>Vaciar</button>

          <button className="bg-blue-700 text-white py-1 px-3 rounded"
            onClick={() => setCantidad(Math.max(0, cantidad - 1))}>Quitar</button>
        
        </div>
    </>
  )
}

export default Segundo