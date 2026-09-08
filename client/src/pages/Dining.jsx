import { motion } from 'framer-motion';
import { UtensilsCrossed, Sparkles, Wine, ShoppingBag } from 'lucide-react';
import { specialDishes } from '../data/hotelData';

function Dining() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Centered Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center gap-1.5 mb-1">
          <UtensilsCrossed className="w-3.5 h-3.5 text-[#C89D54]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#C89D54] font-semibold">
            Gourmet Experience
          </span>
        </div>
        <h2 className="mt-1 text-3xl sm:text-4xl font-serif font-bold text-gray-900">
          Food & Beverage Services
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-3 leading-relaxed">
          Indulge in authentic Ethiopian culinary traditions alongside finely crafted international delicacies served 24/7 in our main dining hall and skyline lounge.
        </p>
      </div>

      {/* 4 Signature Special Dishes Showcase */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C89D54]" />
              <span className="text-xs text-[#C89D54] tracking-widest uppercase font-semibold">
                Chef Recommendations
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mt-0.5">
              4 Signature Special Dishes
            </h3>
          </div>
          <p className="text-xs text-gray-500 max-w-md">
            Handcrafted daily using organic ingredients and fresh local herbs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Dish Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[#C89D54] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    {dish.tag}
                  </span>
                </div>

                {/* Dish Info */}
                <div className="p-5 space-y-2">
                  <span className="text-[10px] text-[#C89D54] uppercase tracking-widest font-semibold block">
                    {dish.category}
                  </span>
                  <h4 className="font-serif text-base font-bold text-gray-900">
                    {dish.name}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {dish.desc}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-gray-50">
                <span className="text-sm font-serif font-bold text-[#C89D54]">
                  {dish.price}
                </span>
                <span className="text-[11px] font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-lg flex items-center gap-1.5">
                  <ShoppingBag className="w-3 h-3 text-[#C89D54]" />
                  <span>Order In-Room</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Culinary Specialties Section (2 Column Grid) */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#C89D54]" />
            <span className="text-xs text-[#C89D54] tracking-widest uppercase font-semibold">
              Authentic Dining
            </span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-900">
            Food Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Banner 1 */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative h-72 rounded-2xl overflow-hidden shadow-md group cursor-pointer"
          >
            <img
              src="https://res.cloudinary.com/pqec7gpn/image/upload/v1788492428/ChatGPT_Image_Sep_3_2026_06_25_45_PM.png"
              alt="Dawro Traditional Food"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <span className="text-xs text-[#C89D54] font-semibold uppercase tracking-widest mb-1">
                Local Delicacy
              </span>
              <h4 className="text-2xl font-serif font-bold text-white">
                Dawro Traditional Food
              </h4>
            </div>
          </motion.div>

          {/* Banner 2 */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative h-72 rounded-2xl overflow-hidden shadow-md group cursor-pointer"
          >
            <img
              src="https://res.cloudinary.com/pqec7gpn/image/upload/v1788492765/ChatGPT_Image_Sep_3_2026_06_31_08_PM.png"
              alt="Fasting and Non-Fasting Options"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <span className="text-xs text-[#C89D54] font-semibold uppercase tracking-widest mb-1">
                Inclusive Menu
              </span>
              <h4 className="text-2xl font-serif font-bold text-white">
                Fasting & Non-Fasting Options
              </h4>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Beverage Services Showcase */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <Wine className="w-3.5 h-3.5 text-[#C89D54]" />
            <span className="text-xs text-[#C89D54] tracking-widest uppercase font-semibold">
              Relax & Enjoy
            </span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-900">
            Beverage Services
          </h3>
        </div>

        {/* Featured Beverage Banner */}
        <motion.div 
          whileHover={{ scale: 1.005 }}
          className="relative h-80 rounded-2xl overflow-hidden shadow-md group cursor-pointer"
        >
          <img
            src="https://res.cloudinary.com/pqec7gpn/image/upload/v1788492800/ChatGPT_Image_Sep_3_2026_06_32_12_PM.png"
            alt="Beverage Lounge & Bar"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
            <span className="text-xs text-[#C89D54] font-semibold uppercase tracking-widest mb-1">
              Bar & Lounge
            </span>
            <h4 className="text-3xl font-serif font-bold text-white">
              Relax with our restaurant beverage
            </h4>
            
          </div>
        </motion.div>
      </div>

    </section>
  );
}

export default Dining;