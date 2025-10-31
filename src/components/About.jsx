export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-6 animate-fadein">
      <h2 className="text-4xl font-bold text-blue-400 mb-4">About Me</h2>
      <p className="max-w-2xl text-gray-300 text-center leading-relaxed">
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
            className="bg-pink-800 text-gray-200 px-4 py-2 rounded-full border border-pink-800 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
