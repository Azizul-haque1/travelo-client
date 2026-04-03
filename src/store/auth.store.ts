import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  image?: string;
}

interface AuthState {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    logout: () => set({ user: null }),
  }),
  {
    name:'travelo-auth'
  }
)
);

