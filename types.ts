export interface Project {
  id: string;
  title: string;
  category: string;
  stack: string[];
  description: string;
  challenge: string;
  learning: string;
  link?: string;
  github?: string;
}

export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export enum SocialPlatform {
  GITHUB = 'Github',
  LINKEDIN = 'LinkedIn',
  EMAIL = 'Email'
}