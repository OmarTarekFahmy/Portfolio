// src/components/EmailForm.jsx
import { useEffect, useState } from "react";

export default function EmailForm({ isOpen, onClose, onSend }) {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setVisible(false), 300);
      document.body.style.overflow = "auto";
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSend) onSend(); // trigger toast in parent
    onClose(); // close form immediately
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center
      bg-black/60 backdrop-blur-sm transition-opacity duration-300
      ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-white
        rounded-2xl shadow-2xl w-11/12 max-w-lg p-6 transform transition-all duration-300
        ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-pink-600 dark:text-blue-400">
          Send a Message
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
              bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2
              focus:ring-pink-400 dark:focus:ring-blue-500 transition"
          />
          <input
            type="text"
            placeholder="Subject"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
              bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2
              focus:ring-pink-400 dark:focus:ring-blue-500 transition"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
              bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2
              focus:ring-pink-400 dark:focus:ring-blue-500 transition"
          ></textarea>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg font-semibold border border-gray-400 dark:border-gray-600
                hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg font-semibold text-white
                bg-pink-600 hover:bg-pink-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
