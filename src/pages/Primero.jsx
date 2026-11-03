/*
  
  1- Variable
  2- Fragment
  3- JSX
  4- Condicional
  5.- Eventos
  
*/


const Primero = () => {

  const pizzeria = {
    nombre: "Sport Pizza",
    eslogan: "¡La mejor pizza rectangular de Quito!",
    ciudad: "Quito",
    abierto: true,
  }

  return (
    <>
      <h1 className="font-bold text-2xl">React</h1>
      
      <hr className="border-gray-400 mb-8"/>
      
      <ul className="list-disc pl-5">
        <li>
          <strong>Variable:</strong>Sirve para almacenar información que luego se puede usar en un componente.
        </li>
        <li>
          <strong>Fragment:</strong> Permite agrupar varios elementos sin añadir un div extra al HTML.
        </li>
        <li>
          <strong>JSX:</strong> Sintaxis que combina HTML y JavaScript dentro de React.
        </li>
        <li>
          <strong>Condicional:</strong> Mostrar contenido dependiendo de una condición.
        </li>
        <li>
          <strong>Eventos:</strong> Permiten que la aplicación responda a las acciones del usuario (onClick, onChange, etc.).
        </li>
      </ul>

        

        
      <div className="flex justify-center mb-8 mt-8">
        
        <div className="w-120 border rounded-lg p-4 w-80 text-center">
          
          <h2 className="text-lg font-semibold mb-2">Bienvenido(a) a {pizzeria.nombre}</h2>
          
          <p className="mb-1 italic">{pizzeria.eslogan}</p>
          <p className="mb-3">Ciudad: {pizzeria.ciudad}</p>
          <p className={`mb-3 font-bold ${pizzeria.abierto ? "text-green-700" : "text-red-700"}`}>
            {pizzeria.abierto ? "Abierto ahora" : "Cerrado"}
          </p>
          
          <button className="bg-red-700 text-white py-1 px-3 rounded w-full" onClick={()=>{alert("Atendemos de Lunes a Domingo, de 1pm a 10pm")}}>Ver Horario</button>
        
        </div>
      
      </div>
    
    </>
  )
}

export default Primero