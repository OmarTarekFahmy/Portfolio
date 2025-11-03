import { useState } from "react";

export default function Hero() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section
      id="home"
      className="
        flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen px-6
        transition-colors duration-500
        bg-gradient-to-br from-gray-50 via-white to-blue-100 text-gray-900
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black dark:text-white
      "
    >
      {/* Left side — Text */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-gray-800 dark:text-blue-100">Hi</span>
          <span className="text-pink-500 dark:text-blue-200">,</span>{" "}
          <span className="text-pink-500 dark:text-blue-400">I'm</span>{" "}
          <span className="text-pink-600 dark:text-blue-500">Omar</span>{" "}
          <span className="text-pink-700 dark:text-blue-700">Fahmy</span>
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-xl">
          Computer engineer specializing in hardware design, embedded systems,
          low-level programming, backend development, and exploring intelligent
          systems through AI.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {/* View My Work */}
          <a
            href="#projects"
            className="
              px-6 py-3 rounded-lg font-semibold transition
              bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg
              dark:bg-blue-500 dark:hover:bg-blue-600 dark:shadow-blue-800/50
            "
          >
            View My Work
          </a>

          {/* Resume Button (opens modal) */}
          <a href="/omar_fahmy.pdf" target="_blank" rel="noopener noreferrer">
            <button
              className="
              px-6 py-3 rounded-lg font-semibold transition border
              border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white shadow-sm
              dark:text-blue-300 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-white dark:shadow-blue-900/50
            "
            >
              View Resume
            </button>
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className="
              px-6 py-3 rounded-lg font-semibold transition border
              border-pink-500 text-pink-600 hover:bg-pink-600 hover:text-white shadow-sm
              dark:text-white dark:border-pink-500 dark:hover:bg-pink-600 dark:shadow-pink-900/50
            "
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right side — Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="/profile.jpeg"
          alt="Omar Fahmy"
          className="
            w-72 h-72 object-cover rounded-full shadow-2xl border-4 transition-all duration-500
            border-blue-600 dark:border-blue-800 dark:shadow-blue-900/50
          "
        />
      </div>
    </section>
  );
}
