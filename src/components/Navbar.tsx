
import { useAuth } from "@/lib/authContext";
import { Button } from "@/components/ui/button";
import { LogOut, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-flora-primary text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={isAuthenticated ? "/home" : "/"} className="text-2xl font-bold flex items-center gap-2">
          <span className="text-flora-accent">Flora</span>Verse
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          {isAuthenticated ? (
            <>
              <Link to="/home" className="hover:text-flora-accent transition-colors">
                Explore
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-flora-light">Welcome, {user?.name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={logout}
                  className="hover:bg-flora-dark hover:text-white"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-flora-accent transition-colors">
                Login
              </Link>
              <Link to="/register">
                <Button className="bg-white text-flora-primary hover:bg-flora-light">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-flora-dark mt-2 py-3 px-6 rounded-b-lg animate-fade-in">
          <div className="flex flex-col gap-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/home"
                  className="hover:text-flora-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Explore
                </Link>
                <div className="flex justify-between items-center">
                  <span className="text-flora-light">Welcome, {user?.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="hover:bg-flora-primary text-white"
                  >
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-flora-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="bg-white text-flora-primary hover:bg-flora-light w-full">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
