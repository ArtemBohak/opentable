"use client";

import styles from "./page.module.css";
import Header from "./HomePageComponents/Header/Header";
import RestaurantCards from "./HomePageComponents/RestaurantCards/RestaurantCards";


export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-full">
      <main className="max-w-screen-2xl m-auto bg-white">
        <main>
          <Header />
          <RestaurantCards />
        </main>
      </main>
    </main>
  );
}
