"use client";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/store/useCart";
import { X, MapPin, Package, User, Trash2, ShoppingBasket } from "lucide-react";

interface Props {
  onClose: () => void;
}

type TipoEntrega = "retiro" | "delivery";

export default function CheckoutModal({ onClose }: Props) {
  const { items, total, removeItem, clearCart } = useCart();
  // 2. Agrega el ref justo después de los useState
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    history.pushState(null, "", location.href);

    const handlePop = () => onCloseRef.current();
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };

    window.addEventListener("popstate", handlePop);
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("popstate", handlePop);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);
  // Reemplaza los useState de nombre por estos dos:
  const [nombre, setNombre] = useState(
    () => localStorage.getItem("cliente_nombre") || "",
  );
  const handleNombre = (v: string) => {
    setNombre(v);
    localStorage.setItem("cliente_nombre", v);
  };

  const handleCelular = (v: string) => {
    setCelular(v);
    localStorage.setItem("cliente_celular", v);
  };
  const [celular, setCelular] = useState(
    () => localStorage.getItem("cliente_celular") || "",
  );
  const [tipoEntrega, setTipoEntrega] = useState<TipoEntrega>("retiro");
  const [direccion, setDireccion] = useState("");
  const [nota, setNota] = useState("");
  // Agrega este estado junto a los demás
  const [buscandoUbicacion, setBuscandoUbicacion] = useState(false);

  const puedeConfirmar =
    nombre.trim().length > 0 &&
    celular.trim().length > 0 &&
    (tipoEntrega === "retiro" || direccion.trim().length > 0);

  const handleConfirmar = () => {
    if (!puedeConfirmar) return;

    const numero = "59171761404";
    let msg = `¡Hola! 🔥 Nuevo pedido en *La Caprichosa*\n\n`;
    msg += `👤 *Cliente:* ${nombre.trim()}\n`;
    msg += `📱 *Celular:* ${celular.trim()}\n`;
    msg += `📦 *Entrega:* ${
      tipoEntrega === "retiro"
        ? "Retiro en local"
        : `Delivery — ${direccion.trim()}`
    }\n`;
    if (nota.trim()) msg += `📝 *Nota:* ${nota.trim()}\n`;
    msg += `\n━━━━━━━━━━━━━━━━━━\n`;

    items.forEach((item) => {
      // 1. Nombre del plato y precio
      msg += `🥩 *${item.nombre}* — ${item.totalPlato} Bs.\n`;

      // 2. Guarnición que ya incluye el plato (desde tu data.ts)
      if (item.guarnicionIncluida) {
        msg += `   _Viene con: ${item.guarnicionIncluida}_\n`;
      } else {
        msg += `   _Viene: Solo (sin guarnición)_\n`;
      }

      // 3. Términos de cocción y Extras seleccionados
      if (item.opcionesSeleccionadas.length > 0) {
        // Separamos las opciones por coma
        // DESPUÉS
        const extras = item.opcionesSeleccionadas
          .map((o) =>
            o.cantidad && o.cantidad > 1
              ? `${o.nombre} x${o.cantidad}`
              : o.nombre,
          )
          .join(", ");
        msg += `   _Detalle: ${extras}_\n`;
      }

      msg += `\n`; // Espacio entre productos
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
      onClick={onClose}
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
    >
      <div
        className="w-full max-w-md overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
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

                    {/* Lógica inteligente: Si existe el campo guarnicionIncluida, se muestra */}
                    {item.guarnicionIncluida && (
                      <p
                        className="text-[10px] uppercase tracking-wider font-bold"
                        style={{ color: "#E8420A" }}
                      >
                        + {item.guarnicionIncluida}
                      </p>
                    )}
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

          {/* ── NOMBRE Y CELULAR ── */}
          <div className="flex flex-col gap-3">
            <div>
              <label
                className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase mb-2"
                style={{ color: "#7A7060" }}
              >
                <User size={12} />
                {tipoEntrega === "delivery"
                  ? "Nombre de quien lo recibe"
                  : "Nombre de quien lo recoja"}
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={
                    tipoEntrega === "delivery"
                      ? "¿Cómo se llama quien lo recibe?"
                      : "¿Cómo se llama quien lo recoja?"
                  }
                  value={nombre}
                  onChange={(e) => handleNombre(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-2xl text-sm font-semibold outline-none transition-all"
                  style={{
                    background: "#1E1C18",
                    border: nombre
                      ? "1px solid rgba(232,66,10,0.5)"
                      : "1px solid #2C2A24",
                    color: "#F0ECD8",
                  }}
                />
                {nombre.length > 0 && (
                  <button
                    onClick={() => handleNombre("")}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all active:scale-90"
                    style={{
                      background: "#1E1C18",
                      border: "1px solid #2C2A24",
                      color: "#6A6458",
                    }}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            <div>
              <label
                className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase mb-2"
                style={{ color: "#7A7060" }}
              >
                📱 Celular de contacto
              </label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  placeholder="Ej: 76543210"
                  value={celular}
                  onChange={(e) => handleCelular(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-2xl text-sm font-semibold outline-none transition-all"
                  style={{
                    background: "#1E1C18",
                    border: celular
                      ? "1px solid rgba(232,66,10,0.5)"
                      : "1px solid #2C2A24",
                    color: "#F0ECD8",
                  }}
                />
                {celular.length > 0 && (
                  <button
                    onClick={() => handleCelular("")}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all active:scale-90"
                    style={{
                      background: "#1E1C18",
                      border: "1px solid #2C2A24",
                      color: "#6A6458",
                    }}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              {celular.length > 0 && (
                <p
                  className="text-[10px] font-bold mt-1.5"
                  style={{ color: "#7A7060" }}
                >
                  💾 Guardado para tu próxima compra
                </p>
              )}
            </div>
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
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ej: Av. Blanco Galindo #450"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-2xl text-sm font-semibold outline-none transition-all"
                  style={{
                    background: "#1E1C18",
                    border: direccion
                      ? "1px solid rgba(232,66,10,0.5)"
                      : "1px solid #2C2A24",
                    color: "#F0ECD8",
                  }}
                />
                {/* Botón ubicación GPS */}
                <button
                  onClick={() => {
                    if (!navigator.geolocation || buscandoUbicacion) return;
                    setBuscandoUbicacion(true);
                    navigator.geolocation.getCurrentPosition(
                      (pos) => {
                        const { latitude, longitude } = pos.coords;
                        setDireccion(
                          `https://maps.google.com/?q=${latitude},${longitude}`,
                        );
                        setBuscandoUbicacion(false);
                      },
                      () => {
                        setBuscandoUbicacion(false);
                      },
                    );
                  }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all active:scale-90"
                  style={{
                    background: direccion.startsWith("https://maps")
                      ? "rgba(232,66,10,0.2)"
                      : "#1E1C18",
                    border: direccion.startsWith("https://maps")
                      ? "1px solid rgba(232,66,10,0.5)"
                      : "1px solid #2C2A24",
                    color: direccion.startsWith("https://maps")
                      ? "#E8420A"
                      : "#6A6458",
                  }}
                  title="Usar mi ubicación actual"
                >
                  {buscandoUbicacion ? (
                    // Spinner animado
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      style={{
                        animation: "spin 0.8s linear infinite",
                        color: "#E8420A",
                      }}
                    >
                      <path d="M12 2a10 10 0 0 1 10 10" />
                      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
                    </svg>
                  ) : (
                    <MapPin size={18} />
                  )}
                </button>
              </div>
              {direccion.startsWith("https://maps") && (
                <p
                  className="text-[10px] font-bold mt-1.5 flex items-center gap-1"
                  style={{ color: "#E8420A" }}
                >
                  📍 Ubicación GPS capturada
                </p>
              )}
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
