import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { clinicas } from '../data/clinicas';
import { reseñas, distribucionRatings } from '../data/reseñas';
import StarRating from '../components/StarRating';

export default function Reseñas() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [soloVerificadas, setSoloVerificadas] = useState(true);
  
  const clinica = clinicas.find(c => c.id === id);
  const reseñasClinica = id ? (reseñas[id] || []) : [];
  const distribucion = id ? (distribucionRatings[id] || []) : [];

  if (!clinica) {
    return <div>Clínica no encontrada</div>;
  }

  const reseñasMostrar = soloVerificadas 
    ? reseñasClinica.filter(r => r.verificada)
    : reseñasClinica;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <button 
            onClick={() => navigate(`/clinica/${id}`)} 
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors text-gray-700"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <h1 className="text-base font-semibold text-gray-900 flex-1 text-center px-4">
            {clinica.nombre}
          </h1>
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Rating agregado */}
        <div className="px-4 pt-6 bg-white">
          <div className="mb-4">
            <p className="text-5xl font-bold text-gray-900">{clinica.rating.promedio}</p>
            <div className="flex items-center gap-2 my-2">
              <StarRating 
                rating={clinica.rating.promedio} 
                showNumber={false}
                size="md"
              />
            </div>
            <p className="text-sm text-gray-600">
              Basado en {clinica.rating.total} reseñas
            </p>
          </div>

          {/* Distribución de ratings */}
          <div className="space-y-2 pb-6">
            {distribucion.map((dist) => (
              <div key={dist.stars} className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-4">{dist.stars}</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all"
                    style={{ width: `${dist.percentage}%`, backgroundColor: '#52C41A' }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">{dist.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Toggle solo verificadas */}
        <div className="px-4 pt-4 pb-4 bg-white border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900 text-sm">Solo reseñas verificadas</p>
              <p className="text-xs text-gray-600 mt-0.5">Mostrá solo las reseñas de visitas confirmadas</p>
            </div>
            <label className="relative inline-block w-12 h-7 cursor-pointer">
              <input
                type="checkbox"
                checked={soloVerificadas}
                onChange={(e) => setSoloVerificadas(e.target.checked)}
                className="sr-only"
              />
              <div 
                className="w-full h-full rounded-full transition-colors"
                style={{ backgroundColor: soloVerificadas ? '#52C41A' : '#D1D5DB' }}
              ></div>
              <div 
                className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform shadow-sm"
                style={{ transform: soloVerificadas ? 'translateX(20px)' : 'translateX(0)' }}
              ></div>
            </label>
          </div>
        </div>

        {/* Lista de reseñas */}
        <div className="px-4 pt-4 pb-6 space-y-4">
          <p className="text-sm text-gray-500">
            Mostrando {reseñasMostrar.length} reseñas
          </p>
          {reseñasMostrar.map((reseña) => (
            <div key={reseña.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              {/* Header de la reseña */}
              <div className="flex items-start gap-3 mb-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{ backgroundColor: '#F3F4F6', color: '#374151' }}
                >
                  {reseña.autor.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{reseña.autor.nombre}</p>
                  {reseña.verificada && (
                    <div 
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold mt-1"
                      style={{ backgroundColor: '#F6FFED', color: '#52C41A' }}
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      RESEÑA VERIFICADA
                    </div>
                  )}
                </div>
              </div>

              {/* Rating */}
              <div className="mb-3">
                <StarRating 
                  rating={reseña.rating} 
                  showNumber={false}
                  size="sm"
                />
              </div>

              {/* Texto */}
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                {reseña.texto}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {reseña.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Imagen si existe */}
              {reseña.imagen && (
                <div className="mb-3 rounded-xl overflow-hidden">
                  <img
                    src="/imagenReseña.png"
                    alt="Foto de la visita"
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}

              {/* Fecha */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">
                  {reseña.verificada ? 'Visita confirmada: ' : 'Fecha de visita: '}
                  {reseña.fechaVisita}
                </span>
                {reseña.imagen && (
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}