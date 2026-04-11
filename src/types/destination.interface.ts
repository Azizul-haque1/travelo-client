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

export type CreateDestinationPayload = {
  name: string;
  country: string;
  city: string;
  shortDescription?: string;
  description: string;
  category: string;
  tags?: string[];
  popularActivities?: string[];
  images: string[];
  thumbnail: string;
  priceRange: {
    min: number;
    max: number;
  };
  location?: {
    lat: number;
    lng: number;
  };
  bestTimeToVisit?: string;
  isFeatured?: boolean;
};

export type CreateDestinationFormValues = {
  name: string;
  country: string;
  city: string;
  shortDescription: string;
  description: string;
  category: string;
  tags: string;
  popularActivities: string;
  minPrice: number;
  maxPrice: number;
  imageUrl: string;
  bestTimeToVisit: string;
  lat: number;
  lng: number;
};
