"use client";
import { useState } from "react";
import { useCart } from "@/store/useCart";
import { X, MapPin, Package, User, Trash2, ShoppingBasket } from "lucide-react";

interface Props {
  onClose: () => void;
}

type TipoEntrega = "retiro" | "delivery";

export default function CheckoutModal({ onClose }: Props) {
  const { items, total, removeItem, clearCart } = useCart();

  const [nombre, setNombre] = useState("");
  const [tipoEntrega, setTipoEntrega] = useState<TipoEntrega>("retiro");
  const [direccion, setDireccion] = useState("");
  const [nota, setNota] = useState("");

  const puedeConfirmar =
    nombre.trim().length > 0 &&
    (tipoEntrega === "retiro" || direccion.trim().length > 0);

  const handleConfirmar = () => {
    if (!puedeConfirmar) return;

    const numero = "59171761404";
    let msg = `¡Hola! 🔥 Nuevo pedido en *La Caprichosa*\n\n`;
    msg += `👤 *Cliente:* ${nombre.trim()}\n`;
    msg += `📦 *Entrega:* ${
      tipoEntrega === "retiro"
        ? "Retiro en local"
        : `Delivery — ${direccion.trim()}`
    }\n`;
    if (nota.trim()) msg += `📝 *Nota:* ${nota.trim()}\n`;
    msg += `\n━━━━━━━━━━━━━━━━━━\n`;

    items.forEach((item) => {
      msg += `🥩 *${item.nombre}* — ${item.totalPlato} Bs.\n`;
      if (item.opcionesSeleccionadas.length > 0) {
        msg += `   _${item.opcionesSeleccionadas.map((o) => o.nombre).join(", ")}_\n`;
      }
    });

    msg += `━━━━━━━━━━━━━━━━━━\n`;
    msg += `💰 *TOTAL: ${total} Bs.*`;

    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );

    clearCart();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
    >
      <div
        className="w-full max-w-md overflow-y-auto"
        style={{
          background: "#171512",
          borderRadius: "28px 28px 0 0",
          maxHeight: "90vh",
          border: "1px solid #252320",
          borderBottom: "none",
        }}
      >
        {/* ── HEADER ── */}
        <div
          className="flex items-center justify-between px-5 pt-5 pb-4 sticky top-0 z-10"
          style={{
            background: "#171512",
            borderBottom: "1px solid #252320",
          }}
        >
          <div>
            <p
              className="text-[11px] font-bold tracking-[0.2em] uppercase mb-[2px]"
              style={{ color: "#E8420A" }}
            >
              Tu pedido
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "28px",
                letterSpacing: "0.04em",
                color: "#F0ECD8",
                lineHeight: 1,
              }}
            >
              Confirmar pedido
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "#252320", color: "#7A7060" }}
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-5 py-5 flex flex-col gap-5">
          {/* ── RESUMEN DEL CARRITO ── */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid #252320" }}
          >
            <div
              className="px-4 py-2 flex items-center gap-2"
              style={{
                background: "#1E1C18",
                borderBottom: "1px solid #252320",
              }}
            >
              <ShoppingBasket size={13} style={{ color: "#7A7060" }} />
              <span
                className="text-[11px] font-bold tracking-widest uppercase"
                style={{ color: "#7A7060" }}
              >
                {items.length} producto{items.length !== 1 ? "s" : ""}
              </span>
            </div>

            <div
              className="flex flex-col divide-y"
              style={{ borderColor: "#252320" }}
            >
              {items.map((item) => (
                <div
                  key={item.idCarrito}
                  className="flex items-center justify-between px-4 py-3 gap-3"
                  style={{ borderBottom: "1px solid #1E1C18" }}
                >
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-bold text-sm truncate"
                      style={{ color: "#EDE8D8" }}
                    >
                      {item.nombre}
                    </p>
                    {item.opcionesSeleccionadas.length > 0 && (
                      <p
                        className="text-[11px] truncate"
                        style={{ color: "#6A6458" }}
                      >
                        {item.opcionesSeleccionadas
                          .map((o) => o.nombre)
                          .join(", ")}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "20px",
                        color: "#E8420A",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item.totalPlato} Bs.
                    </span>
                    <button
                      onClick={() => removeItem(item.idCarrito)}
                      className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                      style={{ background: "#252320", color: "#6A6458" }}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ background: "#1E1C18" }}
            >
              <span className="text-sm font-bold" style={{ color: "#7A7060" }}>
                Total
              </span>
              <span
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "28px",
                  color: "#E8420A",
                  textShadow: "0 0 20px rgba(232,66,10,0.3)",
                  letterSpacing: "0.02em",
                }}
              >
                {total} Bs.
              </span>
            </div>
          </div>

          {/* ── NOMBRE ── */}
          <div>
            <label
              className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase mb-2"
              style={{ color: "#7A7060" }}
            >
              <User size={12} />
              Tu nombre
            </label>
            <input
              type="text"
              placeholder="¿Cómo te llamas?"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl text-sm font-semibold outline-none transition-all"
              style={{
                background: "#1E1C18",
                border: nombre
                  ? "1px solid rgba(232,66,10,0.5)"
                  : "1px solid #2C2A24",
                color: "#F0ECD8",
              }}
            />
          </div>

          {/* ── TIPO DE ENTREGA ── */}
          <div>
            <label
              className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase mb-2"
              style={{ color: "#7A7060" }}
            >
              <Package size={12} />
              ¿Cómo lo quieres?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(["retiro", "delivery"] as TipoEntrega[]).map((tipo) => (
                <button
                  key={tipo}
                  onClick={() => setTipoEntrega(tipo)}
                  className="py-3 px-4 rounded-2xl font-bold text-sm transition-all active:scale-95"
                  style={{
                    background:
                      tipoEntrega === tipo ? "rgba(232,66,10,0.15)" : "#1E1C18",
                    border:
                      tipoEntrega === tipo
                        ? "1px solid rgba(232,66,10,0.5)"
                        : "1px solid #2C2A24",
                    color: tipoEntrega === tipo ? "#F0ECD8" : "#6A6458",
                  }}
                >
                  {tipo === "retiro" ? "🏠 Retiro en local" : "🛵 Delivery"}
                </button>
              ))}
            </div>
          </div>

          {/* ── DIRECCIÓN (solo delivery) ── */}
          {tipoEntrega === "delivery" && (
            <div>
              <label
                className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase mb-2"
                style={{ color: "#7A7060" }}
              >
                <MapPin size={12} />
                Dirección de entrega
              </label>
              <input
                type="text"
                placeholder="Ej: Av. Blanco Galindo #450, Quillacollo"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl text-sm font-semibold outline-none transition-all"
                style={{
                  background: "#1E1C18",
                  border: direccion
                    ? "1px solid rgba(232,66,10,0.5)"
                    : "1px solid #2C2A24",
                  color: "#F0ECD8",
                }}
              />
            </div>
          )}

          {/* ── NOTA OPCIONAL ── */}
          <div>
            <label
              className="text-[11px] font-bold tracking-widest uppercase mb-2 block"
              style={{ color: "#7A7060" }}
            >
              Nota (opcional)
            </label>
            <textarea
              placeholder="Sin cebolla, extra salsa, término de cocción..."
              value={nota}
              onChange={(e) => setNota(e.target.value)}
              rows={2}
              className="w-full px-4 py-3 rounded-2xl text-sm font-semibold outline-none transition-all resize-none"
              style={{
                background: "#1E1C18",
                border: nota
                  ? "1px solid rgba(232,66,10,0.3)"
                  : "1px solid #2C2A24",
                color: "#F0ECD8",
              }}
            />
          </div>

          {/* ── BOTÓN CONFIRMAR ── */}
          <button
            onClick={handleConfirmar}
            disabled={!puedeConfirmar}
            className="w-full flex items-center justify-between py-4 px-5 rounded-2xl font-black text-white transition-all active:scale-[0.97] disabled:opacity-35 disabled:cursor-not-allowed mb-2"
            style={{
              background: "linear-gradient(135deg, #F04A10, #C02800)",
              boxShadow: puedeConfirmar
                ? "0 6px 28px rgba(232,66,10,0.5)"
                : "none",
            }}
          >
            <span className="text-[13px] tracking-[0.04em]">
              ENVIAR PEDIDO POR WHATSAPP
            </span>
            <span
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "26px",
                letterSpacing: "0.02em",
              }}
            >
              {total} Bs.
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
