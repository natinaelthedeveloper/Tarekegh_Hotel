import Hero from '../components/Hero';
import Features from '../components/Features';
import Rooms from '../components/Rooms';
import HomeFoodShowcase from '../components/HomeFoodShowcase';
import HomeGallery from '../components/HomeGallery';
import SpecialOffer from '../components/SpecialOffer';
import MeetingRoomPreview from '../components/MeetingRoomPreview';
import HomeWhyChooseUs from '../components/HomeWhyChooseUs';


export default function Home({ onBookNow }) {
  return (
    <div className="space-y-4">
      <Hero />
      <Features />
      <Rooms />
      <MeetingRoomPreview />
      <HomeFoodShowcase />
      
      <HomeGallery />
      <HomeWhyChooseUs />
      <SpecialOffer onBookNow={onBookNow} />
    </div>
  );
}