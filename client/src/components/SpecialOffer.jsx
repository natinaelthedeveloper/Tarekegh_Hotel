import { Link } from "react-router-dom";
import { Tag, ArrowRight } from "lucide-react";

export default function SpecialOffer() {
  return (
    <section className="bg-[#0D131F] text-white py-8 px-4 sm:px-6 lg:px-8 mx-5 my-5 rounded-3xl border-t border-gray-800">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-amber-950/40 via-gray-900 to-amber-950/40 border border-amber-500/20 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Section: Icon & Content */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#C89D54]/10 rounded-xl border border-[#C89D54]/20 text-[#C89D54]">
            <Tag className="w-6 h-6" />
          </div>
          <div>
              
            <h4 className="text-lg font-serif font-bold text-white mt-0.5">
              Stay with us & get unforgettable moments
            </h4>
            <p className="text-xs text-gray-400">
              Book directly with us to enjoy exclusive rates and luxury perks.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to="/contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C89D54] hover:bg-[#b08843] text-black font-semibold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors whitespace-nowrap shadow-sm"
        >
          <span>Book Now</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

      </div>
    </section>
  );
}