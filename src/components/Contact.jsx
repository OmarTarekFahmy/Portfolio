import { useState } from "react";
import EmailForm from "./EmailForm";
import Toast from "./Toast";
import { AnimatePresence, motion } from "framer-motion";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <div
      className="
        min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-500
        bg-gradient-to-br from-gray-50 via-white to-blue-100 text-gray-900
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black dark:text-white
      "
    >
      <h2 className="text-4xl font-bold text-pink-600 dark:text-blue-400 mb-4">
        Contact
      </h2>

      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Let’s connect or work together!
      </p>

      <button
        onClick={() => setShowForm(true)}
        className="
          px-6 py-3 rounded-lg font-semibold transition-colors duration-300
          bg-pink-600 hover:bg-pink-700 text-white
          dark:bg-blue-500 dark:hover:bg-blue-600
        "
      >
        Contact Me
      </button>

      {/* Email form overlay */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            key="email-form-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <EmailForm
              isOpen={showForm}
              onClose={() => setShowForm(false)}
              onSend={() => setShowToast(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      <Toast
        message="✅ Message sent!"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
