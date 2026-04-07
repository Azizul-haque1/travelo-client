import { IDestination } from "@/types/destination.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllDestinations = async (): Promise<IDestination[]> => {
  const res = await fetch(`${API_URL}/destinations`);
  const result = await res.json();
  return result.data;
};

export const getFeaturedDestinations = async (): Promise<IDestination[]> => {
  const res = await fetch(`${API_URL}/destinations/featured`);
  const result = await res.json();
  return result.data;
};

