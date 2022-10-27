export interface ProjectItemProps {
  title: string;
  description: string;
  stack: string;
  repoLink: string;
  demoLink: string;
}

export interface ContactItemProps {
  label: string;
  icon: React.ReactNode;
  href: string;
}
