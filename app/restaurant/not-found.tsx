"use client";

import Image from "next/image";
import errorMascot from "@/public/icons/error.png";

type Props = {
  error: Error;
};

const Error = ({ error }: Props) => {
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <Image alt="error.png" src={errorMascot} className="w-56 mb-8" />
      <div className="bg-white p-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold">Something went wrong</h3>
        <p className="text-center mt-2">404 | Page not found</p>
      </div>
    </div>
  );
};
export default Error;
