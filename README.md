# Fundamentos de React · Sport Pizza

Laboratorio de **Desarrollo de Aplicaciones Web** · Escuela Politécnica Nacional

Cada tema de la aplicación "Fundamentos de React" fue adaptado a un caso de la vida real: **Sport Pizza**, una pizzería de Quito con combos de pizza rectangular, hamburguesas y bebidas.

---

## Integrantes

| Integrante | 
|---|
| Alejandro Aguirre |
| Diego Almeida |
| Briander Verdezoto |

---

## Caso real de referencia

Los ejemplos se basan en los combos reales que ofrece Sport Pizza.
<img width="982" height="414" alt="image" src="https://github.com/user-attachments/assets/14420fec-a271-41ee-885d-3eaf195fd04a" />


**Combo 1 metro y 20cm · $19.99**

<img width="690" height="881" alt="image" src="https://github.com/user-attachments/assets/942f56ae-82d2-4ca2-8a2e-521f222d3bc3" />


**Combo Goleador · $16.99**

<img width="826" height="764" alt="image" src="https://github.com/user-attachments/assets/b4c3c060-2767-4555-b062-35c0b8b1d85b" />


**Combo Golazo · $11.50**

<img width="418" height="419" alt="image" src="https://github.com/user-attachments/assets/eaeea57c-a80c-4d25-94cd-4e1e6db124d2" />


> Fuente: publicaciones oficiales de Sport Pizza.

## Tecnologías

- React 18
- Vite
- Tailwind CSS 4
- React Router 7
- Zustand 5

---

## Cómo ejecutar el proyecto

1. Clona el repositorio:

   ```bash
   git clone URL_DE_TU_REPOSITORIO
   cd FundamentosReact
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre en el navegador la URL que aparece en la terminal (normalmente `http://localhost:5173`).

---

## Estructura relevante

```
src/
├── components/
│   ├── TarjetaMenu.jsx   # Tarjeta de un combo (props de datos)
│   ├── BotonAgregar.jsx  # Botón que recibe una función por props
│   └── HeaderCarrito.jsx # Header con el contador del carrito (Zustand)
├── context/
│   └── storeCarrito.jsx  # Store global del carrito
├── customHook/
│   └── useCupon.js       # Hook personalizado de descuentos
├── data/
│   └── combos.js         # Datos de los combos de Sport Pizza
├── pages/
│   ├── LandingPage.jsx   # Menú lateral
│   ├── Primero.jsx       # 1. React
│   ├── Segundo.jsx       # 2. useState
│   ├── Tercero.jsx       # 3. useEffect
│   ├── Cuarto.jsx        # 4. customHook
│   ├── Quinto.jsx        # 5. Props
│   ├── Sexto.jsx         # 6. Props / Estado
│   ├── Septimo.jsx       # 7. Zustand (menú + header)
│   └── Octavo.jsx        # 7. Zustand (página de pago)
└── App.jsx               # Rutas
```

---

## Temas y cómo probarlos

### 1. React (`/fundamentos`)

Tarjeta de bienvenida de **Sport Pizza** que practica los cinco conceptos del tema:

| Concepto | Dónde se ve |
|---|---|
| Variable | El objeto `pizzeria` (nombre, eslogan, ciudad, abierto) |
| Fragment | `<>...</>` que envuelve la página |
| JSX | El HTML con `{}` dentro del `return` |
| Condicional | "Abierto ahora" / "Cerrado" según `pizzeria.abierto` |
| Evento | Botón **Ver Horario** con `onClick` |

**Captura del resultado**

<img width="1652" height="618" alt="image" src="https://github.com/user-attachments/assets/c380c36c-8e4d-4d54-830e-a68248d21a41" />


**Cómo probarlo**

1. Verifica que aparezca el nombre, el eslogan y la ciudad.
2. Pulsa **Ver Horario**: debe mostrar una alerta con el horario.
3. Cambia `abierto: true` a `false` en el código y comprueba que el texto pasa a rojo y dice "Cerrado".

---

### 2. useState (`/usestate`)

Simulador de pedido del **Combo 1 metro y 20cm** ($19.99). Usa dos estados:

- `cantidad`: número de combos del pedido.
- `bebida`: bebida elegida en el `<select>`.

El subtotal y el total de pedazos se calculan a partir de `cantidad` (48 pedazos por combo).

**Captura del resultado**

<img width="1543" height="601" alt="image" src="https://github.com/user-attachments/assets/ff27418c-b7d7-40f3-81d1-1e25cac5d8ff" />


**Cómo probarlo**

1. Pulsa **Agregar** tres veces: debe mostrar **144 pedazos** y un subtotal de **$59.97**.
2. Pulsa **Quitar** hasta 0: la cantidad no debe bajar de 0.
3. Cambia la bebida y verifica que se actualiza.
4. Pulsa **Vaciar**: todo vuelve a 0 y la bebida a Coca-Cola.

---

### 3. useEffect (`/useffect`)

Consulta el **clima de Quito** (API gratuita Open-Meteo) y recomienda pedir a domicilio si está lloviendo.

- **Efecto 1** (`[buscar]`): consulta la API al cargar la página y cada vez que se pulsa **Actualizar clima**.
- **Efecto 2** (`[clima]`): actualiza el título de la pestaña del navegador cuando llegan los datos.

**Captura del resultado**

<img width="1661" height="535" alt="image" src="https://github.com/user-attachments/assets/21e33600-1a58-4358-8cd6-a9e00e26b458" />


**Cómo probarlo**

1. Al entrar debe aparecer "Consultando el clima..." y luego temperatura y lluvia.
2. Revisa el título de la pestaña: debe decir "Sport Pizza - X°C en Quito".
3. Pulsa **Actualizar clima** y abre la consola (F12): debe verse una nueva respuesta.

> En desarrollo, `React.StrictMode` ejecuta los efectos dos veces al cargar. Es normal y no ocurre en producción.

---

### 4. customHook (`/customhook`)

Hook personalizado **`useCupon`** (`src/customHook/useCupon.js`) que encapsula la lógica de descuentos. Recibe el subtotal y devuelve el cupón escrito, la función para aplicarlo, el descuento, el total y un mensaje.

Se reutiliza en **tres pedidos** con los combos reales de Sport Pizza, y **cada tarjeta mantiene su propio estado**.

**Combos (`src/data/combos.js`)**

| Combo | Contenido | Precio |
|---|---|---|
| Combo 1 metro y 20cm | 48 porciones + 1 jarra de bebida o gaseosa | $19.99 |
| Combo Goleador | 24 porciones + 4 hamburguesas + 1 jarra de limonada o té helado | $16.99 |
| Combo Golazo | 16 porciones + 2 hamburguesas + 1 jarra de limonada o té helado | $11.50 |

**Cupones válidos**

| Código | Descuento |
|---|---|
| `GOL10` | 10% |
| `SPORT15` | 15% |

El código no distingue mayúsculas de minúsculas.

**Captura del resultado**

<img width="1820" height="663" alt="image" src="https://github.com/user-attachments/assets/c8ae5ca8-6181-44d8-afc1-e9bf6168059b" />

**Cómo probarlo**

Al entrar deben verse tres tarjetas con estos subtotales:

| Pedido | Combo | Subtotal |
|---|---|---|
| Personal | Golazo x1 | $11.50 |
| Familiar | Goleador x2 | $33.98 |
| Oficina | 1 metro y 20cm x3 | $59.97 |

Luego prueba los cupones, que son independientes en cada tarjeta:

- En **Personal**, `GOL10` debe dar un total de **$10.35**.
- En **Familiar**, `SPORT15` debe dar **$28.88**.
- En **Oficina**, un código falso como `HOLA` debe decir **"Cupón inválido"**.

Verifica también que aplicar un cupón en una tarjeta **no cambia** las otras dos.

---

### 5. Props (`/props`)

El padre recorre los combos reales de Sport Pizza y le pasa a cada **`<TarjetaMenu />`** cuatro props:

| Prop | Ejemplo |
|---|---|
| `nombrePlatillo` | Combo Goleador |
| `precio` | 16.99 |
| `ingredientes` | 24 porciones de pizza, 4 hamburguesas, 1 jarra de limonada o té helado |
| `imagen` | `/img/combo-goleador.jpg` |

Si la imagen no existe en `public/img/`, la tarjeta muestra un 🍕 de respaldo. Para ver las fotos reales, guarda las publicaciones de Sport Pizza con estos nombres: `combo-1m20.jpg`, `combo-goleador.jpg`, `combo-golazo.jpg`.

**Captura del resultado**

<img width="1424" height="650" alt="5" src="https://github.com/user-attachments/assets/66fff4a1-45ae-40a9-a701-ea3cab76b812" />


**Cómo probarlo**

1. Deben verse tres tarjetas: Combo 1 metro y 20cm ($19.99), Combo Goleador ($16.99) y Combo Golazo ($11.50).
2. Cada una muestra sus propios ingredientes, aunque todas usan el mismo componente.
3. Cambia un precio en `src/data/combos.js` y comprueba que la tarjeta se actualiza.

---

### 6. Props / Estado (`/props-estado`)

El padre guarda el **carrito en un `useState`** y define la función `agregarAlCarrito`. Se la pasa como prop (`onAgregar`) a **`<BotonAgregar />`**, que solo la ejecuta al hacer clic.

**Captura del resultado**

<img width="1375" height="784" alt="6" src="https://github.com/user-attachments/assets/278449c8-528e-4209-ae95-ec7a45fb7a17" />


**Cómo probarlo**

1. Pulsa **Agregar al carrito** en el Combo Golazo dos veces: debe decir `Combo Golazo x2` y un total de **$23.00**.
2. Agrega también el Combo Goleador: items **3**, total **$39.99**.
3. Pulsa **Vaciar**: items 0 y total $0.00.

---

### 7. Zustand (`/zustand`)

Store global del carrito en `src/context/storeCarrito.jsx` con `items`, `agregar`, `quitar` y `vaciar`. El **Header** (`HeaderCarrito`) y la **Página de pago** (`Octavo`) leen el mismo carrito **sin recibir props**.

**Captura del resultado**

<img width="1418" height="894" alt="7" src="https://github.com/user-attachments/assets/25d60ff9-bd85-4c6b-84b5-209b2a27b332" />


**Cómo probarlo**

1. Pulsa **Agregar al carrito** en el Combo 1 metro y 20cm: el Header debe decir `Carrito: 1` y la Página de pago `Items en el carrito: 1`, a la vez.
2. Agrega el Combo Golazo: ambos contadores pasan a **2** y el total a **$31.49**.
3. Pulsa **-** en un item: ambos contadores bajan juntos.
4. Pulsa **Vaciar carrito**: todo vuelve a 0.

---
### 8. Zustand: comunicación entre hijos (`/octavo`)

Ejemplo de comunicación entre dos componentes hijos independientes mediante un **store global de Zustand**, sin pasar información entre ellos a través de `props`.

- **`MenuCombos`** recorre los combos de `src/data/combos.js` y muestra cada uno mediante `TarjetaMenu`. Al pulsar **Seleccionar combo**, ejecuta la acción `seleccionarCombo` del store.
- **`DetalleCombo`** consulta el estado `comboSeleccionado` del mismo store y muestra el nombre, precio e ingredientes del combo elegido.
- El botón **Limpiar selección** ejecuta `limpiarSeleccion` y devuelve el estado a `null`.

El store se encuentra en `src/context/storeSeleccionCombo.jsx` y contiene:

| Estado o función | Responsabilidad |
|---|---|
| `comboSeleccionado` | Guarda el objeto del combo seleccionado. Inicialmente es `null`. |
| `seleccionarCombo(combo)` | Actualiza el combo seleccionado. |
| `limpiarSeleccion()` | Elimina la selección y devuelve el estado a `null`. |

**Captura del resultado**

<img width="1390" height="793" alt="image" src="https://github.com/user-attachments/assets/3f0af4f6-cce6-4266-96bb-6a224d0fb5ff" />


**Cómo probarlo**

1. Entra a la ruta `/octavo`: deben aparecer las tres tarjetas de combos de Sport Pizza.
2. Pulsa **Seleccionar combo** en el Combo Goleador: en la sección de detalle deben aparecer su nombre, precio e ingredientes.
3. Selecciona otro combo y comprueba que el detalle se actualiza sin recargar la página.
4. Pulsa **Limpiar selección**: debe aparecer nuevamente el mensaje para seleccionar un combo.

---

### 9. Renderizado condicional y listas (`/rederizado`)

Menú de Sport Pizza que utiliza el arreglo `COMBOS` para generar tarjetas dinámicamente y estados de React para controlar qué elementos se muestran.

- **Renderizado de listas:** `COMBOS.map()` recorre los combos y genera una tarjeta `TarjetaMenu` por cada elemento. La propiedad `key` utiliza el identificador de cada combo.
- **Renderizado condicional del menú:** el estado `mostrarMenu` determina si se muestran las tarjetas o el mensaje **El menú se encuentra oculto.** El botón alterna entre **Mostrar menú** y **Ocultar menú**.
- **Renderizado condicional del detalle:** el estado `comboSeleccionado` determina si aparece la información del combo elegido o el mensaje que solicita seleccionar uno.

Se reutilizan `TarjetaMenu`, `BotonAgregar` y los datos definidos en `src/data/combos.js`.

**Captura del resultado**

<img width="1390" height="879" alt="image" src="https://github.com/user-attachments/assets/96c7c14f-f6d3-4bac-bd54-a9bd86256d8b" />


**Cómo probarlo**

1. Entra a la ruta `/rederizado`: deben aparecer las tres tarjetas de combos.
2. Pulsa **Ver detalles** en una tarjeta: deben mostrarse el nombre, precio, número de porciones y bebida del combo seleccionado.
3. Pulsa **Cerrar detalles**: el detalle debe desaparecer y volver a mostrarse el mensaje inicial.
4. Pulsa **Ocultar menú**: las tarjetas deben desaparecer y debe mostrarse el mensaje **El menú se encuentra oculto.**
5. Pulsa **Mostrar menú**: las tarjetas deben aparecer nuevamente.

---

### 10. LocalStorage (`/localstorage`)

Simulador de pedido de Sport Pizza que guarda los productos seleccionados en el almacenamiento local del navegador. El pedido se mantiene al recargar la página, sin utilizar el store global del tema 7.

El estado `pedido` contiene los combos agregados, sus precios y cantidades. La información se guarda bajo la clave `sport-pizza-pedido`.

| Operación | Implementación |
|---|---|
| Recuperar el pedido | `localStorage.getItem()` obtiene el texto guardado y `JSON.parse()` lo convierte nuevamente en un arreglo. |
| Guardar el pedido | `JSON.stringify()` convierte el arreglo en texto y `localStorage.setItem()` lo almacena. |
| Actualizar cantidades | `agregarCombo` incrementa la cantidad si el producto ya existe o lo agrega con cantidad inicial de 1. |
| Quitar unidades | `quitarCombo` resta una unidad y elimina el producto del arreglo cuando llega a 0. |
| Vaciar el pedido | `vaciarPedido` establece el arreglo en `[]`; el efecto guarda ese arreglo vacío en LocalStorage. |

El `useEffect` depende de `pedido`, por lo que guarda automáticamente cada cambio. El total se calcula multiplicando el precio por la cantidad de cada producto y sumando los resultados.

**Captura del resultado**

<img width="1393" height="933" alt="image" src="https://github.com/user-attachments/assets/2f43e323-77bf-4159-a29a-9bb39ebcbdec" />

**Cómo probarlo**

1. Entra a la ruta `/localstorage` y agrega el Combo Goleador dos veces: debe aparecer una sola línea del producto con cantidad 2.
2. Agrega el Combo Golazo: debe aparecer como un segundo producto en el pedido.
3. Comprueba que el total corresponda a la suma de los precios multiplicados por sus cantidades. Con dos Combo Goleador y un Combo Golazo, debe ser **$45.48**.
4. Recarga la página: los productos y sus cantidades deben mantenerse.
5. Pulsa **-** junto a un producto: debe disminuir una unidad; si llega a 0, el producto desaparece del pedido.
6. Pulsa **Vaciar pedido**: la lista debe quedar vacía y el total en $0.00. Al recargar, el pedido debe continuar vacío.

> La información se almacena en el navegador y en el mismo origen del proyecto. Si se borran los datos del sitio o se utiliza otro navegador, el pedido guardado no estará disponible.

---

## Solución de problemas

- **Pantalla en blanco:** abre la consola del navegador (F12 → Console). Lo más común es una variable mal escrita o un `import` con ruta incorrecta.
- **El clima no carga:** revisa tu conexión a internet y la consola.
- **Un cupón válido dice "inválido":** revisa que el código no tenga caracteres extra.
