import React from "react";

function LoadingRestaurantPage() {
  return (
    <main>
      <div
        className="h-96 overflow-hidden animate-pulse bg-gray-300"
        style={{ animationDelay: "0.08s", animationDuration: "2s" }}
      >
        <div className={`bg-center h-full`} />
      </div>
      <div
        className="flex  m-auto w-2/3 justify-between items-start 0 -mt-9 animate-pulse"
        style={{ animationDelay: "0.16s", animationDuration: "2s" }}
      >
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <nav className="flex text-reg border-b pb-2">
            <div className="mr-7 h-4 bg-gray-300 w-14 rounded-sm" />
            <div className="mr-7 h-4 bg-gray-300 w-14 rounded-sm" />
          </nav>

          <div className="mt-4 border-b pb-6 animate-pulse bg-gray-300 w-[400px] h-16 rounded"></div>

          <div className="flex items-end">
            <div className="ratings mt-2 flex items-center">
              <div className="flex items-center bg-gray-300 w-56"></div>
              <p className="text-reg ml-3"></p>
            </div>
            <div>
              <p className="text-reg ml-4"> </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoadingRestaurantPage;
