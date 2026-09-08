import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  BedDouble,
  MessageSquare,
  AlertCircle,
  Plus,
  Minus,
} from "lucide-react";
import { faqs, rooms } from "../data/hotelData";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [sendPlatform, setSendPlatform] = useState("");
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: rooms[0]?.title || "Classic Room",
    roomCount: 1,
    checkIn: "",
    checkOut: "",
    guests: "1 Guest",
    notes: "",
  });

  // Validation Logic
  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{7,15}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.checkIn) {
      newErrors.checkIn = "Select a check-in date";
    }

    if (!form.checkOut) {
      newErrors.checkOut = "Select a check-out date";
    } else if (form.checkIn && form.checkOut <= form.checkIn) {
      newErrors.checkOut = "Check-out date must be after check-in date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildBookingText = () => {
    return `🏨 *NEW ROOM BOOKING REQUEST*\n------------------------------\n👤 *Guest Name:* ${form.name}\n📧 *Email:* ${form.email}\n📞 *Phone:* ${form.phone}\n\n🛏️ *Room Type:* ${form.roomType}\n🔢 *Quantity:* ${form.roomCount} ${form.roomCount > 1 ? "Rooms" : "Room"}\n📅 *Check-In:* ${form.checkIn}\n📅 *Check-Out:* ${form.checkOut}\n👥 *Guests:* ${form.guests}\n\n📝 *Special Requests:* ${form.notes || "None"}`;
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const phoneNumber = "0912162639";
    const textMessage = buildBookingText();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      textMessage
    )}`;

    window.open(whatsappUrl, "_blank");
    setSendPlatform("WhatsApp");
    setSubmitted(true);
  };

  const handleSendTelegram = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const phoneNumber = "0912162639";
    const textMessage = buildBookingText();
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
      `https://t.me/+${phoneNumber}`
    )}&text=${encodeURIComponent(textMessage)}`;

    window.open(telegramUrl, "_blank");
    setSendPlatform("Telegram");
    setSubmitted(true);
  };

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const incrementRooms = () => {
    if (form.roomCount < 10) {
      setForm((prev) => ({ ...prev, roomCount: prev.roomCount + 1 }));
    }
  };

  const decrementRooms = () => {
    if (form.roomCount > 1) {
      setForm((prev) => ({ ...prev, roomCount: prev.roomCount - 1 }));
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Centered Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center gap-1.5 mb-1">
          <BedDouble className="w-4 h-4 text-[#C89D54]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#C89D54] font-semibold">
            Direct Reservation
          </span>
        </div>
        <h2 className="mt-1 text-3xl sm:text-4xl font-serif font-bold text-gray-900">
          Book Your Stay
        </h2>
        <p className="text-xs font-semibold sm:text-sm text-gray-500 mt-3 leading-relaxed">
          Reserve your room directly with us via WhatsApp or Telegram for immediate confirmation and best rates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Booking & Contact Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">
              Reservation Details
            </h3>

            {!submitted ? (
              <form className="space-y-4" noValidate>
                
                {/* Guest Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`w-full text-xs bg-gray-50 border ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      } rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#C89D54]/20 focus:border-[#C89D54]`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="0912162639"
                      value={form.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`w-full text-xs bg-gray-50 border ${
                        errors.phone ? "border-red-500" : "border-gray-200"
                      } rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#C89D54]/20 focus:border-[#C89D54]`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full text-xs bg-gray-50 border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#C89D54]/20 focus:border-[#C89D54]`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Room Selection & Quantity Counter */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Room Type
                    </label>
                    <select
                      value={form.roomType}
                      onChange={(e) => handleInputChange("roomType", e.target.value)}
                      className="w-full text-xs bg-gray-50 border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#C89D54]/20 focus:border-[#C89D54]"
                    >
                      {rooms.map((room, idx) => (
                        <option key={idx} value={room.title}>
                          {room.title} ({room.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Room Quantity Button Group */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Room Quantity
                    </label>
                    <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-1.5 h-[42px]">
                      <button
                        type="button"
                        onClick={decrementRooms}
                        disabled={form.roomCount <= 1}
                        className="w-7 h-7 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>

                      <span className="text-xs font-bold text-gray-900 px-2 select-none">
                        {form.roomCount} {form.roomCount === 1 ? "Room" : "Rooms"}
                      </span>

                      <button
                        type="button"
                        onClick={incrementRooms}
                        disabled={form.roomCount >= 10}
                        className="w-7 h-7 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Guest Count & Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Total Guests
                    </label>
                    <select
                      value={form.guests}
                      onChange={(e) => handleInputChange("guests", e.target.value)}
                      className="w-full text-xs bg-gray-50 border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#C89D54]/20 focus:border-[#C89D54]"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4+ Guests">4+ Guests / Family</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Check-In Date *
                    </label>
                    <input
                      type="date"
                      value={form.checkIn}
                      onChange={(e) => handleInputChange("checkIn", e.target.value)}
                      className={`w-full text-xs bg-gray-50 border ${
                        errors.checkIn ? "border-red-500" : "border-gray-200"
                      } rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#C89D54]/20 focus:border-[#C89D54]`}
                    />
                    {errors.checkIn && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.checkIn}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Check-Out Date *
                    </label>
                    <input
                      type="date"
                      value={form.checkOut}
                      onChange={(e) => handleInputChange("checkOut", e.target.value)}
                      className={`w-full text-xs bg-gray-50 border ${
                        errors.checkOut ? "border-red-500" : "border-gray-200"
                      } rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#C89D54]/20 focus:border-[#C89D54]`}
                    />
                    {errors.checkOut && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.checkOut}
                      </p>
                    )}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Special Requests / Notes
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Airport pickup required, high floor preferred, extra bed, etc."
                    value={form.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    className="w-full text-xs bg-gray-50 border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#C89D54]/20 focus:border-[#C89D54]"
                  ></textarea>
                </div>

                {/* Sending Options: WhatsApp & Telegram */}
                <div className="pt-2 space-y-2">
                  <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                    Choose Booking Method:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Book via WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendTelegram}
                      className="bg-[#229ED9] hover:bg-[#1e8dbf] text-white font-semibold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Book via Telegram</span>
                    </button>
                  </div>
                </div>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-3"
              >
                <div className="w-12 h-12 bg-[#C89D54]/10 text-[#C89D54] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif font-bold text-gray-900">
                  Redirecting to {sendPlatform}!
                </h4>
                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-gray-800">{form.name}</strong>. Your reservation request for <strong>{form.roomCount}x {form.roomType}</strong> has been pre-filled in {sendPlatform}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-[#C89D54] underline hover:text-gray-900 transition-colors pt-2 cursor-pointer block mx-auto"
                >
                  Book another room
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Direct Contact & Map Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col justify-between space-y-6"
        >
          {/* Direct Details Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-5">
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
              Front Desk Contact
            </h3>

            <div className="flex items-start gap-3.5 text-xs text-gray-600">
              <div className="p-2.5 bg-[#C89D54]/10 text-[#C89D54] rounded-xl shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-gray-900 block font-semibold text-xs">
                  Address
                </strong>
                <span className="text-gray-500 leading-relaxed block mt-0.5">
                  Tercha, Dawro, Ethiopia
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-xs text-gray-600">
              <div className="p-2.5 bg-[#C89D54]/10 text-[#C89D54] rounded-xl shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-gray-900 block font-semibold text-xs">
                  Direct Phone & WhatsApp
                </strong>
                <span className="text-gray-500 leading-relaxed block mt-0.5">
                  0912162639
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-xs text-gray-600">
              <div className="p-2.5 bg-[#C89D54]/10 text-[#C89D54] rounded-xl shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-gray-900 block font-semibold text-xs">
                  Email Desk
                </strong>
                <span className="text-gray-500 leading-relaxed block mt-0.5">
                  info@tarekegnhotel.com
                </span>
              </div>
            </div>
          </div>

          {/* Map Preview */}
          <div className="h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative group">
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d853.5586345564262!2d37.175040391615404!3d7.145630478901562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17ae1b90461d6087%3A0xecf758ba32e5ec1a!2sTarekegn%20International%20Hotel!5e1!3m2!1sen!2set!4v1788174712445!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Accordion FAQ Section */}
      <div className="max-w-3xl mx-auto space-y-6 pt-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 mb-1">
            <HelpCircle className="w-3.5 h-3.5 text-[#C89D54]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#C89D54] font-semibold">
              Got Questions?
            </span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-900">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-4.5 flex justify-between items-center text-xs font-semibold text-gray-900 hover:text-[#C89D54] transition-colors cursor-pointer gap-4"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#C89D54]" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-4.5 pb-4.5 text-xs text-gray-500 leading-relaxed border-t border-gray-50 pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}