/*

  1- Zustand (componente que consume el store: Página de pago)

*/

import storeCarrito from "../context/storeCarrito"

const Octavo = () => {

  const { items, quitar, vaciar } = storeCarrito()

  const totalItems = items.reduce((suma, item) => suma + item.cantidad, 0)
  const totalPagar = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0)

  return (
    <>

      <h2 className="text-purple-700 text-center">Página de pago</h2>

      <div className="flex justify-center mb-8">

        <div className="max-w-md border-2 border-purple-500 rounded-lg p-4 w-full text-center">

          <p className="font-bold mb-2">🛒 Items en el carrito: {totalItems}</p>

          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between text-sm mb-1">
              <span>{item.nombre} x{item.cantidad}</span>
              <span>
                ${(item.precio * item.cantidad).toFixed(2)}{" "}
                <button
                  className="bg-blue-700 text-white px-2 rounded ml-2"
                  onClick={() => quitar(item.id)}
                >
                  -
                </button>
              </span>
            </div>
          ))}

          <p className="font-bold mt-3">Total a pagar: ${totalPagar.toFixed(2)}</p>

          <button
            className="bg-red-700 text-white py-1 px-3 rounded mt-3"
            onClick={vaciar}
          >
            Vaciar carrito
          </button>

        </div>

      </div>

    </>
  )
}

export default Octavo
