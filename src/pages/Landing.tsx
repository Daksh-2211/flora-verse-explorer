
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-flora-light to-white py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-flora-dark mb-6">
                Discover the Beauty of <span className="text-flora-primary">Flora</span>Verse
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Explore a vast collection of flowers and plants from around the world. 
                Learn about their origins, characteristics, and care instructions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button className="flora-button w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="w-full sm:w-auto border-flora-primary text-flora-primary hover:bg-flora-light hover:text-flora-dark">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-flora-dark mb-12">
              Explore Our Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-flora-light bg-opacity-30 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-flora-primary rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Database</h3>
                <p className="text-gray-700">
                  Access detailed information about various flowers and plants from around the globe.
                </p>
              </div>
              
              <div className="p-6 bg-flora-light bg-opacity-30 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-flora-primary rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Care Tips</h3>
                <p className="text-gray-700">
                  Learn how to properly care for your plants with expert advice and detailed instructions.
                </p>
              </div>
              
              <div className="p-6 bg-flora-light bg-opacity-30 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-flora-primary rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Seasonal Insights</h3>
                <p className="text-gray-700">
                  Discover when different plants bloom and how to care for them throughout the seasons.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-flora-primary text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Botanical Journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join our community today and start exploring the fascinating world of plants and flowers.
            </p>
            <Link to="/register">
              <Button className="bg-white text-flora-primary hover:bg-flora-light">
                Create an Account
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <footer className="bg-flora-dark text-white py-8">
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

export default Landing;
