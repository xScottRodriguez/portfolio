import { useState } from 'react';
import { LanguageContext } from './LanguageContext';

const initialLanguage = 'en';
const translations = {
  es: {
    titleToggleLanguage: 'Idioma',
    spanishToggle: 'Español',
    englishToggle: 'Ingles',
    profileHeading: 'Hey, Yo Soy Michael Lovo!',
    profileParagraph1: 'Desarrollador FullStack de El Salvador',
    profileParagraph2: 'Enfocado en',
    profileParagraphRest: 'Mi pasion es el desarrollo de aplicaciones webs',
    techStackTitle: 'Stack de Tecnologias',
    techStackDescription:
      'Una lista de mis herramientas y tecnologías favoritas que uso regularmente.',
    LiveProjectTitle: 'Proyectos en vivo',
    LiveProjectDescription: 'Lista de proyectos en desarrollo actualmente',
    aboutTitle: 'Sobre Mi',
    aboutParagraph: `Desarrollador con experiencia en Typescript, Nest.js, JWT,MongoDB, Postgres, Next.js, Chakra UI. Busco oportunidades en proyectos interesantes. Habilidades en trabajo en equipo y comunicación. Intereses en streaming y videojuegos.`,
    aboutParagraph2: ``,
    aboutCareer: 'Carrera Profesional',
    aboutEducation: 'Educacion',
    githubParahraphText1:
      'Lista de mis principales repositorios de github destacados . 🔖',
    githubParahraphText2:
      '¡Siéntete libre de hacer una visita y no olvides dejarme una estrella! ⭐ ',
    contactTitle: `Pongámonos en contacto. Déjeme su mensaje 💬`,
    contactDescription: 'No dude en ponerse en contacto conmigo.!',
    mediumTitle: 'Articulos',
    mediumText:
      'Listado de artículos relacionados con todo mi conocimiento tech compartiendo al público. 📖',
    mediumSubText: 'Esté atento a más artículos',
  },
  en: {
    titleToggleLanguage: 'Language',
    spanishToggle: 'Spanish',
    englishToggle: 'English',
    profileHeading: `Hey, I'm  Michael Lovo!`,
    profileParagraph1: ' FullStack Developer from El Salvador',
    profileParagraph2: 'Focused on',
    profileParagraphRest:
      'My passion is the development of server-side and client-side web applications',
    techStackTitle: 'Tech Stack',
    techStackDescription:
      'A list of my favorite tools and technologies that I use on a regular basis.',
    LiveProjectTitle: 'Live Project',
    LiveProjectDescription: 'List of projects currently in development',
    aboutTitle: 'About Me',
    aboutParagraph: `Developer with experience in Typescript, Nest.js, JWT, MongoDB, Postgres, Next.js, and Chakra UI. I am looking for opportunities in interesting projects. Communication and teamwork skills. Communication skills. Interested in streaming and video games.`,
    aboutParagraph2: ` `,
    aboutCareer: 'Career',
    aboutEducation: 'Education',
    githubParahraphText1: 'List of my top featured github repositories . 🔖',
    githubParahraphText2: `Feel free to pay me a visit and don't forget to leave me a star! ⭐ `,
    contactTitle: `Let's get in touch. Leave me your message. 💬`,
    contactDescription: 'Do not hesitate to contact me!',
    mediumTitle: 'Articles',
    mediumText:
      'List of articles related to all my tech knowledge sharing to the public. 📖',
    mediumSubText: 'Stay tuned for more articles',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const handleLanguage = (e) => {
    if (e === 'es') {
      setLanguage('es');
      setTexts(translations.es);
    } else {
      setLanguage('en');
      setTexts(translations.en);
    }
  };

  return (
    <LanguageContext.Provider value={{ texts, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
