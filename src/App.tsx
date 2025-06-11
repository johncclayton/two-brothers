import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const { t } = useLanguage();

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400">
                © 2025 {t.footer.company}. {t.footer.rights}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;