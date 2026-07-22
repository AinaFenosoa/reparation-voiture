export interface Post {
  id: number;
  titre: string;
  slug?: string;
  extrait?: string;
  contenu: string;
  imageBlog?: string;
  image?: string;
  datePublication?: string;
  created_at?: string;
  is_featured?: boolean;
}