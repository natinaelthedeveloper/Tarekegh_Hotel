import { motion } from "framer-motion";
import { ArrowRight, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function MeetingRoomPreview() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto rounded-3xl bg-white p-6 sm:p-10 shadow-sm border border-gray-100">
        
        {/* Centered Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-1.5 mb-1">
            <Users2 className="w-3.5 h-3.5 text-[#C89D54]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#C89D54] font-semibold">
              Meetings & Events
            </span>
          </div>
          <h2 className="mt-1 text-3xl sm:text-4xl font-serif font-bold text-gray-900">
            Meeting Room
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-[320px] sm:h-[400px] overflow-hidden rounded-2xl relative group"
          >
            <motion.img
              src="https://res.cloudinary.com/pqec7gpn/image/upload/v1788526213/_MG_9922.jpg"
              alt="Meeting Room"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* Text & Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="flex flex-col justify-center"
          >
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              A comfortable and elegant meeting space designed for business
              meetings, conferences, workshops, and private gatherings equipped
              with full modern amenities.
            </p>

            {/* Navigation Button */}
            <div className="mt-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link
                  to="/meetings"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C89D54] hover:bg-[#b08843] text-black font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>See Detailed Meeting Room</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}