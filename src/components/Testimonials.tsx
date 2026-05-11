import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  { name: 'Priya Sharma', destination: 'University of Toronto, Canada', flag: '🇨🇦', program: 'MSc Computer Science', rating: 5, text: "Annii Abroad made what seemed impossible, effortless. My counselor guided me through every document, every deadline, and every anxiety. I received my visa in 3 weeks. Truly exceptional service.", image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Arjun Menon', destination: 'University of Manchester, UK', flag: '🇬🇧', program: 'MBA Finance', rating: 5, text: "From my SOP to my Tier 4 visa, the team handled everything with incredible professionalism. I was accepted to my first-choice university and got a merit scholarship. Life-changing experience.", image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Fatima Al-Rashid', destination: 'Technical University of Munich, Germany', flag: '🇩🇪', program: 'MEng Automotive Engineering', rating: 5, text: "I was skeptical about studying in Germany due to the language barrier, but Annii Abroad connected me with a fully English-taught program. Their scholarship guidance saved me thousands in fees.", image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Daniel Osei', destination: 'University of Sydney, Australia', flag: '🇦🇺', program: 'Bachelor of Business', rating: 5, text: "The visa process was my biggest fear. My counselor prepared me so thoroughly for the interview that it felt straightforward. Now I'm living my dream in Sydney. Cannot recommend enough.", image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Sofia Martinez', destination: 'Trinity College Dublin, Ireland', flag: '🇮🇪', program: 'MSc Data Analytics', rating: 5, text: "The attention to detail in my application was outstanding. They know what admissions committees want to see. I got into my dream program on the first application cycle. Worth every penny.", image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200' },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView(0.15);
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const t = setInterval(() => go(1), 25000);
    return () => clearInterval(t);
  });

  function go(dir: number) {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 200);
  }

  const t = testimonials[active];

  return (
    <section id="testimonials" ref={ref as React.RefObject<HTMLElement>} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-5">
            <Star size={12} className="text-brand-400" />
            <span className="font-body text-brand-400 text-xs uppercase tracking-wider">Student Stories</span>
          </div>
          <h2 className="font-heading font-bold text-gray-900 text-4xl md:text-5xl leading-tight mb-4">
            Success Stories That <span className="text-transparent bg-clip-text bg-red-gradient">Inspire</span>
          </h2>
          <p className="font-body text-gray-600 leading-relaxed">
            Thousands of students have trusted us with their most important decisions. Here are some of their stories.
          </p>
        </div>

        <div className={`transition-all duration-800 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative max-w-4xl mx-auto">
            <div className={`relative p-8 md:p-12 rounded-3xl border border-gray-200 backdrop-blur-md bg-gradient-to-br from-white/5 to-brand-900/10 shadow-glass transition-opacity duration-200 ${animating ? 'opacity-0' : 'opacity-100'}`}>
              <Quote size={48} className="absolute top-8 right-8 text-brand-600/20" />

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <img src={t.image} alt={t.name} className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-600/30" />
                </div>

                <div className="flex-1">
                  <StarRating count={t.rating} />
                  <p className="font-body text-gray-600 text-lg leading-relaxed mt-4 mb-6 italic">
                    "{t.text}"
                  </p>
                  <div>
                    <div className="font-heading font-semibold text-gray-900">{t.name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg">{t.flag}</span>
                      <span className="font-body text-brand-400 text-sm">{t.destination}</span>
                    </div>
                    <div className="font-body text-gray-600 text-xs mt-0.5">{t.program}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <button onClick={() => go(-1)} className="p-3 rounded-full border border-gray-200 bg-gray-50 hover:bg-brand-600/20 hover:border-brand-600/40 text-gray-900 transition-all duration-300">
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-brand-600' : 'w-2 bg-gray-200 hover:bg-white/40'}`} />
                ))}
              </div>

              <button onClick={() => go(1)} className="p-3 rounded-full border border-gray-200 bg-gray-50 hover:bg-brand-600/20 hover:border-brand-600/40 text-gray-900 transition-all duration-300">
                <ChevronRight size={20} />
              </button>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
