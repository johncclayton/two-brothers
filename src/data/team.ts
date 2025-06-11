export interface TeamMember {
  name: string;
  title: {
    en: string;
    de: string;
  };
  experience: string;
  overview: {
    en: string;
    de: string;
  };
  keySkills: string[];
  detailedExperience: {
    en: {
      role: string;
      company: string;
      period: string;
      description: string;
    }[];
    de: {
      role: string;
      company: string;
      period: string;
      description: string;
    }[];
  };
  education: {
    en: string[];
    de: string[];
  };
  links: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
  skills: {
    category: string;
    items: { name: string; level: number }[];
  }[];
}

export const teamMembers: TeamMember[] = [
  {
    name: 'John Clayton',
    title: {
      en: 'Creator / Developer / Product Owner',
      de: 'Entwickler / Produktverantwortlicher'
    },
    experience: '30+',
    overview: {
      en: 'I excel at understanding customer needs and iteratively building solutions. With over 30 years of broad experience in development roles – as a Developer, Head of Development, Scrum Master, Product Owner, and CTO.',
      de: 'Ich zeichne mich darin aus, Kundenbedürfnisse zu verstehen und iterativ Lösungen aufzubauen. Mit über 30 Jahren breiter Erfahrung in Entwicklungsrollen – als Entwickler, Entwicklungsleiter, Scrum Master, Product Owner und CTO.'
    },
    keySkills: [
      'C# / .NET Core',
      'Python / Django',
      'Azure Cloud',
      'Product Management',
      'Team Leadership',
      'Agile / SCRUM'
    ],
    detailedExperience: {
      en: [
        {
          role: 'Quantitative Trader',
          company: 'Effective Flow GmbH',
          period: 'November 2024 – Present',
          description: 'Developed and deployed sophisticated trading strategies across multiple exchanges, markets and time frames using Norgate for data and Real Test for back testing.'
        },
        {
          role: 'DevOps Architect',
          company: 'Effective Flow GmbH',
          period: 'November 2022 – November 2024',
          description: 'Designed and implemented a C# / Pulumi production ready IaC Azure Kubernetes environment for development teams, integrating TLS, DNS, persistence, networking, and CI/CD.'
        },
        {
          role: 'CTO / Co-Owner',
          company: 'FileWave GmbH',
          period: 'April 2006 – March 2021',
          description: 'Joined as sole developer, progressed to CTO and co-owner over 15 years. Led transformation from native desktop to web-based MDM solution, built four high-performing technical teams.'
        },
        {
          role: 'Senior Developer',
          company: 'UBS AG, Zürich',
          period: 'February 2005 – April 2006',
          description: 'Designed high-availability, high-volume price feed systems and manual quoting system integration with SWX Quote Match platform.'
        }
      ],
      de: [
        {
          role: 'Quantitativer Trader',
          company: 'Effective Flow GmbH',
          period: 'November 2024 – Heute',
          description: 'Entwicklung und Implementierung ausgeklügelter Handelsstrategien über mehrere Börsen, Märkte und Zeitrahmen mit Norgate für Daten und Real Test für Backtesting.'
        },
        {
          role: 'DevOps Architekt',
          company: 'Effective Flow GmbH',
          period: 'November 2022 – November 2024',
          description: 'Entwurf und Implementierung einer produktionsreifen IaC Azure Kubernetes-Umgebung mit C# / Pulumi für Entwicklungsteams, Integration von TLS, DNS, Persistierung, Netzwerk und CI/CD.'
        },
        {
          role: 'CTO / Mitinhaber',
          company: 'FileWave GmbH',
          period: 'April 2006 – März 2021',
          description: 'Als einziger Entwickler eingetreten, über 15 Jahre zum CTO und Mitinhaber aufgestiegen. Leitete Transformation von nativer Desktop- zu webbasierter MDM-Lösung, baute vier leistungsstarke technische Teams auf.'
        },
        {
          role: 'Senior Entwickler',
          company: 'UBS AG, Zürich',
          period: 'Februar 2005 – April 2006',
          description: 'Entwurf hochverfügbarer, volumenstarker Preisfeed-Systeme und manueller Quotierungssystem-Integration mit SWX Quote Match-Plattform.'
        }
      ]
    },
    education: {
      en: [
        'Stanford University, Machine Learning Specialization (June 2025)',
        'Microsoft Certified: Azure Administrator Associate (December 2021)',
        'Certificate in Business Computing, Wellington Polytechnic, New Zealand'
      ],
      de: [
        'Stanford University, Machine Learning Spezialisierung (Juni 2025)',
        'Microsoft Certified: Azure Administrator Associate (Dezember 2021)',
        'Zertifikat in Business Computing, Wellington Polytechnic, Neuseeland'
      ]
    },
    links: {
      github: 'https://github.com/johncclayton',
      linkedin: 'https://www.linkedin.com/in/johnclaytondev/'
    },
    skills: [
      {
        category: 'Leadership & Communication',
        items: [
          { name: 'Customer Communication', level: 5 },
          { name: 'Team Leadership', level: 5 },
          { name: 'Product Owner', level: 5 }
        ]
      },
      {
        category: 'Technical Skills',
        items: [
          { name: 'C# / .NET', level: 4 },
          { name: 'Python / Django', level: 4 },
          { name: 'Azure Cloud', level: 4 },
          { name: 'Pulumi / PowerShell', level: 4 }
        ]
      }
    ]
  },
  {
    name: 'Neil Clayton',
    title: {
      en: 'Experienced Senior Developer',
      de: 'Erfahrener Senior Entwickler'
    },
    experience: '25+',
    overview: {
      en: 'What gets me up in the morning is helping to solve real world problems using technology in a pragmatic manner. I have extensive experience spanning the entire stack from databases, server side to web based & thick clients.',
      de: 'Was mich morgens antreibt, ist die Lösung realer Probleme mit Technologie auf pragmatische Weise. Ich habe umfassende Erfahrung über den gesamten Stack von Datenbanken, Server-seitig bis hin zu webbasierten und nativen Clients.'
    },
    keySkills: [
      'Swift / SwiftUI',
      'C# / Unity',
      'Python / Django',
      'React / Angular',
      'Objective-C / C++',
      'Docker'
    ],
    detailedExperience: {
      en: [
        {
          role: 'Business Owner & Developer',
          company: 'shinywhitebox ltd',
          period: 'March 2005 – Present',
          description: 'Created and scaled a macOS software business with 170k+ users. Developed the "iShowU" series of screen recording tools and multiple other successful products.'
        },
        {
          role: 'Multi Tenant Reporting Developer',
          company: 'Way Forward Technologies',
          period: 'Dec 2021 – Jan 2023',
          description: 'Built a centralized web-based reporting system serving 100+ deployed sites in near real-time using C# (.NET Core 7), Postgres, Docker, and RabbitMQ.'
        },
        {
          role: 'Game Developer',
          company: 'Independent',
          period: 'Nov 2021 – Aug 2022',
          description: 'Developed and released "Be" on Steam - a Desktop/VR relaxation game built with Unity/C# using ReactiveX and IoC patterns.'
        },
        {
          role: 'Dashboard Developer',
          company: 'FileWave GmbH',
          period: 'June 2019 – Aug 2019',
          description: 'Replaced legacy dashboard with Grafana & Prometheus solution, enabling both standalone and integrated monitoring capabilities.'
        }
      ],
      de: [
        {
          role: 'Geschäftsinhaber & Entwickler',
          company: 'shinywhitebox ltd',
          period: 'März 2005 – Heute',
          description: 'Aufbau und Skalierung eines macOS-Software-Unternehmens mit 170k+ Nutzern. Entwicklung der "iShowU"-Serie von Bildschirmaufzeichnungstools und mehrerer anderer erfolgreicher Produkte.'
        },
        {
          role: 'Multi-Tenant Reporting Entwickler',
          company: 'Way Forward Technologies',
          period: 'Dez 2021 – Jan 2023',
          description: 'Aufbau eines zentralisierten webbasierten Reporting-Systems für 100+ eingesetzte Standorte in Echtzeit mit C# (.NET Core 7), Postgres, Docker und RabbitMQ.'
        },
        {
          role: 'Spieleentwickler',
          company: 'Unabhängig',
          period: 'Nov 2021 – Aug 2022',
          description: 'Entwicklung und Veröffentlichung von "Be" auf Steam - ein Desktop/VR Entspannungsspiel mit Unity/C# unter Verwendung von ReactiveX und IoC-Mustern.'
        },
        {
          role: 'Dashboard Entwickler',
          company: 'FileWave GmbH',
          period: 'Juni 2019 – Aug 2019',
          description: 'Ersetzung des Legacy-Dashboards durch Grafana & Prometheus-Lösung, die sowohl eigenständige als auch integrierte Monitoring-Funktionen ermöglicht.'
        }
      ]
    },
    education: {
      en: [
        'BSc (Hons), Victoria University (1997-1999)',
        'Unity ECS Training (October 2021)',
        'Elasticsearch Masterclass (April 2019)',
        'Docker Deep Dive (October 2016)'
      ],
      de: [
        'BSc (Hons), Victoria University (1997-1999)',
        'Unity ECS Schulung (Oktober 2021)',
        'Elasticsearch Masterclass (April 2019)',
        'Docker Deep Dive (Oktober 2016)'
      ]
    },
    links: {
      website: 'https://shinywhitebox.com'
    },
    skills: [
      {
        category: 'Native Development',
        items: [
          { name: 'Swift / SwiftUI', level: 5 },
          { name: 'Objective-C / C++', level: 5 },
          { name: 'Unity / C#', level: 4 },
          { name: 'Game Development', level: 4 }
        ]
      },
      {
        category: 'Web & Backend',
        items: [
          { name: 'Python / Django', level: 4 },
          { name: 'React / Angular', level: 4 },
          { name: 'TypeScript', level: 4 },
          { name: 'Docker', level: 4 }
        ]
      }
    ]
  }
];