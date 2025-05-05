
import { Flower, User } from "./types";

// Mock user data
const users = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com",
    password: "password123", // In a real app, this would be hashed
  },
];

// Mock flower data
const flowers: Flower[] = [
  {
    id: "1",
    name: "Rose",
    scientificName: "Rosa",
    description: "A woody perennial flowering plant known for its beauty and fragrance.",
    detailedDescription: "Roses are one of the most popular flowers globally, known for their layered petals and sweet fragrance. They come in various colors including red, pink, white, yellow, and orange, each with its own symbolic meaning. Red roses typically symbolize love and passion, while white ones represent purity and innocence.",
    origin: "Asia, Europe, North America, and Northwest Africa",
    uses: ["Ornamental", "Perfumes", "Culinary", "Medicinal"],
    careInstructions: "Plant in well-draining soil with full sun exposure. Water deeply but infrequently, and prune annually to encourage healthy growth.",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    bloomSeason: "Spring to Fall",
  },
  {
    id: "2",
    name: "Tulip",
    scientificName: "Tulipa",
    description: "Spring-blooming perennial with bold, cup-shaped flowers.",
    detailedDescription: "Tulips are spring-blooming perennials known for their bright, bold colors and cup-shaped flowers. Native to Central Asia, they've become synonymous with Dutch culture after being introduced to the Netherlands in the 16th century. Tulips come in various colors and shapes, with over 3,000 registered varieties.",
    origin: "Central Asia, Turkey",
    uses: ["Ornamental", "Cut flowers", "Symbolic"],
    careInstructions: "Plant bulbs in the fall, 4-8 inches deep in well-draining soil. They prefer full sun to partial shade and moderate watering.",
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    bloomSeason: "Spring",
  },
  {
    id: "3",
    name: "Sunflower",
    scientificName: "Helianthus annuus",
    description: "Tall annual with large, bright yellow blooms that track the sun.",
    detailedDescription: "Sunflowers are remarkable for their height and large, bright yellow blooms that track the sun's movement across the sky, a behavior known as heliotropism. Native to North America, they can grow up to 12 feet tall with flower heads reaching 12 inches in diameter. The seeds are edible and are commonly harvested for oil production and snacks.",
    origin: "North America",
    uses: ["Ornamental", "Seeds for food", "Oil production", "Bird feed"],
    careInstructions: "Plant in full sun with well-draining soil. Water deeply but infrequently, and stake tall varieties for support.",
    imageUrl: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
    bloomSeason: "Summer to Early Fall",
  },
  {
    id: "4",
    name: "Orchid",
    scientificName: "Orchidaceae",
    description: "Diverse flowering plants known for their complex, exotic blooms.",
    detailedDescription: "Orchids are one of the largest families of flowering plants, with over 28,000 species. They're known for their complex, exotic blooms that can last for months. Orchids have evolved specialized features to attract specific pollinators, leading to an incredible diversity of shapes, sizes, and colors. They're found on every continent except Antarctica, with the highest diversity in tropical regions.",
    origin: "Worldwide, primarily tropical regions",
    uses: ["Ornamental", "Vanilla production", "Traditional medicine"],
    careInstructions: "Most orchids prefer bright, indirect light and high humidity. Water when the growing medium is nearly dry and fertilize regularly during the growing season.",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    bloomSeason: "Varies by species",
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock API functions
export const api = {
  // Auth endpoints
  register: async (name: string, email: string, password: string) => {
    await delay(800);
    
    // Check if user already exists
    if (users.find((u) => u.email === email)) {
      throw new Error("User already exists");
    }
    
    // Create new user
    const newUser = {
      id: String(users.length + 1),
      name,
      email,
      password, // In a real app, this would be hashed
    };
    
    users.push(newUser);
    
    // Return user without password and a fake token
    return {
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
      token: `fake-jwt-token-${newUser.id}`,
    };
  },
  
  login: async (email: string, password: string) => {
    await delay(800);
    
    // Find user
    const user = users.find((u) => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error("Invalid credentials");
    }
    
    // Return user without password and a fake token
    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token: `fake-jwt-token-${user.id}`,
    };
  },
  
  // Flower endpoints
  getFlowers: async () => {
    await delay(800);
    return [...flowers];
  },
  
  getFlowerById: async (id: string) => {
    await delay(500);
    const flower = flowers.find((f) => f.id === id);
    
    if (!flower) {
      throw new Error("Flower not found");
    }
    
    return flower;
  },
};
