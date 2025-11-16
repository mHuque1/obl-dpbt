export default function FiltrosAvanzados() {
  return (
    <div className="bg-[#f6f8f6] font-display text-[#111813] min-h-screen w-full">
      {/* Top App Bar */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[#dbe6de] bg-white px-4 py-3">
        <button className="flex size-10 items-center justify-center text-[#111813]">
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <h1 className="flex-1 text-center text-lg font-bold tracking-[-0.015em]">
          Filtros Avanzados
        </h1>

        <button className="w-16 text-right text-base font-bold text-[#13ec49]">
          Limpiar
        </button>
      </header>

      <main className="flex-1 overflow-y-auto pb-28">
        {/* SECTION: Búsqueda General */}
        <section>
          <h2 className="px-4 pb-2 pt-6 text-lg font-bold tracking-[-0.015em]">
            Búsqueda General
          </h2>

          <div className="space-y-4 bg-white px-4 py-4">
            {/* Distancia Slider */}
            <div className="@container">
              <div className="relative flex w-full flex-col items-start gap-3">
                <div className="flex w-full justify-between">
                  <p className="text-base font-medium">Distancia</p>
                  <p className="text-sm">10 km</p>
                </div>

                <div className="flex h-4 w-full items-center gap-4">
                  <div className="flex h-1.5 flex-1 rounded-full bg-[#dbe6de]">
                    <div className="h-full w-[32%] rounded-full bg-[#13ec49]" />

                    {/* Handle */}
                    <div className="relative">
                      <div className="absolute -left-2.5 -top-2 size-5 rounded-full border-2 border-white bg-[#13ec49] ring-2 ring-[#13ec49]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-[#dbe6de]" />

            {/* Valoración */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#f6f8f6] text-[#111813]">
                  <span className="material-symbols-outlined">star</span>
                </div>
                <p className="text-base truncate">Valoración</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-base">Cualquiera</p>
                <span className="material-symbols-outlined text-xl text-[#111813]/70">
                  arrow_forward_ios
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Para tu Mascota */}
        <section>
          <h2 className="px-4 pb-2 pt-6 text-lg font-bold tracking-[-0.015em]">
            Para tu Mascota
          </h2>

          <div className="bg-white px-4 py-4">
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-full border border-[#13ec49] bg-[#13ec49]/20 px-4 py-2 text-sm font-medium">
                <span className="material-symbols-outlined text-base">check</span>
                Menos estresante para gatos
              </button>

              <button className="flex items-center gap-2 rounded-full border border-[#dbe6de] bg-transparent px-4 py-2 text-sm font-medium">
                Ideal para perros nerviosos
              </button>

              <button className="flex items-center gap-2 rounded-full border border-[#dbe6de] bg-transparent px-4 py-2 text-sm font-medium">
                Trato cálido y cercano
              </button>

              <button className="flex items-center gap-2 rounded-full border border-[#dbe6de] bg-transparent px-4 py-2 text-sm font-medium">
                Bueno con mascotas exóticas
              </button>
            </div>
          </div>
        </section>

        {/* SECTION: Servicios y Especialidades */}
        <section>
          <h2 className="px-4 pb-2 pt-6 text-lg font-bold tracking-[-0.015em]">
            Servicios y Especialidades
          </h2>

          <div className="bg-white">
            {[
              { label: "Urgencias 24h", checked: true },
              { label: "Vacunación", checked: false },
              { label: "Cirugía", checked: true },
              { label: "Laboratorio", checked: false },
            ].map((s, i) => (
              <div key={i}>
                <div className="flex items-center justify-between px-4 py-3.5">
                  <p className="text-base">{s.label}</p>

                  <input
                    type="checkbox"
                    defaultChecked={s.checked}
                    className="h-6 w-6 rounded border-2 border-[#dbe6de] bg-transparent text-[#13ec49] focus:ring-[#13ec49]/50"
                  />
                </div>

                {i < 3 && <div className="mx-4 h-px bg-[#dbe6de]" />}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Conveniencia */}
        <section>
          <h2 className="px-4 pb-2 pt-6 text-lg font-bold tracking-[-0.015em]">
            Conveniencia
          </h2>

          <div className="bg-white">
            {/* Switch items */}
            {[
              { label: "Acepta nuevos pacientes", on: true },
              { label: "Tiene parking", on: false },
              { label: "Cita online", on: true },
            ].map((c, i) => (
              <div key={i}>
                <div className="flex items-center justify-between px-4 py-3.5">
                  <p className="text-base">{c.label}</p>

                  <button
                    role="switch"
                    aria-checked={c.on}
                    className={`relative inline-flex h-6 w-11 rounded-full border-2 border-transparent transition-colors duration-200 ${
                      c.on ? "bg-[#13ec49]" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ${
                        c.on ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {i < 2 && <div className="mx-4 h-px bg-[#dbe6de]" />}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Button */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 bg-white/80 p-4 backdrop-blur-sm border-t border-[#dbe6de]">
        <button className="flex h-12 w-full items-center justify-center rounded-xl bg-[#13ec49] px-6 text-base font-bold text-white">
          Aplicar Filtros (4)
        </button>
      </footer>
    </div>
  );
}
