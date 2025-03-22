export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  // {
  //   id: 3,
  //   name: 'Work',
  //   href: '#work',
  // },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: '',
    position: '',
    img: 'assets/review1.png',
    review:
      '',
  },
  {
    id: 2,
    name: '',
    position: '',
    img: 'assets/review2.png',
    review:
      ``,
  },
  {
    id: 3,
    name: '',
    position: '',
    img: 'assets/review3.png',
    review:
      '',
  },
  {
    id: 4,
    name: '',
    position: '',
    img: 'assets/review4.png',
    review:
      '',
  },
];

export const myProjects = [
  {
    title: 'StoreIt - Storage Management Platform',
    desc: 'StoreIt is a real time Google Drive Clone that allows to store data in the cloud.',
    subdesc:
      'Built with Next.js 15, Tailwind CSS, TypeScript.',
    href: 'https://store-it-navy-ten.vercel.app/',
    texture: '/textures/project/project1.mkv',
    logo: '/assets/project-logo1.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/next.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is an application that empowers users to create photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 15, Cloudinary AI, Clerk, and Stripe.',
    href: '',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/next.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Subdub - Subscription Management System',
    desc: 'Subdub is an application that manages real users and subscriptions with authentications, database and API architecture.',
    subdesc:
      'Built with Express.js, Mongo DB.',
    href: '',
    texture: '/textures/project/project6.mkv',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Express.js',
        path: '/assets/express.png',
      },
      {
        id: 2,
        name: 'MongoDB',
        path: 'assets/mongodb.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
    ],
  },
];

export interface Sizes {
  deskScale: [number, number, number];
  deskPosition: [number, number, number];
  cubePosition: [number, number, number];
  reactLogoPosition: [number, number, number];
  ringPosition: [number, number, number];
  targetPosition: [number, number, number];
}

export const calculateSizes = ({ isSmall, isMobile, isTablet }: { isSmall: boolean, isMobile: boolean, isTablet: boolean }): Sizes => {
  return {
    deskScale: isSmall ? [0.05, 0.05, 0.05] : isMobile ? [0.06, 0.06, 0.06] : [0.065, 0.065, 0.065],
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};


export const workExperiences = [
  {
    id: 1,
    name: '',
    pos: 'Fullstack Developer',
    duration: '2024 - Present',
    title: "",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: '',
    pos: 'Web Developer',
    duration: '2021 - 2023',
    title: "",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: '',
    pos: 'Junior Web Developer',
    duration: '2020 - 2021',
    title: "",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];