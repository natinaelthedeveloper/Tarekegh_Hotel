import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Calendar, Users, Search } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#0D131F] text-white pt-6 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Main Banner Container */}
      <div
        className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden min-h-[520px] sm:min-h-[580px] flex items-center justify-start p-8 sm:p-14 lg:p-20 bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(13, 19, 31, 0.90) 0%, rgba(13, 19, 31, 0.55) 50%, rgba(13, 19, 31, 0.2) 100%), url('https://res.cloudinary.com/pqec7gpn/image/upload/v1788390752/5821451153663791525_121.jpg')`,
        }}
      >
        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl space-y-5 relative z-10"
        >
          {/* Accent Subtitle Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C89D54]/15 border border-[#C89D54]/30 px-3.5 py-1 rounded-full backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C89D54]" />
            <span className="text-[11px] tracking-[0.2em] text-[#C89D54] uppercase font-semibold">
              Welcome to Tarekegn Hotel
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight sm:leading-none text-white tracking-tight">
            Experience Comfort <br className="hidden sm:inline" />
            <span className="text-[#C89D54]">Like Never Before

</span>
          </h1>

          {/* Subtext */}
          <p className="text-xs font-semibold sm:text-sm text-gray-300 leading-relaxed max-w-md font-light">
           Feel at home while enjoying the comfort and quality you deserve. Experience warm Dawro hospitality, comfortable rooms, delicious food, and memorable moments that make every stay special.
          </p>

          {/* CTA Link Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2.5 bg-[#C89D54] hover:bg-[#b08843] text-gray-950 font-semibold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-[#C89D54]/20 hover:-translate-y-0.5 group"
            >
              <span>Discover Rooms</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all backdrop-blur-sm border border-white/15"
            >
              Explore Hotel
            </Link>
          </div>
        </motion.div>

        {/* Floating Quick Search Bar (Bottom Overlay) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-6 left-6 right-6 hidden lg:block max-w-5xl mx-auto bg-[#0D131F]/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl"
        >
          <div className="grid grid-cols-4 gap-4 items-center">
            
            {/* Check-In */}
            <div className="flex items-center gap-3 px-4 py-2 border-r border-white/10">
              <Calendar className="w-4 h-4 text-[#C89D54] shrink-0" />
              <div>
                <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Check In</span>
                <span className="text-xs font-semibold text-white">Select Date</span>
              </div>
            </div>

            {/* Check-Out */}
            <div className="flex items-center gap-3 px-4 py-2 border-r border-white/10">
              <Calendar className="w-4 h-4 text-[#C89D54] shrink-0" />
              <div>
                <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Check Out</span>
                <span className="text-xs font-semibold text-white">Select Date</span>
              </div>
            </div>

            {/* Guests */}
            <div className="flex items-center gap-3 px-4 py-2">
              <Users className="w-4 h-4 text-[#C89D54] shrink-0" />
              <div>
                <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Guests</span>
                <span className="text-xs font-semibold text-white">2 Adults, 1 Room</span>
              </div>
            </div>

            {/* Search Action */}
            <Link
              to="/rooms"
              className="w-full bg-[#C89D54] hover:bg-[#b08843] text-gray-950 font-semibold py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Check Availability</span>
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
}