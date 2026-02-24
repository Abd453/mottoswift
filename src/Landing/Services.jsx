import { useEffect, useRef } from 'react';

const services = [
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        ),
        title: 'Car Sales',
        description: 'We offer a wide range of premium cars for sale, from sports cars to luxury sedans at competitive prices.',
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
        ),
        title: 'Car Rental',
        description: 'Looking for a luxury car rental? YourCar has you covered with our premium, top-of-the-line fleet.',
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        ),
        title: 'Car Selling',
        description: 'Looking to sell your car? We offer competitive prices and a seamless, hassle-free selling process.',
    },
];

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.15 }
        );
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="relative py-32 overflow-hidden" ref={sectionRef}>
            <div className="section-watermark">SERVICES</div>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 reveal">
                    <p className="text-[#c0392b] uppercase tracking-[5px] text-xs font-bold mb-4">What We Offer</p>
                    <h2 className="text-4xl md:text-5xl font-heading font-black">Our <span className="text-[#c0392b]">Services</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 services-grid-custom">
                    {services.map((s, i) => (
                        <div key={i} className="service-card text-center reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#c0392b]/10 flex items-center justify-center text-[#c0392b]">
                                {s.icon}
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-4">{s.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
