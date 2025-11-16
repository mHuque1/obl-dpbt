export default function Matching() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-text-light dark:text-text-dark overflow-x-hidden flex flex-col">
      
      {/* Top App Bar */}
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 shadow-sm">
        <button className="text-text-light dark:text-text-dark flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>

        <h1 className="text-lg font-bold flex-1 text-center pr-10">
          Encuentra al Mejor Veterinario
        </h1>
      </header>

      <main className="flex flex-col px-4 pt-4 pb-8 flex-grow">

        {/* Headline */}
        <h2 className="tracking-tight text-[32px] font-bold leading-tight text-left pb-6 pt-4">
          Personaliza tu Búsqueda
        </h2>

        {/* Pet Type Section */}
        <section className="mb-8">
          <h3 className="text-lg font-bold pb-3 pt-4">
            ¿Qué tipo de mascota tienes?
          </h3>

          <div className="flex">
            <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 p-1">

              {/* Perro */}
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2
                  has-[:checked]:bg-white dark:has-[:checked]:bg-gray-700
                  has-[:checked]:shadow-[0_1px_3px_rgba(0,0,0,0.1)]
                  has-[:checked]:text-primary dark:has-[:checked]:text-secondary
                  text-gray-500 dark:text-gray-400 text-sm font-semibold transition-all duration-200">
                <span className="truncate">Perro</span>
                <input
                  type="radio"
                  name="pet-type"
                  value="Dog"
                  defaultChecked
                  className="invisible w-0"
                />
              </label>

              {/* Gato */}
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2
                  has-[:checked]:bg-white dark:has-[:checked]:bg-gray-700
                  has-[:checked]:shadow-[0_1px_3px_rgba(0,0,0,0.1)]
                  has-[:checked]:text-primary dark:has-[:checked]:text-secondary
                  text-gray-500 dark:text-gray-400 text-sm font-semibold transition-all duration-200">
                <span className="truncate">Gato</span>
                <input
                  type="radio"
                  name="pet-type"
                  className="invisible w-0"
                />
              </label>

              {/* Exótico */}
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2
                  has-[:checked]:bg-white dark:has-[:checked]:bg-gray-700
                  has-[:checked]:shadow-[0_1px_3px_rgba(0,0,0,0.1)]
                  has-[:checked]:text-primary dark:has-[:checked]:text-secondary
                  text-gray-500 dark:text-gray-400 text-sm font-semibold transition-all duration-200">
                <span className="truncate">Exótico</span>
                <input
                  type="radio"
                  name="pet-type"
                  className="invisible w-0"
                />
              </label>

            </div>
          </div>
        </section>

        {/* Budget Section */}
        <section className="mb-8">
          <div className="relative flex w-full flex-col items-start gap-4 pt-4">
            <div className="flex w-full items-center justify-between">
              <h3 className="text-lg font-bold">¿Cuál es tu presupuesto?</h3>
              <p className="text-lg font-bold">$$</p>
            </div>

            <div className="flex h-4 w-full items-center gap-4">
              <div className="flex h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-800">
                <div className="h-full w-[45%] rounded-full bg-primary dark:bg-secondary"></div>

                <div className="relative">
                  <div className="absolute -left-2 -top-2 size-6 rounded-full bg-white dark:bg-gray-300 border-4 border-primary dark:border-secondary shadow-md"></div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
              <span>$</span>
              <span>$$$</span>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="mb-8">
          <h3 className="text-lg font-bold pb-3 pt-4">¿Dónde te encuentras?</h3>

          <div className="relative">
            <input
              type="text"
              placeholder="Ciudad, Código Postal"
              className="w-full h-14 pl-4 pr-14 rounded-lg border border-gray-300 dark:border-gray-600
                         bg-white dark:bg-gray-700 text-text-light dark:text-text-dark
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:ring-2 focus:ring-primary dark:focus:ring-secondary 
                         focus:border-transparent outline-none transition-all duration-200"
            />
            <button className="absolute inset-y-0 right-0 flex items-center justify-center px-4 
                               text-primary dark:text-secondary hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined text-2xl">my_location</span>
            </button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 pl-1">
            Ej: Buenos Aires, 1425
          </p>
        </section>

        {/* Spacer */}
        <div className="grow"></div>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="w-full bg-primary text-white font-bold py-4 px-4 rounded-lg shadow-lg
                             hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary
                             focus:ring-opacity-50 transition-all duration-200">
            Ver mis coincidencias
          </button>
        </div>

      </main>
    </div>
  );
}
