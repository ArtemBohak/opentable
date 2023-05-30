import React from "react";

const SearchBarLoader = () => {
  return (
    <div
      className="text-left text-lg py-3 m-auto flex justify-center animate-pulse"
      style={{ animationDelay: "0.08s", animationDuration: "2s" }}
    >
      <div className="bg-gray-300 rounded h-10 mr-3 p-2 w-[450px]" />
      <div className="rounded bg-gray-300 px-9 py-2 w-32" />
    </div>
  );
};

export default SearchBarLoader;
