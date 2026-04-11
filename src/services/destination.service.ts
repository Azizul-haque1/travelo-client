import {
  CreateDestinationPayload,
  IDestination,
} from "@/types/destination.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Generic API response type
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// Fetch all destinations
export const getAllDestinations = async (): Promise<IDestination[]> => {
  try {
    const res = await fetch(`${API_URL}/destinations`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch destinations");

    const result: ApiResponse<IDestination[]> = await res.json();

    if (!result.success) throw new Error(result.message);

    return result.data || [];
  } catch (error: any) {
    console.error("getAllDestinations error:", error.message);
    return []; // return empty array on error
  }
};

// Fetch featured destinations
export const getFeaturedDestinations = async (): Promise<IDestination[]> => {
  try {
    const res = await fetch(`${API_URL}/destinations/featured`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch featured destinations");

    const result: ApiResponse<IDestination[]> = await res.json();

    if (!result.success) throw new Error(result.message);

    return result.data || [];
  } catch (error: any) {
    console.error("getFeaturedDestinations error:", error.message);
    return [];
  }
};

// Fetch single destination by ID
export const getSingleDestination = async (
  id: string
): Promise<IDestination | null> => {
  try {
    const res = await fetch(`${API_URL}/destinations/${id}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`Failed to fetch destination with id: ${id}`);

    const result: ApiResponse<IDestination> = await res.json();

    if (!result.success) throw new Error(result.message);

    return result.data || null;
  } catch (error: any) {
    console.error(`getSingleDestination error:`, error.message);
    return null;
  }
};

export const createDestination = async (
  payload: CreateDestinationPayload
): Promise<ApiResponse<IDestination> | null> => {
  try {
    const res = await fetch(`${API_URL}/destinations/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Failed to create destination");
    }

    const result: ApiResponse<IDestination> = await res.json();

    if (!result.success) {
      throw new Error(result.message);
    }

    return result;
  } catch (error: any) {
    console.error("createDestination error:", error.message);
    return null;
  }
};
