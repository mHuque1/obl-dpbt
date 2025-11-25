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
    },
    {
      id: 'rev-nv-1',
      autor: {
        nombre: 'Usuario Google',
        avatar: 'UG'
      },
      verificada: false,
      rating: 3,
      texto: 'La atención fue buena pero tuve que esperar mucho tiempo a pesar de tener hora agendada.',
      tags: ['Espera', 'Atención'],
      fecha: '2024-02-15T14:30:00Z',
      fechaVisita: '15/02/2024'
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
    },
    {
      id: 'rev-nv-2',
      autor: {
        nombre: 'Juan R.',
        avatar: 'JR'
      },
      verificada: false,
      rating: 4,
      texto: 'Buenos profesionales, aunque el local es un poco pequeño.',
      tags: ['Instalaciones'],
      fecha: '2024-01-20T09:15:00Z',
      fechaVisita: '20/01/2024'
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
    },
    {
      id: 'rev-7',
      autor: {
        nombre: 'Roberto K.',
        avatar: 'RK'
      },
      verificada: true,
      rating: 5,
      texto: 'Excelente experiencia. Llevé a mi perro para una cirugía y todo salió perfecto. El equipo es muy profesional y se nota que aman lo que hacen.',
      tags: ['Caninos', 'Cirugía', 'Profesionalismo'],
      fecha: '2024-03-20T10:00:00Z',
      fechaVisita: '20/03/2024',
      imagen: 'perro-recuperacion.jpg'
    },
    {
      id: 'rev-8',
      autor: {
        nombre: 'Sofía T.',
        avatar: 'ST'
      },
      verificada: true,
      rating: 4,
      texto: 'Muy buena atención y precios razonables. Mi conejo fue atendido rápidamente en una urgencia. Solo mejoraría el tiempo de espera.',
      tags: ['Urgencias', 'Exóticos', 'Económico'],
      fecha: '2024-03-18T10:00:00Z',
      fechaVisita: '18/03/2024'
    },
    {
      id: 'rev-9',
      autor: {
        nombre: 'Martín D.',
        avatar: 'MD'
      },
      verificada: true,
      rating: 5,
      texto: 'Increíble el nivel de detalle en el diagnóstico. Me explicaron todo paso a paso y mi gato está completamente recuperado. Los recomiendo al 100%.',
      tags: ['Felinos', 'Consulta', 'Diagnóstico certero'],
      fecha: '2024-03-12T10:00:00Z',
      fechaVisita: '12/03/2024'
    },
    {
      id: 'rev-nv-3',
      autor: {
        nombre: 'Lucía B.',
        avatar: 'LB'
      },
      verificada: false,
      rating: 5,
      texto: 'Siempre traigo a mis mascotas aquí, nunca he tenido un problema. Son los mejores.',
      tags: ['Confianza', 'Trayectoria'],
      fecha: '2024-03-01T11:20:00Z',
      fechaVisita: '01/03/2024'
    },
    {
      id: 'rev-nv-4',
      autor: {
        nombre: 'Anonimo',
        avatar: 'AN'
      },
      verificada: false,
      rating: 2,
      texto: 'No me gustó el trato de la recepcionista, aunque los veterinarios son buenos.',
      tags: ['Recepción', 'Trato'],
      fecha: '2024-02-10T16:45:00Z',
      fechaVisita: '10/02/2024'
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
    },
    {
      id: 'rev-nv-5',
      autor: {
        nombre: 'Carlos V.',
        avatar: 'CV'
      },
      verificada: false,
      rating: 5,
      texto: 'Muy buena atención, precios accesibles.',
      tags: ['Precio', 'Atención'],
      fecha: '2024-02-25T10:30:00Z',
      fechaVisita: '25/02/2024'
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