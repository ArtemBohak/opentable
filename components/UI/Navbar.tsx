import Link from "next/link";
import { FC } from "react";
import AuthModal from "./AuthModal";

export const Navbar: FC = () => {
  return (
    <nav className="max-w-full bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        OpenTable
      </Link>
      <div>
        <div className="flex">
          <AuthModal isSignin={true} />
          <AuthModal isSignin={false} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
