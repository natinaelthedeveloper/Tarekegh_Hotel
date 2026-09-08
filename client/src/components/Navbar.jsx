import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { navLinks } from "../data/hotelData";
import img from "../assets/tgicon.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0D131F] text-white sticky top-0 z-50 shadow-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo Link with Image */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={img}
            alt="Tarekgh Hotel Logo"
            className="w-15 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div>
            <h1 className="text-lg font-serif tracking-widest leading-tight text-white uppercase font-bold">
              Tarekgn Hotel
            </h1>
            <a
              href="tel:0912162639"
              className="text-xs text-gray-300 hover:text-[#C89D54] flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C89D54]" />
              <span>0912162639</span>
            </a>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-[#C89D54] font-semibold"
                    : "text-gray-300 hover:text-[#C89D54]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Contact info & CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href=":+251912345678"
            className="text-xs text-gray-300 hover:text-[#C89D54] flex items-center gap-2 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C89D54]" />
            <span>0912162639</span>
          </a>
          <Link
            to="/rooms"
            className="bg-[#C89D54] hover:bg-[#b08843] text-black font-semibold px-5 py-2.5 rounded text-xs uppercase tracking-wider transition-all shadow-sm"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none p-1"
          aria-label="Toggle Navigation"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#C89D54]" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0D131F] border-t border-gray-800 px-4 pt-3 pb-6 space-y-3 overflow-hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#C89D54]"
                      : "text-gray-300 hover:text-[#C89D54]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-3 border-t border-gray-800/80 flex flex-col gap-3">
              <a
                href="tel:0912162639"
                className="text-xs text-gray-300 flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C89D54]" />
                <span>0912162639</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-[#C89D54] hover:bg-[#b08843] text-black font-semibold py-2.5 rounded text-xs uppercase tracking-wider transition-colors"
              >
                Book Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
