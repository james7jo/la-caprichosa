"use client";
import { Producto } from "@/types";

interface Props {
  producto: Producto;
  onOpen: (p: Producto) => void;
}

export default function MenuCard({ producto, onOpen }: Props) {
  const { nombre, descripcion, precioBase, imagen } = producto;

  return (
    <button
      onClick={() => onOpen(producto)}
      className="w-full text-left group relative overflow-hidden rounded-2xl transition-all duration-200 active:scale-[0.98]"
      style={{
        background: "#171512",
        border: "1px solid #252320",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ boxShadow: "inset 0 0 0 1px rgba(232,66,10,0.35)" }}
      />

      <div className="flex items-stretch gap-0">
        {/* ── CONTENIDO ── */}
        <div className="flex-1 px-4 py-4 flex flex-col justify-between min-h-[100px]">
          {/* Nombre */}
          <div>
            <h3
              className="text-[17px] font-bold leading-tight mb-1 group-hover:text-orange-400 transition-colors"
              style={{
                color: "#EDE8D8",
                fontFamily: "var(--font-bebas)",
                fontSize: "22px",
                letterSpacing: "0.04em",
              }}
            >
              {nombre}
            </h3>
            <p
              className="text-[12px] leading-snug"
              style={{ color: "#6A6458" }}
            >
              {descripcion}
            </p>
          </div>

          {/* Precio + botón */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-baseline gap-[2px]">
              <span
                className="leading-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "34px",
                  color: "#E8420A",
                  textShadow: "0 0 20px rgba(232,66,10,0.3)",
                  letterSpacing: "0.02em",
                }}
              >
                {precioBase}
              </span>
              <span
                className="text-[13px] font-bold"
                style={{ color: "#C8963A" }}
              >
                Bs.
              </span>
            </div>

            {/* Botón añadir */}
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xl font-light transition-all duration-150 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #E8420A, #C02800)",
                boxShadow: "0 3px 12px rgba(232,66,10,0.4)",
              }}
            >
              +
            </div>
          </div>
        </div>

        {/* ── IMAGEN ── */}
        <div
          className="relative flex-shrink-0 rounded-r-2xl overflow-hidden"
          style={{ width: "110px" }}
        >
          <img
            src={imagen}
            alt={nombre}
            // Agregamos w-full y h-full para que rellene los 110px y el alto del card
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay izquierdo para fusionar con el fondo */}
          <div
            className="absolute inset-y-0 left-0 w-6 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to right, #171512, transparent)",
            }}
          />

          {/* Overlay oscuro base */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{ background: "rgba(0,0,0,0.15)" }}
          />
        </div>
      </div>
    </button>
  );
}
