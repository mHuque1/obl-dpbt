export interface Reseña {
  id: string;
  autor: {
    nombre: string;
    avatar: string;
  };
  verificada: boolean;
  rating: number;
  texto: string;
  tags: string[];
  fecha: string;
  fechaVisita: string;
  imagen?: string;
}

export const reseñas: Record<string, Reseña[]> = {
  'clinica-veterinaria-mimos': [
    {
      id: 'rev-1',
      autor: {
        nombre: 'Carlos M.',
        avatar: 'CM'
      },
      verificada: true,
      rating: 5,
      texto: 'El equipo fue increíblemente amable y cuidadoso con mi gato. Resolvieron todas mis dudas y el diagnóstico fue certero. Lo recomiendo totalmente',
      tags: ['Felinos', 'Consulta', 'Trato amable'],
      fecha: '2024-03-16T10:00:00Z',
      fechaVisita: '16/03/2024'
    },
    {
      id: 'rev-2',
      autor: {
        nombre: 'Ana P.',
        avatar: 'AP'
      },
      verificada: true,
      rating: 4,
      texto: 'Instalaciones muy limpias y modernas. El personal es muy profesional y se tomaron el tiempo para explicarme todo el procedimiento. Mi perro está mucho mejor',
      tags: ['Caninos', 'Cirugía'],
      fecha: '2024-01-12T10:00:00Z',
      fechaVisita: '12/01/2024',
      imagen: 'perro-feliz.jpg'
    }
  ],
  'vet-care-central': [
    {
      id: 'rev-3',
      autor: {
        nombre: 'María G.',
        avatar: 'MG'
      },
      verificada: true,
      rating: 5,
      texto: 'Excelente atención con mi gato. El Dr. fue muy paciente y explicó todo claramente. Muy recomendable para felinos.',
      tags: ['Felinos', 'Consulta', 'Trato amable'],
      fecha: '2024-03-10T10:00:00Z',
      fechaVisita: '10/03/2024'
    },
    {
      id: 'rev-4',
      autor: {
        nombre: 'Pedro L.',
        avatar: 'PL'
      },
      verificada: true,
      rating: 5,
      texto: 'Muy profesionales. Me atendieron rápido en una urgencia y salvaron a mi perro. Eternamente agradecido.',
      tags: ['Caninos', 'Urgencias', 'Profesionalismo'],
      fecha: '2024-02-28T10:00:00Z',
      fechaVisita: '28/02/2024'
    }
  ],
  'patitas-felices': [
    {
      id: 'rev-5',
      autor: {
        nombre: 'Laura S.',
        avatar: 'LS'
      },
      verificada: true,
      rating: 5,
      texto: 'La mejor veterinaria de Montevideo. Mi gata es muy nerviosa y aquí la tratan con mucho cuidado. Ambiente muy tranquilo.',
      tags: ['Felinos', 'Ambiente tranquilo', 'Trato amable'],
      fecha: '2024-03-15T10:00:00Z',
      fechaVisita: '15/03/2024'
    }
  ],
  'salud-animal-sur': [
    {
      id: 'rev-6',
      autor: {
        nombre: 'Jorge M.',
        avatar: 'JM'
      },
      verificada: true,
      rating: 4,
      texto: 'Buena relación calidad-precio. Atención correcta y profesional.',
      tags: ['Consulta', 'Económico'],
      fecha: '2024-03-05T10:00:00Z',
      fechaVisita: '05/03/2024'
    }
  ]
};

// Distribución de ratings para la pantalla de reseñas
export const distribucionRatings: Record<string, { stars: number; percentage: number }[]> = {
  'clinica-veterinaria-mimos': [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 }
  ],
  'vet-care-central': [
    { stars: 5, percentage: 80 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 }
  ],
  'patitas-felices': [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 8 },
    { stars: 3, percentage: 1 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 }
  ],
  'salud-animal-sur': [
    { stars: 5, percentage: 70 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 7 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ]
};