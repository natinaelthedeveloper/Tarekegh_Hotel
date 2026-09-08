// Navigation Links
export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'Dining', href: '/dining' },
  { name: 'Meetings', href: '/meetings' },
  { name: 'Amenities', href: '/amenities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About Us', href: '/about' },
  // { name: 'Contact', href: '/contact' },
];



// Hotel Rooms
export const rooms = [
  {
    id: 1,
    title: "Deluxe Suite",
    price: "ETB 800",
    beds: "1 King Bed",
    guests: "2 Guests",
    size: " m²",
    image: "https://res.cloudinary.com/pqec7gpn/image/upload/v1788489683/_MG_9902.jpg",
    images: [
      "https://res.cloudinary.com/pqec7gpn/image/upload/v1788489683/_MG_9902.jpg",
      "https://res.cloudinary.com/pqec7gpn/image/upload/v1788489607/_MG_9904.jpg",
      "https://res.cloudinary.com/pqec7gpn/image/upload/v1788489643/_MG_9917.jpg",
      
    ],
    fullDesc: "Spacious luxury suite with a private balcony, marble bathroom, and premium amenities designed for ultimate comfort."
  },
  {
    id: 2,
    title: "Executive Room",
    price: "ETB 700",
    beds: "1 Super King",
    guests: "2 Guests",
    size: " m²",
    image: "https://res.cloudinary.com/pqec7gpn/image/upload/v1788489632/_MG_9911.jpg",
    images: [
      "https://res.cloudinary.com/pqec7gpn/image/upload/v1788489632/_MG_9911.jpg",
      "https://res.cloudinary.com/pqec7gpn/image/upload/v1788489620/_MG_9912.jpg",
      "https://res.cloudinary.com/pqec7gpn/image/upload/v1788489643/_MG_9917.jpg",
      
    ],
    fullDesc: "Located on our high floors with stunning city skyline vistas. Features modern executive workspace, ergonomic seating, and access to the executive lounge."
  },
  
];


// Featured Special Dishes (4 Items)
export const homeSpecialDishes = [
  {
    id: 1,
    name: 'Ethiopian Beyaynet Food',
    category: 'Traditional Ethiopian mixed platter',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzSySBEw9y_zW3vUoSj_bYQwKSVhew16isvXKWyeXfXA&s=10',
   
  },
  {
    id: 2,
    name: 'Fresh Meat',
    category: 'Signature Ethiopian',
    
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6a9BbVUOOk-5s-V1RavYxU3_cvYAKrI4gCw6kARJFw&s=10',
    
  },
]

// Featured Special Dishes (4 Items)
export const specialDishes = [
  {
    id: 1,
    name: 'Kitfo Dishes',
    category: 'Signature Ethiopian',
    price: 'ETB 500',
    desc: 'Kitfo is a traditional Ethiopian dish made from finely minced premium beef, seasoned with Ethiopian spiced butter (Niter Kibbeh) and Mitmita spice.   ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmu68EnpBnoKutcvb_d7YaELvzkWNfAaEWV54Sk042Pw&s=10',
    tag: 'Popular'
  },
  {
    id: 2,
    name: 'Siliso/ ሲሊሶ',
    category: 'Traditional food of Dawro',
    price: 'ETB 400',
    desc: 'Experience the rich and unforgettable taste of Dawro traditional cuisine.',
    image: 'https://res.cloudinary.com/pqec7gpn/image/upload/v1788491456/ChatGPT_Image_Sep_3_2026_06_09_25_PM.png',
    tag: 'Best Seller'
  },
  {
    id: 3,
    name: 'Tibse',
    category: 'Ethiopian trend',
    price: 'ETB 400',
    desc: 'Tibs is a popular Ethiopian dish made with tender pieces of beef or lamb, sautéed with onions, garlic, rosemary, green peppers, and traditional Ethiopian spices.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHufJHXw813XvMb7-OUbxLPxBX9EpZgNLNgS-U6WnYQ&s=10',
    tag: 'Fresh Daily'
  },
  {
    id: 4,
    name: 'Tancho / ታንጮ ',
    category: 'Traditional food of Dawro',
    price: 'ETB 400',
    desc: 'Enjoy authentic Dawro food made with passion and traditional recipes.',
    image: 'https://res.cloudinary.com/pqec7gpn/image/upload/v1788492098/ChatGPT_Image_Sep_3_2026_06_20_15_PM.png',
    tag: 'Popular'
  }
];


// Gallery Items
export const galleryItems = [
    { id: 1, category: 'Views', title: 'Out View Hotel', image: 'https://res.cloudinary.com/pqec7gpn/image/upload/v1788489598/_MG_9880.jpg' },
    { id: 2, category: 'Views', title: 'Out View Room', image: 'https://res.cloudinary.com/pqec7gpn/image/upload/v1788390752/5821451153663791525_121.jpg' },
    { id: 3, category: 'Restaurant', title: 'Out View Dining Restaurant', image: 'https://res.cloudinary.com/pqec7gpn/image/upload/v1788489546/_MG_9884.jpg' },
    { id: 4, category: 'Rooms', title: 'VIP Room Sofa', image: 'https://res.cloudinary.com/pqec7gpn/image/upload/v1788489566/_MG_9895.jpg' },
    { id: 5, category: 'Restaurant', title: 'Fine Dining Restaurant', image: 'https://res.cloudinary.com/pqec7gpn/image/upload/v1788489556/_MG_9888.jpg' },
    { id: 6, category: 'Parking', title: 'Suite parking', image: 'https://res.cloudinary.com/pqec7gpn/image/upload/v1788489535/_MG_9883.jpg' },
   { id: 7, category: 'Parking', title: 'Suite parking', image: 'https://res.cloudinary.com/pqec7gpn/image/upload/v1788390752/5821451153663791525_121.jpg' },
   { id: 8, category: 'Dining', title: 'Fine Dining Restaurant', image: 'https://res.cloudinary.com/pqec7gpn/image/upload/v1788390775/5821451153663791524_121.jpg' },
   { id: 9, category: 'Parking', title: 'Suite parking', image: 'https://res.cloudinary.com/pqec7gpn/image/upload/v1788390809/5821451153663791521_121.jpg' },
   { id: 10, category: 'Rooms', title: 'VIP Room Sofa', image: 'https://res.cloudinary.com/pqec7gpn/image/upload/v1788390823/5821451153663791522_121.jpg' },
  { id: 11, category: 'Parking', title: 'Suite parking', image: 'https://res.cloudinary.com/pqec7gpn/image/upload/v1788389997/Tarekegh.jpg' },
  { id: 12, category: 'Rooms', title: 'Out View', image: 'https://res.cloudinary.com/pqec7gpn/image/upload/v1788390775/5821451153663791524_121.jpg' },
  { id: 13, category: 'Rooms', title: 'Out View', image: 'https://res.cloudinary.com/pqec7gpn/image/upload/v1788390848/5821451153663791519_121.jpg' },
  
];

export const galleryCategories = ['All', 'Rooms', 'Views', 'Amenities',];

// Frequently Asked Questions
export const faqs = [
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in and check-out times may vary. Please contact us for the exact schedule and availability.',
  },
  {
    question: 'How can I book a room?',
    answer: 'You can contact us directly by phone or through the contact options available on our website to check availability and make a booking.',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, we prioritize the safety and comfort of our guests and work to provide a secure environment.',
  },
  {
    question: 'Is the hotel safe and secure?',
    answer: 'Yes, parking is available for our guests, subject to availability.',
  },

];

// Guest Testimonials
export const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Business Traveler',
    comment: 'The service at Danat Hotel is unmatched. High-speed Wi-Fi, quiet executive rooms, and an incredible breakfast spread.',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Vacationer',
    comment: 'The rooftop pool and spa experience were the highlights of our trip. Absolutely breathtaking views of the city skyline.',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    id: 3,
    name: 'Abebe Tadesse',
    role: 'Event Host',
    comment: 'Hosted our corporate summit in their conference hall. The staff handled everything professionally from start to finish.',
    rating: '⭐⭐⭐⭐⭐',
  },
];

// About Page Statistics
export const aboutStats = [
  { label: 'Years of Excellence', value: '15+' },
  { label: 'Luxury Rooms', value: '120+' },
  { label: 'Happy Guests', value: '45k+' },
  { label: 'Awards Won', value: '18' },
];