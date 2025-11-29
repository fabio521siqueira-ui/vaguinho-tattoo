import React from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';
import { CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              VAGUINHO <span className="text-brand-red">TATTOO</span>
            </h3>
            <p className="text-gray-400 max-w-xs">
              Transformando ideias em arte na pele com segurança, qualidade e estilo único.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-4 tracking-wider uppercase">Contato</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <Phone size={18} className="text-brand-red" /> {CONTACT.phone}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} className="text-brand-red" /> Av. Principal, 123 - Centro
              </p>
              <p className="flex items-center gap-2">
                <Instagram size={18} className="text-brand-red" /> @vaguinhotattoo
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg text-white mb-4 tracking-wider uppercase">Horários</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Segunda a Sexta: 10h às 20h</li>
              <li>Sábado: 10h às 18h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Vaguinho Tattoo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;