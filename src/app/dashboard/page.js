"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {

  const { data: session, status } = useSession();

  const router = useRouter();

  const [contact, setContact] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  useEffect(() => {
    if (status === "authenticated") {
      (async () => {
        try {
          const res = await fetch("/api/contact");
          if (!res.ok) throw new Error("Data not found...");
          const emaillist = await res.json();
          setContact(emaillist.data);
        } catch (err) {
          console.error("Error loading contacts:", err);
        }
      })();
    }
  }, [status]);

  if (status === "loading" || status === "unauthenticated") {
    return null; //  no flash, no loader
    /* return <div className="p-6 text-gray-600 dark:text-white">Checking Your information...</div>; */
  }


  return (
    <div className="min-h-screen bg-gray-100 p-6 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Overview of recent data</p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
              Contact Submissions
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm text-left dark:border-gray-600">
              <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase">
                <tr>
                  <th className="px-6 py-3 border-b">#</th>
                  <th className="px-6 py-3 border-b">Name</th>
                  <th className="px-6 py-3 border-b">Email</th>
                  <th className="px-6 py-3 border-b">Message</th>
                  <th className="px-6 py-3 border-b">Date</th>
                  <th className="px-6 py-3 border-b text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                {contact?.map((item, index) => (
                  <tr key={item._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 border-b">{index + 1}</td>
                    <td className="px-6 py-4 border-b font-medium">{item.contactName}</td>
                    <td className="px-6 py-4 border-b">
                      <a
                        href={`mailto:${item.contactEmail}`}
                        className="text-blue-600 hover:underline"
                      >
                        {item.contactEmail}
                      </a>
                    </td>
                    <td className="px-6 py-4 border-b">
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                        {item.contactMessage}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b">
                      <span className="px-2 py-1">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b text-right space-x-2">
                      <button className="text-blue-600 hover:underline">Edit</button>
                      <button className="text-red-600 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
