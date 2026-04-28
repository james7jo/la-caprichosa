"use client";
import { Producto, Opcion } from "@/types";
import { useState } from "react";
import { useCart } from "@/store/useCart";
import { X, ShoppingBasket } from "lucide-react";

interface Props {
  producto: Producto;
  onClose: () => void;
}

export default function CustomizationModal({ producto, onClose }: Props) {
  const addItem = useCart((state) => state.addItem);
  const [seleccionadas, setSeleccionadas] = useState<Opcion[]>([]);

  const extraTotal = seleccionadas.reduce((acc, op) => acc + op.precioExtra, 0);
  const totalPlato = producto.precioBase + extraTotal;

  const handleToggleOpcion = (
    opcion: Opcion,
    tipo: "radio" | "checkbox",
    tituloGrupo: string,
  ) => {
    if (tipo === "radio") {
      const opcionesDelGrupo =
        producto.personalizacion
          .find((g) => g.titulo === tituloGrupo)
          ?.opciones.map((o) => o.nombre) || [];
      setSeleccionadas((prev) => [
        ...prev.filter((o) => !opcionesDelGrupo.includes(o.nombre)),
        opcion,
      ]);
    } else {
      const existe = seleccionadas.find((o) => o.nombre === opcion.nombre);
      setSeleccionadas((prev) =>
        existe
          ? prev.filter((o) => o.nombre !== opcion.nombre)
          : [...prev, opcion],
      );
    }
  };

  const handleAgregar = () => {
    addItem({
      ...producto,
      idCarrito: crypto.randomUUID(),
      opcionesSeleccionadas: seleccionadas,
      totalPlato,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
    >
      <div
        className="w-full max-w-md overflow-y-auto"
        style={{
          background: "#171512",
          borderRadius: "28px 28px 0 0",
          maxHeight: "85vh",
          border: "1px solid #252320",
          borderBottom: "none",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 pt-5 pb-4"
          style={{ borderBottom: "1px solid #252320" }}
        >
          <div>
            <p
              className="text-[11px] font-bold tracking-[0.2em] uppercase mb-[2px]"
              style={{ color: "#E8420A" }}
            >
              Personalizar
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "26px",
                letterSpacing: "0.04em",
                color: "#F0ECD8",
                lineHeight: 1,
              }}
            >
              {producto.nombre}
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

        <div className="px-5 py-5">
          {/* Opciones */}
          {producto.personalizacion.length === 0 ? (
            <div className="py-6 text-center">
              <p className="text-sm" style={{ color: "#5A5448" }}>
                Sin opciones de personalización
              </p>
            </div>
          ) : (
            producto.personalizacion.map((grupo) => (
              <div key={grupo.titulo} className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-1 h-5 rounded-full"
                    style={{ background: "#E8420A" }}
                  />
                  <h3
                    className="font-bold text-sm"
                    style={{ color: "#C8963A" }}
                  >
                    {grupo.titulo}
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  {grupo.opciones.map((op) => {
                    const activa = seleccionadas.some(
                      (o) => o.nombre === op.nombre,
                    );
                    return (
                      <label
                        key={op.nombre}
                        className="flex justify-between items-center px-4 py-3 rounded-2xl cursor-pointer transition-all"
                        style={{
                          background: activa
                            ? "rgba(232,66,10,0.12)"
                            : "#1E1C18",
                          border: activa
                            ? "1px solid rgba(232,66,10,0.45)"
                            : "1px solid #2C2A24",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type={grupo.tipo === "radio" ? "radio" : "checkbox"}
                            name={grupo.titulo}
                            checked={activa}
                            onChange={() =>
                              handleToggleOpcion(op, grupo.tipo, grupo.titulo)
                            }
                            className="w-4 h-4 accent-orange-500"
                          />
                          <span
                            className="text-sm font-semibold"
                            style={{ color: activa ? "#F0ECD8" : "#9A9082" }}
                          >
                            {op.nombre}
                          </span>
                        </div>
                        {op.precioExtra > 0 && (
                          <span
                            className="text-xs font-black"
                            style={{ color: "#E8420A" }}
                          >
                            +{op.precioExtra} Bs.
                          </span>
                        )}
                      </label>
                    );
                  })}
                </div>
              </div>
            ))
          )}

          {/* Precio + botón agregar */}
          <div className="flex items-center justify-between gap-3 mt-2">
            <div>
              <p
                className="text-[11px] uppercase tracking-widest"
                style={{ color: "#5A5448" }}
              >
                Subtotal
              </p>
              <div className="flex items-baseline gap-1">
                <span
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "36px",
                    color: "#E8420A",
                    letterSpacing: "0.02em",
                  }}
                >
                  {totalPlato}
                </span>
                <span
                  className="text-sm font-bold"
                  style={{ color: "#C8963A" }}
                >
                  Bs.
                </span>
              </div>
            </div>
            <button
              onClick={handleAgregar}
              className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-white transition-all active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #F04A10, #C02800)",
                boxShadow: "0 4px 20px rgba(232,66,10,0.4)",
                fontSize: "14px",
                letterSpacing: "0.05em",
              }}
            >
              <ShoppingBasket size={18} />
              AGREGAR AL PEDIDO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
