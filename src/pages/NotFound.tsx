
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-flora-light bg-opacity-30 py-12">
        <div className="text-center px-6">
          <h1 className="text-9xl font-bold text-flora-primary">404</h1>
          <h2 className="text-3xl font-semibold text-flora-dark mt-4 mb-6">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-flora-primary hover:bg-flora-dark">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
