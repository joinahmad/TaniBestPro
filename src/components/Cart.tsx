import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Trash2, Plus, Minus, ShoppingCart, Ticket, Truck, Home, Grid2X2, MessageCircle, User, Heart } from 'lucide-react';

interface CartProps {
  onBack: () => void;
  onNavigate: (state: any) => void;
}

export default function Cart({ onBack, onNavigate }: CartProps) {
  const cartItems = [
    {
      id: '1',
      name: 'Organic Curly Kale',
      farm: 'Green Earth Farm',
      price: 4.50,
      quantity: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYVU8ShIDHbBWT0XkZtqQff4KWBwd53_iQhJ7jza3An-m9QEU75QoWjhLq-YqxsnT5Vl9WBOKYi-JqO8HUdOHWq4Zuf_5HU6-g48YZdZDCVV4D6QT7xAWbnBDwEfQ-nwgZpXNqyM_g_TAsc24-cG_Qp-pjtNQJ3EruJihBovwaSqeEO_3xInVoHontZrSBXtFwtRl1OSK8329ES61Lfiq15I-nHtuMNoSV2fD4TGUlrd-z0sB2DROidUs_w5vOO5bAYil9d3-uLc0'
    },
    {
      id: '2',
      name: 'Heritage Cherry Tomatoes',
      farm: 'Sunny Valley Orchards',
      price: 3.20,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtC-9hklseK3nkf55Up6nEoJqIBIve5HqNfPaDd6conAhodPdc8P40MWSHaJpA6iksrtDi_uNlSnuOfWppu9eko7WbCn1AHp8ZTd9Ysvmj4VzVm63Qb3KsPCru_K7FQuf1AUK5kkBAoYkI--iLsZ2hh5EhNDz5Mua1NxqTsiQMNWXMtsGbUIhkRcnBpxuSYiu72P0MzRbjbEfM86y47yvT6l9OEfkUzyTpeCU6b5YzosMCfMebgCM7_inwMVCM-AevjCjo4mDT47A'
    },
    {
      id: '3',
      name: 'Sweet Baby Carrots',
      farm: 'Premium Certified Fresh',
      price: 2.80,
      quantity: 3,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe1w_aBU7Ezz7-Un65jTmSANwyE0nvIILdVoQ_JTWiYdCI5W5Ni1C8c-TWfAayTFOfQ4S4x61PL4r01T_MffdsmM8FXZqKu9xteyX2FWtmgRkI4CAGjtb1xsfBsF5zFZndB-2fKyPURVwFklbbGHaL2yxDMutn3Z1foaxBN5yXSAJyjerIXT-49sNCLjHjY3BltzwXeBJwR0ZSdAQDUuERq55wBz8eE9p_rL-jPwBUbDN2u4mV_MNjKJN-guwm36Aj2_Ad1ob0-bk'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="min-h-screen bg-background font-sans pb-32"
    >
      {/* TopAppBar */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center px-5 h-16 w-full max-w-screen-xl mx-auto border-b border-neutral-100">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="active:scale-95 transition-transform text-primary">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-display font-bold text-primary">Your Basket</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-on-surface-variant font-medium">3 Items Selected</span>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-5 pt-4">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-6">
          {/* Product List Section */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {cartItems.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-neutral-50"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover rounded-xl bg-neutral-100 shadow-inner"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-base text-on-surface leading-tight">{item.name}</h3>
                      <button className="text-on-surface-variant hover:text-error transition-colors p-1">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="text-[11px] text-primary flex items-center gap-1 mt-1 font-medium italic">
                      {item.farm}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-lg text-secondary">${item.price.toFixed(2)}</span>
                    
                    {/* Quantity Selector */}
                    <div className="flex items-center bg-secondary/5 rounded-full px-1 py-1 gap-3 border border-secondary/10">
                      <button className="w-8 h-8 flex items-center justify-center text-secondary hover:bg-secondary/10 rounded-full transition-colors">
                        <Minus size={14} strokeWidth={3} />
                      </button>
                      <span className="font-bold text-sm text-on-surface w-4 text-center">{item.quantity}</span>
                      <button className="w-8 h-8 flex items-center justify-center text-secondary hover:bg-secondary/10 rounded-full transition-colors">
                        <Plus size={14} strokeWidth={3} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary & Checkout Sidebar */}
          <div className="lg:col-span-4 mt-8 lg:mt-0 flex flex-col gap-6">
            {/* Voucher Input */}
            <div className="p-5 bg-white rounded-2xl border border-neutral-100">
              <label className="font-bold text-sm text-on-surface block mb-3">Apply Voucher</label>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Ticket size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                  <input 
                    type="text" 
                    placeholder="Promo code" 
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                  />
                </div>
                <button className="bg-secondary text-white px-5 rounded-xl font-bold text-sm active:scale-95 transition-transform shadow-sm">
                  Apply
                </button>
              </div>
            </div>

            {/* Shipping Estimation */}
            <div className="p-5 bg-white rounded-2xl border border-neutral-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-sm text-on-surface">Shipping Estimation</h3>
                <Truck size={18} className="text-primary" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-xl flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border-4 border-primary"></div>
                  <div className="flex-1">
                    <p className="font-bold text-xs text-on-surface">Fast Delivery</p>
                    <p className="text-[10px] text-on-surface-variant">Arrives Today (2-4 hrs)</p>
                  </div>
                  <span className="font-bold text-xs text-secondary">$5.00</span>
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-100 rounded-xl flex items-center gap-3 opacity-60">
                  <div className="w-4 h-4 rounded-full border border-neutral-300"></div>
                  <div className="flex-1">
                    <p className="font-bold text-xs text-on-surface">Standard Delivery</p>
                    <p className="text-[10px] text-on-surface-variant">Arrives Tomorrow</p>
                  </div>
                  <span className="font-bold text-xs text-secondary">$2.00</span>
                </div>
              </div>
            </div>

            {/* Checkout Summary */}
            <div className="p-6 bg-primary-container text-on-primary-container rounded-3xl shadow-xl shadow-primary/10">
              <h3 className="text-lg font-bold mb-6">Order Summary</h3>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex justify-between text-sm opacity-90">
                  <span>Subtotal</span>
                  <span className="font-bold">$20.60</span>
                </div>
                <div className="flex justify-between text-sm opacity-90">
                  <span>Shipping</span>
                  <span className="font-bold">$5.00</span>
                </div>
                <div className="flex justify-between text-sm text-amber-200">
                  <span>Voucher Discount</span>
                  <span className="font-bold">-$2.00</span>
                </div>
                <div className="h-px bg-white/10 my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="text-base font-bold">Total</span>
                  <span className="text-2xl font-bold">$23.60</span>
                </div>
              </div>
              <button 
                onClick={() => onNavigate('checkout')}
                className="w-full bg-white text-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all hover:bg-neutral-50"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={20} />
              </button>
              <p className="text-center text-[10px] opacity-70 mt-4 px-4 leading-relaxed">
                Taxes are calculated at checkout and may vary based on your location.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-8 bg-white border-t border-neutral-100 shadow-2xl z-50">
        {[
          { id: 'marketplace', icon: <Home size={20} />, label: 'Home' },
          { id: 'categories', icon: <Grid2X2 size={20} />, label: 'Category' },
          { id: 'cart', icon: <ShoppingCart size={20} fill="currentColor" />, label: 'Cart', active: true },
          { id: 'chat', icon: <MessageCircle size={20} />, label: 'Chat' },
          { id: 'profile', icon: <User size={20} />, label: 'Profile' },
        ].map((item) => (
          <button 
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all
              ${item.active 
                ? 'bg-secondary-container text-on-secondary-container px-4' 
                : 'text-on-surface-variant hover:text-primary'}`}
          >
            {item.icon}
            {item.active && <span className="text-[10px] font-bold uppercase tracking-tight">{item.label}</span>}
          </button>
        ))}
      </nav>
    </motion.div>
  );
}
