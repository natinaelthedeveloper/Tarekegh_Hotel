import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BedDouble, Users, Maximize2, ArrowRight, Filter, X, DoorOpen } from 'lucide-react';
import { rooms } from '../data/hotelData';

export default function Rooms() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedType = searchParams.get('type') || 'Any';

  // Filter rooms based on URL search parameters
  const filteredRooms = selectedType === 'Any' 
    ? rooms 
    : rooms.filter((r) => r.title.toLowerCase().includes(selectedType.toLowerCase()));

  const handleClearFilter = () => {
    setSearchParams({});
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-1.5 mb-1">
            <DoorOpen className="w-3.5 h-3.5 text-[#C89D54]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#C89D54] font-semibold">
              Our Rooms
            </span>
          </div>
          <h3 className="mt-1 text-3xl sm:text-4xl font-serif font-bold text-gray-900">
            Find Your Perfect Stay
          </h3>
          
          {/* Active Filter Notice */}
          {selectedType !== 'Any' && (
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm mt-3 text-xs text-gray-600">
              <Filter className="w-3.5 h-3.5 text-[#C89D54]" />
              <span>
                Filtered by: <strong className="text-gray-900">{selectedType}</strong>
              </span>
              <button
                onClick={handleClearFilter}
                className="ml-1 p-0.5 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-700"
                aria-label="Clear filter"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Empty State */}
        {filteredRooms.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto p-6">
            <h4 className="text-lg font-serif text-gray-900 font-semibold mb-2">No Rooms Found</h4>
            <p className="text-xs text-gray-500 mb-4">
              We couldn't find any rooms matching "{selectedType}".
            </p>
            <button
              onClick={handleClearFilter}
              className="bg-[#C89D54] hover:bg-[#b08843] text-black font-semibold px-4 py-2 rounded text-xs transition-colors"
            >
              Show All Rooms
            </button>
          </div>
        ) : (
          /* Rooms Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredRooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Room Image */}
                  <div className="h-48 overflow-hidden relative bg-gray-100">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Room Details */}
                  <div className="p-5">
                    <h4 className="font-serif text-base font-bold text-gray-900">{room.title}</h4>
                    <p className="text-xs text-gray-500 mt-1 h-10 line-clamp-2">{room.desc}</p>
                    
                    {/* Key Room Specs with Lucide Icons */}
                    <div className="flex items-center justify-between text-[11px] text-gray-600 border-t border-b border-gray-100 my-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <BedDouble className="w-3.5 h-3.5 text-[#C89D54]" />
                        <span>{room.beds}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#C89D54]" />
                        <span>{room.guests}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#C89D54]" />
                        <span>{room.size}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-xs">
                      <span className="text-gray-400">From </span>
                      <span className="font-bold text-gray-900 text-sm">{room.price}</span>
                      <span className="text-gray-400"> / night</span>
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="p-5 pt-0">
                  <Link
                    to={`/rooms/${room.id}`}
                    className="flex items-center justify-center gap-2 text-center w-full bg-[#C89D54] hover:bg-[#b08843] text-black font-semibold py-2.5 rounded text-xs transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}