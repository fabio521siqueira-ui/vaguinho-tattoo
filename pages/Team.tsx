import React from 'react';
import { Instagram, Image } from 'lucide-react';
import { ARTISTS } from '../constants';
import { useNavigate } from 'react-router-dom';

const Team: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 min-h-screen bg-brand-dark">
      <div className="bg-black py-16 text-center border-b border-white/5">
        <h1 className="font-display font-bold text-4xl md:text-6xl text-white uppercase tracking-widest mb-4">
          Nossa <span className="text-brand-red">Equipe</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Conheça os artistas que transformam ideias em realidade.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ARTISTS.map((artist) => (
            <div key={artist.id} className="group bg-gray-900 rounded-lg overflow-hidden border border-white/5 hover:border-brand-red/50 transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display font-bold text-2xl text-white uppercase">{artist.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Especialidades</p>
                  <div className="flex flex-wrap gap-2">
                    {artist.specialties.map((spec, i) => (
                      <span key={i} className="text-sm text-brand-red font-medium bg-brand-red/10 px-2 py-1 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a 
                    href={`https://instagram.com/${artist.instagram.replace('@', '')}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 text-white rounded transition-colors text-sm font-bold uppercase"
                  >
                    <Instagram size={16} /> Instagram
                  </a>
                  <button 
                    onClick={() => navigate('/galeria')}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-brand-red hover:bg-brand-darkRed text-white rounded transition-colors text-sm font-bold uppercase"
                  >
                    <Image size={16} /> Portfólio
                  </button>
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