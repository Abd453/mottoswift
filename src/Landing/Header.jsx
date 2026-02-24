const Header = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: `url(/images/hero-bg.png)` }} />
      <div className="hero-gradient" />

      {/* Animated particles/circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c0392b]/5 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#c0392b]/3 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite reverse' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <div className="hero-title">
            <p className="text-[#c0392b] uppercase tracking-[6px] text-sm font-semibold mb-4">Premium Automotive</p>
            <h1 className="text-5xl md:text-7xl font-heading font-black leading-none mb-6">
              Find The<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0392b] to-[#e74c3c]">Perfect Car</span><br />
              For You.
            </h1>
          </div>
          <div className="hero-subtitle">
            <p className="text-gray-400 text-lg md:text-xl max-w-md mb-10 leading-relaxed">
              We offer a wide range of cars that cater to your needs and budget. Visit us today and drive away with your dream car!
            </p>
          </div>
          <div className="hero-cta flex gap-4 flex-wrap">
            <a href="#cars" className="btn-brand">
              Explore Fleet
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#about" className="btn-outline-brand">Learn More</a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e12] to-transparent" />
    </section>
  );
};

export default Header;
