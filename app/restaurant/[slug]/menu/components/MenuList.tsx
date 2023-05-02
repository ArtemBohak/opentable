import { Item } from "@prisma/client";
import React, { FC } from "react";
import MenuCard from "./MenuCard";

interface Props {
  restaurantMenu: Item[];
}

const MenuList: FC<Props> = ({ restaurantMenu }) => {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {restaurantMenu.length ? (
            restaurantMenu.map((item) => (
              <MenuCard key={item.id} menuItem={{ ...item }} />
            ))
          ) : (
            <p>This restaurant does not have a menu</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default MenuList;
