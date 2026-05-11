import { ShieldCheck, Clock, Award, Globe2, MessageCircle, TrendingUp, BookMarked, Lock } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  { icon: ShieldCheck,    title: '98% Visa Success',        desc: 'Industry-leading approval rate backed by meticulous documentation and expert preparation.' },
  { icon: Globe2,         title: 'Global Partnerships',      desc: 'Tie-ups with 200+ universities across 20+ countries for exclusive application advantages.' },
  { icon: Clock,          title: 'Dedicated Counselors',     desc: 'You get a single point of contact throughout your journey — no handoffs, no confusion.' },
  { icon: Award,          title: 'Certified Experts',        desc: 'Our team holds international credentials in immigration law and academic counseling.' },
  { icon: MessageCircle,  title: '24/7 Student Support',     desc: 'Round-the-clock assistance via WhatsApp, email, and phone — because time zones don\'t stop us.' },
  { icon: TrendingUp,     title: 'Career-Driven Guidance',   desc: 'We align your university choice with post-graduation work opportunities and long-term career growth.' },
  { icon: BookMarked,     title: 'Scholarship Access',       desc: 'Proprietary scholarship database with personalised matching to maximize your funding opportunities.' },
  { icon: Lock,           title: 'Transparent Process',      desc: 'No hidden fees, no surprise charges. Full clarity on costs, timelines, and outcomes from day one.' },
];

export default function WhyUs() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="why-us" ref={ref as React.RefObject<HTMLElement>} className="py-24 lg:py-32 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-5">
            <span className="font-body text-brand-400 text-xs uppercase tracking-wider">Why Annii Abroad</span>
          </div>
          <h2 className="font-heading font-bold text-gray-900 text-4xl md:text-5xl leading-tight mb-6">
            The Difference That <span className="text-transparent bg-clip-text bg-red-gradient">Matters</span>
          </h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed">
            When the stakes are this high, you deserve more than a generic consultancy. Here's what sets us apart.
          </p>
        </div>
      </div>

      <div className={`relative max-w-[100vw] mx-auto overflow-hidden group pb-12 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Marquee Track */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          
          {/* First Set of Cards */}
          <div className="flex gap-6 px-3">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={`set1-${feat.title}`} 
                  className="shrink-0 w-[280px] md:w-[320px] group/card p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-card-hover hover:border-brand-600/20 hover:-translate-y-2 transition-all duration-500 cursor-default" 
                >
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-brand-50 border border-brand-100 group-hover/card:bg-red-gradient group-hover/card:border-transparent group-hover/card:shadow-glow-red transition-all duration-500">
                    <Icon size={24} className="text-brand-600 group-hover/card:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 text-lg mb-3 group-hover/card:text-brand-700 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed group-hover/card:text-gray-700 transition-colors">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Second Set of Cards (Duplicate for seamless loop) */}
          <div className="flex gap-6 px-3">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={`set2-${feat.title}`} 
                  className="shrink-0 w-[280px] md:w-[320px] group/card p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-card-hover hover:border-brand-600/20 hover:-translate-y-2 transition-all duration-500 cursor-default" 
                >
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-brand-50 border border-brand-100 group-hover/card:bg-red-gradient group-hover/card:border-transparent group-hover/card:shadow-glow-red transition-all duration-500">
                    <Icon size={24} className="text-brand-600 group-hover/card:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 text-lg mb-3 group-hover/card:text-brand-700 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed group-hover/card:text-gray-700 transition-colors">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
