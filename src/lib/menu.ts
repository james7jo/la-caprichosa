import { Producto } from "@/types";

export const PLATOS_EJEMPLO: Producto[] = [
{
    id: "94",
    nombre: "Churrasco",
    descripcion: "Corte clásico a la parrilla, tierno y jugoso.",
    precioBase: 35,
    guarnicionIncluida: "Arroz con queso y papas",
    imagen: "/Churrasco.jpg",
    categoria: "Carnes",
    personalizacion: [
      {
        titulo: "Término de cocción",
        tipo: "radio",
        opciones: [
          { nombre: "Término Medio", precioExtra: 0 },
          { nombre: "Tres Cuartos", precioExtra: 0 },
          { nombre: "Bien Cocido", precioExtra: 0 },
        ],
      },
      {
        titulo: "Agregar guarnición",
        tipo: "checkbox",
        opciones: [
          { nombre: "Papa frita con queso", precioExtra: 7 },
          { nombre: "Arroz con queso", precioExtra: 7 },
          { nombre: "Chorizo extra", precioExtra: 6 },
        ],
      },
    ],
  },
  {
    id: "95",
    nombre: "Asado de tira",
    descripcion: "Corte con hueso, sabor intenso a la brasa.",
    precioBase: 35,
    guarnicionIncluida: "Arroz con queso y papas",
    imagen: "/AsadoDeTira.jpg",
    categoria: "Carnes",
    personalizacion: [
      {
        titulo: "Término de cocción",
        tipo: "radio",
        opciones: [
          { nombre: "Término Medio", precioExtra: 0 },
          { nombre: "Tres Cuartos", precioExtra: 0 },
          { nombre: "Bien Cocido", precioExtra: 0 },
        ],
      },
      {
        titulo: "Agregar guarnición",
        tipo: "checkbox",
        opciones: [
          { nombre: "Papa frita con queso", precioExtra: 7 },
          { nombre: "Arroz con queso", precioExtra: 7 },
          { nombre: "Chorizo extra", precioExtra: 6 },
        ],
      },
    ],
  },
  {
    id: "96",
    nombre: "Bife angosto",
    descripcion: "Conocido como Bife de Chorizo, sabor premium.",
    precioBase: 35,
    guarnicionIncluida: "Arroz con queso y papas",
    imagen: "/bife_angosto.jpeg",
    categoria: "Carnes",
    personalizacion: [
      {
        titulo: "Término de cocción",
        tipo: "radio",
        opciones: [
          { nombre: "Término Medio", precioExtra: 0 },
          { nombre: "Tres Cuartos", precioExtra: 0 },
          { nombre: "Bien Cocido", precioExtra: 0 },
        ],
      },
      {
        titulo: "Agregar guarnición",
        tipo: "checkbox",
        opciones: [
          { nombre: "Papa frita con queso", precioExtra: 7 },
          { nombre: "Arroz con queso", precioExtra: 7 },
          { nombre: "Chorizo extra", precioExtra: 6 },
        ],
      },
    ],
  },
  // ─── ESPECIALIDADES ───
  {
    id: "97",
    nombre: "Festin",
    descripcion: "Combinación ideal para compartir.",
    precioBase: 60,
    guarnicionIncluida: "Arroz con queso y papas",
    imagen: "/festin.jpg",
    categoria: "Especialidades",
    personalizacion: [
      {
        titulo: "Agregar al festín",
        tipo: "checkbox",
        opciones: [
          { nombre: "Papa frita con queso", precioExtra: 7 },
          { nombre: "Arroz con queso", precioExtra: 7 },
          { nombre: "Chorizo extra", precioExtra: 6 },
        ],
      },
    ],
  },
  {
    id: "98",
    nombre: "Parrillada Especial",
    descripcion: "Surtido de carnes y embutidos seleccionados.",
    precioBase: 90,
    guarnicionIncluida: "2 Arroz con queso y 2 papas",
    imagen: "/parrillada_especial.jpg",
    categoria: "Especialidades",
    personalizacion: [
      {
        titulo: "Agregar guarnición",
        tipo: "checkbox",
        opciones: [
          { nombre: "Papa frita con queso", precioExtra: 7 },
          { nombre: "Arroz con queso", precioExtra: 7 },
        ],
      },
    ],
  },
  {
    id: "99",
    nombre: "Parrillada Completa",
    descripcion: "La máxima experiencia parrillera para el grupo.",
    precioBase: 120,
    guarnicionIncluida: "3 Arroz con queso y 2 papas",
    imagen: "/parrilada_completa.jpg",
    categoria: "Especialidades",
    personalizacion: [
      {
        titulo: "Agregar guarnición",
        tipo: "checkbox",
        opciones: [
          { nombre: "Papa frita con queso", precioExtra: 7 },
          { nombre: "Arroz con queso", precioExtra: 7 },
        ],
      },
    ],
  },
  {
    id: "100",
    nombre: "Pique a la parrilla",
    descripcion: "Trozos de carne, chorizo y guarniciones.",
    precioBase: 40,
    imagen: "/pique_parrila.jpg",
    categoria: "Especialidades",
    personalizacion: [
      {
        titulo: "Agregar guarnición",
        tipo: "checkbox",
        opciones: [
          { nombre: "Papa frita con queso", precioExtra: 7 },
          { nombre: "Arroz con queso", precioExtra: 7 },
          { nombre: "Chorizo extra", precioExtra: 6 },
        ],
      },
    ],
  },
  // ─── EXTRAS ───
  {
    id: "101",
    nombre: "Chorizo",
    descripcion: "Unidad de chorizo parrillero.",
    precioBase: 6,
    imagen: "/chorizo.jpg",
    categoria: "Extras",
    personalizacion: [],
  },
  // ─── GUARNICIONES ───
  {
    id: "102",
    nombre: "Papa frita con queso",
    descripcion: "Porción de papas con queso gratinado.",
    precioBase: 7,
    imagen: "/porcion_de_papa.jpg",
    categoria: "Guarniciones",
    personalizacion: [],
  },
  {
    id: "103",
    nombre: "Arroz con queso",
    descripcion: "El acompañamiento boliviano por excelencia.",
    precioBase: 7,
    imagen: "/porcion_de_arroz.png",
    categoria: "Guarniciones",
    personalizacion: [],
  },
  // ─── RÁPIDA ───
  {
    id: "104",
    nombre: "Hamburguesa",
    descripcion: "Carne a la parrilla en pan suave.",
    precioBase: 18,
    imagen: "/hamburguesa.jpg",
    categoria: "Rápida",
    personalizacion: [
      {
        titulo: "Agregar",
        tipo: "checkbox",
        opciones: [
          { nombre: "Papa frita con queso", precioExtra: 7 },
          { nombre: "Chorizo extra", precioExtra: 6 },
        ],
      },
    ],
  },
  // ─── BEBIDAS ───
  {
    id: "105",
    nombre: "Gaseosa de 2L",
    descripcion: "Refresco familiar.",
    precioBase: 15,
    imagen: "/gaseosa_2l.png",
    categoria: "Bebidas",
    personalizacion: [],
  },
  {
    id: "109",
    nombre: "Refresco de vaso",
    descripcion: "Bebida individual fría.",
    precioBase: 5,
    imagen: "/refresco_vaso.jpg",
    categoria: "Bebidas",
    personalizacion: [],
  },
  // ─── POSTRES ───
  {
    id: "112",
    nombre: "Tres leches",
    descripcion: "Postre húmedo y dulce.",
    precioBase: 20,
    imagen: "/tres_leches.jpg",
    categoria: "Postres",
    personalizacion: [],
  },
  {
    id: "113",
    nombre: "Cheescake de maracuyá",
    descripcion: "Toque ácido y cremoso.",
    precioBase: 20,
    imagen: "/maracuya.jpg",
    categoria: "Postres",
    personalizacion: [],
  },
  {
    id: "114",
    nombre: "Torta de chocolate",
    descripcion: "Para los amantes del cacao.",
    precioBase: 20,
    imagen: "/torta_chocolate.jpg",
    categoria: "Postres",
    personalizacion: [],
  },
];

export const SECCIONES = [
  { cat: "Carnes", label: "Carnes a la Parrilla", emoji: "🔥" },
  { cat: "Especialidades", label: "Especialidades", emoji: "⚡" },
  { cat: "Extras", label: "Extras", emoji: "🥩" },
  { cat: "Guarniciones", label: "Guarniciones", emoji: "🥗" },
  { cat: "Rápida", label: "Rápida", emoji: "🍔" },
  { cat: "Bebidas", label: "Bebidas", emoji: "🥤" },
  { cat: "Postres", label: "Postres", emoji: "🍰" },
];