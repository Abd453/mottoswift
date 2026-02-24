const galleryImages = [
    '/images/gallery-1.png',
    '/images/gallery-2.png',
    '/images/gallery-3.png',
    '/images/porsche-911.png',
    '/images/tesla-model-s.png',
    '/images/bentley-bentayga.png',
];

const Carsgallery = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <p className="text-[#c0392b] uppercase tracking-[5px] text-xs font-bold mb-4">Gallery</p>
                <h2 className="text-4xl font-heading font-black">Visual <span className="text-[#c0392b]">Showcase</span></h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 gallery-grid-custom">
                {galleryImages.map((img, i) => (
                    <div key={i} className="gallery-item" style={{ height: i === 0 || i === 5 ? '450px' : '350px' }}>
                        <img src={img} alt="Car showcase" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Carsgallery;
