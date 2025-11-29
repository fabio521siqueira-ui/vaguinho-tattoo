import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Droplet, Users, Zap } from 'lucide-react';
import { STUDIO_IMAGES, CONTACT } from '../constants';

const Studio: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === STUDIO_IMAGES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === STUDIO_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? STUDIO_IMAGES.length - 1 : prev - 1));
  };

  const handleWhatsappClick = () => {
    window.open(`https://wa.me/${CONTACT.whatsapp}`, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-black py-16 text-center">
        <h1 className="font-display font-bold text-4xl md:text-6xl text-white uppercase tracking-widest mb-4">
          Conheça o <span className="text-brand-red">Estúdio</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Um ambiente pensado para oferecer a melhor experiência em tatuagem.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden bg-gray-900 group">
        {STUDIO_IMAGES.map((img, index) => (
          <div
            key={img.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover opacity-60" 
            />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
              <div className="max-w-7xl mx-auto">
                <p className="text-white font-display text-2xl uppercase tracking-widest">{img.alt}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-brand-red transition-colors opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-brand-red transition-colors opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Info Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display font-bold text-3xl text-white mb-6 uppercase">Nossa Filosofia</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Acreditamos que a tatuagem é uma forma sagrada de expressão pessoal. No Vaguinho Tattoo, 
                tratamos cada projeto com o respeito e dedicação que ele merece. Não somos apenas um estúdio comercial; 
                somos um coletivo de artistas apaixonados por transformar histórias em arte permanente.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Desde o primeiro atendimento até o pós-tatuagem, nossa missão é fazer com que você se sinta 
                confortável, seguro e empolgado com sua nova tatuagem.
              </p>
            </div>
            
            <div className="space-y-8">
               <div className="flex gap-4">
                 <div className="bg-brand-red/10 p-4 rounded-lg h-fit">
                   <Droplet className="text-brand-red" size={32} />
                 </div>
                 <div>
                   <h4 className="font-display font-bold text-xl text-white mb-2 uppercase">Higiene Absoluta</h4>
                   <p className="text-gray-400 text-sm">Seguimos rigorosamente todas as normas da ANVISA. Materiais descartáveis e esterilização de grau hospitalar.</p>
                 </div>
               </div>
               
               <div className="flex gap-4">
                 <div className="bg-brand-red/10 p-4 rounded-lg h-fit">
                   <Users className="text-brand-red" size={32} />
                 </div>
                 <div>
                   <h4 className="font-display font-bold text-xl text-white mb-2 uppercase">Atendimento Humanizado</h4>
                   <p className="text-gray-400 text-sm">Respeitamos a diversidade e a individualidade de cada cliente. Aqui, todos são bem-vindos.</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="bg-brand-red/10 p-4 rounded-lg h-fit">
                   <Zap className="text-brand-red" size={32} />
                 </div>
                 <div>
                   <h4 className="font-display font-bold text-xl text-white mb-2 uppercase">Equipamento de Ponta</h4>
                   <p className="text-gray-400 text-sm">Utilizamos as melhores máquinas e pigmentos do mercado internacional para garantir o melhor resultado.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-black py-12 text-center border-t border-white/10">
         <button 
          onClick={handleWhatsappClick}
          className="px-8 py-4 bg-transparent border-2 border-brand-red text-white font-display font-bold uppercase tracking-wider text-lg hover:bg-brand-red transition-all"
        >
          Falar com a equipe
        </button>
      </section>
    </div>
  );
};

export default Studio;