"use client";
import { useState } from "react";
import MenuCard from "@/components/MenuCard";
import CustomizationModal from "@/components/CustomizationModal";
import CheckoutModal from "@/components/CheckoutModal";
import { Producto } from "@/types";
import { useCart } from "@/store/useCart";
import { PLATOS_EJEMPLO, SECCIONES } from "@/lib/menu";

export default function Home() {
  const { total, items } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
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
