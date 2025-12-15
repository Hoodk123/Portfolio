import { Project, NavItem } from './types';

export const PERSONAL_INFO = {
  name: "Shyaka Kevin",
  role: "Full-Stack Developer",
  tagline: "Cloud Infrastructure Learner & Full-Stack Engineer",
  email: "contact@shyakakevin.site.com", // Placeholder
  resumeLink: "https://drive.google.com/file/d/17CzHR1RAFLgPX10zb380-wVR5jAmHLUg/view?usp=drive_link" // Placeholder for PDF link
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Elevator Pitch', path: '/elevator-pitch' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'SOAR Automation System',
    category: 'Full-Stack / Architecture',
    stack: ['Python', 'Flask', 'React', 'Docker', 'Kubernetes'],
    description: 'Designed and deployed a complete full-stack security orchestration, automation, and response (SOAR) system.',
    challenge: 'Orchestrating multiple microservices with Docker/Kubernetes was complex regarding inter-service communication.',
    learning: 'Deepened understanding of CI/CD pipelines, container orchestration, and infrastructure scaling.',
  },
  {
    id: '2',
    title: 'To-Do List Application',
    category: 'Full-Stack / Database',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    description: 'Built a functional CRUD application with persistent state management.',
    challenge: 'Implementing secure authentication (JWT) and properly integrating MongoDB for state persistence.',
    learning: 'Gained proficiency in modern full-stack development patterns and RESTful API design.',
  },
  {
    id: '3',
    title: 'Web3 Smart Contracts',
    category: 'Blockchain / Backend',
    stack: ['Hardhat', 'TypeScript', 'Solidity', 'Ethers.js'],
    description: 'Developed and deployed a series of functional smart contracts for decentralized applications.',
    challenge: 'Ensuring contract security and efficient gas usage during deployment to testnets.',
    learning: 'Mastering the Web3 development lifecycle and unit testing (TDD) for immutable contracts.',
  },
  {
    id: '4',
    title: 'Personal Dashboard',
    category: 'Cloud / Infrastructure',
    stack: ['PHP', 'HTML/CSS', 'AWS EC2', 'AWS RDS', 'AWS S3'],
    description: 'Simple, cloud-hosted login/signup page deployed on dedicated AWS infrastructure.',
    challenge: 'Configuring VPC security groups and connecting EC2 instances to RDS securely.',
    learning: 'Practical experience with real-world cloud deployment, Linux server management, and optimization.',
  }
];

export const BIO_TEXT = `Hello! I am ${PERSONAL_INFO.name}, a Full-Stack Developer blending technical skills with a passion for robust system architecture. My background includes a deep interest in security (SOAR) and cloud infrastructure, which drives me to build scalable and efficient applications. I believe the best engineering is rooted in understanding how systems work end-to-end, from the front-end interface to the containerized backend. I’m a dedicated learner, currently expanding my knowledge through the AWS Certified Cloud Practitioner path.`;