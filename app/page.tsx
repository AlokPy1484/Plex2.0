import ContactSection from './components/ContactSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import LogoLooper from './components/LogoLooper';
import Navbar from './components/Navbar';
import PickMe from './components/PickMe';
import PricingSection from './components/PricingSection';
import ServicesGrid from './components/ServicesGrid';
import ServicesSection from './components/ServicesSectionOld';
import ShowcaseGrid from './components/ShowcaseGrid';
import Testimonial from './components/Testimonial';

export default function Home() {
  return (
    <div className="bg-black ">
      <Navbar />
      <HeroSection />
      <ShowcaseGrid />
      {/* <ServicesSection /> */}
      <ServicesGrid />
      <LogoLooper />
      <PickMe />
      <PricingSection />
      <Testimonial />
      {/* <ContactSection /> */}
      <ContactUs />
      <Footer />

    </div>
  );
}
