export default function DetalleDeClinica() {
  return (
    <div className="bg-[#F8F9FA] font-display min-h-screen w-full overflow-x-hidden">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex flex-col gap-2 bg-white p-4 pb-2 border-b border-[#EAEAEA]">
        <div className="flex items-center h-12 justify-between">
          <div className="flex size-12 shrink-0 items-center justify-start">
            <span className="material-symbols-outlined text-[#333]">arrow_back</span>
          </div>
          <div className="flex-grow text-center">
            <h1 className="text-lg font-bold text-[#333]">Detalle de Clínica</h1>
          </div>
          <div className="flex w-12 items-center justify-end">
            <button className="flex items-center justify-center rounded-full h-10 w-10 text-[#333] hover:bg-gray-100">
              <span className="material-symbols-outlined">favorite_border</span>
            </button>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {/* Header Image */}
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3 p-0">
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-60"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtApo0vqcKjFMUaNXriAYduCE9p8u_OCi9MQVWxAzXDtTg5MyScVJx8J5olaQjtxz0CHG1LF1rAoqOpzDAC-oTgOz9XNhGfqwpUDO7M_LUBO8yRmDVWFeHwQ7-1g-Ucvbc34AaqDNS7Co-k_r2T_spACghpiYYuQCMj7vgjTmvhA27cpIscLQWwPD0fVubBSPMxnqEfBgPqMOv9Lr-8HALC1fVElWb2nzDWFffZ7F4icleI3h_qgEoQXoMc_7E1fVP4Y3sULEE1oM")',
              }}
            />
          </div>
        </div>

        {/* Headline */}
        <div className="px-4 pt-4">
          <h1 className="text-[#333] tracking-light text-[28px] font-bold leading-tight">
            Clínica Veterinaria San Lázaro
          </h1>

          <div className="flex items-center gap-2 mt-2">
            <span className="material-symbols-outlined text-[#F5A623]" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <p className="font-bold text-[#333]">4.8</p>
            <p className="text-gray-500">(215 reseñas)</p>
          </div>
        </div>

        {/* Button Group */}
        <div className="flex justify-stretch">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
            <button className="flex flex-1 min-w-[84px] items-center justify-center gap-2 rounded-lg h-12 px-4 bg-[#4A90E2] text-white text-sm font-bold">
              <span className="material-symbols-outlined">call</span>
              <span className="truncate">Llamar</span>
            </button>

            <button className="flex flex-1 min-w-[84px] items-center justify-center gap-2 rounded-lg h-12 px-4 bg-[#F8F9FA] text-[#333] border border-[#EAEAEA] text-sm font-bold">
              <span className="material-symbols-outlined">directions</span>
              <span className="truncate">Cómo llegar</span>
            </button>
          </div>
        </div>

        {/* Especialidades */}
        <div className="px-4 py-2">
          <h2 className="text-lg font-bold text-[#333] mb-3">Especialidades</h2>

          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
            <span className="inline-flex items-center whitespace-nowrap rounded-full bg-red-100 px-3 py-1.5 text-sm font-semibold text-red-700">
              Urgencias 24h
            </span>

            <span className="inline-flex items-center whitespace-nowrap rounded-full bg-blue-100 px-3 py-1.5 text-sm font-semibold text-[#4A90E2]">
              Experto en Felinos
            </span>

            <span className="inline-flex items-center whitespace-nowrap rounded-full bg-green-100 px-3 py-1.5 text-sm font-semibold text-green-700">
              Diagnóstico por Imagen
            </span>

            <span className="inline-flex items-center whitespace-nowrap rounded-full bg-yellow-100 px-3 py-1.5 text-sm font-semibold text-yellow-700">
              Cirugía Avanzada
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="px-4 py-4">
          <div className="flex items-center gap-3 rounded-lg bg-green-50 p-3 border border-green-200">
            <div className="w-3 h-3 rounded-full bg-[#7ED321]"></div>
            <p className="font-bold text-green-800">Atendiendo ahora</p>
            <p className="text-sm text-gray-600 ml-auto">Cierra a las 20:00</p>
          </div>
        </div>

        {/* Servicios */}
        <div className="px-4 py-2">
          <div className="rounded-xl border border-[#EAEAEA] bg-white p-4">
            <h2 className="text-lg font-bold text-[#333] mb-4">Servicios</h2>

            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { icon: "vaccines", label: "Vacunación" },
                { icon: "local_hospital", label: "Cirugía" },
                { icon: "science", label: "Laboratorio" },
                { icon: "radiology", label: "Rayos X" },
                { icon: "monitor_heart", label: "Cardiología" },
                { icon: "pets", label: "Consultas" },
              ].map((s) => (
                <div className="flex flex-col items-center gap-2" key={s.label}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4A90E2]/10 text-[#4A90E2]">
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </div>
                  <p className="text-xs font-semibold text-[#333]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reseñas */}
        <div className="px-4 py-2">
          <div className="rounded-xl border border-[#EAEAEA] bg-white p-4">
            <h2 className="text-lg font-bold text-[#333] mb-4">Reseñas</h2>

            {/* Tabs */}
            <div className="border-b border-[#EAEAEA] mb-4">
              <nav className="-mb-px flex space-x-6">
                <a className="border-b-2 border-[#4A90E2] text-[#4A90E2] px-1 pb-3 text-sm font-bold">
                  Todas (215)
                </a>
                <a className="border-b-2 border-transparent px-1 pb-3 text-sm font-medium text-gray-500">
                  Verificadas (182)
                </a>
              </nav>
            </div>

            {/* Reviews */}
            <div className="flex flex-col gap-4">
              {/* Review #1 */}
              <div className="border-b border-[#EAEAEA] pb-4">
                <div className="flex items-start justify-between">
                  <p className="font-bold text-sm text-[#333]">Ana García</p>
                  <div className="flex items-center gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-[#F5A623] text-base"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7ED321]/10 px-2 py-1 text-xs font-semibold text-[#7ED321] mt-1.5">
                  ✅ Reseña Verificada
                </span>

                <p className="text-sm text-gray-600 mt-2">
                  Trato excelente tanto para mi perrita como para nosotros. El Dr. Martínez es un
                  gran profesional, se nota su vocación. Muy recomendado.
                </p>
              </div>

              {/* Review #2 */}
              <div className="pb-4 border-b border-[#EAEAEA]">
                <div className="flex items-start justify-between">
                  <p className="font-bold text-sm text-[#333]">Carlos Ruiz</p>
                  <div className="flex items-center gap-1">
                    {[1, 1, 1, 1, 0].map((f, i) => (
                      <span
                        key={i}
                        className={
                          f
                            ? "material-symbols-outlined text-[#F5A623] text-base"
                            : "material-symbols-outlined text-gray-300 text-base"
                        }
                        style={f ? { fontVariationSettings: "'FILL' 1" } : {}}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-2">
                  Muy buena atención, aunque a veces hay que esperar un poco. Los precios son
                  razonables.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Información */}
        <div className="px-4 py-2">
          <div className="rounded-xl border border-[#EAEAEA] bg-white p-4">
            <h2 className="text-lg font-bold text-[#333] mb-4">Información</h2>

            <div>
              {/* Horarios */}
              <details className="group py-2">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-[#333]">
                  Horarios
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>

                <div className="mt-3 text-sm text-gray-600 space-y-1">
                  <p>Lunes a Viernes: 09:00 - 20:00</p>
                  <p>Sábados: 10:00 - 14:00</p>
                  <p>Domingos: Cerrado (Solo urgencias)</p>
                </div>
              </details>

              {/* Equipo */}
              <details className="group py-2">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-[#333]">
                  Equipo Veterinario
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>

                <div className="mt-3 grid grid-cols-2 gap-4">
                  {/* Doc 1 */}
                  <div className="text-center">
                    <img
                      className="w-20 h-20 mx-auto rounded-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwKqV7Jn7A2ex3s1kGJkLuTkhg3DUFquGPTjl1j6VKjcl_cCB6CSDtp0QgKkDOYUs78XVcrV27ba-zZx3007c1bk1VyLWgHbwNKnrNGv87kyYiQAZX2du6Hdf8tJ5uvP9cge4Zxhileup0LoCmEGK-VStS5LBgdOgOLnsTB2riqy7S07UitUX7ihx-KzIrZBc94Q9HjqaEsEaramDaGbAL9QkcBHtTqOKRww8qRK4Bi-M1psJ1EG9QpBemrhGzKrOqKpnMTMJYBew"
                      alt="Foto del Dr. Carlos Martínez"
                    />
                    <p className="mt-2 text-sm font-bold text-[#333]">Dr. Carlos Martínez</p>
                    <p className="text-xs text-gray-500">Director Clínico</p>
                  </div>

                  {/* Doc 2 */}
                  <div className="text-center">
                    <img
                      className="w-20 h-20 mx-auto rounded-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVmm3LLoNas36-hO9kGQ4xCPdXc26LRNIAazIcFfviQnkAYTiIOTUX_9fQJ8azVDO1irWykxFZpSbEq4lXztMMI9PlozCCy-KGVjy-Lxqcpo4ULu3inaeXXSzIZQVVQ53pQGtLW10hLTkAb4dEEUX88QlX-0c-yj3vjTHpObATH80FDLObmrH6hmm2KvXbYiql7K4H36RyPG-ZlllpNRrEf2aAunijn9pPFoCuKsPptv1U-r6ea8tqzrrRf45rAzQI78MDBR4eCE8"
                      alt="Foto de la Dra. Elena Ríos"
                    />
                    <p className="mt-2 text-sm font-bold text-[#333]">Dra. Elena Ríos</p>
                    <p className="text-xs text-gray-500">Especialista en Felinos</p>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>

        <div className="h-24" />
      </main>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-white p-4 border-t border-[#EAEAEA]">
        <button className="flex w-full items-center justify-center rounded-lg h-12 px-4 bg-[#4A90E2] text-white text-base font-bold">
          Reservar Cita
        </button>
      </div>
    </div>
  );
}
