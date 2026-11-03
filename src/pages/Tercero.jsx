
/*

  1- useEffect

*/

import { useEffect, useState } from "react"

const Tercero = () => {

  const [clima, setClima] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [buscar, setBuscar] = useState(0)

  // Efecto 1: consultar la API cada vez que cambia "buscar"
  useEffect(() => {
    const obtenerClima = async () => {
      setCargando(true)
      try {
        const request = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-0.18&longitude=-78.47&current=temperature_2m,precipitation"
        )
        const response = await request.json()
        console.log(response)
        setClima(response.current)
      } catch (error) {
        console.log(error)
      } finally {
        setCargando(false)
      }
    }

    obtenerClima()
  }, [buscar])

  // Efecto 2: actualizar el título de la pestaña cuando llega el clima
  useEffect(() => {
    if (clima) {
      document.title = `Sport Pizza - ${clima.temperature_2m}°C en Quito`
    }
  }, [clima])

  const llueve = clima?.precipitation > 0

  return (
    <>
      <h1 className="font-bold text-2xl">useEffect</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite ejecutar efectos secundarios, como peticiones a APIs o actualizar el DOM.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">

        <div className="border rounded-lg p-4 w-80 text-center">

          <h2 className="text-lg font-semibold mb-2 underline">Sport Pizza - Clima en Quito</h2>

          {cargando ? (
            <p className="mb-3">Consultando el clima...</p>
          ) : (
            <>
              <p className="mb-1 text-left">Temperatura: {clima?.temperature_2m} °C</p>
              <p className="mb-3 text-left">Lluvia: {clima?.precipitation} mm</p>

              <p className={`mb-3 font-bold ${llueve ? "text-blue-700" : "text-green-700"}`}>
                {llueve
                  ? "Está lloviendo: ¡pide tu pizza a domicilio!"
                  : "Buen clima: ¡ven a comer tu pizza al local!"}
              </p>
            </>
          )}

          <button className="bg-red-700 text-white py-1 px-3 rounded"
            onClick={() => setBuscar(buscar + 1)}>
            Actualizar clima
          </button>

        </div>

      </div>
    </>
  )
}

export default Tercero