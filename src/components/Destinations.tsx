import { MapPin, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const destinations = [
  { country: 'United States', tagline: 'Innovation & Excellence', highlights: ['Harvard, MIT, Stanford', 'F-1 Student Visa', 'OPT Work Program'], students: '1,457+', image: '/images/us.jpg' },
  { country: 'United Kingdom', tagline: 'Heritage & Prestige', highlights: ['Oxford, Cambridge, LSE', 'Tier 4 Student Visa', 'PSW Route'], students: '980+', image: '/images/uk.jpg' },
  { country: 'Canada', tagline: 'Welcoming & Diverse', highlights: ['UBC, U of T, McGill', 'Study Permit', 'PGWP & PR Pathway'], students: '750+', image: '/images/Canada' },
  { country: 'Australia', tagline: 'Research & Lifestyle', highlights: ['ANU, Melbourne, Sydney', 'Student Visa 500', 'Graduate Visa 485'], students: '630+', image: '/images/Australia.jpg' },
  { country: 'Germany', tagline: 'Engineering & Innovation', highlights: ['TU Munich, Heidelberg', 'Student Visa', 'Low/No Tuition Fees'], students: '420+', image: '/images/germany.jpg' },
  { country: 'Ireland', tagline: 'Tech & Culture Hub', highlights: ['TCD, UCD, DCU', 'Study Visa', 'EU Blue Card'], students: '280+', image: '/images/Ireland' },
];

export default function Destinations() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="destinations" ref={ref as React.RefObject<HTMLElement>} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-5">
            <MapPin size={12} className="text-brand-400" />
            <span className="font-body text-brand-400 text-xs uppercase tracking-wider">Top Destinations</span>
          </div>
          <h2 className="font-heading font-bold text-gray-900 text-4xl md:text-5xl leading-tight mb-4">
            Study in the <span className="text-transparent bg-clip-text bg-red-gradient">World's Best</span>
          </h2>
          <p className="font-body text-gray-600 leading-relaxed">
            We have deep expertise and active partnerships across the most sought-after study destinations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <div key={dest.country} className={`group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] cursor-default hover:shadow-card-hover hover:border-brand-600/20 hover:-translate-y-2 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="relative h-56 overflow-hidden">
                <img src={dest.image} alt={dest.country} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                <div className="absolute bottom-5 left-6 right-6">
                  <div className="font-heading font-bold text-white text-2xl mb-1">{dest.country}</div>
                  <div className="font-body text-white/90 text-sm font-medium">{dest.tagline}</div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="space-y-3 mb-6">
                  {dest.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0 shadow-glow-red" />
                      <span className="font-body text-gray-600 text-sm leading-snug">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-gray-100 group-hover:border-brand-100 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-gray-900 text-lg group-hover:text-brand-600 transition-colors">{dest.students}</span>
                    <span className="font-body text-gray-500 text-[10px] tracking-widest uppercase mt-0.5">Students Placed</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
