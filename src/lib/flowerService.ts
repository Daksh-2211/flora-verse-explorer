
import { useQuery } from "@tanstack/react-query";
import { Flower } from "./types";
import { api } from "./mockApi";

// Custom hook to fetch all flowers
export const useFlowers = () => {
  return useQuery<Flower[]>({
    queryKey: ["flowers"],
    queryFn: () => api.getFlowers(),
  });
};

// Custom hook to fetch a single flower by ID
export const useFlower = (id: string) => {
  return useQuery<Flower>({
    queryKey: ["flower", id],
    queryFn: () => api.getFlowerById(id),
    enabled: !!id,
  });
};
