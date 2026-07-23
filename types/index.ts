export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend' | 'Systems';
  description: string;
  longDescription?: string;
  architectureDetails?: string[];
  tags: string[];
  image: string;
  featured?: boolean;
  stars?: number;
  complexity?: 'High' | 'Extreme' | 'Medium';
  metrics?: {
    label: string;
    value: string;
  }[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  demoUrl?: string;
  githubUrl?: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Systems' | 'Cloud & DevOps' | 'Databases';
  icon: string;
  level: string;
  description: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface TerminalCommand {
  command: string;
  description: string;
  action: (args?: string[]) => string | React.ReactNode;
}
