export interface IDestination {
  _id: string;
  name: string;
  country: string;
  city: string;
  shortDescription?: string;
  description: string;
  images: string[];
  thumbnail: string;
  category: string;
  tags: string[];
  popularActivities: string[];
  priceRange: {
    min: number;
    max: number;
  };
  rating: number;
  totalReviews: number;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}
