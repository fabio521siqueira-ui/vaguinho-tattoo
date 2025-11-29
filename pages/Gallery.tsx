import React, { useState } from 'react';
import { ARTISTS, PORTFOLIO } from '../constants';

const Gallery: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<string>('all');

  const filteredPortfolio = selectedArtist === 'all' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.artistId === selectedArtist);

  return (
    <div className="pt-20 min-h-screen bg-brand-dark">
      <div className="bg-black py-16 text-center border-b border-white/5">
        <h1 className="font-display font-bold text-4xl md:text-6xl text-white uppercase tracking-widest mb-4">
          Galeria de <span className="text-brand-red">Arte</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Explore o portfólio completo dos nossos artistas.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedArtist('all')}
            className={`px-6 py-2 rounded-full font-display uppercase tracking-wider text-sm transition-all border ${
              selectedArtist === 'all'
                ? 'bg-brand-red border-brand-red text-white'
                : 'bg-transparent border-gray-700 text-gray-400 hover:border-white hover:text-white'
            }`}
          >
            Todos
          </button>
          {ARTISTS.map(artist => (
            <button
              key={artist.id}
              onClick={() => setSelectedArtist(artist.id)}
              className={`px-6 py-2 rounded-full font-display uppercase tracking-wider text-sm transition-all border ${
                selectedArtist === artist.id
                  ? 'bg-brand-red border-brand-red text-white'
                  : 'bg-transparent border-gray-700 text-gray-400 hover:border-white hover:text-white'
              }`}
            >
              {artist.name}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPortfolio.map((item) => {
            const artist = ARTISTS.find(a => a.id === item.artistId);
            return (
              <div key={item.id} className="group relative break-inside-avoid overflow-hidden rounded-lg bg-gray-900 cursor-pointer">
                <img 
                  src={item.url} 
                  alt={`${artist?.name} tattoo`} 
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <p className="text-brand-red font-display uppercase tracking-widest text-sm mb-1">{artist?.name}</p>
                  <p className="text-white text-xs">{item.category}</p>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPortfolio.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">Nenhum trabalho encontrado.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;