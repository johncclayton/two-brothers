import React from 'react';
import { Phone, Mail, MessageCircle, Calendar } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();

  const contactMethods = [
    {
      icon: Phone,
      title: language === 'en' ? 'Call Us' : 'Rufen Sie uns an',
      description: language === 'en' 
        ? 'The quickest way to discuss your project requirements and see if we can help.'
        : 'Der schnellste Weg, Ihre Projektanforderungen zu besprechen und zu sehen, ob wir helfen können.',
      action: t.hero.phone,
      href: 'tel:+0155555555',
      primary: true
    },
    {
      icon: MessageCircle,
      title: language === 'en' ? 'WhatsApp' : 'WhatsApp',
      description: language === 'en'
        ? 'Send us a message on WhatsApp for quick questions or to schedule a call.'
        : 'Senden Sie uns eine Nachricht auf WhatsApp für schnelle Fragen oder um einen Anruf zu vereinbaren.',
      action: language === 'en' ? 'Send Message' : 'Nachricht senden',
      href: 'https://wa.me/0155555555',
      primary: false
    }
  ];

  const reasons = [
    {
      title: language === 'en' ? 'Understanding First' : 'Verstehen zuerst',
      description: language === 'en'
        ? 'We invest time upfront to understand your specific needs, challenges, and goals before proposing any solutions.'
        : 'Wir investieren Zeit im Vorfeld, um Ihre spezifischen Bedürfnisse, Herausforderungen und Ziele zu verstehen, bevor wir Lösungen vorschlagen.'
    },
    {
      title: language === 'en' ? 'No Obligation' : 'Keine Verpflichtung',
      description: language === 'en'
        ? 'Our initial consultation is completely free with no strings attached. We want to help you make the right decision.'
        : 'Unsere erste Beratung ist völlig kostenlos und unverbindlich. Wir möchten Ihnen helfen, die richtige Entscheidung zu treffen.'
    },
    {
      title: language === 'en' ? 'Honest Assessment' : 'Ehrliche Bewertung',
      description: language === 'en'
        ? 'If we\'re not the right fit for your project, we\'ll tell you honestly and may suggest better alternatives.'
        : 'Wenn wir nicht die richtige Wahl für Ihr Projekt sind, sagen wir es Ihnen ehrlich und können bessere Alternativen vorschlagen.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Let\'s Discuss Your Project' : 'Lassen Sie uns über Ihr Projekt sprechen'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en'
              ? 'The best way to determine if we can help with your project is through a conversation. We\'d love to learn about your challenges and explore how our experience can benefit you.'
              : 'Der beste Weg herauszufinden, ob wir bei Ihrem Projekt helfen können, ist ein Gespräch. Wir würden gerne mehr über Ihre Herausforderungen erfahren und erkunden, wie unsere Erfahrung Ihnen nützen kann.'
            }
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 ${
                  method.primary ? 'ring-2 ring-blue-100' : ''
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    method.primary ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={method.primary ? 'text-blue-600' : 'text-gray-600'} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{method.title}</h3>
                  {method.primary && (
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                      {language === 'en' ? 'Recommended' : 'Empfohlen'}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <a
                  href={method.href}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    method.primary
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {method.action}
                </a>
              </div>
            );
          })}
        </div>

        {/* Why Contact Us */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {language === 'en' ? 'Why Start with a Conversation?' : 'Warum mit einem Gespräch beginnen?'}
          </h2>
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
          <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {language === 'en' ? 'Flexible Scheduling' : 'Flexible Terminplanung'}
          </h3>
          <p className="text-gray-600">
            {language === 'en'
              ? 'We understand you\'re busy. We can accommodate calls during European or US business hours, and we\'re happy to work around your schedule.'
              : 'Wir verstehen, dass Sie beschäftigt sind. Wir können Anrufe während europäischer oder US-amerikanischer Geschäftszeiten ermöglichen und passen uns gerne Ihrem Zeitplan an.'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;