import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; 
import { 
  ArrowLeft, 
  Bed, 
  Users, 
  Maximize2, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { rooms } from '../data/hotelData';

export default function RoomDetails() {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === parseInt(id));

  // Extract gallery images safely with fallback
  const roomImages = room?.images && room.images.length > 0 ? room.images : [room?.image];
  const [activeImage, setActiveImage] = useState(roomImages[0]);

  // Sync active image on room ID change
  useEffect(() => {
    if (room) {
      setActiveImage(room.images && room.images.length > 0 ? room.images[0] : room.image);
    }
  }, [room]);

  if (!room) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4 space-y-4">
        <div className="w-12 h-12 bg-[#C89D54]/10 text-[#C89D54] rounded-full flex items-center justify-center">
          <Sparkles className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-gray-900">Room Not Found</h2>
        <p className="text-xs text-gray-500 max-w-sm">
          The room package you are looking for is currently unavailable or may have been moved.
        </p>
        <Link 
          to="/rooms" 
          className="inline-flex items-center gap-2 text-xs bg-[#0D131F] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-[#1a253a] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Rooms</span>
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-6"
    >
      {/* Back Navigation Button */}
      <Link 
        to="/rooms" 
        className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-[#C89D54] transition-colors font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Accommodations</span>
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
        
        {/* Left Column: Interactive Multi-Image Gallery */}
        <div className="lg:col-span-7 space-y-3">
          {/* Main Display Preview */}
          <div className="relative rounded-xl overflow-hidden h-72 sm:h-96 bg-gray-100 shadow-inner group">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeImage}
                src={activeImage} 
                alt={room.title} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full object-cover" 
              />
            </AnimatePresence>
            <div className="absolute top-4 left-4 bg-[#0D131F]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-white font-medium border border-white/10">
              Luxury Collection
            </div>
          </div>

          {/* Gallery Thumbnails List */}
          {roomImages.length > 1 && (
            <div className="grid grid-cols-4 gap-2.5">
              {roomImages.map((imgUrl, index) => {
                const isActive = activeImage === imgUrl;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer relative ${
                      isActive 
                        ? 'border-[#C89D54] ring-2 ring-[#C89D54]/20 scale-[0.98]' 
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`${room.title} view ${index + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column: Specifications & Booking */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-xs text-[#C89D54] font-semibold uppercase tracking-[0.2em] block mb-1">
                Premium Suite
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                {room.title}
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {room.fullDesc || room.desc || "Experience luxury and comfort tailored for your relaxation."}
            </p>
            
            {/* Spec Highlights Grid */}
            <div className="grid grid-cols-3 gap-3 py-4 border-y border-gray-100 text-xs">
              <div className="flex items-center gap-2 text-gray-600">
                <Bed className="w-4 h-4 text-[#C89D54] shrink-0" />
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase">Bed Type</span>
                  <strong className="text-gray-900 font-semibold">{room.beds}</strong>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-4 h-4 text-[#C89D54] shrink-0" />
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase">Capacity</span>
                  <strong className="text-gray-900 font-semibold">{room.guests}</strong>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Maximize2 className="w-4 h-4 text-[#C89D54] shrink-0" />
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase">Room Size</span>
                  <strong className="text-gray-900 font-semibold">{room.size}</strong>
                </div>
              </div>
            </div>

            {/* Room Amenities Checklist */}
            {room.amenities && room.amenities.length > 0 && (
              <div className="space-y-2 pt-1">
                <span className="text-xs font-semibold text-gray-900 block">
                  Included Amenities
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  {room.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C89D54] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Pricing & CTA Card */}
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 space-y-4">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                  Starting Rate
                </span>
                <p className="text-2xl font-bold text-gray-900">
                  {room.price}{" "}
                  <span className="text-xs font-normal text-gray-500">/ night</span>
                </p>
              </div>

              <div className="text-right text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Best Rate Guaranteed</span>
              </div>
            </div>

            <Link to="/contact" className="w-full bg-[#0D131F] hover:bg-[#1a253a] text-white py-3.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer">
              <Calendar className="w-4 h-4 text-[#C89D54]" />
              <span>Reserve Room Now</span>
            </Link>
          </div>

        </div>

      </div>
    </motion.div>
  );
}