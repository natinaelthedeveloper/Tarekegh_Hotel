import { features } from '../data/FeaturesData';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 2 Rows x 2 Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((item, index) => {
          // Dynamically resolve component vs. standard string
          const IconComponent = typeof item.icon === 'function' || typeof item.icon === 'object' ? item.icon : null;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-all group"
            >
              {/* Icon Container with Gold Theme Background */}
              <div className="w-14 h-14 rounded-2xl bg-[#C89D54]/10 text-[#C89D54] flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#C89D54] group-hover:text-white transition-colors duration-300">
                {IconComponent ? (
                  <IconComponent className="w-6 h-6" />
                ) : (
                  <span>{item.icon}</span>
                )}
              </div>

              {/* Text Content */}
              <div>
                <h4 className="font-serif font-bold text-gray-900 text-sm tracking-wide uppercase">
                  {item.title}
                </h4>
                <p className="text-xs font-semibold text-gray-500 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}