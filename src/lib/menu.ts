import { Producto } from "@/types";

export const PLATOS_EJEMPLO: Producto[] = [
{
    id: "94",
    nombre: "Churrasco",
    descripcion: "Corte clásico a la parrilla, tierno y jugoso.",
    precioBase: 35,
    guarnicionIncluida: "Arroz con queso y papas",
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390033/churrasco_yuu90k.jpg",
    categoria: "Carnes",
    personalizacion: [
      {
        titulo: "Término de cocción",
        tipo: "radio",
        opciones: [
          { nombre: "Término Medio (aprox. 15 min)", precioExtra: 0 },
          { nombre: "Tres Cuartos (aprox. 20 min)", precioExtra: 0 },
          { nombre: "Bien Cocido (aprox. 30 min)", precioExtra: 0 },
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
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777389538/asado_tira_zkdmiu.jpg",
    categoria: "Carnes",
    personalizacion: [
      {
        titulo: "Término de cocción",
        tipo: "radio",
        opciones: [
          { nombre: "Término Medio (aprox. 15 min)", precioExtra: 0 },
          { nombre: "Tres Cuartos (aprox. 20 min)", precioExtra: 0 },
          { nombre: "Bien Cocido (aprox. 30 min)", precioExtra: 0 },
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
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777389821/bife_chorizo_qwpht7.jpg",
    categoria: "Carnes",
    personalizacion: [
      {
        titulo: "Término de cocción",
        tipo: "radio",
        opciones: [
          { nombre: "Término Medio (aprox. 15 min)", precioExtra: 0 },
          { nombre: "Tres Cuartos (aprox. 20 min)", precioExtra: 0 },
          { nombre: "Bien Cocido (aprox. 30 min)", precioExtra: 0 },
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
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390084/festin_a9ds6a.jpg",
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
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390085/parrillada_especial_jx3a6q.jpg",
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
  {
    id: "99",
    nombre: "Parrillada Completa",
    descripcion: "La máxima experiencia parrillera para el grupo.",
    precioBase: 120,
    guarnicionIncluida: "3 Arroz con queso y 2 papas",
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390085/parrilada_completa_led3hz.jpg",
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
  {
    id: "100",
    nombre: "Pique a la parrilla",
    descripcion: "Trozos de carne, chorizo y guarniciones.",
    precioBase: 40,
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390085/pique_parrila_nlhavc.jpg",
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
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390084/chorizo_dl4gqv.jpg",
    categoria: "Extras",
    personalizacion: [],
  },
  // ─── GUARNICIONES ───
  {
    id: "102",
    nombre: "Papa frita",
    descripcion: "Porción de papas con queso gratinado.",
    precioBase: 7,
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390085/porcion_de_papa_ffwtzp.jpg",
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
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390085/hamburguesa_zqoq7i.jpg",
    categoria: "Rápida",
    personalizacion: [
      {
        titulo: "Agregar",
        tipo: "checkbox",
        opciones: [
          { nombre: "Papa frita con queso", precioExtra: 7 },
          { nombre: "Arroz con queso", precioExtra: 7 },
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
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390084/gaseosa_2l_u9vpap.jpg",
    categoria: "Bebidas",
    personalizacion: [],
  },
  {
    id: "109",
    nombre: "Jugo del Valle",
    descripcion: "Bebida Natural fria.",
    precioBase: 12,
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390397/jugo_grande_oapjjc.png",
    categoria: "Bebidas",
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
];