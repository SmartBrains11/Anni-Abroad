import { ArrowRight, Calendar, Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function CTA() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="py-24 lg:py-36 relative overflow-hidden bg-gradient-to-br from-white via-brand-50/30 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-800/20 blur-[100px] animate-pulse-slow" />
        <div className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-50/40 blur-[80px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-brand-600/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            <span className="font-body text-brand-600 text-sm">Free consultation — No commitment required</span>
          </div>

          <h2 className="font-heading font-bold text-gray-900 leading-tight mb-6">
            <span className="block text-4xl md:text-5xl lg:text-6xl">Your Future Doesn't</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl">
              Wait. <span className="text-transparent bg-clip-text bg-red-gradient">Neither Should You.</span>
            </span>
          </h2>

          <p className="font-body text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            Join 5,000+ students who trusted Annii Abroad to navigate the most important transition of their lives. Book your free consultation today and take the first step toward a world-class education.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <a href="tel:+1234567890" className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-red-gradient text-white font-heading font-semibold text-base shadow-glow-red hover:shadow-[0_0_80px_rgba(192,24,42,0.8)] hover:scale-105 transition-all duration-300">
              <Calendar size={18} />
              Book Free Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+1234567890" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gray-100 border border-gray-200 text-gray-900 font-heading font-semibold text-base hover:bg-gray-100 hover:border-gray-200 transition-all duration-300 backdrop-blur-sm">
              <Phone size={18} />
              Call Us Now
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {[['🏆', 'Award-Winning Service'], ['🔒', 'Confidential & Secure'], ['⚡', 'Fast Turnaround'], ['💯', 'Success Guaranteed']].map(([icon, label]) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="text-xl">{icon}</span>
                <span className="font-body text-gray-600 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
