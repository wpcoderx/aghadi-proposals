"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaGithub, FaGoogle, FaLock } from "react-icons/fa";

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const searchParams = useSearchParams();
    const error = searchParams.get("error");
 
    const handleCredentialsLogin = async (e) => {
      e.preventDefault();
  
      await signIn("credentials", {
        username,
        password,
        redirect: true,
        callbackUrl: "/",
      });
    };
  
  const handleGitHubLogin = () => {
    signIn("github", { callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white flex items-center justify-center gap-2">
          <FaLock /> Login to Your Account
        </h2>

        {/* Show error message if login fails */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 dark:bg-red-800 dark:text-red-100 px-4 py-2 rounded">
            Invalid username or password.
          </div>
        )}

        <form onSubmit={handleCredentialsLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6">
          <button
            onClick={handleGitHubLogin}
            className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded transition"
          >
            <FaGithub /> Login with GitHub
          </button>
        </div>

        <div className="mt-6">     
            <button type="submit"  onClick={() => signIn('google', { callbackUrl: '/dashboard' })} className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded transition"> <FaGoogle />  Signin with Google</button>
        </div>
      </div>
    </div>
  );
}
