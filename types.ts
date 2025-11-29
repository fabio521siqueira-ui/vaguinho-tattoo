export interface Artist {
  id: string;
  name: string;
  specialties: string[];
  image: string;
  instagram: string;
  portfolioCount: number;
}

export interface StudioImage {
  id: number;
  url: string;
  alt: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface PortfolioItem {
  id: number;
  url: string;
  artistId: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  date: string;
}