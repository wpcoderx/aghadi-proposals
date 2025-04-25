"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaUserLock } from "react-icons/fa";
import { FaRegRegistered } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  const pathname = usePathname();

  const [teamOpen, setTeamOpen] = useState(false);

  if (status === "loading") return null;

  const user = session?.user;
  const userAvatar =
    user?.image ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user?.name || "User"
    )}&rounded=true&background=random`;

  const navLinkClasses = (href) =>
    `text-sm font-medium transition hover:underline ${
      pathname === href
        ? "text-indigo-600 font-semibold"
        : "text-gray-700 dark:text-gray-200"
    }`;

  return (
    <div className="flex items-center gap-4 p-2">
      {session ? (
        <>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard" className={navLinkClasses("/dashboard")}>
              Dashboard
            </Link>

            <div className="relative group">
              {/* Parent Item */}
              <button
                onClick={() => setTeamOpen(!teamOpen)}
                className={navLinkClasses("/team")}
              >
                Team
              </button>

              {/* Dropdown Menu */}
              {teamOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border shadow-lg rounded z-50">
                  <Link
                    href="/team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setTeamOpen(false)}
                  >
                    View Team
                  </Link>
                  <Link
                    href="/team/add"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setTeamOpen(false)}
                  >
                    Add Team
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <Image
              src={userAvatar}
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {user?.name}
            </span>
            <button
              onClick={() => signOut()}
              title="Logout"
              aria-label="Logout"
              className="text-xl text-gray-700 dark:text-gray-300 hover:text-red-600 transition"
            >
              <FiLogOut />
            </button>
          </div>
        </>
      ) : (
        <div className="flex items-center gap-4">
          <button
            onClick={() => signIn()}
            title="Login"
            aria-label="Login"
            className="text-xl text-gray-700 hover:text-indigo-600 transition"
          >
            <FaUserLock />
          </button>

          <Link
            href="/register"
            title="Register"
            aria-label="Register"
            className="text-xl text-gray-700 hover:text-green-600 transition"
          >
            <FaRegRegistered />
          </Link>
        </div>
      )}
    </div>
  );
}
