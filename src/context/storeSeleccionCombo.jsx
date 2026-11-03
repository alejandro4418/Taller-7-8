import { create } from "zustand"

const storeSeleccionCombo = create((set) => ({
  comboSeleccionado: null,

  seleccionarCombo: (combo) => set({
    comboSeleccionado: combo
  }),

  limpiarSeleccion: () => set({
    comboSeleccionado: null
  })
}))

export default storeSeleccionCombo