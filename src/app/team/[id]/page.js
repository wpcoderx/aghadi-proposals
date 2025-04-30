import { notFound } from "next/navigation";
import Image from "next/image";

export default async function UserPage({ params }) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/team/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    notFound();
  }

  const { data: user } = await res.json();

  const userAvatar =
    user?.image ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user?.name || "User"
    )}&rounded=true&background=random`;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <Image
          src={userAvatar}
          alt={user.name}
          width={120}
          height={120}
          className="mx-auto rounded-full object-cover"
        />
        <h1 className="mt-6 text-2xl font-bold text-gray-800 dark:text-white">
          {user.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">{user.email}</p>

        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p><strong>ID:</strong> {user._id}</p>
        </div>
      </div>
    </div>
  );
}
