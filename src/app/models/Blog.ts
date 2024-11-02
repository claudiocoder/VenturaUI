export interface BlogModel {
  id: string;
  thumbnailUrl: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  description: string;
  cardThumbnailUrl: string;
  country: string;
  visibility: boolean;
  urlMap?: string;
}
