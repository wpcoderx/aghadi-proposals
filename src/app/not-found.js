import Link from "next/link";

const notfound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Page Not Found!</h1>
        <p className="text-gray-600 mb-6">
          Page May getting ready. Stay tuned!
        </p>

        <div className="flex justify-center">
          <svg
            className="w-40 h-40 text-indigo-200 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M24 4v6m0 28v6m18-18h6M4 24H2m35.31-10.69l4.24-4.24M6.34 41.66l4.24-4.24M41.66 41.66l-4.24-4.24M6.34 6.34l4.24 4.24"
            />
          </svg>
        </div>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default notfound