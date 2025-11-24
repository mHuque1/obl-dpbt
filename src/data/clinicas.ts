export interface Clinica {
  id: string;
  nombre: string;
  imagen: string;
  logo: {
    icono: string;
    colorFondo: string;
  };
  ubicacion: {
    distancia: number;
    direccion: string;
    barrio: string;
  };
  rating: {
    promedio: number;
    total: number;
  };
  precio: {
    consulta: number;
    urgencia: number;
    rango: 'Económico' | 'Moderado' | 'Premium';
  };
  horario: {
    dias: string;
    apertura: string;
    cierre: string;
    abierto24h: boolean;
  };
  servicios: Array<{
    nombre: string;
    precio: number;
    icono: string;
    incluye: string[];
    noIncluye: string[];
  }>;
  certificaciones: string[];
  nivelTransparencia: 'ALTO' | 'MEDIO' | 'BAJO';
  filtrosEmocionales: {
    idealGatos: boolean;
    menosEstresante: boolean;
    tratoCálido: boolean;
    ambienteTranquilo: boolean;
  };
  estado: {
    abierto: boolean;
    mensaje: string;
    proximoCambio: string;
  };
}

export const clinicas: Clinica[] = [
  {
    id: 'vet-care-central',
    nombre: 'Vet Care Central',
    imagen: '/clinica.png',
    logo: {
      icono: '🐾',
      colorFondo: '#FFF9C4'
    },
    ubicacion: {
      distancia: 2.5,
      direccion: 'Av. 18 de Julio 1234',
      barrio: 'Centro'
    },
    rating: {
      promedio: 4.5,
      total: 234
    },
    precio: {
      consulta: 1200,
      urgencia: 1800,
      rango: 'Moderado'
    },
    horario: {
      dias: 'L-V',
      apertura: '9:00',
      cierre: '20:00',
      abierto24h: false
    },
    servicios: [
      {
        nombre: 'Consulta General',
        precio: 900,
        icono: '🏥',
        incluye: [
          'Examen físico completo',
          'Diagnóstico preliminar'
        ],
        noIncluye: [
          'Medicación',
          'Estudios de laboratorio'
        ]
      },
      {
        nombre: 'Urgencias 24h',
        precio: 1500,
        icono: '🚨',
        incluye: [
          'Atención inmediata',
          'Evaluación completa',
          'Monitoreo constante'
        ],
        noIncluye: [
          'Cirugías complejas'
        ]
      },
      {
        nombre: 'Vacunación',
        precio: 600,
        icono: '💉',
        incluye: [
          'Vacuna importada',
          'Carnet de vacunación'
        ],
        noIncluye: [
          'Consulta médica'
        ]
      }
    ],
    certificaciones: [
      'Habilitado por MSP',
      'Sociedad de Veterinaria'
    ],
    nivelTransparencia: 'ALTO',
    filtrosEmocionales: {
      idealGatos: true,
      menosEstresante: true,
      tratoCálido: true,
      ambienteTranquilo: true
    },
    estado: {
      abierto: true,
      mensaje: 'Atendiendo ahora',
      proximoCambio: 'Cierra a las 20:30'
    }
  },
  {
    id: 'patitas-felices',
    nombre: 'Patitas Felices',
    imagen: '/clinica.png',
    logo: {
      icono: '🐶',
      colorFondo: '#FFE0B2'
    },
    ubicacion: {
      distancia: 4.8,
      direccion: 'Av. Italia 5678',
      barrio: 'Pocitos'
    },
    rating: {
      promedio: 4.8,
      total: 187
    },
    precio: {
      consulta: 1350,
      urgencia: 2000,
      rango: 'Moderado'
    },
    horario: {
      dias: 'L-V',
      apertura: '8:00',
      cierre: '20:00',
      abierto24h: false
    },
    servicios: [
      {
        nombre: 'Consulta General',
        precio: 1350,
        icono: '🏥',
        incluye: [
          'Examen físico completo',
          'Diagnóstico preliminar',
          'Recomendaciones nutricionales'
        ],
        noIncluye: [
          'Medicación',
          'Estudios de laboratorio'
        ]
      },
      {
        nombre: 'Urgencias 24h',
        precio: 2000,
        icono: '🚨',
        incluye: [
          'Atención inmediata',
          'Evaluación completa',
          'Internación de emergencia'
        ],
        noIncluye: []
      },
      {
        nombre: 'Peluquería',
        precio: 800,
        icono: '✂️',
        incluye: [
          'Baño completo',
          'Corte de pelo',
          'Corte de uñas'
        ],
        noIncluye: [
          'Tratamientos especiales'
        ]
      }
    ],
    certificaciones: [
      'Habilitado por MSP',
      'Experto en felinos',
      'Urgencias certificadas'
    ],
    nivelTransparencia: 'ALTO',
    filtrosEmocionales: {
      idealGatos: true,
      menosEstresante: true,
      tratoCálido: true,
      ambienteTranquilo: false
    },
    estado: {
      abierto: true,
      mensaje: 'Atendiendo ahora',
      proximoCambio: 'Cierra a las 20:00'
    }
  },
  {
    id: 'salud-animal-sur',
    nombre: 'Salud Animal Sur',
    imagen: '/clinica.png',
    logo: {
      icono: '🏥',
      colorFondo: '#C8E6C9'
    },
    ubicacion: {
      distancia: 8.1,
      direccion: 'Bvar. Artigas 9012',
      barrio: 'Punta Carretas'
    },
    rating: {
      promedio: 4.2,
      total: 156
    },
    precio: {
      consulta: 1100,
      urgencia: 1600,
      rango: 'Económico'
    },
    horario: {
      dias: 'L-V',
      apertura: '10:00',
      cierre: '18:00',
      abierto24h: false
    },
    servicios: [
      {
        nombre: 'Consulta General',
        precio: 1100,
        icono: '🏥',
        incluye: [
          'Examen físico',
          'Diagnóstico básico'
        ],
        noIncluye: [
          'Medicación',
          'Estudios'
        ]
      },
      {
        nombre: 'Vacunación',
        precio: 550,
        icono: '💉',
        incluye: [
          'Vacuna nacional',
          'Registro'
        ],
        noIncluye: [
          'Consulta'
        ]
      }
    ],
    certificaciones: [
      'Habilitado por MSP'
    ],
    nivelTransparencia: 'MEDIO',
    filtrosEmocionales: {
      idealGatos: false,
      menosEstresante: false,
      tratoCálido: true,
      ambienteTranquilo: true
    },
    estado: {
      abierto: true,
      mensaje: 'Atendiendo ahora',
      proximoCambio: 'Cierra a las 18:00'
    }
  },
  {
    id: 'clinica-veterinaria-mimos',
    nombre: 'Clínica Veterinaria Mimos',
    imagen: '/clinica.png',
    logo: {
      icono: '💚',
      colorFondo: '#B2DFDB'
    },
    ubicacion: {
      distancia: 1.2,
      direccion: 'Av. 8 de Octubre 3355, Montevideo',
      barrio: 'Tres Cruces'
    },
    rating: {
      promedio: 4.7,
      total: 234
    },
    precio: {
      consulta: 900,
      urgencia: 1500,
      rango: 'Moderado'
    },
    horario: {
      dias: 'L-V',
      apertura: '9:00',
      cierre: '20:30',
      abierto24h: false
    },
    servicios: [
      {
        nombre: 'Consulta General',
        precio: 900,
        icono: '🏥',
        incluye: [
          'Examen físico completo',
          'Diagnóstico preliminar'
        ],
        noIncluye: [
          'Medicación',
          'Estudios de laboratorio'
        ]
      },
      {
        nombre: 'Urgencias 24h',
        precio: 1500,
        icono: '🚨',
        incluye: [
          'Atención inmediata',
          'Evaluación completa'
        ],
        noIncluye: []
      },
      {
        nombre: 'Vacunación',
        precio: 600,
        icono: '💉',
        incluye: [
          'Vacuna aprobada',
          'Certificado oficial'
        ],
        noIncluye: []
      }
    ],
    certificaciones: [
      'Habilitado por MSP',
      'Sociedad de Veterinaria'
    ],
    nivelTransparencia: 'ALTO',
    filtrosEmocionales: {
      idealGatos: true,
      menosEstresante: true,
      tratoCálido: true,
      ambienteTranquilo: true
    },
    estado: {
      abierto: true,
      mensaje: 'Atendiendo ahora',
      proximoCambio: 'Cierra a las 20:30'
    }
  }
];