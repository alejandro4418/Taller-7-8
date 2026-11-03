/*
  Componente hijo: solo recibe datos por props y los dibuja.
  Props: nombrePlatillo, precio, ingredientes, imagen
  children: permite que el padre inserte un botón u otro contenido (tema 6 y 7)
*/

const TarjetaMenu = ({ nombrePlatillo, precio, ingredientes, imagen, children }) => {
  return (
    <div className="border rounded-lg p-4 w-72 text-center">

      {/* Si la imagen no existe en /public/img, queda el emoji de respaldo */}
      <div className="relative h-40 mb-3 flex items-center justify-center bg-red-50 rounded overflow-hidden text-6xl">
        <span>🍕</span>
        <img
          src={imagen}
          alt={nombrePlatillo}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = "none" }}
        />
      </div>

      <h2 className="text-lg font-semibold underline mb-1">{nombrePlatillo}</h2>
      <p className="font-bold text-red-700 mb-2">${precio.toFixed(2)}</p>

      <ul className="list-disc pl-5 text-left text-sm mb-3">
        {ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>

      {children}

    </div>
  )
}

export default TarjetaMenu
