import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-600 mt-2">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg shadow-md focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:outline-none transition-all"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Homepage
          </a>
        </div>
      </div>
      <img
        src="/404-illustration.svg"
        alt="404 illustration"
        className="mt-8 w-full max-w-lg"
      />
    </div>
  );
};

export default ErrorPage;
