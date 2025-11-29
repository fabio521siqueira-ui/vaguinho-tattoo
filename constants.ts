import { Artist, NavItem, PortfolioItem, StudioImage, Testimonial } from './types';

export const CONTACT = {
  phone: '(19) 98339-6944',
  whatsapp: '5519983396944'
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'O Estúdio', path: '/estudio' },
  { label: 'Equipe', path: '/equipe' },
  { label: 'Galeria', path: '/galeria' },
  { label: 'Orçamento', path: '/orcamento' },
  { label: 'Contato', path: '/contato' },
];

export const SPECIALTIES = [
  "Realismo", "Fine Line", "Cartoon", "Black Work", "Old School", "Neo Tradicional", "Oriental", "Lettering", "Watercolor"
];

export const ARTISTS: Artist[] = [
  {
    id: 'vaguinho',
    name: 'Vaguinho',
    specialties: ['Realismo Preto e Cinza', 'Retratos'],
    image: 'https://picsum.photos/id/338/400/500',
    instagram: '@vaguinhotattoo',
    portfolioCount: 8
  },
  {
    id: 'ana',
    name: 'Ana Silva',
    specialties: ['Fine Line', 'Botânico', 'Minimalismo'],
    image: 'https://picsum.photos/id/64/400/500',
    instagram: '@anatattooart',
    portfolioCount: 6
  },
  {
    id: 'carlos',
    name: 'Carlos "Ogro"',
    specialties: ['Old School', 'Tradicional', 'Colorido'],
    image: 'https://picsum.photos/id/91/400/500',
    instagram: '@ogrotattoo',
    portfolioCount: 6
  },
  {
    id: 'mari',
    name: 'Mari Oliveira',
    specialties: ['Black Work', 'Ornamental', 'Pontilhismo'],
    image: 'https://picsum.photos/id/342/400/500',
    instagram: '@mariblackwork',
    portfolioCount: 6
  },
  {
    id: 'roberto',
    name: 'Roberto Ink',
    specialties: ['Oriental', 'Fechamento', 'Colorido'],
    image: 'https://picsum.photos/id/447/400/500',
    instagram: '@robertoink',
    portfolioCount: 5
  },
  {
    id: 'julia',
    name: 'Júlia Mendes',
    specialties: ['Watercolor', 'Aquarela', 'Geométrico'],
    image: 'https://picsum.photos/id/325/400/500',
    instagram: '@juliamendes.tattoo',
    portfolioCount: 7
  },
  {
    id: 'lucas',
    name: 'Lucas "Shadow"',
    specialties: ['Lettering', 'Chicano', 'Realismo'],
    image: 'https://picsum.photos/id/177/400/500',
    instagram: '@lucasshadow',
    portfolioCount: 4
  }
];

export const STUDIO_IMAGES: StudioImage[] = [
  { id: 1, url: 'https://picsum.photos/id/201/1200/600', alt: 'Recepção do Estúdio' },
  { id: 2, url: 'https://picsum.photos/id/180/1200/600', alt: 'Área de Tatuagem' },
  { id: 3, url: 'https://picsum.photos/id/366/1200/600', alt: 'Materiais Esterilizados' },
  { id: 4, url: 'https://picsum.photos/id/435/1200/600', alt: 'Sala de Espera' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Rafael Mendes',
    text: 'Trabalho impecável do Vaguinho. Fiz um fechamento de braço em realismo e superou todas as minhas expectativas. O ambiente é super limpo e a equipe muito atenciosa.',
    rating: 5,
    date: 'Há 2 semanas'
  },
  {
    id: 2,
    name: 'Beatriz Costa',
    text: 'Fiz minha primeira tattoo com a Ana e me senti super segura. O traço dela é finíssimo, exatamente como eu queria. Recomendo de olhos fechados!',
    rating: 5,
    date: 'Há 1 mês'
  },
  {
    id: 3,
    name: 'Lucas Ferreira',
    text: 'Profissionais de altíssima qualidade. O "Ogro" mandou muito bem no meu Old School. Voltarei com certeza para fazer a próxima.',
    rating: 5,
    date: 'Há 3 semanas'
  },
  {
    id: 4,
    name: 'Júlia Santos',
    text: 'A Mari tem uma mão super leve! O pontilhismo ficou perfeito, cheio de detalhes. O atendimento via WhatsApp também foi super rápido e esclarecedor.',
    rating: 5,
    date: 'Há 2 dias'
  },
  {
    id: 5,
    name: 'Marcos Vinícius',
    text: 'Melhor estúdio da região. Já fiz 3 tatuagens lá e a qualidade é sempre consistente. O pós-venda deles é excelente, sempre preocupados com a cicatrização.',
    rating: 5,
    date: 'Há 1 semana'
  },
  {
    id: 6,
    name: 'Fernanda Lima',
    text: 'Ambiente climatizado, música boa e artistas talentosos. Fiz um cartoon colorido e as cores ficaram vibrantes demais. Amei!',
    rating: 5,
    date: 'Há 2 meses'
  }
];

// Generate some mock portfolio items
export const PORTFOLIO: PortfolioItem[] = ARTISTS.flatMap(artist => 
  Array.from({ length: artist.portfolioCount }).map((_, i) => ({
    id: Math.random(),
    url: `https://picsum.photos/seed/${artist.id}${i}/600/600`,
    artistId: artist.id,
    category: artist.specialties[0]
  }))
);