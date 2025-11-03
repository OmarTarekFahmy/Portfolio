import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
      fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300
      bg-white text-gray-900
      dark:bg-gray-900 dark:text-white
    "
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div
          className="
          text-2xl font-bold
          text-blue-600 dark:text-blue-400
        "
        >
          Omar<span className="text-pink-500">.</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="
                  hover:text-pink-500 transition
                  dark:hover:text-pink-400
                "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        {/* Mobile menu button */}
        <button
          className="md:hidden hover:text-pink-500 dark:hover:text-pink-400 transition"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul
          className="
            md:hidden flex flex-col items-center space-y-4 py-4 animate-fadeIn transition-colors duration-300
            bg-gray-100 dark:bg-gray-800
          "
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  block text-lg hover:text-pink-500 transition
                  dark:hover:text-pink-400
                "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
