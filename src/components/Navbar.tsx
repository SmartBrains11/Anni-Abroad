import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src="/logo-mark.png" alt="Annii Abroad Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-heading font-bold text-gray-900 text-lg tracking-tight">Annii Abroad</span>
              <div className="text-[10px] text-brand-400 font-body tracking-widest uppercase">Education & Visas</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="font-body text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="font-heading font-semibold text-sm px-6 py-2.5 rounded-full bg-red-gradient text-white shadow-glow-red hover:shadow-[0_0_50px_rgba(192,24,42,0.6)] hover:scale-105 transition-all duration-300">
              Free Consultation
            </a>
          </div>

          <button className="lg:hidden text-gray-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} bg-white/98 backdrop-blur-xl border-t border-gray-200`}>
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="font-body text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200 transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 font-heading font-semibold text-sm px-6 py-3 rounded-full bg-red-gradient text-white text-center">
            Free Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}
