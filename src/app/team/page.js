"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login");
    }
  }, [status]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/team/");
      if (!res.ok) throw new Error("Failed to fetch users");

      const result = await res.json();
      setUsers(result.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (status === "loading" || !session) return null;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white flex items-center justify-center gap-2 mb-10">
          <FaLock /> All Members
        </h2>

        {users.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => {
              const userAvatar =
                user?.image ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user?.name || "User"
                )}&rounded=true&background=random`;

              return (
                <div
                  key={user._id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center text-center"
                >
                  <Image
                    src={userAvatar}
                    alt={user.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {user.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {user.email}
                  </p>
                  <Link
                    href={`/team/${user._id}`}
                    className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded"
                  >
                    View
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-300">
            Data not available...
          </p>
        )}
      </div>
    </div>
  );
}
