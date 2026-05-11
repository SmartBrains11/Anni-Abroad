import { ArrowRight, ChevronDown, MapPin, GraduationCap, Award, Users, Globe2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';

const floatingCards = [
  { country: 'United States', code: 'US', students: '1,457+', color: 'from-blue-50 to-blue-100/80', bar: '70%', animation: 'animate-orbit-1', image: '/images/us.jpg' },
  { country: 'United Kingdom', code: 'UK', students: '980+', color: 'from-red-50 to-rose-100/80', bar: '85%', animation: 'animate-orbit-2', image: '/images/uk.jpg' },
  { country: 'Canada', code: 'CA', students: '750+', color: 'from-rose-50 to-red-100/80', bar: '60%', animation: 'animate-orbit-3', image: '/images/Canada' },
  { country: 'Australia', code: 'AU', students: '630+', color: 'from-amber-50 to-yellow-100/80', bar: '80%', animation: 'animate-orbit-4', image: '/images/Australia.jpg' },
];

function StatBadge({ icon: Icon, value, label, active }: { icon: React.ElementType; value: number; label: string; active: boolean }) {
  const count = useCounter(value, 2200, active);
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex items-center justify-center gap-1.5 mb-1">
        <Icon size={18} className="text-brand-600" />
        <span className="font-heading font-bold text-gray-900 text-3xl md:text-4xl">{count.toLocaleString()}+</span>
      </div>
      <span className="font-body text-gray-600 text-xs md:text-sm uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function Hero() {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-white via-brand-50/30 to-white pt-28">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      </div>

      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className={`pt-8 lg:pt-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-brand-600/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="font-body text-sm text-brand-600 tracking-wide">Trusted by 25,000 students  Worldwide</span>
            </div>

            <h1 className="font-heading font-bold text-gray-900 leading-[1.08] mb-6">
              <span className="block text-4xl md:text-5xl lg:text-6xl">Overseas Education</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl">& <span className="text-transparent bg-clip-text bg-red-gradient">Immigration</span></span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-1">Experts.</span>
            </h1>

            <p className="font-body text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              We transform ambitious students into global graduates. From university selection and SOP writing to visa approval — we handle every step with precision and care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-red-gradient text-white font-heading font-semibold text-sm shadow-glow-red hover:shadow-[0_0_60px_rgba(192,24,42,0.7)] hover:scale-105 transition-all duration-300">
                Start Your Journey
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gray-100 border border-gray-200 text-gray-900 font-heading font-semibold text-sm hover:bg-gray-100 hover:border-gray-200 transition-all duration-300 backdrop-blur-sm">
                Explore Services
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative h-[500px]">
            {floatingCards.map((card) => (
              <div key={card.country} className={`absolute top-1/2 left-1/2 w-[220px] -mt-[60px] -ml-[110px] z-10 ${card.animation}`}>
                <div className={`backdrop-blur-md border border-gray-200/60 rounded-2xl px-4 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-gradient-to-br ${card.color} hover:border-brand-600/40 hover:scale-105 transition-all duration-300 cursor-default`}>
                  <div className="relative h-24 w-full mb-3 rounded-xl overflow-hidden shadow-sm bg-gray-100">
                    <img src={card.image} alt={card.country} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-1.5 left-2 font-heading font-bold text-white text-lg">{card.code}</div>
                  </div>
                  <div className="font-heading font-semibold text-gray-900 text-sm mb-0.5">{card.country}</div>
                  <div className="font-body text-gray-500 text-xs">{card.students} Students</div>
                  <div className="mt-3 w-full h-1 bg-gray-200/60 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-600 rounded-full" style={{ width: card.bar }} />
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white/90 backdrop-blur-md border border-brand-100 flex flex-col items-center justify-center shadow-[0_0_80px_rgba(192,24,42,0.15)] z-20 overflow-hidden group">
              <div className="absolute inset-0 bg-red-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <img src="/logo-mark.png" alt="Annii Abroad" className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-1000" />
            </div>
          </div>
        </div>

        {/* Centered Stats Below */}
        <div className={`max-w-5xl mx-auto border-t border-gray-200/80 pt-10 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatBadge icon={Users} value={225000} label="Students" active={inView} />
            <StatBadge icon={Award} value={98} label="Visa Success %" active={inView} />
            <StatBadge icon={GraduationCap} value={457} label="Universities" active={inView} />
            <StatBadge icon={MapPin} value={10} label="Years Exp." active={inView} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-body text-gray-900 text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} className="text-gray-900 animate-bounce" />
      </div>
    </section>
  );
}
