export const COMBOS = [
  {
    id: 1,
    nombre: "Combo 1 metro y 20cm",
    precio: 19.99,
    porciones: 48,
    hamburguesas: 0,
    bebida: "1 jarra de bebida o gaseosa",
    ingredientes: [
      "1 pizza rectangular de 48 porciones",
      "4 especialidades",
      "1 jarra de bebida o gaseosa",
    ],
    imagen: `${import.meta.env.BASE_URL}img/combo-1m20.jpg`
  },
  {
    id: 2,
    nombre: "Combo Goleador",
    precio: 16.99,
    porciones: 24,
    hamburguesas: 4,
    bebida: "1 jarra de limonada o té helado",
    ingredientes: [
      "24 porciones de pizza",
      "4 hamburguesas",
      "1 jarra de limonada o té helado",
    ],
    imagen: `${import.meta.env.BASE_URL}img/combo-goleador.jpg`,
  },
  {
    id: 3,
    nombre: "Combo Golazo",
    precio: 11.5,
    porciones: 16,
    hamburguesas: 2,
    bebida: "1 jarra de limonada o té helado",
    ingredientes: [
      "16 porciones de pizza",
      "2 hamburguesas",
      "1 jarra de limonada o té helado",
    ],
    imagen: `${import.meta.env.BASE_URL}img/combo-golazo.jpg`,
  },
]
