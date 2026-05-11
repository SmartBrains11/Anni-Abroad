import { ShieldCheck, Globe2, HeartHandshake } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const pillars = [
  { icon: ShieldCheck, title: 'Verified Expertise', desc: 'Certified counselors with deep knowledge of global admissions and immigration law.' },
  { icon: Globe2, title: 'Global Reach', desc: 'Partnerships with 457+ top universities across 20+ countries on every continent.' },
  { icon: HeartHandshake, title: 'Student-First Ethos', desc: 'Every decision we make centers on your academic success and long-term career growth.' },
];

export default function About() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              <span className="font-body text-brand-400 text-xs uppercase tracking-wider">About Annii Abroad</span>
            </div>
            <h2 className="font-heading font-bold text-gray-900 text-4xl md:text-5xl leading-tight mb-6">
              Turning Ambition Into <span className="text-transparent bg-clip-text bg-red-gradient">Achievement</span>
            </h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
              Annii Abroad was founded on a singular belief: every deserving student should have access to world-class education, regardless of geography or complexity.
            </p>
            <p className="font-body text-gray-600 leading-relaxed mb-8">
              Over a decade of dedicated service has helped thousands of students secure placements at prestigious institutions across the USA, UK, Canada, Australia, and Europe. Our team of certified counselors, legal advisors, and visa specialists work in concert to ensure a seamless journey from aspiration to arrival.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-brand-400 hover:text-brand-300 transition-colors group">
              Book Your Free Consultation
              <span className="text-brand-600 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className={`relative group transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              <img
                src="/images/scholaship.png"
                alt="Student scholarship achievement"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] shadow-glass">
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30">
                    <span className="w-2 h-2 rounded-full bg-brand-400" />
                    <span className="font-heading font-bold text-brand-100 text-[10px] uppercase tracking-widest">Our Core Purpose</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4 leading-tight">
                    Architecting Your <br />
                    <span className="text-brand-300">International Future</span>
                  </h3>
                  <p className="font-body text-white/80 text-base leading-relaxed">
                    We don't just process applications; we empower ambitious minds to transcend boundaries and secure their place in the world's most prestigious institutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats or Element for extra "Visual" flair */}
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                  <Globe2 size={24} />
                </div>
                <div>
                  <div className="font-heading font-bold text-gray-900 text-xl">20+ Countries</div>
                  <div className="font-body text-gray-500 text-xs tracking-wide">Global Opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
