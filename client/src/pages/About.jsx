import { motion } from "framer-motion";
import { Building2,  CheckCircle2, Award } from "lucide-react";
import { aboutStats } from "../data/hotelData";

export default function About() {
  const highlights = [
    "Prime Central Location in Dawro",
    "Authentic Ethiopian Hospitality & Cuisine",
    "State-of-the-Art Suites & Conference Spaces",
    "Dedicated 24/7 Concierge & Guest Services",
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Hero Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-[#C89D54]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#C89D54] font-semibold">
              Our Story
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 leading-tight">
            Redefining Luxury Hospitality in Tercha
          </h2>

          <p className="text-xs font-semibold sm:text-sm text-gray-600 leading-relaxed">
            Founded with a vision to deliver unmatched comfort, Tarekgn Hotel
            brings together modern architectural elegance and traditional
            Ethiopian warmth. Located in the heart of the city, we provide an
            oasis of relaxation for business travelers and vacationers alike.
          </p>

          <p className="text-xs font-semibold sm:text-sm text-gray-600 leading-relaxed">
            Every suite is tailored to provide absolute convenience, combining
            state-of-the-art facilities, world-class dining, and personal
            attention to detail.
          </p>

          {/* Key Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C89D54] shrink-0" />
                <span className="text-xs font-semibold text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Image Feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-80 lg:h-96 group"
        >
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
            alt="Tarekgn Hotel Exterior"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Floating Distinction Badge */}
          <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center gap-3">
            <div className="p-2 bg-[#C89D54]/20 text-[#C89D54] rounded-lg">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white font-serif">
                Premium Excellence
              </p>
              <p className="text-[10px] text-gray-300">
                Top Rated Hotel in Dawro
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Metrics Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#0D131F] text-white rounded-2xl p-8 sm:p-12 border border-white/5 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
      >
        {aboutStats.map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="space-y-1"
          >
            <div className="text-3xl sm:text-4xl font-serif font-bold text-[#C89D54]">
              {item.value}
            </div>
            <div className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold">
              {item.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}