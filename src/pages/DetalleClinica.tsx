import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { clinicas } from '../data/clinicas';
import StarRating from '../components/StarRating';
import Badge from '../components/Badge';
import Button from '../components/Button';

export default function DetalleClinica() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [servicioExpandido, setServicioExpandido] = useState<number | null>(0);
  
  const clinica = clinicas.find(c => c.id === id);

  if (!clinica) {
    return <div>Clínica no encontrada</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white p-4 border-b sticky top-0 z-10">
        <div className="flex items-center justify-center mb-3">
          <img
            src="/logo.png"
            alt="VetTransparency"
            className="h-10 w-auto"
          />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={() => navigate('/comparador')} className="text-2xl">
            ←
          </button>
          <h1 className="text-base font-semibold flex-1 text-center px-4">
            {clinica.nombre}
          </h1>
          <button className="text-2xl">⋮</button>
        </div>
      </div>

      {/* Imagen Hero */}
      <div className="px-4 pt-4">
        <div className="w-full h-48 rounded-2xl overflow-hidden">
          <img
            src={clinica.imagen}
            alt={clinica.nombre}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Badge de Transparencia */}
      <div className="px-4 pt-3">
        <Badge variant="transparency" className="text-xs">
          🟢 Nivel de Transparencia: {clinica.nivelTransparencia}
        </Badge>
      </div>

      {/* Rating y ubicación */}
      <div className="px-4 pt-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl font-bold">{clinica.rating.promedio}</span>
          <StarRating 
            rating={clinica.rating.promedio} 
            showNumber={false}
            size="sm"
          />
        </div>
        <p className="text-sm text-gray-600 mb-1">
          ⭐ {clinica.rating.promedio} ({clinica.rating.total} reseñas verificadas)
        </p>
        <p className="text-sm text-gray-600">
          📍 {clinica.ubicacion.distancia}km - {clinica.ubicacion.direccion}
        </p>
      </div>

      {/* Servicios y Precios */}
      <div className="px-4 pt-6">
        <h2 className="font-semibold text-gray-800 mb-3">Servicios y Precios</h2>
        <div className="space-y-2">
          {clinica.servicios.map((servicio, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setServicioExpandido(servicioExpandido === index ? null : index)}
                className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50"
              >
                <div className="text-left">
                  <p className="font-medium text-gray-800">{servicio.nombre}</p>
                  <p className="text-sm text-gray-600">Desde ${servicio.precio}</p>
                </div>
                <span className={`text-xl transition-transform ${servicioExpandido === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {servicioExpandido === index && (
                <div className="px-4 pb-4 bg-gray-50 space-y-2">
                  {servicio.incluye.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-verde-principal mt-0.5">✓</span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                  {servicio.noIncluye.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✗</span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certificaciones */}
      <div className="px-4 pt-6">
        <h2 className="font-semibold text-gray-800 mb-3">Certificaciones Verificadas</h2>
        <div className="flex flex-wrap gap-2">
          {clinica.certificaciones.map((cert, index) => (
            <Badge key={index} variant="certification">
              ✓ {cert}
            </Badge>
          ))}
        </div>
      </div>

      {/* Estado actual */}
      <div className="px-4 pt-6 pb-24">
        <h2 className="font-semibold text-gray-800 mb-3">Estado actual de la clínica</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">●</span>
            <div>
              <p className="font-medium text-green-700">{clinica.estado.mensaje}</p>
              <p className="text-sm text-gray-600">{clinica.estado.proximoCambio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex gap-3">
        <Button 
          variant="outline" 
          onClick={() => navigate(`/reseñas/${clinica.id}`)}
          className="flex-1"
        >
          Ver reseñas
        </Button>
        <Button 
          variant="primary" 
          className="flex-1"
        >
          Reservar turno
        </Button>
      </div>
    </div>
  );
}