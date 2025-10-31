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
      "A responsive one-page developer portfolio built with React and Tailwind CSS, featuring smooth scroll navigation and a dark mode design.",
    image: "/images/portfolio.jpg",
    tech: ["React", "TailwindCSS", "Vercel"],
    link: "https://yourportfolio.vercel.app",
  },
  {
    title: "Linux System Monitor",
    description:
      "A CLI tool for analyzing process and memory usage on Linux systems, built in C++ using low-level system calls and /proc parsing.",
    image: "/images/linux-monitor.jpg",
    tech: ["C++", "Linux", "System Programming"],
    link: "https://github.com/yourusername/linux-monitor",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-300 px-6 py-20">
      <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">
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
              className="w-full md:w-1/2 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium"
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
