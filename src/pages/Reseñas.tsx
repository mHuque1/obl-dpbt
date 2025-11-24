import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { clinicas } from '../data/clinicas';
import { reseñas, distribucionRatings } from '../data/reseñas';
import StarRating from '../components/StarRating';
import Badge from '../components/Badge';

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
          <button onClick={() => navigate(`/clinica/${id}`)} className="text-2xl">
            ←
          </button>
          <h1 className="text-base font-semibold flex-1 text-center px-4">
            {clinica.nombre}
          </h1>
          <button className="text-2xl">⋮</button>
        </div>
      </div>

      {/* Rating agregado */}
      <div className="px-4 pt-6">
        <div className="text-center mb-2">
          <p className="text-5xl font-bold text-gray-800">{clinica.rating.promedio}</p>
          <div className="flex justify-center my-2">
            <StarRating 
              rating={clinica.rating.promedio} 
              showNumber={false}
              size="lg"
            />
          </div>
          <p className="text-sm text-gray-600">
            Basado en {clinica.rating.total} reseñas
          </p>
        </div>

        {/* Distribución de ratings */}
        <div className="mt-6 space-y-2">
          {distribucion.map((dist) => (
            <div key={dist.stars} className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-600 w-4">{dist.stars}</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-verde-principal"
                  style={{ width: `${dist.percentage}%` }}
                />
              </div>
              <span className="text-sm text-gray-600 w-10 text-right">{dist.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Toggle solo verificadas */}
      <div className="px-4 pt-6 pb-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Solo reseñas verificadas</p>
              <p className="text-xs text-gray-600">Mostrá solo las reseñas de visitas confirmadas</p>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input
                type="checkbox"
                checked={soloVerificadas}
                onChange={(e) => setSoloVerificadas(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-verde-principal transition-colors"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Lista de reseñas */}
      <div className="px-4 pb-6 space-y-4">
        {reseñasMostrar.map((reseña) => (
          <div key={reseña.id} className="border border-gray-200 rounded-lg p-4">
            {/* Header de la reseña */}
            <div className="flex items-start gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-600">
                {reseña.autor.avatar}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{reseña.autor.nombre}</p>
                {reseña.verificada && (
                  <Badge variant="verified" className="mt-1">
                    ✓ RESEÑA VERIFICADA
                  </Badge>
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
            <p className="text-sm text-gray-700 mb-3">
              {reseña.texto}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {reseña.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Fecha y foto */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Visita confirmada: {reseña.fechaVisita}</span>
              {reseña.imagen && <span>📷</span>}
            </div>

            {/* Imagen si existe */}
            {reseña.imagen && (
              <div className="mt-3 rounded-lg overflow-hidden h-48">
                <img
                  src={clinica.imagen}
                  alt="Foto de la visita"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}