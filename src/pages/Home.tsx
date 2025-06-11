import React from 'react';
import { Phone, ArrowRight, Users, Code, Cloud, Lightbulb, CheckCircle, Target, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const technologies = [
    'C# / .NET', 'Python / Django', 'Swift / SwiftUI', 'React / Angular', 
    'Azure / AWS', 'Docker / Kubernetes', 'Unity', 'Objective-C / C++',
    'TypeScript', 'PostgreSQL', 'Pulumi', 'Git / DevOps'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 group"
              >
                {t.hero.cta}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="tel:+0155555555"
                className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-700 transition-colors duration-200"
              >
                <Phone size={20} />
                {t.hero.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.expertise.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.expertise.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.expertise.experience}</h3>
              <p className="text-gray-600">{t.expertise.experienceDesc}</p>
            </div>

            <div className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.expertise.leadership}</h3>
              <p className="text-gray-600">{t.expertise.leadershipDesc}</p>
            </div>

            <div className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.expertise.fullStack}</h3>
              <p className="text-gray-600">{t.expertise.fullStackDesc}</p>
            </div>

            <div className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.expertise.cloudDevOps}</h3>
              <p className="text-gray-600">{t.expertise.cloudDevOpsDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.approach.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.approach.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.approach.understanding}</h3>
              <p className="text-gray-600">{t.approach.understandingDesc}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-teal-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.approach.consultation}</h3>
              <p className="text-gray-600">{t.approach.consultationDesc}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.approach.implementation}</h3>
              <p className="text-gray-600">{t.approach.implementationDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.technologies.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.technologies.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 px-4 py-3 rounded-lg text-center font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t.cta.subtitle}
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2 group"
          >
            {t.cta.button}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;