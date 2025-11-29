import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Upload, X, CheckCircle, Image as ImageIcon, ArrowLeft, AlertTriangle, Share2, MessageSquare, Clock, Info } from 'lucide-react';
import { SPECIALTIES, CONTACT, ARTISTS } from '../constants';

const Budget: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    artist: '',
    style: '',
    bodyArea: '',
    size: '',
    description: '',
  });

  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [canShare, setCanShare] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if Web Share API is supported and can share files
    if (navigator.canShare && navigator.canShare({ files: [new File([], 'test.png')] })) {
      setCanShare(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const generateMessage = () => {
    return `*Orçamento Vaguinho Tattoo*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Tatuador:* ${formData.artist || 'Sem preferência'}\n` +
      `*Estilo:* ${formData.style}\n` +
      `*Local:* ${formData.bodyArea}\n` +
      `*Tamanho:* ${formData.size}\n` +
      `*Descrição:* ${formData.description}\n\n` +
      (files.length > 0 ? `*⚠️ Seguem ${files.length} imagens de referência em anexo.*` : '');
  };

  const handleWhatsAppRedirect = () => {
    const text = generateMessage();
    // Encode for URL
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodedText}`, '_blank');
  };

  const handleSimpleWhatsApp = () => {
    window.open(`https://wa.me/${CONTACT.whatsapp}`, '_blank');
  }

  const handleNativeShare = async () => {
    const text = generateMessage();
    if (navigator.share) {
      try {
        await navigator.share({
          files: files,
          title: 'Orçamento Vaguinho Tattoo',
          text: text,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen bg-black flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-gray-900 border border-brand-red/30 rounded-lg p-8 md:p-12 text-center shadow-2xl shadow-red-900/10 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="bg-green-500/10 p-4 rounded-full border border-green-500/20">
              <CheckCircle className="text-green-500 w-16 h-16" />
            </div>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 uppercase tracking-wider">Tudo pronto!</h2>
          
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Escolha como deseja enviar seu orçamento:
          </p>
          
          <div className="flex flex-col gap-4">
            {/* Option 1: Standard WhatsApp Link */}
            <button
              onClick={handleWhatsAppRedirect}
              className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-display font-bold uppercase tracking-wider text-lg rounded-sm transition-all shadow-lg flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              1. Conversa Direta com Vaguinho
            </button>
            <p className="text-gray-500 text-xs -mt-2 mb-2">
               *Abre a conversa certa, mas você precisa anexar as fotos manualmente (clique no clips 📎).
            </p>

            {/* Option 2: Native Share (Mobile) */}
            {canShare && files.length > 0 && (
              <>
                <button
                  onClick={handleNativeShare}
                  className="w-full py-4 bg-gray-700 hover:bg-gray-600 text-white font-display font-bold uppercase tracking-wider text-lg rounded-sm transition-all shadow-lg flex items-center justify-center gap-3 border border-white/10"
                >
                  <Share2 className="w-6 h-6" />
                  2. Enviar fotos via App (Mobile)
                </button>
                <p className="text-gray-500 text-xs -mt-2 mb-2">
                  *Já anexa as fotos, mas você precisará procurar "Vaguinho Tattoo" na sua lista de contatos.
                </p>
              </>
            )}
          </div>

          {files.length > 0 && !canShare && (
             <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 text-left flex gap-3">
                <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-300 text-sm leading-relaxed">
                    <strong>Atenção:</strong> O WhatsApp Web não permite envio automático de imagens por link. 
                    Clique no botão verde acima e, ao abrir a conversa, use o ícone de anexo (📎) para enviar suas fotos.
                </p>
             </div>
          )}
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <button 
              onClick={() => setSubmitted(false)}
              className="text-gray-500 hover:text-white flex items-center gap-2 mx-auto transition-colors text-sm uppercase tracking-widest font-bold"
            >
              <ArrowLeft size={16} /> Voltar e editar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl w-full mx-auto px-4 py-16">
        
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white uppercase mb-4">
            Faça seu <span className="text-brand-red">Orçamento</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Preencha os detalhes da sua ideia e entraremos em contato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Form Area - Takes 2/3 of space on large screens */}
          <div className="lg:col-span-2 bg-gray-900/50 p-6 md:p-10 rounded-lg border border-white/10 backdrop-blur-sm shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Stacked Fields - Single Column Layout */}
              
              {/* Artist Preference */}
              <div>
                <label htmlFor="artist" className="block text-xs font-bold text-brand-red mb-2 uppercase tracking-widest">Tatuador de Preferência</label>
                <select
                  id="artist"
                  name="artist"
                  value={formData.artist}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-800 text-white rounded p-4 focus:border-brand-red focus:outline-none transition-colors"
                >
                  <option value="">Sem preferência (Qualquer artista)</option>
                  {ARTISTS.map(artist => (
                    <option key={artist.id} value={artist.name}>{artist.name}</option>
                  ))}
                </select>
              </div>

              {/* Personal Info */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-brand-red mb-2 uppercase tracking-widest">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full bg-black border border-gray-800 text-white rounded p-4 focus:border-brand-red focus:outline-none transition-colors placeholder-gray-700"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-brand-red mb-2 uppercase tracking-widest">WhatsApp (Com DDD)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                  className="w-full bg-black border border-gray-800 text-white rounded p-4 focus:border-brand-red focus:outline-none transition-colors placeholder-gray-700"
                />
              </div>

              {/* Details */}
              <div>
                <label htmlFor="style" className="block text-xs font-bold text-brand-red mb-2 uppercase tracking-widest">Estilo</label>
                <select
                  id="style"
                  name="style"
                  required
                  value={formData.style}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-800 text-white rounded p-4 focus:border-brand-red focus:outline-none transition-colors"
                >
                  <option value="">Selecione...</option>
                  {SPECIALTIES.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="bodyArea" className="block text-xs font-bold text-brand-red mb-2 uppercase tracking-widest">Local do Corpo</label>
                <input
                  type="text"
                  id="bodyArea"
                  name="bodyArea"
                  required
                  value={formData.bodyArea}
                  onChange={handleChange}
                  placeholder="Ex: Antebraço"
                  className="w-full bg-black border border-gray-800 text-white rounded p-4 focus:border-brand-red focus:outline-none transition-colors placeholder-gray-700"
                />
              </div>

              <div>
                <label htmlFor="size" className="block text-xs font-bold text-brand-red mb-2 uppercase tracking-widest">Tamanho Aproximado</label>
                <input
                  type="text"
                  id="size"
                  name="size"
                  required
                  value={formData.size}
                  onChange={handleChange}
                  placeholder="Ex: 15cm"
                  className="w-full bg-black border border-gray-800 text-white rounded p-4 focus:border-brand-red focus:outline-none transition-colors placeholder-gray-700"
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-xs font-bold text-brand-red mb-2 uppercase tracking-widest">Descreva sua ideia</label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Conte-nos detalhes sobre a tatuagem que você tem em mente..."
                  className="w-full bg-black border border-gray-800 text-white rounded p-4 focus:border-brand-red focus:outline-none transition-colors resize-none placeholder-gray-700"
                ></textarea>
              </div>

              {/* File Upload UI */}
              <div>
                <label className="block text-xs font-bold text-brand-red mb-2 uppercase tracking-widest">
                  Imagens de Referência
                </label>
                <div 
                  onClick={triggerFileInput}
                  className="border-2 border-dashed border-gray-800 hover:border-brand-red rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer transition-all bg-black/50 hover:bg-black group"
                >
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    multiple 
                    accept="image/*"
                    hidden 
                  />
                  <div className="bg-gray-800 p-4 rounded-full mb-4 group-hover:bg-brand-red transition-colors">
                    <Upload className="text-white w-6 h-6" />
                  </div>
                  <p className="text-gray-300 font-medium text-center">Clique para selecionar imagens</p>
                  <p className="text-gray-600 text-xs mt-2 text-center max-w-sm">
                    Selecione suas referências aqui.
                  </p>
                </div>

                {/* File List */}
                {files.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {files.map((file, index) => (
                      <div key={index} className="relative bg-gray-800 p-2 rounded border border-gray-700 flex items-center gap-2">
                        <div className="bg-black p-2 rounded">
                          <ImageIcon size={16} className="text-gray-400" />
                        </div>
                        <span className="text-xs text-gray-300 truncate flex-1">{file.name}</span>
                        <button 
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-gray-500 hover:text-red-500 p-1"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Dica Pinterest/Instagram/Behance */}
                <p className="text-gray-500 text-xs mt-3 flex items-start gap-1">
                  <span className="text-brand-red font-bold">Dica:</span>
                  <span>
                    Você pode buscar ideias no <span className="text-white font-medium">Pinterest</span>, <span className="text-white font-medium">Instagram</span> ou <span className="text-white font-medium">Behance</span>!
                  </span>
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-brand-red hover:bg-brand-darkRed text-white font-display font-bold uppercase tracking-widest text-lg rounded-sm transition-all shadow-lg shadow-red-900/20 transform hover:-translate-y-1"
              >
                Gerar Mensagem
              </button>
            </form>
          </div>

          {/* Right Column - Info Balloons */}
          <div className="lg:col-span-1 space-y-6 sticky top-24">
            
            {/* Direct Contact Balloon */}
            <div className="bg-black border border-white/20 rounded-xl p-8 text-center shadow-lg hover:border-brand-red/50 transition-colors">
              <div className="flex justify-center mb-4">
                <MessageSquare className="w-12 h-12 text-brand-red/80" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">Contato Direto</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Prefere um contato mais direto ou tem alguma dúvida rápida?
              </p>
              <button 
                onClick={handleSimpleWhatsApp}
                className="w-full py-3 px-4 border border-brand-red/50 text-brand-red hover:bg-brand-red hover:text-white font-display font-bold uppercase tracking-widest text-sm rounded transition-all"
              >
                Chamar no WhatsApp
              </button>
            </div>

            {/* Useful Info Balloon */}
            <div className="bg-black border border-white/10 rounded-xl p-8 shadow-lg">
              <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
                <Info size={20} className="text-brand-red" />
                Informações Úteis
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0"></span>
                  <span>Responderemos em até 24 horas</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0"></span>
                  <span>Orçamentos são gratuitos</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0"></span>
                  <span>Aceite apenas após aprovação do desenho</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0"></span>
                  <span>Agendamento mediante disponibilidade</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Budget;