import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScroll((winScroll / height) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="
    fixed top-0 left-0 h-[4px] z-[100]
    bg-gradient-to-r from-blue-600 to-pink-500
    shadow-[0_0_20px_2px_rgba(100,100,255,0.55)]
    dark:shadow-[0_0_20px_6px_rgba(255,100,180,0.55)]
    transition-colors duration-500
  "
      style={{ width: `${scroll}%`, transition: "width 0s" }}
    />
  );
}
