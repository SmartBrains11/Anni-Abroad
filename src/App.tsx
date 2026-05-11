import Navbar from './components/Navbar';
import Hero from './components/Hero';

import About from './components/About';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      <Navbar />
      <Hero />

      <About />
      <Services />
      <Destinations />
      <Process />
      <Testimonials />
      <WhyUs />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
