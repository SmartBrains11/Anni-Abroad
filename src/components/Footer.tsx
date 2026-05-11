import { Mail, Phone, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-2 mb-6">
              <div className="w-14 h-14 flex items-center justify-center">
                <img src="/logo-mark.png" alt="Annii Abroad Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-bold text-gray-900">Annii Abroad</span>
            </a>
            <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
              Your trusted partner for overseas education and immigration guidance.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-brand-600/40 hover:bg-brand-100/40 transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a href="https://www.youtube.com/@anniimedia" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 hover:text-brand-600 hover:border-brand-600/40 hover:bg-brand-100/40 transition-all duration-300">
                <Youtube size={16} />
              </a>
              <a href="https://www.instagram.com/anni_abroad25/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 hover:text-brand-600 hover:border-brand-600/40 hover:bg-brand-100/40 transition-all duration-300">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-gray-900 text-sm mb-5">Navigation</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Destinations', 'Process', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-gray-600 text-sm hover:text-gray-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-gray-900 text-sm mb-5">Services</h3>
            <ul className="space-y-3">
              {['Admissions', 'Visas', 'SOP Writing', 'Scholarships', 'Career'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-gray-600 text-sm hover:text-gray-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-gray-900 text-sm mb-5">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-brand-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="font-body text-gray-600 text-sm hover:text-gray-900 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-600 flex-shrink-0" />
                <a href="mailto:info@anniiabroad.com" className="font-body text-gray-600 text-sm hover:text-gray-900 transition-colors break-all">
                  info@anniiabroad.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-500 mt-0.5 flex-shrink-0" />
                <span className="font-body text-gray-600 text-sm">New York, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-gray-600 text-xs text-center md:text-left">
            &copy; 2024 Annii Abroad. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a key={link} href="#" className="font-body text-gray-600 text-xs hover:text-gray-600 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
