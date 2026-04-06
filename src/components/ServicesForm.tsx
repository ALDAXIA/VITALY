import { useState } from "react";

const servicios = [
  {
    value: "circuito",
    label:
      "Circuito de aguas (jacuzzi, sauna, baño turco, piscina de hidromasaje, baño de contrastes y pediluvio)",
  },
  { value: "nado", label: "Piscina en nado libre" },
  {
    value: "actividades",
    label:
      "Actividades dirigidas (Aquagym, natación guiada, terapéutica, hidroterapia, etc.)",
  },
  {
    value: "infantil",
    label: "Natación infantil (bebés, peques, primaria, secundaria, etc.)",
  },
];

const horarios = [
  { value: "mananas", label: "Mañanas" },
  { value: "tardes", label: "Tardes" },
  { value: "indiferente", label: "Indiferente" },
];

const frecuencias = [
  { value: "1", label: "1 día por semana" },
  { value: "2", label: "2 días por semana" },
  { value: "3", label: "3 días por semana" },
  { value: "4", label: "4 o más días por semana" },
];

export default function ServicesForm() {
  const [selectedServicios, setSelectedServicios] = useState<string[]>([]);
  const [selectedHorario, setSelectedHorario] = useState("");
  const [selectedFrecuencia, setSelectedFrecuencia] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const toggleServicio = (value: string) => {
    setSelectedServicios((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  };

  const handleSubmit = () => {
    if (selectedServicios.length === 0) {
      setError("Por favor, selecciona al menos un servicio de interés.");
      return;
    }
    if (!selectedHorario) {
      setError("Por favor, indica tu franja horaria preferida.");
      return;
    }
    if (!selectedFrecuencia) {
      setError("Por favor, selecciona la frecuencia semanal.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-3">
            Servicios y{" "}
            <span className="text-[#0f7063] font-normal">horarios</span> de
            interés
          </h2>
          <div className="w-12 h-0.5 bg-[#0f7063] mx-auto mb-4" />
          <p className="text-gray-500 text-sm">
            Cuéntenos sus preferencias para ofrecerle la mejor experiencia
            posible.
          </p>
        </div>

        {/* Servicios */}
        <div className="mb-8">
          <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
            ¿En qué servicios estaría interesado?{" "}
            <span className="text-[#0f7063]">*</span>
          </label>
          <div className="flex flex-col gap-2">
            {servicios.map((s) => {
              const checked = selectedServicios.includes(s.value);
              return (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => toggleServicio(s.value)}
                  className={`flex items-start gap-3 px-4 py-3 rounded-lg border text-left transition-all duration-150 ${
                    checked
                      ? "border-[#0f7063] bg-[#e6f7f3]"
                      : "border-gray-200 bg-white hover:border-[#0f7063]"
                  }`}
                >
                  <span
                    className={`mt-0.5 w-4 h-4 rounded flex-shrink-0 border flex items-center justify-center transition-colors ${
                      checked
                        ? "bg-[#0f7063] border-[#0f7063]"
                        : "border-gray-300"
                    }`}
                  >
                    {checked && (
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Horario */}
        <div className="mb-8">
          <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
            ¿Qué franja horaria le resultaría más cómodo?{" "}
            <span className="text-[#0f7063]">*</span>
          </label>
          <div className="flex gap-2 flex-wrap">
            {horarios.map((h) => (
              <button
                key={h.value}
                type="button"
                onClick={() => setSelectedHorario(h.value)}
                className={`px-5 py-2.5 rounded-full text-sm border transition-all duration-150 ${
                  selectedHorario === h.value
                    ? "bg-[#0f7063] border-[#0f7063] text-white"
                    : "border-gray-200 text-gray-700 hover:border-[#0f7063]"
                }`}
              >
                {h.label}
              </button>
            ))}
          </div>
        </div>

        {/* Frecuencia */}
        <div className="mb-8">
          <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
            Frecuencia de clases semanal{" "}
            <span className="text-[#0f7063]">*</span>
          </label>
          <div className="relative">
            <select
              value={selectedFrecuencia}
              onChange={(e) => setSelectedFrecuencia(e.target.value)}
              className="w-full appearance-none px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 bg-white focus:outline-none focus:border-[#0f7063] transition-colors cursor-pointer"
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              {frecuencias.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
              <svg
                className="w-4 h-4 text-[#0f7063]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Comentarios */}
        <div className="mb-8">
          <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
            Comentarios o cuestiones
          </label>
          <textarea
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
            placeholder="¿Alguna pregunta o información adicional que quiera compartir?"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 bg-white focus:outline-none focus:border-[#0f7063] transition-colors resize-none"
          />
        </div>

        <hr className="border-gray-100 mb-8" />

        {/* Error */}
        {error && (
          <p className="text-sm text-red-500 mb-4 text-center">{error}</p>
        )}

        {/* Submit */}
        {!submitted ? (
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs text-gray-400">* Campos obligatorios</span>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex items-center gap-2 px-7 py-3 bg-[#0f7063] hover:bg-[#0d5e53] text-white text-sm font-medium rounded-full transition-colors duration-150"
            >
              Enviar consulta
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="text-center py-8 px-6 bg-[#e6f7f3] border border-[#0f7063] rounded-xl">
            <p className="text-[#0f7063] font-medium text-base mb-1">
              ¡Gracias por su consulta!
            </p>
            <p className="text-[#0d5e53] text-sm">
              Nos pondremos en contacto con usted a la mayor brevedad posible.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
