// mocks/mockSkills.js - Mock para habilidades técnicas y blandas

// Habilidades Técnicas (con categorías y logos placeholders; ajusta paths a tus assets)
const technicalSkills = [
  {
    name: 'Java',
    level: 8,
    category: 'Backend',
    logo: 'img/java.png', 
  },
  {
    name: 'Spring Boot',
    level: 8,
    category: 'Backend',
    logo: 'img/spring.png',
  },
  {
    name: 'React JS',
    level: 7,
    category: 'Frontend',
    logo: 'img/react.png',
  },
  {
    name: 'JavaScript (ES6+)',
    level: 7,
    category: 'Frontend',
    logo: 'img/javascript.png',
  },
  {
    name: 'HTML5',
    level: 8,
    category: 'Frontend',
    logo: 'img/html.png',
  },
  {
    name: 'CSS',
    level: 7,
    category: 'Frontend',
    logo: 'img/css.png',
  },
  {
    name: 'PHP',
    level: 6,
    category: 'Backend',
    logo: 'img/php.png', // Agrega asset si tienes
  },
  {
    name: 'Node.js',
    level: 6,
    category: 'Backend',
    logo: 'img/nodejs.png',
  },
  {
    name: 'MySQL',
    level: 7,
    category: 'Databases',
    logo: 'img/mysql.png',
  },
  {
    name: 'PostgreSQL',
    level: 7,
    category: 'Databases',
    logo: 'img/postgres.png', // Agrega asset
  },
  {
    name: 'JUnit',
    level: 7,
    category: 'Testing',
    logo: 'img/testing.png', // Agrega asset
  },
  {
    name: 'Mockito',
    level: 7,
    category: 'Testing',
    logo: 'img/testing.png', // Agrega asset
  },
  {
    name: 'Git',
    level: 8,
    category: 'Tools',
    logo: 'img/github.png',
  },
  {
    name: 'Docker (básico)',
    level: 5,
    category: 'Tools',
    logo: 'img/docker.png', // Agrega asset
  },
  {
    name: 'AWS (EC2, S3, IAM)',
    level: 6,
    category: 'Cloud',
    logo: 'img/aws.png', // Agrega asset
  },
];

// Habilidades Blandas (con categorías e íconos placeholders; usa react-icons o assets)
const softSkills = [
  {
    name: 'Trabajo en equipo',
    category: 'Interpersonal',
    icon: 'FaUsers', // Ejemplo con react-icons
  },
  {
    name: 'Comunicación clara',
    category: 'Interpersonal',
    icon: 'FaComments',
  },
  {
    name: 'Inteligencia emocional',
    category: 'Personal',
    icon: 'FaBrain',
  },
  {
    name: 'Adaptabilidad',
    category: 'Personal',
    icon: 'FaExchangeAlt',
  },
  {
    name: 'Orientación a resultados',
    category: 'Personal',
    icon: 'FaChartLine',
  },
  {
    name: 'Pensamiento analítico',
    category: 'Cognitivo',
    icon: 'FaLightbulb',
  },
  {
    name: 'Resolución de problemas',
    category: 'Cognitivo',
    icon: 'FaPuzzlePiece',
  },
  {
    name: 'Aprendizaje continuo',
    category: 'Personal',
    icon: 'FaBookOpen',
  },
];

export { technicalSkills, softSkills };