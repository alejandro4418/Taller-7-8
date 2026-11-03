import { create } from "zustand"

const storeCarrito = create((set) => ({

  items: [],

  agregar: (combo) => set((state) => {
    const existe = state.items.find((item) => item.id === combo.id)

    if (existe) {
      return {
        items: state.items.map((item) =>
          item.id === combo.id ? { ...item, cantidad: item.cantidad + 1 } : item
        ),
      }
    }

    return {
      items: [...state.items, { id: combo.id, nombre: combo.nombre, precio: combo.precio, cantidad: 1 }],
    }
  }),

  quitar: (id) => set((state) => ({
    items: state.items.flatMap((item) => {
      if (item.id !== id) return [item]
      return item.cantidad > 1 ? [{ ...item, cantidad: item.cantidad - 1 }] : []
    }),
  })),

  vaciar: () => set({ items: [] }),

}))

export default storeCarrito
