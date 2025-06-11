import React from 'react';
import { ExternalLink, Github, Linkedin, Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { teamMembers } from '../data/team';
import SkillLevel from '../components/SkillLevel';

const Team: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.team.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.team.subtitle}
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                  <div className="mb-6 md:mb-0">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h2>
                    <p className="text-xl text-blue-600 font-semibold mb-2">
                      {member.title[language]}
                    </p>
                    <p className="text-lg text-gray-600">
                      {member.experience}+ {t.team.years} {t.team.experience.toLowerCase()}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {member.links.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                      >
                        <Github size={20} />
                        <span className="hidden sm:inline">{t.team.github}</span>
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors duration-200"
                      >
                        <Linkedin size={20} />
                        <span className="hidden sm:inline">{t.team.linkedin}</span>
                      </a>
                    )}
                    {member.links.website && (
                      <a
                        href={member.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors duration-200"
                      >
                        <Globe size={20} />
                        <span className="hidden sm:inline">{t.team.website}</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Overview */}
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {member.overview[language]}
                  </p>
                </div>

                {/* Key Skills */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t.team.skills}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.keySkills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detailed Skills */}
                <div className="mb-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {member.skills.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          {category.category}
                        </h4>
                        <div className="space-y-3">
                          {category.items.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center justify-between">
                              <span className="text-gray-700">{skill.name}</span>
                              <SkillLevel level={skill.level} />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Experience */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Recent {t.team.experience}
                  </h3>
                  <div className="space-y-6">
                    {member.detailedExperience[language].slice(0, 3).map((exp, expIndex) => (
                      <div key={expIndex} className="border-l-4 border-blue-200 pl-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{exp.role}</h4>
                          <span className="text-sm text-gray-500">{exp.period}</span>
                        </div>
                        <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                        <p className="text-gray-700">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Education & Certifications
                  </h3>
                  <ul className="space-y-2">
                    {member.education[language].map((edu, eduIndex) => (
                      <li key={eduIndex} className="text-gray-700 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;