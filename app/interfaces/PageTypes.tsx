import { Location, Cuisine, PRICE, Item } from "@prisma/client";

export interface ContextType {
  params: { [prop: string]: string };
  searchParams: { [prop: string]: string };
}

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
}

export interface RestaurantByIdType {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}
