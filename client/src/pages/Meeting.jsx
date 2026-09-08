import { motion } from "framer-motion";
import {
  Users,
  Ruler,
  LayoutGrid,
  Briefcase,
  Projector,
  Mic,
  Volume2,
  Wifi,
  Monitor,
  
} from "lucide-react";

const images = [
  {
    url: "https://res.cloudinary.com/pqec7gpn/image/upload/v1788526213/_MG_9922.jpg",
    label: "Executive Boardroom",
  },
  {
    url: "https://res.cloudinary.com/pqec7gpn/image/upload/v1788489586/_MG_9925.jpg",
    label: "Main Conference Setup",
  },
  
];

const techAmenities = [
  {
    icon: Projector,
    title: "HD Projector ",
    desc: "4K ultra-clear projection with automated drop-down screen.",
  },
  {
    icon: Mic,
    title: "Wireless Microphones",
    desc: "Handheld and lapel mics for seamless public speaking.",
  },
  {
    icon: Volume2,
    title: "Surround Sound System",
    desc: "Crystal-clear acoustic speakers engineered for large halls.",
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi 6",
    desc: "Dedicated fiber-optic internet for uninterrupted streaming.",
  },
  {
    icon: Monitor,
    title: "HDMI / Wireless Display",
    desc: "Instant plug-and-play laptop connectivity for presenters.",
  },
  
];

function Meetings() {
  return (
    <section
      id="meeting-room"
      className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center justify-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-[#C89D54]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#C89D54] font-semibold">
              Versatile Venues
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
            Elegant Meeting Room
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Our meeting room provides a professional and comfortable environment for business conferences, training sessions, workshops, presentations, and private corporate gatherings.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <motion.div
              key={item.url}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              className="group relative h-[320px] overflow-hidden rounded-2xl shadow-sm border border-gray-100 bg-gray-100"
            >
              <motion.img
                src={item.url}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5">
                <span className="inline-block bg-black/60 backdrop-blur-md text-[#C89D54] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full w-max shadow-sm border border-white/10">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">

          {/* Capacity Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
          >
            <div className="p-3 bg-[#C89D54]/10 rounded-xl text-[#C89D54] shrink-0">
              <Users size={22} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold block">
                Guest Capacity
              </span>
              <h3 className="mt-1 text-base font-serif font-bold text-gray-900">
                Up to 50 Guests
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Flexible seating for intimate seminars or large teams.
              </p>
            </div>
          </motion.div>

          {/* Room Size Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
          >
            <div className="p-3 bg-[#C89D54]/10 rounded-xl text-[#C89D54] shrink-0">
              <Ruler size={22} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold block">
                Floor Space
              </span>
              <h3 className="mt-1 text-base font-serif font-bold text-gray-900">
                 m²
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Spacious open layout with high ceilings and ambient lighting.
              </p>
            </div>
          </motion.div>

          {/* Setup Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
          >
            <div className="p-3 bg-[#C89D54]/10 rounded-xl text-[#C89D54] shrink-0">
              <LayoutGrid size={22} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold block">
                Seating Formats
              </span>
              <h3 className="mt-1 text-base font-serif font-bold text-gray-900">
              Classroom
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Customizable for presentations, workshops, or board meetings.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Technical Amenities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-6 border-t border-gray-100"
        >
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C89D54] font-semibold block">
              Audio & Visual Equipment
            </span>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mt-1">
              Technical Infrastructure
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techAmenities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-xl border border-gray-100 bg-white/60 hover:bg-white hover:border-[#C89D54]/30 shadow-xs hover:shadow-sm transition-all flex items-start gap-3.5"
                >
                  <div className="p-2.5 bg-[#C89D54]/10 rounded-lg text-[#C89D54] shrink-0 mt-0.5">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Meetings;