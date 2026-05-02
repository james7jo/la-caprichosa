"use client";
import { useState, useEffect } from "react";
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
  {
    /* Antes del return, agregá esta lógica: */
  }
  // Reemplaza la función estaAbierto por esto junto a los otros useState:
  const [abierto, setAbierto] = useState<boolean>(false);
  useEffect(() => {
    const hora = new Date(
      new Date().toLocaleString("en-US", { timeZone: "America/La_Paz" }),
    ).getHours();
    setAbierto(hora >= 13 && hora < 22);
  }, []);

  return (
    <main
      className="min-h-screen"
      style={{
        background: "#0D0C0A",
        paddingBottom: items.length > 0 ? "9rem" : "2rem",
      }}
    >
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
        {abierto ? (
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
        ) : (
          <div
            className="inline-flex items-center gap-2 mb-5 px-3 py-[5px] rounded-full text-[10px] font-bold tracking-[0.18em] uppercase"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#6A6458",
            }}
          >
            <span
              className="w-[6px] h-[6px] rounded-full"
              style={{ background: "#4A4840" }}
            />
            Cerrado ahora · Abre a las 13:00
          </div>
        )}
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
          <a
            href="https://maps.google.com/?q=-17.373072,-66.117371"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] px-3 py-[5px] rounded-full transition-all active:scale-95"
            style={{
              background: "#181610",
              color: "#7A7060",
              border: "1px solid #252320",
            }}
          >
            📍 Av. Circunvalación Este, Pacata
          </a>
          <span
            className="text-[11px] px-3 py-[5px] rounded-full flex items-center gap-1"
            style={{
              background: "#181610",
              color: "#7A7060",
              border: "1px solid #252320",
            }}
          >
            📞 71761404
          </span>
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
                    onOpen={abierto ? setSelectedProduct : () => {}}
                    disabled={!abierto}
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
      {/* ── WHATSAPP FLOTANTE ── */}

      <a
        href="https://wa.me/59171761404"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-40 flex items-center justify-center transition-all active:scale-95"
        style={{
          bottom: items.length > 0 && !modalAbierto ? "7rem" : "1.5rem",
          right: "1rem",
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "#25D366",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.522 5.855L.057 23.428a.75.75 0 00.921.921l5.573-1.465A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 01-4.953-1.354l-.355-.211-3.668.964.983-3.588-.231-.369A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
        </svg>
      </a>
    </main>
  );
}
