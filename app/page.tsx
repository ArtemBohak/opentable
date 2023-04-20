"use client";

import styles from "./page.module.css";
import Header from "./HomePageComponents/Header/Header";
import RestaurantCards from "./HomePageComponents/RestaurantCards/RestaurantCards";

export default function Home() {
  return (
    <>
      <Header />
      <RestaurantCards />
    </>
  );
}
