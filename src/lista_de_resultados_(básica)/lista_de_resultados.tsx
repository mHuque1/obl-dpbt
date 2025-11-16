export default function ListaDeResultados() {
  return (
    <div className="bg-white text-[#333] min-h-screen font-display">
      {/* Top Bar */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center p-4 pb-2 justify-between">
          <span className="material-symbols-outlined text-3xl">menu</span>
          <h1 className="text-xl font-bold flex-1 text-center">
            Explorar Veterinarias
          </h1>
          <span className="material-symbols-outlined text-3xl">
            notifications
          </span>
        </div>

        {/* Search */}
        <div className="px-4 py-3">
          <label className="flex flex-col h-12 w-full">
            <div className="flex w-full items-stretch rounded-lg bg-gray-100">
              <div className="flex items-center pl-4">
                <span className="material-symbols-outlined text-gray-600">
                  search
                </span>
              </div>
              <input
                className="flex-1 bg-transparent px-3 outline-none text-base placeholder:text-gray-500"
                placeholder="Buscar por nombre, servicio o zona..."
              />
            </div>
          </label>
        </div>

        {/* Filters */}
        <div className="flex gap-3 px-4 pb-3 overflow-x-auto">
          <button className="flex h-9 items-center gap-2 rounded-full bg-gray-100 px-4 shrink-0">
            <span className="material-symbols-outlined text-lg text-gray-700">
              tune
            </span>
            <p className="text-sm font-medium">Filtros</p>
          </button>

          <button className="flex h-9 items-center gap-2 rounded-full bg-gray-100 px-4 shrink-0">
            <span className="material-symbols-outlined text-lg text-gray-700">
              star
            </span>
            <p className="text-sm font-medium">4.5+</p>
          </button>

          <button className="flex h-9 items-center gap-2 rounded-full bg-gray-100 px-4 shrink-0">
            <span className="material-symbols-outlined text-lg text-gray-700">
              near_me
            </span>
            <p className="text-sm font-medium">Distancia</p>
          </button>

          <button className="flex h-9 items-center gap-2 rounded-full bg-green-500 text-white px-4 shrink-0">
            <span className="material-symbols-outlined text-lg">schedule</span>
            <p className="text-sm font-medium">Abierto ahora</p>
          </button>
        </div>

        <div className="h-px bg-gray-200 mx-4"></div>
      </header>
      <main className="pb-24 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Cards */}
        <main className="px-4 pb-24 flex flex-col gap-4">
          {/* CARD COMPONENT */}
          <div className="rounded-xl bg-white shadow-md p-4">
            <div
              className="w-full aspect-video bg-cover bg-center rounded-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtkmDgDOzdlLWk6akhoM9be3IyPiQGWj3sqM8bwnVX9IrB5gwZC28lbxYD1ZaGY2M7cev02HFC4yArRKYq0o2sJsufTP-4ka26b-Dq-vOgkStEO1nEFHW_CBZCRDthqlNYy0c1wwzygnWVE1t8W_JN3KH5dR-jEI_u_BZG-BdHzyzEOvQOsWSc8c1QU69el2DQdjf2Omu5skl-3RvHRcGk_aa7mFHZZ1hFl3gfcCE7dmX0vg-wbZZMQr9TJ6NgDw5_xLjl7v00Q8k")',
              }}
            ></div>

            <div className="mt-3 flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="text-lg font-bold">
                  Clínica Veterinaria Animalia
                </p>
                <div className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-yellow-500 text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-bold text-sm">4.8</span>
                  <span className="text-sm text-gray-500">(215)</span>
                </div>
              </div>

              <p className="text-sm text-green-600">
                Abierto ahora • Cierra a las 20:00
              </p>
              <p className="text-sm text-gray-600">
                a 1.5 km – Av. Siempreviva 742
              </p>
              <p className="text-sm text-gray-500">
                Especialistas en exóticos, urgencias 24h.
              </p>
            </div>
          </div>
        </main>

        {/* Floating Action Button */}
        <button className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-green-500 shadow-lg flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-3xl">map</span>
        </button>
      </main>
    </div>
  );
}
