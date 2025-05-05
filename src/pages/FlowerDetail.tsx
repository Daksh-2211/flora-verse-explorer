
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/lib/authContext";
import { useFlower } from "@/lib/flowerService";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const FlowerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { data: flower, isLoading, isError } = useFlower(id || "");

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
          <Link to="/home" className="flex items-center gap-2 text-flora-primary hover:text-flora-dark mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Gallery</span>
          </Link>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-flora-primary opacity-75 mb-4"></div>
                <p className="text-flora-primary">Loading flower details...</p>
              </div>
            </div>
          ) : isError || !flower ? (
            <div className="text-center py-12">
              <p className="text-red-500">Error loading flower details. Please try again later.</p>
              <Button 
                className="mt-4 bg-flora-primary hover:bg-flora-dark"
                onClick={() => navigate("/home")}
              >
                Return to Gallery
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={flower.imageUrl}
                    alt={flower.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <h1 className="text-3xl font-bold text-flora-dark">{flower.name}</h1>
                  <p className="text-lg italic text-gray-600 mb-4">{flower.scientificName}</p>
                  
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-flora-primary mb-2">Description</h2>
                    <p className="text-gray-700">{flower.detailedDescription}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h2 className="text-lg font-semibold text-flora-primary mb-2">Origin</h2>
                      <p className="text-gray-700">{flower.origin}</p>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-flora-primary mb-2">Bloom Season</h2>
                      <p className="text-gray-700">{flower.bloomSeason}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 border-t border-gray-200">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-flora-primary mb-3">Uses</h2>
                  <div className="flex flex-wrap gap-2">
                    {flower.uses.map((use, index) => (
                      <span
                        key={index}
                        className="bg-flora-light text-flora-primary px-3 py-1 rounded-full text-sm"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-flora-primary mb-3">Care Instructions</h2>
                  <p className="text-gray-700">{flower.careInstructions}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <footer className="bg-flora-dark text-white py-6 mt-auto">
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

export default FlowerDetail;
