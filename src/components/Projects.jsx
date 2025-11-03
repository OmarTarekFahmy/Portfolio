const projects = [
  {
    title: "University Internship Tracker",
    description:
      "A frontend web app built with React, Tailwind CSS, and shadcn/ui to streamline the university internship process. Includes dashboards for students and companies, internship listings, and evaluation management — all in a modern, responsive UI.",
    image: "/internship_tracker.png",
    tech: ["ReactJS", "ShadCN", "Node.js"],
    link: "https://github.com/OmarTarekFahmy/internship-tracker",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive one-page developer portfolio built with React and Tailwind CSS, featuring smooth scroll navigation and a dark mode design. (Yes, the page you're on right now)",
    image: "/portfolio.png",
    tech: ["React", "TailwindCSS", "Vercel"],
    link: "https://portfolio-omar-fahmy.vercel.app/",
  },
  {
    title: "CPU Pipeline Simulator",
    description:
      "A simulated CPU written in C for Linux, implementing a 5-stage instruction pipeline (fetch, decode, execute, memory, write-back). Parses pseudo-assembly input files, maintains register and memory state, and handles data/control hazards through pipeline stalls and forwarding — providing a functional model of a pipelined processor’s execution flow.",
    image: "/pipelining.png",
    tech: ["C", "Linux", "Computer Architecture", "Pipelining"],
    link: "https://github.com/OmarTarekFahmy/MIPS32_Architecture",
  },
];

export default function Projects() {
  return (
    <div
      className="
        min-h-screen px-6 py-20 transition-colors duration-500
        bg-gradient-to-br from-gray-50 via-white to-blue-100 text-gray-900
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black dark:text-gray-300
      "
    >
      <h2 className="text-4xl font-bold text-pink-600 dark:text-blue-400 mb-12 text-center">
        Projects
      </h2>

      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full md:w-1/2 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300
                border border-gray-200 dark:border-gray-700
              "
            />

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="
                      text-sm px-3 py-1 rounded-full border transition-colors duration-300
                      bg-blue-100 text-blue-800 border-blue-200
                      dark:bg-blue-500/10 dark:border-blue-500/30 dark:text-blue-300
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-medium transition-colors duration-300
                  text-pink-600 hover:text-pink-500
                  dark:text-blue-400 dark:hover:text-blue-300
                "
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
