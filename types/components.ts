export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface ModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

export interface HeaderProps {
  isScrolled: boolean;
  currentPath: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface FooterProps {
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}
