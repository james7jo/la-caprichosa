export interface Opcion {
  nombre: string;
  precioExtra: number;
}

export interface GrupoOpciones {
  titulo: string;
  tipo: 'radio' | 'checkbox'; // radio = término de carne, checkbox = extras
  opciones: Opcion[];
}

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precioBase: number;
  imagen: string;
  categoria: string;
  guarnicionIncluida?: string;
  personalizacion: GrupoOpciones[]; // Aquí viven las papas, arroz, etc.
}

export interface ItemCarrito extends Producto {
  idCarrito: string; // Un ID único para cada vez que agregas algo (puedes pedir 2 lomos con términos distintos)
  opcionesSeleccionadas: Opcion[];
  totalPlato: number;
}