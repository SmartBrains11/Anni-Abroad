import React from 'react';
import { MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import WorldMap from './WorldMap';

const locations = [
  { name: 'Canada', x: '20%', y: '16%', color: 'bg-red-500' },
  { name: 'United States', x: '21.5%', y: '31%', color: 'bg-blue-500' },
  { name: 'Ireland', x: '46%', y: '20%', color: 'bg-emerald-500' },
  { name: 'United Kingdom', x: '48.5%', y: '20%', color: 'bg-indigo-500' },
  { name: 'Germany', x: '51.5%', y: '21%', color: 'bg-orange-500' },
  { name: 'Australia', x: '87%', y: '78%', color: 'bg-yellow-500' },
];




export default function GlobalPresence() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="py-24 lg:py-32 bg-gray-50 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-5">
            <MapPin size={12} className="text-brand-400" />
            <span className="font-body text-brand-400 text-xs uppercase tracking-wider">Global Reach</span>
          </div>
          <h2 className="font-heading font-bold text-gray-900 text-4xl md:text-5xl leading-tight mb-6">
            Our Presence <span className="text-transparent bg-clip-text bg-red-gradient">Across the Globe</span>
          </h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed">
            From the bustling cities of North America to the academic hubs of Europe and Australia, we guide students to their dream destinations worldwide.
          </p>
        </div>

        <div className="relative aspect-[2/1] w-full max-w-5xl mx-auto">
          {/* Background Map */}
          <WorldMap className="absolute inset-0 w-full h-full opacity-100" />

          
          {/* Pulsing Markers */}
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className={`absolute transition-all duration-1000 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              style={{ 
                left: loc.x, 
                top: loc.y, 
                transitionDelay: `${i * 150}ms` 
              }}
            >
              <div className="relative group">
                {/* Ping Animation */}
                <div className={`absolute -inset-2 rounded-full ${loc.color} opacity-40 animate-ping`} />
                {/* Marker Dot */}
                <div className={`relative w-3 h-3 rounded-full ${loc.color} shadow-lg border-2 border-white`} />
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-lg bg-gray-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl pointer-events-none">
                  {loc.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Grid below map */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
          {locations.map((loc, i) => (
            <div key={loc.name} className={`p-4 rounded-2xl bg-white border border-gray-100 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${i * 100 + 800}ms` }}>
              <div className="font-heading font-bold text-gray-900 text-sm">{loc.name}</div>
              <div className="font-body text-gray-500 text-[10px] uppercase tracking-tighter mt-1">Active Partnership</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
