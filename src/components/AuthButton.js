"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaUserGraduate, FaUserLock } from "react-icons/fa";
import { FaRegRegistered } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  /* const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  }; */

  return (
    <div className="flex items-center gap-3 p-2 rounded-ful transition cursor-pointer">
      {status === "loading" ? null : session ? (
        <>
          <div className="flex items-center gap-2">
            <Image
              src={session.user.image}
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />

            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {session.user.name}
            </span>
          </div>

          <button
            onClick={() => signOut()}
            title="Logout"
            className="text-xl text-gray-700 dark:text-gray-300 hover:text-red-600 transition"
          >
            <FiLogOut />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => signIn()}
            title="Login"
            className="text-xl text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FaUserLock />
          </button>

          <Link
            href="/register"
            title="Register"
            className="text-xl text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FaRegRegistered />
          </Link>
        </>
      )}
    </div>
  );
}
