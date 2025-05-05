
import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { AuthState, User } from "./types";
import { api } from "./mockApi";

// Initial auth state
const initialAuthState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

// Create auth context
interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(initialAuthState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Load auth state from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem("floraUser");
    const storedToken = localStorage.getItem("floraToken");
    
    if (storedUser && storedToken) {
      try {
        const user = JSON.parse(storedUser) as User;
        setAuthState({
          user,
          token: storedToken,
          isAuthenticated: true,
        });
      } catch (error) {
        console.error("Failed to parse stored auth data:", error);
        // Clear invalid stored data
        localStorage.removeItem("floraUser");
        localStorage.removeItem("floraToken");
      }
    }
  }, []);

  // Register function
  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user, token } = await api.register(name, email, password);
      
      // Update state
      setAuthState({
        user,
        token,
        isAuthenticated: true,
      });
      
      // Save to localStorage
      localStorage.setItem("floraUser", JSON.stringify(user));
      localStorage.setItem("floraToken", token);
      
      toast.success("Registration successful!");
      navigate("/home");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Registration failed");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user, token } = await api.login(email, email === "demo@example.com" ? "password123" : password);
      
      // Update state
      setAuthState({
        user,
        token,
        isAuthenticated: true,
      });
      
      // Save to localStorage
      localStorage.setItem("floraUser", JSON.stringify(user));
      localStorage.setItem("floraToken", token);
      
      toast.success("Login successful!");
      navigate("/home");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    // Clear state
    setAuthState(initialAuthState);
    
    // Clear localStorage
    localStorage.removeItem("floraUser");
    localStorage.removeItem("floraToken");
    
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
