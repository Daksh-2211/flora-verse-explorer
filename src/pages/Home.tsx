
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/authContext";
import { useFlowers } from "@/lib/flowerService";
import { FlowerCard } from "@/components/FlowerCard";
import { Navbar } from "@/components/Navbar";
import { Flower } from "@/lib/types";

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { data: flowers, isLoading, isError } = useFlowers();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-flora-background py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-flora-dark mb-3">
              Explore the World of Flowers
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Discover a diverse collection of beautiful flowers from around the globe. 
              Click on any flower to learn more about its origin, care, and uses.
            </p>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-flora-primary opacity-75 mb-4"></div>
                <p className="text-flora-primary">Loading flowers...</p>
              </div>
            </div>
          ) : isError ? (
            <div className="text-center py-12">
              <p className="text-red-500">Error loading flowers. Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {flowers?.map((flower: Flower) => (
                <FlowerCard key={flower.id} flower={flower} />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <footer className="bg-flora-dark text-white py-6">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} FloraVerse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
