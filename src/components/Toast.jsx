// src/components/Toast.jsx
import { useEffect, useState } from "react";

export default function Toast({ message, show, onClose }) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-5 right-5 z-[60] px-4 py-2 rounded-lg
        bg-pink-600 text-white dark:bg-blue-500 shadow-lg
        animate-toastSlideIn"
    >
      {message}
    </div>
  );
}
