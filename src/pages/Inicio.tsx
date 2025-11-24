import { useNavigate } from 'react-router-dom';

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-center border-b border-gray-200">
        <img 
          src="/logo.png" 
          alt="VetTransparency" 
          className="h-12 w-auto"
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-8 max-w-md mx-auto w-full">
        {/* Ilustración */}
        <div className="w-48 h-48 rounded-2xl flex items-center justify-center mb-8 overflow-hidden">
          <img 
            src="/homeImg.png" 
            alt="Mascota feliz" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 leading-tight">
          Encontrá la veterinaria ideal para tu mascota
        </h2>

        {/* Barra de búsqueda */}
        <div className="w-full mb-4">
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl">
              🔍
            </span>
            <input
              type="text"
              placeholder="Buscar por zona o barrio"
              className="w-full h-14 pl-12 pr-12 rounded-lg border-2 border-gray-400 
                       focus:border-verde-principal focus:outline-none text-base text-gray-800
                       placeholder:text-gray-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl">
              📍
            </span>
          </div>
        </div>

        {/* Botón principal */}
        <button
          onClick={() => navigate('/filtros')}
          style={{ backgroundColor: '#FF9500' }}
          className="w-full h-14 px-6 rounded-lg hover:bg-naranja-claro 
                   text-white font-semibold text-base transition-colors mb-8"
        >
          Buscar veterinarias
        </button>

        {/* Sección secundaria */}
        <div className="w-full bg-gray-50 rounded-2xl p-6 text-center">
          <h3 className="font-semibold text-gray-800 mb-2">
            ¿Necesitás ayuda para elegir?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Responde unas preguntas y encuentra el match perfecto para vos y tu mascota
          </p>
          <button
            onClick={() => navigate('/filtros')}
            className="w-full h-14 px-6 rounded-lg bg-verde-principal hover:bg-verde-hover 
                     text-white font-semibold text-base transition-colors"
          >
            Hacé el match
          </button>
        </div>
      </main>
    </div>
  );
}