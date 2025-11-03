export default function About() {
  return (
    <div
      className="
        min-h-screen flex flex-col items-center justify-center px-6 animate-fadein transition-colors duration-500
        bg-gradient-to-br from-gray-50 via-white to-blue-100 text-gray-900
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black dark:text-gray-200
      "
    >
      <h2 className="text-4xl font-bold text-pink-600 dark:text-blue-400 mb-4">
        About Me
      </h2>

      <p className="max-w-2xl text-gray-700 dark:text-gray-300 text-center leading-relaxed">
        Computer engineer with a strong background in embedded systems,
        low-level programming, and backend development. Passionate about
        creating efficient and reliable systems that bridge the gap between
        hardware and software. Currently exploring AI-driven technologies and
        real-time embedded intelligence to push performance and innovation
        further.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-xl">
        {[
          "C / C++",
          "Python",
          "Embedded Systems Programming",
          "AI / ML Basics",
          "Microcontrollers (ARM, AVR)",
          "Linux System Programming",
          "ROS (Robot Operating System)",
        ].map((skill) => (
          <span
            key={skill}
            className="
              px-4 py-2 rounded-full border text-sm transition-colors duration-300
              bg-pink-100 border-pink-200 text-pink-800
              dark:bg-pink-800 dark:border-pink-700 dark:text-gray-200
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
