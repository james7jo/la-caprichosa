"use client";
import { Producto, Opcion } from "@/types";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    history.pushState(null, "");
    const handlePop = () => onClose();
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("popstate", handlePop);
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("popstate", handlePop);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

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
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-hidden"
      style={{
        // Fondo: negro + mancha naranja difusa centrada abajo
        background: `
          radial-gradient(ellipse 70% 40% at 50% 100%, rgba(234,88,12,0.25) 0%, transparent 70%),
          rgba(0,0,0,0.88)
        `,
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md flex flex-col"
        style={{
          background: "linear-gradient(180deg, #1C1915 0%, #141210 100%)",
          borderRadius: "24px 24px 0 0",
          // Solo ocupa lo que necesita, sin espacio muerto
          maxHeight: "92dvh",
          border: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "none",
          // Brillo sutil en el borde superior
          boxShadow:
            "0 -1px 0 rgba(234,88,12,0.3), 0 -40px 80px rgba(234,88,12,0.1)",
        }}
      >
        {/* Handle pill — toque nativo mobile */}
        <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
          <div
            style={{
              width: 36,
              height: 4,
              borderRadius: 2,
              background: "rgba(255,255,255,0.15)",
            }}
          />
        </div>

        {/* IMAGEN */}
        {/* 1. Agregamos rounded-t-[28px] para que coincida con el modal */}
        <div className="relative flex-shrink-0 rounded-t-[28px] overflow-hidden">
          <div className="w-full h-44 relative bg-zinc-900">
            {producto.imagen && (
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-full object-cover"
                style={{ opacity: 0.9 }}
              />
            )}

            {/* Botón X */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center z-50 transition-all active:scale-90"
              style={{
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
              }}
            >
              <X size={18} />
            </button>

            {/* Gradiente mejorado: más oscuro abajo para que el texto resalte más */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(to top, #171512 0%, rgba(23,21,18,0.4) 50%, transparent 100%)",
              }}
            />
          </div>

          {/* Título flotando - Ajustamos el margen para que no esté tan pegado al borde */}
          <div className="px-6 pb-4 -mt-16 relative z-20">
            <p
              className="text-[10px] font-black tracking-[0.25em] uppercase mb-1"
              style={{ color: "#E8570A" }}
            >
              Personalizar
            </p>
            <h2
              className="text-4xl font-bold leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                color: "#F5F0E8",
                letterSpacing: "0.03em",
              }}
            >
              {producto.nombre}
            </h2>
          </div>
        </div>
        {/* CUERPO CON SCROLL INTERNO */}
        <div
          className="flex-1 overflow-y-auto px-5 pb-2 min-h-0"
          style={{ scrollbarWidth: "none" }}
        >
          {producto.guarnicionIncluida && (
            <div
              className="mb-4 px-4 py-3 rounded-2xl flex items-center gap-3"
              style={{
                background: "rgba(234,88,12,0.08)",
                border: "1px solid rgba(234,88,12,0.2)",
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#E8570A" }}
              />
              <div>
                <p
                  className="text-[9px] font-black uppercase tracking-widest mb-0.5"
                  style={{ color: "#6B5A4E" }}
                >
                  Servido con
                </p>
                <p className="text-base font-bold" style={{ color: "#F5F0E8" }}>
                  {producto.guarnicionIncluida}
                </p>
              </div>
            </div>
          )}

          {producto.personalizacion.map((grupo) => (
            <div key={grupo.titulo} className="mb-5">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-0.5 h-4 rounded-full"
                  style={{ background: "#E8570A" }}
                />
                <h3
                  className="text-[11px] font-black uppercase tracking-widest"
                  style={{ color: "#C8773A" }}
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
                          ? "rgba(232,87,10,0.12)"
                          : "rgba(255,255,255,0.04)",
                        border: `1px solid ${activa ? "rgba(232,87,10,0.5)" : "rgba(255,255,255,0.06)"}`,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        {/* Indicador radio/check personalizado */}
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            border: `1.5px solid ${activa ? "#E8570A" : "rgba(255,255,255,0.2)"}`,
                            background: activa ? "#E8570A" : "transparent",
                          }}
                        >
                          {activa && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                        <span
                          className="font-semibold text-sm"
                          style={{
                            color: activa ? "#F5F0E8" : "rgba(255,255,255,0.5)",
                          }}
                        >
                          {op.nombre}
                        </span>
                        <input
                          type={grupo.tipo === "radio" ? "radio" : "checkbox"}
                          className="hidden"
                          onChange={() =>
                            handleToggleOpcion(op, grupo.tipo, grupo.titulo)
                          }
                        />
                      </div>
                      {op.precioExtra > 0 && (
                        <span
                          className="font-black text-sm tabular-nums"
                          style={{ color: "#E8570A" }}
                        >
                          +{op.precioExtra} Bs.
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN AGREGAR — siempre visible */}
        <div
          className="flex-shrink-0 flex items-center gap-3 px-5 pt-3 pb-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex flex-col">
            <span
              className="text-[11px] font-black uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Total
            </span>
            <span
              className="text-2xl font-black leading-tight tabular-nums"
              style={{
                fontFamily: "var(--font-bebas)",
                color: "#F5F0E8",
                letterSpacing: "0.02em",
              }}
            >
              {totalPlato} Bs.
            </span>
          </div>
          <button
            onClick={handleAgregar}
            className="flex-1 font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #E8570A 0%, #C94A08 100%)",
              color: "#fff",
              fontSize: "15px",
              letterSpacing: "0.08em",
              boxShadow: "0 4px 24px rgba(232,87,10,0.35)",
            }}
          >
            <ShoppingBasket size={18} />
            AGREGAR
          </button>
        </div>
      </div>
    </div>
  );
}
