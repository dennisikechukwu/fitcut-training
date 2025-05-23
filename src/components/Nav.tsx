"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  return (
    <nav className="px-5 lg:py-3 sticky top-0 z-50 py-5 border-b-3 lg:bg-gray-200 bg-gray-400 flex justify-between items-center">
      <div>
        <Link href="/">
          <Image alt="Logo" src="/logo.png" width={100} height={100} />
        </Link>
      </div>

      {session?.user ? (
        <div className="flex items-center gap-4">
          {/* User profile image */}
          <Image
            src={session?.user?.image ?? "/default-avatar.png"} // fallback image
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />

          {/* Sign Out Button */}
          <button
            onClick={() => signOut()}
            className="px-3.5 py-2.5 bg-black text-white rounded-full font-bold font-sans"
          >
            SIGN OUT
          </button>
        </div>
      ) : (
        <button
          className="px-3.5 py-2.5 bg-black text-white rounded-full font-bold font-sans"
          onClick={() => signIn("google")}
        >
          SIGN IN
        </button>
      )}
    </nav>
  );
};

export default Nav;
