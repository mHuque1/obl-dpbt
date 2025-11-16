export default function BusquedaInicial2() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-text-light dark:text-text-dark flex flex-col overflow-x-hidden">

      {/* Top App Bar */}
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex-1"></div>

        <h1 className="text-lg font-bold flex-1 text-center">
          VetTransparency
        </h1>

        <div className="flex-1"></div>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col px-4 pt-4 pb-8">

        <h2 className="tracking-tight text-[32px] font-bold text-center pb-8 pt-4">
          Encuentra y compara veterinarias
        </h2>

        <div className="space-y-6">

          {/* Location */}
          <section>
            <label
              htmlFor="location"
              className="text-lg font-semibold pb-3 block"
            >
              ¿Dónde te encuentras?
            </label>

            <div className="relative">
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 absolute left-4 top-1/2 -translate-y-1/2">
                location_on
              </span>

              <input
                id="location"
                type="text"
                placeholder="Ciudad, Código Postal"
                className="w-full h-14 pl-12 pr-4 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-text-light dark:text-text-dark
                           placeholder-gray-400 dark:placeholder-gray-500
                           focus:ring-2 focus:ring-primary dark:focus:ring-secondary 
                           focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
          </section>

          {/* Pet Type */}
          <section>
            <h3 className="text-lg font-semibold pb-3">
              ¿Qué tipo de mascota tienes?
            </h3>

            <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 p-1">

              {/* Perro */}
              <label
                className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2
                           has-[:checked]:bg-white dark:has-[:checked]:bg-gray-700
                           has-[:checked]:shadow-[0_1px_3px_rgba(0,0,0,0.1)]
                           has-[:checked]:text-primary dark:has-[:checked]:text-secondary
                           text-gray-500 dark:text-gray-400 text-sm font-semibold transition-all duration-200"
              >
                <input
                  type="radio"
                  name="pet-type"
                  value="Dog"
                  defaultChecked
                  className="sr-only"
                />
                <span className="material-symbols-outlined mr-2 text-xl">pets</span>
                <span>Perro</span>
              </label>

              {/* Gato */}
              <label
                className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2
                           has-[:checked]:bg-white dark:has-[:checked]:bg-gray-700
                           has-[:checked]:shadow-[0_1px_3px_rgba(0,0,0,0.1)]
                           has-[:checked]:text-primary dark:has-[:checked]:text-secondary
                           text-gray-500 dark:text-gray-400 text-sm font-semibold transition-all duration-200"
              >
                <input
                  type="radio"
                  name="pet-type"
                  value="Cat"
                  className="sr-only"
                />
                <span className="material-symbols-outlined mr-2 text-xl">pets</span>
                <span>Gato</span>
              </label>

              {/* Exótico */}
              <label
                className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2
                           has-[:checked]:bg-white dark:has-[:checked]:bg-gray-700
                           has-[:checked]:shadow-[0_1px_3px_rgba(0,0,0,0.1)]
                           has-[:checked]:text-primary dark:has-[:checked]:text-secondary
                           text-gray-500 dark:text-gray-400 text-sm font-semibold transition-all duration-200"
              >
                <input
                  type="radio"
                  name="pet-type"
                  value="Exotic"
                  className="sr-only"
                />
                <span className="material-symbols-outlined mr-2 text-xl">egg</span>
                <span>Exótico</span>
              </label>

            </div>
          </section>

          {/* Budget */}
          <section>
            <div className="flex w-full items-center justify-between pb-3">
              <h3 className="text-lg font-semibold">
                ¿Cuál es tu presupuesto?
              </h3>

              <p className="text-lg font-bold">$$</p>
            </div>

            <div className="relative h-4 w-full">
              <div className="absolute range-track top-1/2 -translate-y-1/2 w-full"></div>

              <div
                className="range-progress absolute top-1/2 -translate-y-1/2"
                style={{ width: "50%" }}
              ></div>

              <input
                type="range"
                min={1}
                max={3}
                defaultValue={2}
                className="custom-range absolute top-1/2 -translate-y-1/2 w-full m-0 bg-transparent"
              />
            </div>

            <div className="w-full flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
              <span>$</span>
              <span>$$$</span>
            </div>
          </section>

        </div>

        {/* Bottom Space */}
        <div className="flex-grow"></div>

        {/* CTA Button */}
        <div className="mt-auto pt-8">
          <button className="w-full bg-primary text-white font-bold py-4 px-4 rounded-xl shadow-lg
                             hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary
                             focus:ring-opacity-50 transition-all duration-200 text-lg">
            Ver mis coincidencias
          </button>
        </div>

      </main>
    </div>
  );
}
