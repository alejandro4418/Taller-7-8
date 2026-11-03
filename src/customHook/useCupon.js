import { useState } from "react"

const CUPONES = {
  GOL10: 10,
  SPORT15: 15,
}

export function useCupon(subtotal) {

  const [cupon, setCupon] = useState("")
  const [porcentaje, setPorcentaje] = useState(0)
  const [mensaje, setMensaje] = useState("")

  const aplicarCupon = () => {
    const codigo = cupon.trim().toUpperCase()

    if (CUPONES[codigo]) {
      setPorcentaje(CUPONES[codigo])
      setMensaje(`Cupón aplicado: ${CUPONES[codigo]}% de descuento`)
    } else {
      setPorcentaje(0)
      setMensaje("Cupón inválido")
    }
  }

  const descuento = (subtotal * porcentaje) / 100
  const total = subtotal - descuento

  return { cupon, setCupon, aplicarCupon, descuento, total, mensaje }
}