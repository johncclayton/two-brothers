export interface Language {
  code: 'en' | 'de';
  name: string;
  flag: string;
}

export interface Translations {
  nav: {
    home: string;
    team: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    phone: string;
  };
  expertise: {
    title: string;
    subtitle: string;
    experience: string;
    leadership: string;
    fullStack: string;
    cloudDevOps: string;
    experienceDesc: string;
    leadershipDesc: string;
    fullStackDesc: string;
    cloudDevOpsDesc: string;
  };
  approach: {
    title: string;
    subtitle: string;
    understanding: string;
    consultation: string;
    implementation: string;
    understandingDesc: string;
    consultationDesc: string;
    implementationDesc: string;
  };
  technologies: {
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  team: {
    title: string;
    subtitle: string;
    experience: string;
    skills: string;
    contact: string;
    github: string;
    linkedin: string;
    website: string;
    years: string;
  };
  footer: {
    company: string;
    rights: string;
  };
}