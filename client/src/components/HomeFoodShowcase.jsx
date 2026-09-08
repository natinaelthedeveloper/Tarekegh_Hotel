import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UtensilsCrossed, ArrowRight, Sparkles } from "lucide-react";
import { homeSpecialDishes } from "../data/hotelData";

export default function HomeFoodShowcase() {
  return (
    <section className="py-8 mx-5 rounded-3xl bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-1.5 mb-1">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#C89D54]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#C89D54] font-semibold">
              Nourishing Food
            </span>
          </div>
          <h3 className="mt-1 text-3xl sm:text-4xl font-serif font-bold text-gray-900">
            Our Restaurant
          </h3>
        </div>

        {/* Responsive Grid: 2 Cards per row on Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-2">
          {homeSpecialDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              className="w-full bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-38 sm:h-42 overflow-hidden bg-gray-100">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {dish.price && (
                    <span className="absolute top-2 right-2 bg-black/70 backdrop-blur-md text-[#C89D54] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {dish.price}
                    </span>
                  )}
                </div>

                {/* Card Content Description */}
                <div className="p-2.5 space-y-1">
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#C89D54]" />
                    <span className="text-[8px] text-[#C89D54] uppercase tracking-widest font-semibold block truncate">
                      {dish.category}
                    </span>
                  </div>
                  <h4 className="font-serif text-xs font-bold text-gray-900 truncate">
                    {dish.name}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-6 text-center">
          <Link
            to="/dining"
            className="inline-flex items-center gap-2 bg-[#C89D54] hover:bg-[#b08843] text-black font-semibold px-5 py-2 rounded-md text-[11px] uppercase tracking-wider shadow-sm transition-all"
          >
            <span>See More about Restaurant Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}