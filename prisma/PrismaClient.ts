import {
  Item,
  PrismaClient,
  Location,
  Cuisine,
  Prisma,
  User,
} from "@prisma/client";
import { notFound } from "next/navigation";
import {
  NavbarSearchParams,
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
  reviews: true,
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
    select: { ...restaurantsSelect },
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
      reviews: true,
    },
  });

  if (!restaurant) {
    notFound();
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
    notFound();
  }

  return restaurant.items;
};
export { fetchMenuItems };

const fetchRestaurantsByParams = async (
  searchParams: NavbarSearchParams
): Promise<RestaurantCardType[]> => {
  const whereObj: any = {};

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };

    whereObj.location = location;
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };

    whereObj.cuisine = cuisine;
  }

  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };

    whereObj.price = price;
  }

  const restaurants = await prisma.restaurant.findMany({
    where: whereObj,
    select: restaurantsSelect,
  });
  return restaurants;
};
export { fetchRestaurantsByParams };

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

const fetchUserByEmail = async (
  email: string,
  select: Prisma.UserSelect | { id: true; email: true; password: true } = {
    id: true,
    email: true,
    password: true,
  }
) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: select,
  });
};
export { fetchUserByEmail };

const createUser = async (data: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data: data,
  });
};
export { createUser };
