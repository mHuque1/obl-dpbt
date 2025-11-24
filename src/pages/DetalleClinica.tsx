import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { clinicas } from '../data/clinicas';
import StarRating from '../components/StarRating';

export default function DetalleClinica() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [servicioExpandido, setServicioExpandido] = useState<number | null>(0);
  
  const clinica = clinicas.find(c => c.id === id);

  if (!clinica) {
    return <div>Clínica no encontrada</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <button 
            onClick={() => navigate('/comparador')} 
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Imagen Hero */}
        <div className="px-4 pt-4">
          <div className="w-full h-48 rounded-2xl overflow-hidden bg-gray-200">
            <img
              src={clinica.imagen}
              alt={clinica.nombre}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Badge de Transparencia */}
        <div className="px-4 pt-4">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{ backgroundColor: '#F6FFED', color: '#52C41A' }}
          >
            ● Nivel de Transparencia: {clinica.nivelTransparencia}
          </div>
        </div>

        {/* Rating y ubicación */}
        <div className="px-4 pt-4">
          <div className="flex items-center gap-2 mb-2">
            <StarRating 
              rating={clinica.rating.promedio} 
              showNumber={true}
              size="md"
            />
          </div>
          <p className="text-sm text-gray-600 mb-2">
            📍 {clinica.ubicacion.distancia}km - {clinica.ubicacion.direccion}, {clinica.ubicacion.barrio}
          </p>
        </div>

        {/* Servicios y Precios */}
        <div className="px-4 pt-6">
          <h2 className="font-bold text-gray-900 mb-3 text-base">Servicios y Precios</h2>
          <div className="space-y-2">
            {clinica.servicios.map((servicio, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setServicioExpandido(servicioExpandido === index ? null : index)}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 text-sm">{servicio.nombre}</p>
                    <p className="text-sm text-gray-600 mt-0.5">Desde ${servicio.precio}</p>
                  </div>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform ${servicioExpandido === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {servicioExpandido === index && (
                  <div className="px-4 pb-4 bg-gray-50 border-t border-gray-200">
                    <div className="pt-3 space-y-2">
                      {servicio.incluye.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4" style={{ color: '#52C41A' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                      {servicio.noIncluye.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-500">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div className="px-4 pt-6">
          <h2 className="font-bold text-gray-900 mb-3 text-base">Certificaciones Verificadas</h2>
          <div className="flex flex-wrap gap-2">
            {clinica.certificaciones.map((cert, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: '#F6FFED', color: '#52C41A' }}
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Estado actual */}
        <div className="px-4 pt-6 pb-24">
          <h2 className="font-bold text-gray-900 mb-3 text-base">Estado actual de la clínica</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#52C41A' }}></div>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">{clinica.estado.mensaje}</p>
                <p className="text-sm text-gray-600">{clinica.estado.proximoCambio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex gap-3 max-w-2xl mx-auto">
          <button
            onClick={() => navigate(`/reseñas/${clinica.id}`)}
            className="flex-1 h-12 px-6 rounded-lg border-2 text-gray-900 font-semibold text-sm
                     hover:bg-gray-50 transition-colors"
            style={{ borderColor: '#52C41A', color: '#52C41A' }}
          >
            Ver reseñas
          </button>
          <button
            style={{ backgroundColor: '#52C41A' }}
            className="flex-1 h-12 px-6 rounded-lg text-white font-semibold text-sm
                     hover:opacity-90 transition-opacity"
          >
            Reservar turno
          </button>
        </div>
      </div>
    </div>
  );
}