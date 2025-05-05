
import { Flower } from "@/lib/types";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface FlowerCardProps {
  flower: Flower;
}

export function FlowerCard({ flower }: FlowerCardProps) {
  return (
    <Link to={`/flower/${flower.id}`} className="block">
      <Card className="flora-card h-full flex flex-col animate-fade-in">
        <div className="relative h-56 w-full overflow-hidden">
          <img
            src={flower.imageUrl}
            alt={flower.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="pt-6 px-4 flex-1">
          <h3 className="text-xl font-semibold text-flora-dark">{flower.name}</h3>
          <p className="text-sm text-gray-500 italic mb-2">{flower.scientificName}</p>
          <p className="text-gray-700">{flower.description}</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <div className="flex justify-between items-center w-full">
            <span className="text-sm text-flora-primary">Origin: {flower.origin.split(",")[0]}</span>
            <span className="text-sm bg-flora-light text-flora-primary px-2 py-1 rounded-full">
              {flower.bloomSeason}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
