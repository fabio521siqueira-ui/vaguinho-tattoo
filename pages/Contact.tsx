import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-brand-dark flex flex-col">
      <div className="bg-black py-16 text-center border-b border-white/5">
        <h1 className="font-display font-bold text-4xl md:text-6xl text-white uppercase tracking-widest mb-4">
          Entre em <span className="text-brand-red">Contato</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Estamos aqui para tirar suas dúvidas e agendar sua próxima tattoo.
        </p>
      </div>

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Info Cards */}
        <div className="space-y-6">
          <div className="bg-gray-900 p-8 rounded-lg border border-white/5 flex items-start gap-6">
            <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="text-white font-display font-bold text-lg uppercase mb-2">Endereço</h3>
              <p className="text-gray-400">Avenida Principal, 3478 - Moema</p>
              <p className="text-gray-400">São Paulo, SP</p>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-white/5 flex items-start gap-6">
            <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
              <Phone size={28} />
            </div>
            <div>
              <h3 className="text-white font-display font-bold text-lg uppercase mb-2">WhatsApp & Telefone</h3>
              <p className="text-gray-400">{CONTACT.phone}</p>
              <button 
                 onClick={() => window.open(`https://wa.me/${CONTACT.whatsapp}`, '_blank')}
                 className="mt-3 px-6 py-2 border border-brand-red text-xs uppercase font-bold text-white hover:bg-brand-red transition-colors"
              >
                Chamar no WhatsApp
              </button>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-white/5 flex items-start gap-6">
            <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
              <Mail size={28} />
            </div>
            <div>
              <h3 className="text-white font-display font-bold text-lg uppercase mb-2">Email</h3>
              <p className="text-gray-400">contato@vaguinhotattoo.com.br</p>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-white/5 flex items-start gap-6">
            <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
              <Clock size={28} />
            </div>
            <div>
              <h3 className="text-white font-display font-bold text-lg uppercase mb-2">Horário de Funcionamento</h3>
              <p className="text-gray-400">Seg - Sex: 10:00 - 20:00</p>
              <p className="text-gray-400">Sáb: 10:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="h-full min-h-[400px] w-full bg-gray-800 rounded-lg overflow-hidden border border-white/10 relative">
          {/* Using an image to simulate map to avoid API keys, as per instruction to mock */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-500">
             <img 
               src="https://picsum.photos/id/101/800/600" 
               className="w-full h-full object-cover opacity-50 grayscale"
               alt="Map Location"
             />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white p-4 rounded shadow-lg text-black text-center">
                    <p className="font-bold">Vaguinho Tattoo</p>
                    <p className="text-xs">São Paulo, SP</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;