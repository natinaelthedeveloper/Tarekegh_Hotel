import { Routes, Route } from 'react-router-dom';

// Layout & Global Components
import Navbar from './components/Navbar';

import Footer from './components/Footer';

// Page Views
import Dining from './pages/Dining';
import Home from './pages/Home';
import Rooms from './components/Rooms';
import ScrollToTop from './components/ScrollToTop';
import SpecialOffer from './components/SpecialOffer';
import RoomDetails from './pages/RoomDetails';
import Gallery from './pages/Gallery';
import Amenities from './pages/Amenities';
import Contact from './pages/Contact';
import About from './pages/About';
import Meeting from './pages/Meeting';


export default function App() {

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 antialiased flex flex-col justify-between selection:bg-[#C89D54] selection:text-white">
      <div>
        {/* Persistent Top Navigation Bar */}
        <Navbar  />

        {/* Application Page Routes */}
        <main>
          <ScrollToTop />
          <Routes>
            {/* Dedicated Home Page */}
            <Route path="/" element={<Home  />} />

            {/* Rooms Page */}
            <Route
              path="/rooms"
              element={
                <div className="pt-6">
                  <Rooms />
                  <SpecialOffer />
                </div>
              }
            />

            {/* Room Details Dynamic Route */}
            <Route
              path="/rooms/:id"
              element={<RoomDetails />}
            />

            {/* Amenities Page */}
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/meetings" element={<Meeting />} />

            {/* Gallery Page */}
            <Route path="/gallery" element={<Gallery />} />

            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />

            {/* About Us Page */}
            <Route path="/about" element={<About />} />
            <Route path="/dining" element={<Dining />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Home  />} />
          </Routes>
        </main>
      </div>


      {/* Persistent Professional Footer */}
      <Footer />
    </div>
  );
}