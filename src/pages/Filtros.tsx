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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white p-4 border-b">
        <div className="flex items-center justify-center mb-3">
          <img
            src="/logo.png"
            alt="VetTransparency"
            className="h-10 w-auto"
          />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={() => navigate('/')} className="text-2xl">✕</button>
          <h1 className="text-base font-semibold">Personaliza tu búsqueda</h1>
          <button className="text-verde-principal font-medium text-sm">Limpiar</button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 pb-24">
        {/* Filtros básicos */}
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Filtros básicos</h2>
          
          {/* Distancia */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">Distancia</label>
              <span className="text-sm font-medium text-gray-700">{distancia}km</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              value={distancia}
              onChange={(e) => setDistancia(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-verde-principal"
            />
          </div>

          {/* Precio */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 block mb-3">Precio</label>
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
            <label className="text-sm font-medium text-gray-700 block mb-3">Servicios</label>
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
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Ambiente y trato</h2>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 bg-white rounded-lg cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-xl">🐱</span>
                <span className="text-sm font-medium text-gray-700">Ideal para gatos</span>
              </div>
              <input
                type="checkbox"
                checked={filtrosEmocionales.idealGatos}
                onChange={() => toggleFiltroEmocional('idealGatos')}
                className="w-5 h-5 rounded accent-verde-principal"
              />
            </label>

            <label className="flex items-center justify-between p-3 bg-white rounded-lg cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-xl">💚</span>
                <span className="text-sm font-medium text-gray-700">Menos estresante</span>
              </div>
              <input
                type="checkbox"
                checked={filtrosEmocionales.menosEstresante}
                onChange={() => toggleFiltroEmocional('menosEstresante')}
                className="w-5 h-5 rounded accent-verde-principal"
              />
            </label>

            <label className="flex items-center justify-between p-3 bg-white rounded-lg cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-xl">🤝</span>
                <span className="text-sm font-medium text-gray-700">Trato cálido</span>
              </div>
              <input
                type="checkbox"
                checked={filtrosEmocionales.tratoCálido}
                onChange={() => toggleFiltroEmocional('tratoCálido')}
                className="w-5 h-5 rounded accent-verde-principal"
              />
            </label>

            <label className="flex items-center justify-between p-3 bg-white rounded-lg cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-xl">🌿</span>
                <span className="text-sm font-medium text-gray-700">Ambiente tranquilo</span>
              </div>
              <input
                type="checkbox"
                checked={filtrosEmocionales.ambienteTranquilo}
                onChange={() => toggleFiltroEmocional('ambienteTranquilo')}
                className="w-5 h-5 rounded accent-verde-principal"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button
          onClick={() => navigate('/comparador')}
          style={{ backgroundColor: '#FF9500' }}
          className="w-full h-14 px-6 rounded-lg hover:bg-naranja-claro 
                   text-white font-semibold text-base transition-colors"
        >
          Buscar veterinarias ({contarFiltrosActivos()})
        </button>
      </div>
    </div>
  );
}