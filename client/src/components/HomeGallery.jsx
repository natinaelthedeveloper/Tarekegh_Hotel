import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { galleryItems } from '../data/hotelData';

export default function HomeGallery() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 mx-5 rounded-3xl bg-white text-black font-bold overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-8">
          <span className="text-xs text-[#C89D54] tracking-widest uppercase font-semibold">
            Visual Experience
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif mt-1">
            Explore Our Spaces
          </h3>
        </div>

        {/* Horizontal Motion Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="min-w-[280px] sm:min-w-[360px] h-72 rounded-2xl overflow-hidden relative group shadow-lg flex-shrink-0 snap-start bg-gray-800 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300">
                <span className="text-[10px] text-[#C89D54] uppercase tracking-widest font-semibold">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg font-bold text-white mt-0.5">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar: Scroll Navigation + Gallery Details Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-gray-800">
          
          {/* Scroll Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-[#C89D54] hover:bg-[#af8947] hover:text-black transition-colors cursor-pointer border border-gray-700 shadow-md"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-[#C89D54] hover:bg-[#af8947] hover:text-black transition-colors cursor-pointer border border-gray-700 shadow-md"
              aria-label="Next Image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Full Gallery Page Link */}
          <Link
            to="/gallery"
            className="bg-[#C89D54] hover:bg-[#b08843] text-black font-semibold px-6 py-2.5 rounded-lg text-xs tracking-wider uppercase transition-colors inline-flex items-center gap-2 shadow-md"
          >
            <span>Gallery Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

        </div>

      </div>
    </section>
  );
}