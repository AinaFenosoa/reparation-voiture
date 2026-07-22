export interface serviceInterface {
  id: number;
  nom: string;
  slug?: string;
  description?: string;
  prix: string;
  photoService?: string; // Nom de colonne probable en BDD Laravel
  image?: string;        // Utilisé pour le fallback / dev
  is_deal_of_the_day?: boolean | string;
  is_deal?: boolean;
  is_featured?: boolean;
  reduction?: string;
  created_at?: string;
}