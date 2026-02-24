import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={sectionRef}>
      <div className="section-watermark">ABOUT</div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <div className="reveal-left">
            <p className="text-[#c0392b] uppercase tracking-[5px] text-xs font-bold mb-4">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 leading-tight">
              Uncompromising<br />Quality Since <span className="text-[#c0392b]">1995</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              We believe every drive should be an event. Our curated collection represents more than just transportation — it represents a commitment to luxury, performance, and the thrill of the open road.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our team of experts is dedicated to helping you find the perfect car for your needs, whether you're looking for a sports car, a luxury sedan, or a versatile SUV.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-heading font-black text-[#c0392b]">500+</p>
                <p className="text-sm text-gray-500 mt-1">Cars Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-black text-[#c0392b]">15+</p>
                <p className="text-sm text-gray-500 mt-1">Years of Excellence</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-black text-[#c0392b]">98%</p>
                <p className="text-sm text-gray-500 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="reveal-right">
            <div className="relative">
              <img src="/images/car-top-down.png" alt="Engineering Excellence"
                className="w-full" style={{ animation: 'float 6s ease-in-out infinite' }} />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#c0392b]/30 rounded-full" style={{ animation: 'spin-slow 20s linear infinite' }} />
              <div className="absolute -top-6 -right-6 w-20 h-20 border border-[#c0392b]/20 rounded-full" style={{ animation: 'spin-slow 15s linear infinite reverse' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;