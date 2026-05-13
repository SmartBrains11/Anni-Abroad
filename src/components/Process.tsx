import { MessageSquare, UserCheck, School, Send, CreditCard, Plane } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const steps = [
  { step: '01', icon: MessageSquare, title: 'Free Consultation', desc: 'We begin with an in-depth session to understand your academic background, goals, budget, and preferred destinations.' },
  { step: '02', icon: UserCheck, title: 'Profile Evaluation', desc: 'Our counselors analyze your grades, test scores, and extracurriculars to chart the most strategic path forward.' },
  { step: '03', icon: School, title: 'University Selection', desc: 'A curated list of target, match, and safety universities aligned with your profile and career objectives.' },
  { step: '04', icon: Send, title: 'Applications', desc: 'We craft compelling applications, write powerful SOPs, and manage deadlines with meticulous precision.' },
  { step: '05', icon: CreditCard, title: 'Visa Guidance', desc: 'Full visa documentation, mock interviews, and embassy-ready preparation to secure your student visa.' },
  { step: '06', icon: Plane, title: 'Departure Support', desc: 'Pre-departure briefings, accommodation assistance, and ongoing support once you arrive at your destination.' },
];

export default function Process() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="process" ref={ref as React.RefObject<HTMLElement>} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-5">
            <span className="font-body text-brand-400 text-xs uppercase tracking-wider">How It Works</span>
          </div>
          <h2 className="font-heading font-bold text-gray-900 text-4xl md:text-5xl leading-tight mb-4">
            Your Journey, <span className="text-transparent bg-clip-text bg-red-gradient">Simplified</span>
          </h2>
          <p className="font-body text-gray-600 leading-relaxed">
            A clear, structured six-step process designed to eliminate uncertainty at every stage.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-600/30 to-transparent">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute left-1/2 -translate-x-1/2 animate-plane-fly z-10">
                <Plane className="text-red-500 fill-red-500/20" size={24} />
              </div>
            </div>
          </div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isRight = i % 2 === 1;
              return (
                <div key={step.step} className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 120}ms` }}>
                  <div className={`${isRight ? 'lg:order-2 lg:pl-12' : 'lg:pr-12 lg:text-right'}`}>
                    <div className={`group p-7 rounded-2xl border border-gray-200 bg-gray-50 backdrop-blur-sm hover:border-brand-600/30 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-400 ${isRight ? '' : 'lg:ml-auto'}`}>
                      <div className={`flex items-start gap-4 ${isRight ? '' : 'lg:flex-row-reverse'}`}>
                        <div className="p-3 rounded-xl bg-brand-600/15 border border-brand-600/20 group-hover:bg-brand-600/25 transition-colors flex-shrink-0">
                          <Icon size={20} className="text-brand-400" />
                        </div>
                        <div className={isRight ? '' : 'lg:text-right'}>
                          <div className="font-heading font-bold text-brand-600/50 text-xs tracking-wider mb-1">
                            STEP {step.step}
                          </div>
                          <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">{step.title}</h3>
                          <p className="font-body text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`hidden lg:flex ${isRight ? 'lg:order-1 lg:justify-end lg:pr-12' : 'lg:justify-start lg:pl-12'}`}>
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-red-gradient flex items-center justify-center shadow-glow-red text-white font-heading font-bold text-sm">
                        {step.step}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-brand-600/30 animate-ping" style={{ animationDuration: '3s' }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
