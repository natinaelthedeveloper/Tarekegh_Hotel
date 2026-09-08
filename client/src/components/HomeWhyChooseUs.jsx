import { motion } from 'framer-motion';
import { ShieldCheck, Crown, Users, Sparkles, } from 'lucide-react';

import { whyChooseUsData } from '../data/whyChooseUsData';

// Map icon names from data file to Lucide Components
const iconMap = {
  ShieldCheck: ShieldCheck,
  Crown: Crown,
  Users: Users,
  Sparkles: Sparkles
};

export default function HomeWhyChooseUs() {
  const { header, pillars, } = whyChooseUsData;

  return (
    <section className="py-16 mx-5  bg-gray-100 from-gray-900 via-[#0D131F] to-gray-900  border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 rounded-3xl bg-white">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs text-[#C89D54] tracking-[0.2em] uppercase font-semibold">
            {header.subtitle}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-black tracking-tight">
            {header.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            {header.description}
          </p>
        </div>

        {/* Pillars Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.iconName] || Sparkles;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-[#141C2E] p-6 rounded-2xl border border-gray-800 hover:border-[#C89D54]/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C89D54] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Lucide Icon & ID */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-800/80 border border-gray-700 flex items-center justify-center text-[#C89D54] group-hover:bg-[#C89D54] group-hover:text-black transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-serif font-bold text-gray-600 group-hover:text-[#C89D54] transition-colors">
                      {pillar.id}
                    </span>
                  </div>

                  {/* Subtitle & Title */}
                  <span className="text-[10px] text-[#C89D54] uppercase tracking-wider font-semibold block mb-0.5">
                    {pillar.tagline}
                  </span>
                  <h3 className="font-serif  font-bold text-white text-lg mb-2">
                    {pillar.title}
                  </h3>

                  
                </div>

                
              </motion.div>
            );
          })}
        </div>

       

      </div>
    </section>
  );
}