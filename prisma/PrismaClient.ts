import {
  Item,
  PrismaClient,
  Location,
  Cuisine,
  Restaurant,
} from "@prisma/client";
import {
  RestaurantByIdType,
  RestaurantCardType,
} from "../app/interfaces/PageTypes";

const prisma = new PrismaClient();
export default prisma;

// **FUNCTIONS** //

const restaurantsSelect = {
  id: true,
  name: true,
  main_image: true,
  cuisine: true,
  location: true,
  price: true,
  slug: true,
};

const fetchLocations = async (): Promise<Location[]> => {
  return await prisma.location.findMany();
};
export { fetchLocations };

const fetchCuisines = async (): Promise<Cuisine[]> => {
  return await prisma.cuisine.findMany();
};
export { fetchCuisines };

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: restaurantsSelect,
  });
  return restaurants;
};
export { fetchRestaurants };

const fetchRestaurantBySlug = async (
  slug: string
): Promise<RestaurantByIdType> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug: slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant;
};
export { fetchRestaurantBySlug };

const fetchMenuItems = async (slug: string): Promise<Item[]> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug: slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant.items;
};
export { fetchMenuItems };

const fetchRestaurantsByLocation = async (
  city: string
): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    where: { location: { name: { equals: city.toLowerCase() } } },
    select: restaurantsSelect,
  });
  return restaurants;
};
export { fetchRestaurantsByLocation };


const fetchRestaurantsByCuisine = async (
  cuisine: string
): Promise<RestaurantCardType[]> => {
  return await prisma.restaurant.findMany({
    where: {
      cuisine: {
        name: { equals: cuisine.toLowerCase() },
      },
    },
    select: restaurantsSelect,
  });
};
export { fetchRestaurantsByCuisine };
