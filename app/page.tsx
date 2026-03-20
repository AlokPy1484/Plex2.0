import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import LogoLooper from './components/LogoLooper';
import Navbar from './components/Navbar';
import PickMe from './components/PickMe';
import ServicesSection from './components/ServicesSection';
import ShowcaseGrid from './components/ShowcaseGrid';
import Testimonial from './components/Testimonial';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
   <div className="bg-black ">
      <Navbar/>
      <HeroSection/>
      <ShowcaseGrid />
      <ServicesSection/>
      <LogoLooper/>
      <PickMe/>
      <Testimonial/> 
      <ContactSection/>
      <Footer/>
   </div>
  );
}
