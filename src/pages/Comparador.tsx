import { useNavigate } from 'react-router-dom';
import { clinicas } from '../data/clinicas';
import StarRating from '../components/StarRating';

export default function Comparador() {
  const navigate = useNavigate();
  
  // Mostrar las primeras 3 clínicas
  const clinicasAMostrar = clinicas.slice(0, 3);

  // Asignar medallas basado en rating
  const getBadgeType = (index: number): 'gold' | 'silver' | 'bronze' => {
    if (index === 0) return 'gold';
    if (index === 1) return 'silver';
    return 'bronze';
  };

  const getBadgeIcon = (type: 'gold' | 'silver' | 'bronze') => {
    if (type === 'gold') return '🥇';
    if (type === 'silver') return '🥈';
    return '🥉';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-200">
        <div className="flex items-center gap-4 max-w-6xl mx-auto">
          <button 
            onClick={() => navigate('/filtros')} 
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 
                     transition-colors text-gray-700"
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
          <h1 className="text-lg font-semibold flex-1">Comparar veterinarias</h1>
        </div>
      </div>

      {/* Comparador de 3 columnas */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full">
          {clinicasAMostrar.map((clinica, index) => {
            const badgeType = getBadgeType(index);
            
            return (
              <div 
                key={clinica.id} 
                className="bg-white rounded-2xl p-5 shadow-sm relative transition-all duration-300
                         hover:ring-2 hover:ring-verde-principal hover:scale-105 hover:shadow-lg
                         cursor-pointer"
              >
                {/* Badge superior */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-2xl
                    ${badgeType === 'gold' ? 'bg-yellow-100' : ''}
                    ${badgeType === 'silver' ? 'bg-gray-100' : ''}
                    ${badgeType === 'bronze' ? 'bg-orange-100' : ''}
                  `}>
                    {getBadgeIcon(badgeType)}
                  </div>
                </div>

                {/* Ícono circular de la clínica */}
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-3 mt-4 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: clinica.logo.colorFondo }}
                >
                  {clinica.logo.icono}
                </div>

                {/* Nombre de la clínica */}
                <h3 className="text-center font-bold text-gray-800 mb-2 text-base">
                  {clinica.nombre}
                </h3>

                {/* Distancia */}
                <div className="flex justify-center items-center gap-1 mb-3">
                  <span className="text-gray-600">📍</span>
                  <p className="text-sm text-gray-600">{clinica.ubicacion.distancia} km</p>
                </div>

                {/* Precio */}
                <div className="text-center mb-3">
                  <p className="text-2xl font-bold text-gray-800">
                    ${clinica.precio.consulta} UYU
                  </p>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  <StarRating 
                    rating={clinica.rating.promedio} 
                    showNumber={true}
                    size="sm"
                  />
                </div>

                {/* Badge de rango de precio */}
                <div className="flex justify-center mb-4">
                  <span className={`
                    inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                    ${clinica.precio.rango === 'Económico' ? 'bg-green-100 text-green-700' : ''}
                    ${clinica.precio.rango === 'Moderado' ? 'bg-blue-100 text-blue-700' : ''}
                    ${clinica.precio.rango === 'Premium' ? 'bg-yellow-100 text-yellow-700' : ''}
                  `}>
                    {clinica.precio.rango}
                  </span>
                </div>

                {/* Tipos de tratamiento */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-600 text-center mb-2">Tratamientos</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {clinica.servicios.slice(0, 4).map((servicio, idx) => (
                      <span 
                        key={idx}
                        className="text-lg" 
                        title={servicio.nombre}
                      >
                        {servicio.icono}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Horario */}
                <div className="text-center mb-4 bg-gray-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500 mb-1">Horarios</p>
                  <p className="text-sm font-medium text-gray-700">
                    {clinica.horario.dias}
                  </p>
                  <p className="text-xs text-gray-600">
                    {clinica.horario.apertura} - {clinica.horario.cierre}
                  </p>
                </div>

                {/* Botón */}
                <button
                  onClick={() => navigate(`/clinica/${clinica.id}`)}
                  style={{ backgroundColor: '#10B981' }}
                  className="w-full h-12 rounded-lg text-white font-semibold text-sm 
                           hover:opacity-90 transition-opacity"
                >
                  Elegir esta
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}