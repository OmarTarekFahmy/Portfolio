export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6"
    >
      {/* Left side — Text */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm <span className="text-blue-400">Omar</span> <span className="text-blue-800">Fahmy</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-lg">
           I'm a computer engineer with a strong background in hardware design,
  embedded systems, and low-level programming, combining technical depth
  with solid experience in backend development to build efficient and
  reliable solutions from the ground up.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-pink-500 hover:bg-pink-600 hover:text-white rounded-lg font-semibold transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right side — Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="/profile.jpeg" // replace with your own photo in /public or /src/assets
          alt="Omar Fahmy"
          className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-blue-800"
        />
      </div>
    </section>
  );
}
