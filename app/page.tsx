import Footer from './components/Footer';
import LogoLooper from './components/LogoLooper';
import Navbar from './components/Navbar';
import PickMe from './components/PickMe';
import ScrollStoryContainer from './components/ScrollStoryContainer';
import ServicesGrid from './components/ServicesGrid';
import Testimonial from './components/Testimonial';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import ContactUs from './components/ContactUs';

export default function Home() {
  return (
    <div className="bg-black ">
      <Navbar />
      <ScrollStoryContainer />
      <ServicesGrid />
      <Testimonial />
      <PricingSection />
      <ContactUs />
      <Footer />
    </div>
  );
}

