import { useEffect, useState } from "react";
const sections = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (
            window.scrollY >= top - 120 &&
            window.scrollY < top + height - 120
          ) {
            current = section;
          }
        }
      });
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 5
      ) {
        current = "contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b1630]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto  h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="text-lg font-semibold text-white tracking-wide"
        >
          <span className="text-4xl md:text-5xl px-5 font-bold text-orange-400">
            Khaerul
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          {sections.map((item) => (
            <li key={item} className="relative">
              <a
                href={`#${item}`}
                className={`transition ${
                  activeSection === item
                    ? "text-orange-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>

              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-orange-400 transition-all duration-300
                  ${activeSection === item ? "w-full" : "w-0"}
                `}
              ></span>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/6285814064274?text=Hello%20Khaerul,%20I'm%20interested%20in%20working%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold
             bg-orange-500 text-black rounded-md
             hover:bg-orange-400 transition"
        >
          Hire Me
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-[#0b1630]/95 backdrop-blur
    transition-all duration-300 overflow-hidden
    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
  `}
      >
        <ul className="flex flex-col gap-6 px-6 py-6 text-sm font-medium">
          {sections.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className={`block ${
                  activeSection === item
                    ? "text-orange-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}

          <a
            href="https://wa.me/6285814064274?text=Hello%20Khaerul,%20I'm%20interested%20in%20working%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex justify-center px-4 py-2 text-sm font-semibold
        bg-orange-500 text-black rounded-md hover:bg-orange-400 transition"
          >
            Hire Me
          </a>
        </ul>
      </div>
    </nav>
  );
}
