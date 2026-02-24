import { useEffect, useRef } from 'react';
import carsData from '../Data/data.json';

const Cars = ({ onAddToCart }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="cars" className="relative py-32 overflow-hidden" ref={sectionRef}>
            <div className="section-watermark">FLEET</div>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 reveal">
                    <p className="text-[#c0392b] uppercase tracking-[5px] text-xs font-bold mb-4">Our Collection</p>
                    <h2 className="text-4xl md:text-5xl font-heading font-black">Select Your <span className="text-[#c0392b]">Machine</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cars-grid-custom">
                    {carsData.cars.map((car, i) => (
                        <div key={i} className="car-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                            {/* Image */}
                            <div className="h-52 flex items-center justify-center p-6 overflow-hidden">
                                <img src={car.image} alt={car.name} className="max-w-full max-h-full object-contain" />
                            </div>

                            {/* Info */}
                            <div className="p-6 pt-0">
                                <span className="text-[#c0392b] text-xs font-bold uppercase tracking-[3px]">{car.class}</span>
                                <h3 className="text-xl font-heading font-bold mt-2 mb-3">{car.name}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-5">{car.description}</p>

                                {/* Meta */}
                                <div className="flex items-center gap-6 py-4 border-t border-white/5 text-gray-500 text-sm mb-5">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                        {car.seats} seats
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                                        {car.luggage} luggage
                                    </span>
                                </div>

                                <button onClick={() => onAddToCart(car)} className="btn-brand w-full justify-center text-sm">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cars;
