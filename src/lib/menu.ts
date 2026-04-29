import { Producto } from "@/types";

export const PLATOS_EJEMPLO: Producto[] = [

  // ─── CARNES DE RES ───
  {
    id: "94",
    nombre: "Churrasco",
    descripcion: "Corte clásico a la parrilla, tierno y jugoso.",
    precioBase: 38,
    guarnicionIncluida: "Arroz con queso y papas",
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390033/churrasco_yuu90k.jpg",
    categoria: "Carnes de res",
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
    precioBase: 70,
    guarnicionIncluida: "Arroz con queso y papas",
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777389538/asado_tira_zkdmiu.jpg",
    categoria: "Carnes de res",
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
    precioBase: 70,
    guarnicionIncluida: "Arroz con queso y papas",
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777389821/bife_chorizo_qwpht7.jpg",
    categoria: "Carnes de res",
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
    id: "110",
    nombre: "Pique a la parrilla",
    descripcion: "Trozos de carne, chorizo y guarniciones. Personal.",
    precioBase: 45,
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390085/pique_parrila_nlhavc.jpg",
    categoria: "Carnes de res",
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
  

  // ─── CARNES DE CERDO ───
  {
    id: "106",
    nombre: "Chuleta de cerdo",
    descripcion: "Chuleta de cerdo a la parrilla, jugosa y sabrosa.",
    precioBase: 30,
    guarnicionIncluida: "Arroz con queso y papas",
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390033/churrasco_yuu90k.jpg",
    categoria: "Carnes de cerdo",
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
    id: "107",
    nombre: "Matambre de cerdo",
    descripcion: "Corte fino de cerdo a la parrilla.",
    precioBase: 65,
    guarnicionIncluida: "Arroz con queso y papas",
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777389538/asado_tira_zkdmiu.jpg",
    categoria: "Carnes de cerdo",
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
    id: "108",
    nombre: "Tomahawk de cerdo",
    descripcion: "Imponente corte de cerdo con hueso largo. Incluye una porción de chorizo.",
    precioBase: 65,
    guarnicionIncluida: "Arroz con queso y papas",
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777389821/bife_chorizo_qwpht7.jpg",
    categoria: "Carnes de cerdo",
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
  

  // ─── TABLITAS MIXTAS ───
  {
    id: "97",
    nombre: "Festín parrillero",
    descripcion: "Incluye cuadrili, filete de pollo, dos tipos de chorizos, papas fritas y arroz con queso.",
    precioBase: 65,
    guarnicionIncluida: "Arroz con queso y papas",
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390084/festin_a9ds6a.jpg",
    categoria: "Tablitas mixtas",
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
    nombre: "Parrillada especial",
    descripcion: "Incluye asado de tira, dos tipos de chorizo, filete de pollo, chuleta de cerdo, dos porciones de papa frita y arroz con queso.",
    precioBase: 130,
    guarnicionIncluida: "2 porciones de papa y 1 arroz con queso",
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390085/parrillada_especial_jx3a6q.jpg",
    categoria: "Tablitas mixtas",
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
    nombre: "Parrillada completa",
    descripcion: "Incluye asado de tira, churrasco, filete de pollo, dos tipos de chorizo, chuleta de cerdo, tres porciones de papas fritas y 2 porciones de arroz con queso.",
    precioBase: 180,
    guarnicionIncluida: "3 porciones de papa y 2 de arroz",
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390085/parrilada_completa_led3hz.jpg",
    categoria: "Tablitas mixtas",
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

  // ─── PARA PICAR Y EXTRAS ───
  {
    id: "111",
    nombre: "Chorizo tipo argentino",
    descripcion: "Chorizo parrillero estilo argentino.",
    precioBase: 10,
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390084/chorizo_dl4gqv.jpg",
    categoria: "Para picar y extras",
    personalizacion: [],
  },
  {
    id: "101",
    nombre: "Chorizo criollo",
    descripcion: "Chorizo parrillero criollo.",
    precioBase: 10,
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390084/chorizo_dl4gqv.jpg",
    categoria: "Para picar y extras",
    personalizacion: [],
  },
  {
    id: "102",
    nombre: "Porción de papa frita",
    descripcion: "Porción de papas con queso gratinado.",
    precioBase: 15,
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390085/porcion_de_papa_ffwtzp.jpg",
    categoria: "Para picar y extras",
    personalizacion: [],
  },
  {
    id: "103",
    nombre: "Porción de arroz con queso",
    descripcion: "El acompañamiento boliviano por excelencia.",
    precioBase: 8,
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390085/porcion_de_arroz_sydiod.png",
    categoria: "Para picar y extras",
    personalizacion: [],
  },
  {
    id: "112",
    nombre: "Pan tostado",
    descripcion: "Pan tostado a la parrilla.",
    precioBase: 8,
    imagen: "https://res.cloudinary.com/dh1xm1ov8/image/upload/v1777390085/porcion_de_papa_ffwtzp.jpg",
    categoria: "Para picar y extras",
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
];

export const SECCIONES = [
  { cat: "Carnes de res",        label: "Carnes de Res",        emoji: "🥩" },
  { cat: "Carnes de cerdo",      label: "Carnes de Cerdo",      emoji: "🔥" },
  { cat: "Tablitas mixtas",      label: "Tablitas Mixtas",      emoji: "⚡" },
  { cat: "Para picar y extras",  label: "Para Picar y Extras",  emoji: "🫙" },
  { cat: "Rápida",               label: "Rápida",               emoji: "🍔" },
  { cat: "Bebidas",              label: "Bebidas",              emoji: "🥤" },
];