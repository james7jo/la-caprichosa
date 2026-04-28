"use client";
import { useState } from "react";
import MenuCard from "@/components/MenuCard";
import CustomizationModal from "@/components/CustomizationModal";
import CheckoutModal from "@/components/CheckoutModal";
import { Producto } from "@/types";
import { useCart } from "@/store/useCart";

const PLATOS_EJEMPLO: Producto[] = [
  // ─── CARNES ───
  {
    id: "94",
    nombre: "Churrasco",
    descripcion: "Corte clásico a la parrilla, tierno y jugoso.",
    precioBase: 35,
    imagen: "/Churrasco.png",
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
    imagen: "/mediocharke.jpg",
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

const SECCIONES = [
  { cat: "Carnes", label: "Carnes a la Parrilla", emoji: "🔥" },
  { cat: "Especialidades", label: "Especialidades", emoji: "⚡" },
  { cat: "Extras", label: "Extras", emoji: "🥩" },
  { cat: "Guarniciones", label: "Guarniciones", emoji: "🥗" },
  { cat: "Rápida", label: "Rápida", emoji: "🍔" },
  { cat: "Bebidas", label: "Bebidas", emoji: "🥤" },
  { cat: "Postres", label: "Postres", emoji: "🍰" },
];

export default function Home() {
  const { total, items } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Cualquier modal abierto → esconde el carrito flotante
  const modalAbierto = selectedProduct !== null || checkoutOpen;

  return (
    <main className="min-h-screen pb-36" style={{ background: "#0D0C0A" }}>
      {/* Línea de brasa */}
      <div
        className="w-full h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #E8420A 30%, #FF9F1C 55%, #E8420A 80%, transparent 100%)",
        }}
      />

      {/* ── HERO ── */}
      <div className="relative overflow-hidden px-5 pt-8 pb-10">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 220px at 20% 50%, rgba(232,66,10,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="inline-flex items-center gap-2 mb-5 px-3 py-[5px] rounded-full text-[10px] font-bold tracking-[0.18em] uppercase"
          style={{
            background: "rgba(232,66,10,0.15)",
            border: "1px solid rgba(232,66,10,0.4)",
            color: "#FF7730",
          }}
        >
          <span
            className="w-[6px] h-[6px] rounded-full animate-pulse"
            style={{ background: "#E8420A" }}
          />
          Abierto ahora
        </div>
        <div className="mb-1">
          <span
            className="block text-[11px] font-bold tracking-[0.35em] uppercase mb-1"
            style={{ color: "#4A4840" }}
          >
            Restaurante
          </span>
          <h1
            className="leading-[0.82]"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(62px, 18vw, 86px)",
              color: "#F0ECD8",
              letterSpacing: "0.01em",
            }}
          >
            La{" "}
            <span
              style={{
                color: "#E8420A",
                textShadow: "0 0 50px rgba(232,66,10,0.35)",
              }}
            >
              Caprichosa
            </span>
          </h1>
        </div>
        <p
          className="text-sm italic mt-2"
          style={{ fontFamily: "var(--font-playfair)", color: "#C8963A" }}
        >
          Carnes a la Parrilla · Cochabamba
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {["📍 Av. Circunvalación Este, Pacata", "📞 71761404"].map((txt) => (
            <span
              key={txt}
              className="text-[11px] px-3 py-[5px] rounded-full"
              style={{
                background: "#181610",
                color: "#7A7060",
                border: "1px solid #252320",
              }}
            >
              {txt}
            </span>
          ))}
        </div>
      </div>

      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #252320, transparent)",
        }}
      />

      {/* ── SECCIONES ── */}
      <div className="px-4 max-w-md mx-auto">
        {SECCIONES.map(({ cat, label, emoji }) => {
          const platos = PLATOS_EJEMPLO.filter((p) => p.categoria === cat);
          if (!platos.length) return null;
          return (
            <div key={cat} className="mt-9">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg leading-none">{emoji}</span>
                <h2
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "22px",
                    letterSpacing: "0.12em",
                    color: "#F0ECD8",
                  }}
                >
                  {label}
                </h2>
                <div
                  className="flex-1 h-px"
                  style={{
                    background: "linear-gradient(90deg, #2C2A24, transparent)",
                  }}
                />
              </div>
              <div className="flex flex-col gap-3">
                {platos.map((p) => (
                  <MenuCard
                    key={p.id}
                    producto={p}
                    onOpen={setSelectedProduct}
                  />
                ))}
              </div>
            </div>
          );
        })}
        <p
          className="mt-12 mb-2 text-center text-[10px] tracking-widest uppercase"
          style={{ color: "#302E28" }}
        >
          La Caprichosa · Cochabamba · 71761404
        </p>
      </div>

      {/* ── MODAL PERSONALIZACIÓN ── */}
      {selectedProduct && (
        <CustomizationModal
          producto={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* ── MODAL CHECKOUT ── */}
      {checkoutOpen && <CheckoutModal onClose={() => setCheckoutOpen(false)} />}

      {/* ── CARRITO FLOTANTE — se oculta cuando hay modal abierto ── */}
      {items.length > 0 && !modalAbierto && (
        <div
          className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-6 pt-4"
          style={{
            background: "linear-gradient(to top, #0D0C0A 65%, transparent)",
          }}
        >
          <button
            onClick={() => setCheckoutOpen(true)}
            className="max-w-md mx-auto w-full flex justify-between items-center rounded-[20px] px-5 py-[14px] transition-all active:scale-[0.97]"
            style={{
              background: "linear-gradient(135deg, #F04A10 0%, #C02800 100%)",
              boxShadow:
                "0 6px 36px rgba(232,66,10,0.55), inset 0 1px 0 rgba(255,140,60,0.25)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-[15px]"
                style={{ background: "rgba(0,0,0,0.22)" }}
              >
                {items.length}
              </div>
              <div>
                <p className="text-white font-bold text-[15px] leading-tight">
                  Ver pedido
                </p>
                <p
                  className="text-[11px] leading-tight"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  Toca para confirmar
                </p>
              </div>
            </div>
            <span
              className="text-white font-black tracking-[0.03em]"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "30px" }}
            >
              {total} Bs.
            </span>
          </button>
        </div>
      )}
    </main>
  );
}
