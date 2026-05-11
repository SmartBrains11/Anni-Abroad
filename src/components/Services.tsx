import { GraduationCap, FileCheck, BookOpen, DollarSign, Briefcase, Home, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  { icon: GraduationCap, title: 'Admissions Guidance', desc: 'Expert counseling to help you identify and apply to universities perfectly matched to your profile, aspirations, and budget.' },
  { icon: FileCheck,    title: 'Visa Assistance',    desc: 'End-to-end student visa processing with a 98% approval track record across all major study destinations.' },
  { icon: BookOpen,     title: 'SOP & Documentation', desc: 'Compelling Statements of Purpose, LORs, and application essays crafted by professional writers who understand admissions committees.' },
  { icon: DollarSign,   title: 'Scholarship Guidance', desc: 'Access to thousands of merit-based and need-based scholarships with personalized matching and application support.' },
  { icon: Briefcase,    title: 'Career Counseling',   desc: 'Strategic career planning, industry insights, and post-graduation work permit guidance to launch your global career.' },
  { icon: Home,         title: 'Accommodation Support', desc: 'Seamless housing arrangements, pre-departure orientation, and arrival support to ensure a smooth transition abroad.' },
];

export default function Services() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="services" ref={ref as React.RefObject<HTMLElement>} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-5">
            <span className="font-body text-brand-400 text-xs uppercase tracking-wider">What We Offer</span>
          </div>
          <h2 className="font-heading font-bold text-gray-900 text-4xl md:text-5xl leading-tight mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-red-gradient">Services</span>
          </h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed">
            From the first consultation to your first day on campus — we cover every detail so you can focus on your future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className={`relative group p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-card-hover hover:border-brand-600/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                {/* Decorative background shape */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-gradient shadow-glow-red group-hover:scale-110 transition-transform duration-500">
                  <Icon size={24} className="text-white" />
                </div>

                <h3 className="relative z-10 font-heading font-semibold text-gray-900 text-xl mb-4 group-hover:text-brand-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative z-10 font-body text-gray-600 leading-relaxed mb-8">
                  {service.desc}
                </p>

                <div className="relative z-10 flex items-center gap-2 font-heading font-semibold text-sm text-brand-600 group-hover:text-brand-700 transition-colors">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Learn more</span>
                    <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-brand-700">Learn more</span>
                  </span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
