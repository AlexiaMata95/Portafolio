const experiences = [
  {
    company: 'PROFECO',
    role: 'Desarrollador Fullstack',
    startDate: new Date('2025-03-16'), // Formato Date para cálculo
    endDate: null, // Null para actual
    tasks: [
      'Desarrollo de intranet institucional y portal del empleado utilizando PHP, React JS y MySQL.',
      'Integración de API de Google Maps para generación de mapas interactivos con ruteo dinámico.',
      'Implementación de funcionalidades con React Hooks, React Router y drag & drop.',
      'Creación de servicio en C# para lectura de códigos QR.',
      'Optimización del rendimiento frontend (lazy loading, memoization), reduciendo tiempos de carga en ≈25%.',
      'Colaboración en despliegues en servidores Linux y control de versiones con Git/GitHub.',
    ],
  },
  {
    company: 'Pintacomex',
    role: 'Java Backend Developer',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2025-01-01'),
    tasks: [
      'Migración de un servicio monolítico a microservicios REST con Spring Boot para facturación CFDI 4.0.',
      'Reducción del tiempo de generación de facturas en ≈30%.',
      'Desarrollo backend en Java 8+, pruebas unitarias con JUnit y Mockito.',
      'Coordinación de integración entre microservicios y optimización de rendimiento.',
    ],
  },
  {
    company: 'CONAHCyT – CIICAp',
    role: 'Ingeniera de Modelado y Simulación con IA',
    startDate: new Date('2022-01-21'),
    endDate: new Date('2025-01-31'),
    tasks: [
      'Desarrollo de modelos de redes neuronales artificiales para simulación de procesos energéticos.',
      'Automatización de flujos con Python y Bash scripting.',
      'Análisis de datos cuantitativos y generación de reportes técnicos.',
      'Coordinación de equipos de investigación y control de calidad en publicaciones.',
    ],
  },
];

export default experiences;