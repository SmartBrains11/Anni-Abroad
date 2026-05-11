import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';
import { Users, CheckCircle2, Building2, Clock } from 'lucide-react';

const stats = [
  { icon: Users,         value: 5000, suffix: '+', label: 'Students Placed',       color: 'text-brand-400' },
  { icon: CheckCircle2,  value: 98,   suffix: '%', label: 'Visa Success Rate',     color: 'text-emerald-400' },
  { icon: Building2,     value: 200,  suffix: '+', label: 'University Partners',   color: 'text-sky-400' },
  { icon: Clock,         value: 10,   suffix: '+', label: 'Years of Excellence',   color: 'text-amber-400' },
];

function StatItem({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCounter(stat.value, 2000, active);
  const Icon = stat.icon;
  return (
    <div className="flex flex-col items-center group">
      <div className={`mb-3 p-3 rounded-xl bg-gray-50 border border-gray-200 group-hover:border-brand-600/30 transition-all duration-300 ${stat.color}`}>
        <Icon size={22} />
      </div>
      <div className="font-heading font-bold text-gray-900 text-3xl md:text-4xl">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="font-body text-gray-600 text-sm mt-1 text-center">{stat.label}</div>
    </div>
  );
}

export default function StatsStrip() {
  const { ref, inView } = useInView(0.2);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <StatItem stat={stat} active={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
