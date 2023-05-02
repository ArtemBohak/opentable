import { Item, PrismaClient } from "@prisma/client";
import {
  RestaurantByIdType,
  RestaurantCardType,
} from "../app/interfaces/PageTypes";

const prisma = new PrismaClient();
export default prisma;

// **FUNCTIONS** //

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
    },
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