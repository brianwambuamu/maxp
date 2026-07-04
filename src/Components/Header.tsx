import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/90 border-b border-blue-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* LOGO SECTION */}
        <motion.div whileHover={{ scale: 1.02 }} className="flex items-center">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
            {/* Profile Image Logo */}
            <motion.div
              whileHover={{ rotate: 5 }}
              className="relative"
            >
              <img
                src="/MAX.jpg"
                alt="Maxwell"
                className="w-11 h-11 rounded-xl object-cover border-2 border-blue-600 shadow-md"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
            </motion.div>

            {/* Brand Name */}
            <div>
              <h1 className="text-lg md:text-xl font-bold text-blue-950 tracking-tight">
                Maxwell
                <span className="text-blue-600">.</span>
              </h1>
              <p className="text-[10px] font-semibold tracking-wider uppercase text-slate-500">
                Portfolio
              </p>
            </div>
          </Link>
        </motion.div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span
                  className={`
                    relative inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "text-blue-700 bg-blue-50"
                        : "text-slate-600 hover:text-blue-700 hover:bg-blue-50/50"
                    }
                  `}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-blue-50 rounded-lg border border-blue-100"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </span>
              </Link>
            );
          })}

          {/* CTA Button */}
          <Link
            to="/contact"
            className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300"
          >
            Let's Talk
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 border border-blue-100 text-blue-700 hover:bg-blue-100 transition-colors"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white border-t border-blue-100 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-2">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`
                        flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300
                        ${
                          isActive
                            ? "bg-blue-50 border border-blue-100 text-blue-700 font-semibold"
                            : "text-slate-700 hover:bg-blue-50/50 hover:text-blue-700"
                        }
                      `}
                    >
                      <span className="text-base">{link.name}</span>
                      {isActive && (
                        <ArrowUpRight className="w-4 h-4 text-blue-600" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 pt-4 border-t border-blue-100"
              >
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all duration-300"
                >
                  Let's Talk
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}