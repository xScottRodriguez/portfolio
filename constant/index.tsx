import { IconType } from 'react-icons'
import { SiGmail, SiNextdotjs, SiPrisma, SiRedux } from 'react-icons/si'
import {
  FaGitAlt,
  FaLinkedin,
  FaGithub,
  FaReact,
  FaDocker
} from 'react-icons/fa'
import { CgAlbum } from 'react-icons/cg'
import { SiTypescript, SiNestjs, SiMongodb, SiPostgresql } from 'react-icons/si'
import { Icon, Image, Menu } from '@chakra-ui/react'

interface Company {
  title: string
  alt: string
  url: string
  role: string
  skills: string[]
  period: string
  logo: string
  id: string
}

interface MenuLink {
  name: string
  route: string
}
export enum AccountType {
  Gray = 'gray',
  Linkedin = 'linkedin',
  Red = 'red'
}

// Interfaz para la cuenta de autor
export interface AuthorAccount {
  url: string
  icon: IconType
  name: string
  type: AccountType
}

// Interfaz para el autor
export interface Author {
  name: string
  accounts: AuthorAccount[]
}

// Interfaz para la configuración del sitio
export interface SiteConfig {
  copyright: string
  author: Author
}
export interface Resume {
  url: string
  icon: IconType
  name: string
}

export interface TechStack {
  name: string
  icon: IconType
  color: string // Usa string para colores en formato de cadena
}
const menuLinks: MenuLink[] = [
  { name: 'about', route: '/about' },
  { name: 'github', route: '/github' },
  { name: 'contact', route: '/contact' }
]

const siteConfig: SiteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Michael Rodriguez. All Rights Reserved.`,
  author: {
    name: 'Michael Rodriguez',
    accounts: [
      {
        url: 'https://github.com/xScottRodriguez',
        icon: FaGithub,
        name: 'Github',
        type: AccountType.Gray
      },
      {
        url: 'https://www.linkedin.com/in/xmichaelrodriguez/',
        icon: FaLinkedin,
        name: 'Linkedin',
        type: AccountType.Linkedin
      },

      {
        url: 'mailto:scottrodriguez2k@gmail.com',
        icon: SiGmail,
        name: 'Gmail',
        type: AccountType.Red
      }
    ]
  }
}

const resume: Resume = {
  url: 'https://drive.google.com/file/d/1HQww0Lvu_2IXZs1092y208TKYBajw3uF/view?usp=sharing',

  icon: () => <CgAlbum />,
  name: 'Resume'
}

const techStacks: TechStack[] = [
  {
    name: 'Typescript',
    icon: () => <SiTypescript fontSize="20px" />,
    color: 'blue.500'
  },

  {
    name: 'React.js',
    icon: () => <FaReact fontSize="20px" />,
    color: 'blue.600'
  },
  {
    name: 'Next.js',
    icon: () => <SiNextdotjs fontSize="20px" />,
    color: 'gray.900'
  },
  {
    name: 'Redux',
    icon: () => <SiRedux fontSize="20px" />,
    color: 'blue.600'
  },
  {
    name: 'Nest.js',
    icon: () => <SiNestjs fontSize="20px" />,
    color: 'red.600'
  },

  {
    name: 'MongoDB',
    icon: () => <SiMongodb fontSize="20px" />,
    color: 'green.600'
  },
  {
    name: 'PostgreSQL',
    icon: () => <SiPostgresql fontSize="20px" />,
    color: 'blue.500'
  },
  {
    name: 'TypeORM',
    icon: () => <Image src="/typeorm.svg" alt="TypeOrm" h={30} w={30} />,
    color: 'gray.900'
  },
  {
    name: 'Prisma',
    icon: () => <SiPrisma fontSize={'20px'} />,
    color: 'gray.900'
  },
  {
    name: 'Git & Github',
    icon: () => <FaGitAlt fontSize="20px" />,
    color: 'red.600'
  },
  {
    name: 'Docker',
    icon: () => <FaDocker fontSize="20px" />,
    color: 'blue.600'
  }
]

const companies: Company[] = [
  {
    id: 'consultora',
    title: 'Sistemas Pliret (Outsourcing Banco Integral)',
    alt: 'Sistemas Pliret Consultora',
    url: 'https://www.bancointegral.com/',
    role: 'role',
    skills: [
      'TypeScript',
      'Docker',
      'Microservices',
      'Nestjs',
      'Sequelize',
      'SQL Server'
    ],
    period: 'period',
    logo: '/pliret.jpg'
  },

  {
    id: 'hospital',
    title: 'Hospital de Especialidades Nuestra Señora de la paz',
    alt: 'Hospital de Especialidades Nuestra Señora de la paz',
    url: 'https://hospitaldeespecialidades.com.sv/',
    role: 'role',
    skills: ['TypeScript', 'JavaScript', 'Node.js', 'Nestjs', 'Express.js'],
    period: 'period',
    logo: '/hospital.jpg'
  },
  {
    title: 'Suyanet',
    alt: 'Suyanet',
    id: 'suyanet-back',
    url: 'https://suyanet.com.sv/',
    role: 'role',
    skills: [
      'Typescript',
      'Node.js',
      'Nestjs',
      'TypeORM',
      'MySQL',
      'JWT',
      'Aws S3',
      'Api Whatsapp'
    ],
    period: 'period',
    logo: '/suyanet.png'
  },
  {
    title: 'Suyanet',
    alt: 'Suyanet',
    id: 'suyanet-front',
    url: 'https://suyanet.com.sv/',
    role: 'role',
    skills: [
      'JavaScript',
      'Node.js',
      'React.js',
      'Redux Toolkit',
      'Redux RTK-Query'
    ],
    period: 'period',
    logo: '/suyanet.png'
  }
]

const educations: Company[] = [
  {
    title: 'Universidad Gerardo Barrios (UGB)',
    alt: 'UGB',
    id: 'ugb',
    url: 'https://ugb.edu.sv/',
    role: 'role',
    skills: [
      'Develop',
      'Electronics',
      'Project Management',
      'Servers',
      'Open Source'
    ],
    period: 'period',
    logo: 'https://estudiantes.ugb.edu.sv/img/logologin.png'
  }
]

export { menuLinks, techStacks, siteConfig, resume, companies, educations }
