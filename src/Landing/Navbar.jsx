import { useState, useEffect } from 'react';

const Navbar = ({ cartCount, onCartClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'About', 'Services', 'Cars', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold font-heading tracking-tight">
          Your<span className="text-[#c0392b]">Car</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 nav-links-desktop">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button onClick={onCartClick} className="relative text-white hover:text-[#c0392b] transition-colors cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#c0392b] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white menu-toggle" style={{ display: 'none' }}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a0e12]/95 backdrop-blur-xl border-t border-white/5 p-6">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileOpen(false)}
              className="block py-3 text-base text-gray-300 hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;