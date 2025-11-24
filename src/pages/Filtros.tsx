import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Chip from '../components/Chip';

export default function Filtros() {
  const navigate = useNavigate();
  const [distancia, setDistancia] = useState(5);
  const [precio, setPrecio] = useState<'Económico' | 'Moderado' | 'Premium'>('Moderado');
  const [servicios, setServicios] = useState<string[]>(['Urgencias 24h']);
  const [filtrosEmocionales, setFiltrosEmocionales] = useState({
    idealGatos: true,
    menosEstresante: false,
    tratoCálido: true,
    ambienteTranquilo: true
  });

  const toggleServicio = (servicio: string) => {
    setServicios(prev => 
      prev.includes(servicio) 
        ? prev.filter(s => s !== servicio)
        : [...prev, servicio]
    );
  };

  const toggleFiltroEmocional = (filtro: keyof typeof filtrosEmocionales) => {
    setFiltrosEmocionales(prev => ({
      ...prev,
      [filtro]: !prev[filtro]
    }));
  };

  const contarFiltrosActivos = () => {
    return servicios.length + Object.values(filtrosEmocionales).filter(Boolean).length;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-200">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            <span className="text-xl text-gray-700">✕</span>
          </button>
          <h1 className="text-base font-semibold text-gray-900">Personalizá tu búsqueda</h1>
          <button 
            className="text-sm font-medium"
            style={{ color: '#52C41A' }}
          >
            Limpiar
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 pb-24 max-w-2xl mx-auto">
        {/* Filtros básicos */}
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Filtros básicos</h2>
          
          {/* Distancia */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-900">Distancia</label>
              <span className="text-sm font-medium text-gray-900">{distancia}km</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              value={distancia}
              onChange={(e) => setDistancia(Number(e.target.value))}
              style={{
                accentColor: '#52C41A'
              }}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Precio */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-900 block mb-3">Precio</label>
            <div className="flex gap-2">
              <Chip 
                selected={precio === 'Económico'} 
                onClick={() => setPrecio('Económico')}
              >
                Económico
              </Chip>
              <Chip 
                selected={precio === 'Moderado'} 
                onClick={() => setPrecio('Moderado')}
              >
                Moderado
              </Chip>
              <Chip 
                selected={precio === 'Premium'} 
                onClick={() => setPrecio('Premium')}
              >
                Premium
              </Chip>
            </div>
          </div>

          {/* Servicios */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-900 block mb-3">Servicios</label>
            <div className="flex flex-wrap gap-2">
              <Chip 
                selected={servicios.includes('Consulta')} 
                onClick={() => toggleServicio('Consulta')}
              >
                Consulta
              </Chip>
              <Chip 
                selected={servicios.includes('Urgencias 24h')} 
                onClick={() => toggleServicio('Urgencias 24h')}
              >
                Urgencias 24h
              </Chip>
              <Chip 
                selected={servicios.includes('Cirugía')} 
                onClick={() => toggleServicio('Cirugía')}
              >
                Cirugía
              </Chip>
            </div>
          </div>

          <div>
            <Chip 
              selected={servicios.includes('Peluquería')} 
              onClick={() => toggleServicio('Peluquería')}
            >
              Peluquería
            </Chip>
          </div>
        </div>

        {/* Ambiente y trato */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Ambiente y trato</h2>
          <div className="space-y-3">
            <label 
              className="flex items-center justify-between p-3 bg-verde-claro rounded-lg cursor-pointer"
              onClick={() => toggleFiltroEmocional('idealGatos')}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🐱</span>
                <span className="text-sm font-medium text-gray-900">Ideal para gatos</span>
              </div>
              <div className="flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: '#52C41A' }}>
                {filtrosEmocionales.idealGatos && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </label>

            <label 
              className="flex items-center justify-between p-3 bg-white rounded-lg cursor-pointer"
              onClick={() => toggleFiltroEmocional('menosEstresante')}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">💚</span>
                <span className="text-sm font-medium text-gray-900">Menos estresante</span>
              </div>
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-2" style={{ borderColor: filtrosEmocionales.menosEstresante ? '#52C41A' : '#E5E7EB', backgroundColor: filtrosEmocionales.menosEstresante ? '#52C41A' : 'transparent' }}>
                {filtrosEmocionales.menosEstresante && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </label>

            <label 
              className="flex items-center justify-between p-3 bg-verde-claro rounded-lg cursor-pointer"
              onClick={() => toggleFiltroEmocional('tratoCálido')}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🤝</span>
                <span className="text-sm font-medium text-gray-900">Trato cálido</span>
              </div>
              <div className="flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: '#52C41A' }}>
                {filtrosEmocionales.tratoCálido && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </label>

            <label 
              className="flex items-center justify-between p-3 bg-verde-claro rounded-lg cursor-pointer"
              onClick={() => toggleFiltroEmocional('ambienteTranquilo')}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🌿</span>
                <span className="text-sm font-medium text-gray-900">Ambiente tranquilo</span>
              </div>
              <div className="flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: '#52C41A' }}>
                {filtrosEmocionales.ambienteTranquilo && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/comparador')}
          style={{ backgroundColor: '#52C41A' }}
          className="w-full h-14 px-6 rounded-lg hover:opacity-90
                   text-white font-semibold text-base transition-opacity"
        >
          Aplicar filtros ({contarFiltrosActivos()})
        </button>
      </div>
    </div>
  );
}