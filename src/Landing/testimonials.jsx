import { useState, useEffect, useRef } from 'react';
import testimonialsData from '../Data/data.json';

const Testimonials = () => {
    const [active, setActive] = useState(0);
    const sectionRef = useRef(null);
    const list = testimonialsData.testimonials;

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.15 }
        );
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Auto-rotate
    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => (prev + 1) % list.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [list.length]);

    const t = list[active];

    return (
        <section id="testimonials" className="relative py-32 overflow-hidden bg-[#0d1117]" ref={sectionRef}>
            <div className="section-watermark" style={{ color: 'rgba(255,255,255,0.015)' }}>REVIEWS</div>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 reveal">
                    <p className="text-[#c0392b] uppercase tracking-[5px] text-xs font-bold mb-4">Testimonials</p>
                    <h2 className="text-4xl md:text-5xl font-heading font-black">What Clients <span className="text-[#c0392b]">Say</span></h2>
                </div>

                <div className="max-w-3xl mx-auto reveal">
                    <div className="testimonial-card text-center">
                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-8">
                            {[...Array(t.rating)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 font-light italic">
                            "{t.description}"
                        </p>

                        <h4 className="text-lg font-heading font-bold text-white">{t.name}</h4>
                        <p className="text-sm text-gray-500 mt-1">Verified Client</p>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-10">
                        {list.map((_, i) => (
                            <button key={i} onClick={() => setActive(i)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${i === active ? 'bg-[#c0392b] w-8' : 'bg-white/20'}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
