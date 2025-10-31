export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-6">
      <h2 className="text-4xl font-bold text-blue-400 mb-4">Contact</h2>
      <p className="text-gray-300 mb-6">Let’s connect or work together!</p>
      <a
        href="mailto:youremail@example.com"
        className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg font-semibold transition"
      >
        Send Email
      </a>
    </div>
  );
}
