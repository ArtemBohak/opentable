import React from "react";

const SideSearchBarLoader = () => {
  return (
    <div>
      <div className="w-36">
        <div
          className="border-b pb-4 flex w-full flex-col animate-pulse"
          style={{ animationDelay: "0.08s", animationDuration: "2s" }}
        >
          <div className="bg-gray-300 w-3/4 h-4 my-2 rounded-sm" />
          <div className="bg-gray-300 w-full my-1 h-4 rounded-sm" />
          <div className="bg-gray-300 w-full my-1 h-4 rounded-sm" />
          <div className="bg-gray-300 w-full my-1 h-4 rounded-sm" />
        </div>
        <div
          className="border-b pb-4 mt-3 w-full flex flex-col animate-pulse"
          style={{ animationDelay: "0.16s", animationDuration: "2s" }}
        >
          <div className="bg-gray-300 w-3/4 h-4 my-2 rounded-sm" />
          <div className="bg-gray-300 w-full my-1 h-4 rounded-sm" />
          <div className="bg-gray-300 w-full my-1 h-4 rounded-sm" />
          <div className="bg-gray-300 w-full my-1 h-4 rounded-sm" />
        </div>
        <div className="mt-3 pb-4 animate-pulse" style={{ animationDelay: "0.24s", animationDuration: "2s" }}>
          <div className="w-3/4 h-4 mb-2 bg-gray-300 rounded-sm" />
          <div className="flex w-full">
            <div className="border text-reg font-light rounded px-3 py-1 w-full h-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSearchBarLoader;
