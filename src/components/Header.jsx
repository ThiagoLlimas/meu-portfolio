import { motion } from "framer-motion";
import { useState } from "react";

const Header = ({ onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNeon, setIsNeon] = useState(false);

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Projetos", href: "#projects" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" },
  ];

  const handleToggleTheme = () => {
    setIsNeon(!isNeon);
    onToggleTheme();
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
    >
      <nav className="container mx-auto px-4 py-4 text-center">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-destaque"
          >
            Thiago.dev
          </motion.div>

          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                className="text-slate-300 hover:text-destaque transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              onClick={handleToggleTheme}
              className="cursor-pointer px-4 py-2 rounded-lg bg-slate-800 text-destaque hover:bg-slate-700 transition-all duration-300 font-semibold text-sm flex items-center gap-2"
              title="Alternar tema Neon"
            >
              {isNeon ? "⚡ NEON: ON" : "🌑 NEON: OFF"}
            </motion.button>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-destaque transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 border-t border-slate-800 flex flex-col items-center justify-center"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-slate-300 hover:text-destaque transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                handleToggleTheme();
                setIsMenuOpen(false);
              }}
              className="py-2 text-slate-300 hover:text-destaque transition-colors duration-300 font-medium cursor-pointer"
            >
              {isNeon ? "⚡ NEON: ON" : "🌑 NEON: OFF"}
            </button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
