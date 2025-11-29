import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Studio from './pages/Studio';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Budget from './pages/Budget';
import Contact from './pages/Contact';
import { CONTACT } from './constants';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white font-sans antialiased selection:bg-brand-red selection:text-white">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estudio" element={<Studio />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/orcamento" element={<Budget />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-black/40 backdrop-blur-md border border-[#25D366]/50 text-[#25D366] p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] flex items-center justify-center group"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle size={32} className="fill-current" />
        </a>
      </div>
    </Router>
  );
};

export default App;