import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Award, Clock, ShieldCheck, Star, Quote, ChevronLeft, ChevronRight, Instagram, MessageCircle } from 'lucide-react';
import { SPECIALTIES, CONTACT, TESTIMONIALS, ARTISTS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const teamScrollRef = useRef<HTMLDivElement>(null);
  const reviewScrollRef = useRef<HTMLDivElement>(null);

  const handleWhatsappClick = () => {
    window.open(`https://wa.me/${CONTACT.whatsapp}`, '_blank');
  };

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const { current } = ref;
      // Adjusted scroll amount for smoother navigation
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/447/1920/1080" 
            alt="Tattoo Background" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-brand-red text-xl md:text-2xl tracking-[0.5em] mb-4 uppercase animate-fade-in-up">
            Estúdio Profissional
          </h2>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight uppercase">
            Sua História <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Marcada na Pele</span>
          </h1>
          
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg md:text-xl font-light">
            Especialistas em {SPECIALTIES.slice(0, 4).join(', ')} e muito mais. 
            Arte exclusiva e atendimento personalizado.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleWhatsappClick}
              className="px-8 py-4 bg-brand-red hover:bg-brand-darkRed text-white font-display font-bold uppercase tracking-wider text-lg rounded-sm transition-all transform hover:scale-105 shadow-lg shadow-red-900/20"
            >
              Agende seu Horário
            </button>
            <button 
              onClick={() => navigate('/estudio')}
              className="px-8 py-4 bg-transparent border border-white/30 hover:border-white text-white font-display font-bold uppercase tracking-wider text-lg rounded-sm transition-all hover:bg-white/5"
            >
              Conheça o Estúdio
            </button>
          </div>
        </div>
      </section>

      {/* Specialties Marquee */}
      <div className="bg-brand-red py-4 overflow-hidden border-y border-red-800">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {SPECIALTIES.map((spec, i) => (
            <span key={i} className="mx-8 font-display font-bold text-black uppercase tracking-widest text-xl">
              • {spec}
            </span>
          ))}
           {SPECIALTIES.map((spec, i) => (
            <span key={`dup-${i}`} className="mx-8 font-display font-bold text-black uppercase tracking-widest text-xl">
              • {spec}
            </span>
          ))}
        </div>
      </div>

      {/* About Section Teaser */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-display font-bold text-brand-red text-lg tracking-widest uppercase mb-2">Sobre Nós</h3>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 uppercase">
                Tradição e <br/> Modernidade
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Com mais de 10 anos de experiência, o Vaguinho Tattoo se consolidou como referência em arte corporal. 
                Nossa equipe reúne artistas premiados em diversas convenções, garantindo que cada traço seja executado com maestria.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-start p-4 bg-white/5 rounded-lg border border-white/10">
                  <Award className="text-brand-red mb-3" size={32} />
                  <span className="font-bold text-white text-2xl">15+</span>
                  <span className="text-gray-500 text-sm uppercase tracking-wide">Prêmios</span>
                </div>
                <div className="flex flex-col items-start p-4 bg-white/5 rounded-lg border border-white/10">
                  <Clock className="text-brand-red mb-3" size={32} />
                  <span className="font-bold text-white text-2xl">10</span>
                  <span className="text-gray-500 text-sm uppercase tracking-wide">Anos de Exp.</span>
                </div>
                <div className="flex flex-col items-start p-4 bg-white/5 rounded-lg border border-white/10">
                  <ShieldCheck className="text-brand-red mb-3" size={32} />
                  <span className="font-bold text-white text-2xl">100%</span>
                  <span className="text-gray-500 text-sm uppercase tracking-wide">Biossegurança</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/estudio')}
                className="group flex items-center gap-2 text-white font-display uppercase tracking-widest hover:text-brand-red transition-colors"
              >
                Saiba mais sobre nossa história <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 border-4 border-brand-red translate-x-4 -translate-y-4 rounded-sm"></div>
              <img 
                src="https://picsum.photos/id/250/600/800" 
                alt="Artist working" 
                className="relative z-10 w-full h-auto rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Slider Section */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h3 className="font-display font-bold text-brand-red text-lg tracking-widest uppercase mb-2">Artistas</h3>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase">
              Nossa Equipe
            </h2>
          </div>

          <div className="relative group">
            {/* Left Button */}
            <button 
              onClick={() => scroll(teamScrollRef, 'left')}
              className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/80 border border-white/20 rounded-full hover:bg-brand-red hover:border-brand-red transition-all text-white shadow-lg shadow-black/50"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Added snap-x and snap-mandatory to container */}
            <div 
              ref={teamScrollRef}
              className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide scroll-smooth snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {ARTISTS.map((artist) => (
                <div 
                  key={artist.id} 
                  /* Added snap-center to item */
                  className="snap-center min-w-[280px] md:min-w-[320px] group relative h-[400px] rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => navigate('/equipe')}
                >
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display font-bold text-2xl text-white uppercase mb-1">{artist.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {artist.specialties.slice(0, 2).map((spec, idx) => (
                        <span key={idx} className="text-xs font-bold text-brand-red bg-brand-red/10 px-2 py-1 rounded border border-brand-red/20">{spec}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <Instagram size={14} /> {artist.instagram}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* View All Card - Added snap-center */}
              <div 
                onClick={() => navigate('/equipe')}
                className="snap-center min-w-[200px] flex flex-col items-center justify-center bg-gray-900 border border-white/10 rounded-lg hover:border-brand-red/50 cursor-pointer transition-colors"
              >
                <div className="p-4 rounded-full bg-white/5 mb-4 group-hover:bg-brand-red/20 transition-colors">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <span className="font-display font-bold text-white uppercase tracking-wider">Ver Todos</span>
              </div>
            </div>

            {/* Right Button */}
            <button 
              onClick={() => scroll(teamScrollRef, 'right')}
              className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/80 border border-white/20 rounded-full hover:bg-brand-red hover:border-brand-red transition-all text-white shadow-lg shadow-black/50"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Slider Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h3 className="font-display font-bold text-brand-red text-lg tracking-widest uppercase mb-2">Depoimentos</h3>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase">
              O que dizem <br className="md:hidden" /> nossos clientes
            </h2>
          </div>

          <div className="relative group">
            {/* Left Button */}
            <button 
              onClick={() => scroll(reviewScrollRef, 'left')}
              className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/80 border border-white/20 rounded-full hover:bg-brand-red hover:border-brand-red transition-all text-white shadow-lg shadow-black/50"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Added snap-x and snap-mandatory to container */}
            <div 
              ref={reviewScrollRef}
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {TESTIMONIALS.map((review) => (
                <div 
                  key={review.id} 
                  /* Added snap-center to item */
                  className="snap-center min-w-[300px] md:min-w-[400px] bg-black/50 p-8 rounded-lg border border-white/10 hover:border-brand-red/50 transition-colors relative flex flex-col justify-between"
                >
                  <Quote className="absolute top-6 right-6 text-brand-red/20" size={48} />
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className={`${i < review.rating ? 'text-brand-red fill-brand-red' : 'text-gray-600'}`} />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic leading-relaxed">"{review.text}"</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="font-display font-bold text-white uppercase tracking-wider">{review.name}</span>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button 
              onClick={() => scroll(reviewScrollRef, 'right')}
              className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/80 border border-white/20 rounded-full hover:bg-brand-red hover:border-brand-red transition-all text-white shadow-lg shadow-black/50"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-b from-black to-brand-dark/50 text-center border-t border-white/5">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-8 uppercase">
          Pronto para sua <span className="text-brand-red">nova tattoo?</span>
        </h2>
        <button 
          onClick={handleWhatsappClick}
          className="px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-display font-bold uppercase tracking-wider text-xl rounded-full transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 mx-auto"
        >
          <MessageCircle size={28} className="fill-white" />
          Chamar no WhatsApp
        </button>
      </section>
    </div>
  );
};

export default Home;