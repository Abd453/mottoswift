import { useState } from 'react';
import Navbar from './Landing/Navbar';
import Header from './Landing/Header';
import About from './Landing/About';
import Services from './Landing/Services';
import Cars from './Landing/Cars';
import Carsgallery from './Landing/Carsgallery';
import Testimonials from './Landing/testimonials';
import Footer from './Landing/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (car) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === car.name);
      if (existing) return prev.map(i => i.name === car.name ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...car, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (name, delta) => {
    setCart(prev => {
      const updated = prev.map(i => i.name === name ? { ...i, qty: i.qty + delta } : i);
      return updated.filter(i => i.qty > 0);
    });
  };

  const removeItem = (name) => setCart(prev => prev.filter(i => i.name !== name));
  const clearCart = () => setCart([]);
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <>
      <Navbar cartCount={totalItems} onCartClick={() => setCartOpen(true)} />
      <Header />
      <About />
      <Services />
      <Cars onAddToCart={addToCart} />
      <Carsgallery />
      <Testimonials />
      <Footer />

      {/* Cart Overlay */}
      <div className={`cart-overlay ${cartOpen ? 'open' : ''}`} onClick={() => setCartOpen(false)} />

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
        <div className="p-8 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-heading font-bold">Your Selection</h2>
            <button onClick={() => setCartOpen(false)} className="text-gray-500 hover:text-white transition-colors cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto space-y-6">
            {cart.length === 0 ? (
              <div className="text-center mt-20">
                <svg className="w-16 h-16 mx-auto text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="text-gray-600">Your garage is empty</p>
              </div>
            ) : (
              cart.map((item, i) => (
                <div key={i} className="flex gap-4 pb-6 border-b border-white/5">
                  <img src={item.image} alt={item.name} className="w-20 h-16 object-contain rounded-lg bg-[#111820] p-2" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[#c0392b] text-[10px] font-bold uppercase tracking-wider">{item.class}</span>
                    <h4 className="text-sm font-semibold truncate">{item.name}</h4>
                    <div className="flex items-center gap-3 mt-3">
                      <button onClick={() => updateQty(item.name, -1)}
                        className="w-7 h-7 rounded-md bg-[#c0392b] text-white flex items-center justify-center text-sm cursor-pointer hover:bg-[#922b21] transition-colors">−</button>
                      <span className="text-sm font-bold w-6 text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.name, 1)}
                        className="w-7 h-7 rounded-md bg-[#1a2230] text-white flex items-center justify-center text-sm cursor-pointer hover:bg-[#2a3240] transition-colors">+</button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.name)} className="text-gray-600 hover:text-[#c0392b] transition-colors self-start cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="pt-6 border-t border-white/5 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Items</span>
                <span className="font-bold">{totalItems}</span>
              </div>
              <button onClick={clearCart}
                className="w-full py-3 rounded-lg bg-[#c0392b] text-white font-bold text-sm hover:bg-[#922b21] transition-colors cursor-pointer flex items-center justify-center gap-2">
                Delete All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button className="w-full py-3 rounded-lg bg-white text-[#0a0e12] font-bold text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
