import { useNavigate } from "react-router-dom";
export default function BusquedaInicial() {
  const navigate = useNavigate();
  return (
    <div
      className="bg-off-white dark:bg-background-dark font-display"
      style={{ minHeight: "max(884px, 100dvh)" }}
    >
      <div className="relative flex min-h-screen w-full flex-col group/design-root">
        <header className="p-4">
          <div className="flex items-center justify-center py-4">
            <span className="material-symbols-outlined text-teal dark:text-primary text-3xl mr-2">
              pets
            </span>
            <h1 className="text-2xl font-bold text-dark-gray dark:text-background-light">
              VetTransparency
            </h1>
          </div>
        </header>

        <main className="flex flex-1 flex-col justify-center items-center px-4 w-full max-w-lg mx-auto">
          <div className="w-full">
            {/* HeaderImage Component */}
            <div className="@container w-full">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[180px]"
                  data-alt="A happy golden retriever dog looking up."
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD54FLMwNdqpsjGmlmlMsSPzAuInK-IyTiom5BUDH0I4F42cplxJv0m4PagcCwRg9TcTv7nSTzPpP_X50C3YtY8v2dnrFC6yZVMXHYYjkF_l4MeWXyaxBp1CqFDDs4mgykfAiEQueKMkHZqPXix5PTJhh26FuZgB-HvJMABRdMEUWUfKTyYvjgSKZJDyV0h-wkpGMLJiGu0oFVufpzac6CeZmGVLz-g9_k0cbsPP2F_v6p5QrumWwNFSwu5Fr3wzebviwplDkQjBzA")',
                  }}
                />
              </div>
            </div>

            {/* HeadlineText Component */}
            <h1 className="text-dark-gray dark:text-background-light tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
              Encuentra la mejor atención para tu mascota
            </h1>

            {/* TextField Component */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 w-full">
              <label className="flex flex-col w-full">
                <p className="text-dark-gray dark:text-gray-300 text-base font-medium leading-normal pb-2">
                  Ubicación
                </p>
                <div className="flex w-full flex-1 items-stretch rounded-lg shadow-sm">
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-dark-gray dark:text-background-light focus:outline-0 focus:ring-2 focus:ring-teal/50 dark:focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-light-gray dark:bg-dark-gray/30 h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                    placeholder="Ingresa tu ciudad o código postal"
                  />
                  <div className="flex border border-gray-300 dark:border-gray-600 bg-light-gray dark:bg-dark-gray/30 items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                    <span className="material-symbols-outlined text-coral">
                      location_on
                    </span>
                  </div>
                </div>
              </label>
            </div>

            {/* SingleButton Component */}
            <div className="flex px-4 py-3 w-full">
              <button
                className="
  flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center 
  overflow-hidden rounded-lg h-14 px-5 flex-1 
  bg-teal-600 hover:bg-teal-700 
  dark:bg-emerald-400 dark:hover:bg-emerald-300
  text-white dark:text-gray-900
  text-lg font-bold tracking-[0.015em]
  transition-colors shadow-md
"
onClick={() => navigate("/lista-de-resultados")}
              >
                <span className="truncate">Buscar Veterinarias</span>
              </button>
            </div>

            {/* MetaText Component */}
            <p className="text-teal dark:text-primary/90 text-sm font-medium leading-normal pb-3 pt-1 px-4 text-center underline cursor-pointer hover:text-teal/80 dark:hover:text-primary/70">
              o usar mi ubicación actual
            </p>
          </div>
        </main>

        <footer className="w-full p-4">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            © 2025 VetTransparency. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}
