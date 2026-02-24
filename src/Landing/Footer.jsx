const Footer = () => {
    return (
        <footer id="contact" className="footer py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-16 mb-16">
                    {/* Brand */}
                    <div>
                        <h2 className="text-3xl font-heading font-black mb-4">
                            Your<span className="text-[#c0392b]">Car</span>
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-6">
                            Redefining the relationship between driver and machine. Premium automotive experiences since 1995.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'twitter', 'instagram'].map(social => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:border-[#c0392b] hover:text-[#c0392b] transition-all duration-300">
                                    <span className="text-xs uppercase">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-heading font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Cars', 'Contact'].map(link => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className="text-gray-500 hover:text-[#c0392b] transition-colors duration-300 text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-heading font-bold mb-6">Contact Us</h3>
                        <div className="space-y-4 text-sm text-gray-500">
                            <p className="flex items-center gap-3">
                                <span className="text-[#c0392b]">📍</span>
                                123 Street Name, City, Country
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[#c0392b]">📞</span>
                                +123 456 7890
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[#c0392b]">✉️</span>
                                info@yourcar.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/5 pt-8 text-center">
                    <p className="text-gray-600 text-sm">&copy; 2024 YourCar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
