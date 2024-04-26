import { SiGmail, SiNextdotjs, SiRedux } from 'react-icons/si';
import { FaGitAlt, FaLinkedin, FaGithub, FaReact } from 'react-icons/fa';
import { CgAlbum } from 'react-icons/cg';
import { SiTypescript, SiNestjs, SiMongodb, SiPostgresql } from 'react-icons/si';
import { Icon, Image } from '@chakra-ui/react';

const menuLinks = [
  { name: 'About Me', route: '/about' },
  // { name: "Experience", route: "/experience" },
  // { name: "Projects", route: "/projects" },
  { name: 'Github', route: '/github' },
  { name: 'Articles', route: '/article' },
  { name: 'Contact', route: '/contact' },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Michael Rodriguez. All Rights Reserved.`,
  author: {
    name: 'Michael Rodriguez',
    accounts: [
      {
        url: 'https://github.com/xScottRodriguez',
        icon: <FaGithub />,
        name: 'Github',
        type: 'gray',
      },
      {
        url: 'https://www.linkedin.com/in/xmichaelrodriguez/',
        icon: <FaLinkedin />,
        name: 'Linkedin',
        type: 'linkedin',
      },

      {
        url: 'mailto:scottrodriguez2k@gmail.com',
        icon: <SiGmail />,
        name: 'Gmail',
        type: 'red',
      },
    ],
  },
};

const resume = {
  url: 'https://drive.google.com/file/d/1J8FCtlljESUKNneoiX2wa2LfwjswBEGt/view?usp=sharing',
  icon: <CgAlbum />,
  name: 'Resume',
};

const techStacks = [
  {
    name: 'Typescript',
    icon: <SiTypescript fontSize='20px' />,
    color: 'blue.500',
  },

  {
    name: 'Nest.js',
    icon: <SiNestjs fontSize='20px' />,
    color: 'red.600',
  },
  {
    name: 'React.js',
    icon: <FaReact fontSize='20px' />,
    color: 'blue.600',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs fontSize='20px' />,
    color: 'gray.900',
  },
  {
    name: 'Redux',
    icon: <SiRedux fontSize='20px' />,
    color: 'blue.600',
  },

  {
    name: 'Git & Github',
    icon: <FaGitAlt fontSize='20px' />,
    color: 'red.600',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb fontSize='20px' />,
    color: 'green.600',
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql fontSize='20px' />,
    color: 'blue.500',
  },
  {
    name: 'TypeORM',
    icon: <Image src='/typeorm.svg' alt='TypeOrm' h={30} w={30} />,
    color: 'gray.900',
  },
];

const companies = [
  {
    title: 'Hospital de Especialidades Nuestra Señora de la paz',
    alt: 'Hospital de Especialidades Nuestra Señora de la paz',
    url: 'https://hospitaldeespecialidades.com.sv/',
    role: 'Backend Developer',
    skills: ['TypeScript', 'JavaScript', 'Node.js', 'Nestjs', 'Express.js'],
    period: 'May 2023 - Current',
    logo: '/hospital.jpg',
  },
  {
    title: 'Suyanet',
    alt: 'Suyanet',
    url: 'https://suyanet.com.sv/',
    role: 'Backend Developer',
    skills: [
      'Typescript',
      'Node.js',
      'Nestjs',
      'TypeORM',
      'MySQL',
      'JWT',
      'Aws S3',
      "Api Whatsapp",
    ],
    period: 'January 2024 - Febrary 2024',
    logo: '/suyanet.png',
  },
  {
    title: 'Suyanet',
    alt: 'Suyanet',
    url: 'https://suyanet.com.sv/',
    role: 'Frontend Developer',
    skills: [
      'JavaScript',
      'Node.js',
      'React.js',
      'Redux Toolkit',
      'Redux RTK-Query',
    ],
    period: 'August 2023 - Current',
    logo: '/suyanet.png',
  },
  {
    title: 'BetaCode',
    alt: 'Betacode',
    url: 'https://www.facebook.com/betacodesv',
    role: 'Backend Developer',
    skills: ['JavaScript', 'Node.js', 'Strapi', 'JWT'],
    period: 'June 2022 - September 2022',
    logo: '/betacode.jpg',
  },
];

const educations = [
  {
    title: 'Universidad Gerardo Barrios (UGB)',
    alt: 'UGB',
    url: 'https://www.ugb.edu.sv/',
    role: 'Ingenieria en sistemas y redes informaticas',
    skills: [
      'Develop',
      'Electronics',
      'Project Management',
      'Servers',
      'Open Source',
    ],
    period: 'January 2018 - December 2023',
    logo: 'https://estudiantes.ugb.edu.sv/img/logologin.png',
  },
];

export { menuLinks, techStacks, siteConfig, resume, companies, educations };
