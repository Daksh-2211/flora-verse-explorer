
// User type
export interface User {
  id: string;
  name: string;
  email: string;
}

// Auth state
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

// Flower type
export interface Flower {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  detailedDescription: string;
  origin: string;
  uses: string[];
  careInstructions: string;
  imageUrl: string;
  bloomSeason: string;
}
