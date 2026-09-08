import { Link } from "react-router-dom";
import {
  FaCrown,
  
  FaPaperPlane,
  FaChevronRight,
 
} from "react-icons/fa6";


export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to Tarekegn Hotel newsletter!");
    e.target.reset();
  };

  return (
    <footer className="bg-[#090D15] text-gray-400 text-xs px-5 border-t border-gray-800/80">
      {/* Main Footer Content */}
      <div className="max-w-7xl    px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="space-y-4 ">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#C89D54]/10 border border-[#C89D54]/30 flex items-center justify-center text-[#C89D54]">
              <FaCrown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-serif tracking-widest text-white uppercase font-bold">
                Tarekegn Hotel
              </h3>
              <p className="text-[9px] text-[#C89D54] tracking-widest uppercase font-semibold">
                Luxury & Comfort
              </p>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Experience Ethiopia-class hospitality, luxury accommodations, and
            exceptional dining in the heart of Dawro.
          </p>
          </div>

         </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-serif text-sm font-semibold uppercase tracking-wider mb-4 border-b border-gray-800/80 pb-2 flex items-center justify-between">
            <span>Quick Links</span>
            <span className="w-2 h-2 rounded-full bg-[#C89D54]"></span>
          </h4>
          <ul className="space-y-2.5">
            {[
              { label: "Home", path: "/" },
              { label: "Our Rooms", path: "/rooms" },
              { label: "Dining", path: "/dining" },
              { label: "Meetings", path: "/meetings" },
              { label: "Amenities", path: "/amenities" },
              { label: "Photo Gallery", path: "/gallery" },
              { label: "About Us", path: "/about" },
              { label: "Contact Us", path: "/contact" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="inline-flex items-center gap-1.5 hover:text-[#C89D54] hover:translate-x-1 transition-all"
                >
                  <FaChevronRight className="w-3 h-3 text-[#C89D54]" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Accommodations */}
        <div className="pt-5">
          <h4 className="text-white font-serif text-sm font-semibold uppercase tracking-wider mb-4 border-b border-gray-800/80 pb-2 flex items-center justify-between">
            <span>Accommodations</span>
            <span className="w-2 h-2 rounded-full bg-[#C89D54]"></span>
          </h4>
          <ul className="space-y-2.5">
            {[
              { label: "Classic Room", path: "/rooms/1" },
              { label: "Deluxe Room", path: "/rooms/2" },
              
            ].map((room, idx) => (
              <li key={idx}>
                <Link
                  to={room.path}
                  className="inline-flex items-center gap-1.5 hover:text-[#C89D54] hover:translate-x-1 transition-all"
                >
                  <FaChevronRight className="w-3 h-3 text-[#C89D54]" />
                  <span>{room.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Contact */}
        <div className="space-y-4 pt-5">
          <h4 className="text-white font-serif text-sm font-semibold uppercase tracking-wider mb-4 border-b border-gray-800/80 pb-2 flex items-center justify-between">
            <span>Newsletter</span>
            <span className="w-2 h-2 rounded-full bg-[#C89D54]"></span>
          </h4>
          <p className="text-gray-400 leading-relaxed">
            Subscribe to get special offers and updates directly to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="space-y-2.5">
            <div className="relative">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-[#131A29] border border-gray-800 text-white rounded-xl p-3 text-xs focus:outline-none focus:border-[#C89D54] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#C89D54] hover:bg-[#b08843] text-gray-950 font-semibold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg hover:shadow-[#C89D54]/10"
            >
              <FaPaperPlane className="w-3.5 h-3.5" />
              <span>Subscribe</span>
            </button>
          </form>
        </div>

     

      {/* Bottom Legal Strip */}
      <div className="border-t border-gray-800/60 py-5 px-4 sm:px-6 lg:px-8 bg-[#06090F]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
          <p>
            © {new Date().getFullYear()} Tarekegn Hotel. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#privacy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}