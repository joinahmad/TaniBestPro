import { motion } from 'motion/react';
import { ArrowLeft, HelpCircle, MapPin, Zap, Truck, QrCode, Landmark, DollarSign, ChevronRight, Lock, ShieldCheck, Ticket, Home, Grid2X2, ShoppingCart, MessageCircle, User } from 'lucide-react';

interface CheckoutProps {
  onBack: () => void;
  onNavigate: (state: any) => void;
}

export default function Checkout({ onBack, onNavigate }: CheckoutProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-background font-sans pb-40"
    >
      {/* TopAppBar */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-100">
        <div className="flex justify-between items-center px-5 h-16 w-full max-w-screen-xl mx-auto">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="text-primary active:scale-95 transition-transform">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-display font-bold text-primary">Checkout</h1>
          </div>
          <button className="text-primary hover:opacity-80 transition-opacity active:scale-95">
            <HelpCircle size={22} />
          </button>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-5 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Selection Details */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Delivery Address Card */}
            <section className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-50">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-on-surface">Delivery Address</h2>
                <button className="text-primary text-xs font-bold hover:underline">Change</button>
              </div>
              <div className="flex gap-4 items-start border border-primary/10 rounded-xl p-4 bg-primary/5">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-bold text-sm text-on-surface mb-1">Home (Main Address)</p>
                  <p className="text-on-surface-variant text-sm">Budi Santoso (+62 812-3456-7890)</p>
                  <p className="text-on-surface-variant text-xs mt-1 leading-relaxed">Jl. Kemang Timur No. 88, Mampang Prapatan, Jakarta Selatan, DKI Jakarta 12730</p>
                </div>
              </div>
            </section>

            {/* Courier Selection */}
            <section className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-50">
              <h2 className="text-lg font-bold text-on-surface mb-4">Courier Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Courier Option 1 */}
                <label className="relative flex flex-col border-2 border-secondary bg-secondary/5 rounded-2xl p-4 cursor-pointer transition-all active:scale-95">
                  <input defaultChecked type="radio" name="courier" className="absolute top-4 right-4 accent-primary w-4 h-4" />
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="text-primary" size={20} />
                    <span className="font-bold text-sm">Express Delivery</span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant">Arrives in 2-4 hours</p>
                  <p className="font-bold text-lg text-primary mt-2">Rp 25.000</p>
                </label>
                {/* Courier Option 2 */}
                <label className="relative flex flex-col border border-neutral-100 bg-white rounded-2xl p-4 cursor-pointer transition-all hover:bg-neutral-50 active:scale-95">
                  <input type="radio" name="courier" className="absolute top-4 right-4 accent-primary w-4 h-4" />
                  <div className="flex items-center gap-3 mb-2">
                    <Truck className="text-on-surface-variant" size={20} />
                    <span className="font-bold text-sm">Standard Delivery</span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant">Arrives Tomorrow</p>
                  <p className="font-bold text-lg text-on-surface mt-2">Rp 12.000</p>
                </label>
              </div>
            </section>

            {/* Payment Methods */}
            <section className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-50">
              <h2 className="text-lg font-bold text-on-surface mb-4">Payment Method</h2>
              <div className="flex flex-col gap-1">
                {/* QRIS */}
                <div className="flex items-center justify-between p-4 border-b border-neutral-50 hover:bg-neutral-50 cursor-pointer transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl">
                      <QrCode className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">QRIS / GoPay / ShopeePay</p>
                      <p className="text-[10px] text-on-surface-variant">Instant payment via mobile wallet</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-neutral-300 group-hover:text-primary" />
                </div>
                {/* Bank Transfer */}
                <div className="flex items-center justify-between p-4 border-b border-neutral-50 hover:bg-neutral-50 cursor-pointer transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-secondary/10 rounded-xl">
                      <Landmark className="text-secondary" size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Virtual Account</p>
                      <p className="text-[10px] text-on-surface-variant">BCA, Mandiri, BNI, BRI</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-neutral-300 group-hover:text-primary" />
                </div>
                {/* COD */}
                <div className="flex items-center justify-between p-4 hover:bg-neutral-50 cursor-pointer transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-xl">
                      <DollarSign className="text-amber-700" size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-on-surface">Cash on Delivery (COD)</p>
                      <p className="text-[10px] text-on-surface-variant">Pay when your order arrives</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-neutral-300 group-hover:text-primary" />
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary (Sticky) */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 flex flex-col gap-6">
              <section className="bg-white rounded-3xl p-6 shadow-xl shadow-primary/5 border border-neutral-50">
                <h2 className="text-lg font-bold text-on-surface mb-6">Order Summary</h2>
                <div className="flex flex-col gap-4 mb-6">
                  {/* Item 1 */}
                  <div className="flex gap-4">
                    <img 
                      className="w-16 h-16 rounded-xl object-cover bg-neutral-100" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB32ytdGZRk9UtUWPGbX4CO8-iJ5C3MHf5u5qA_GL5EoZaYLWiONQzLN0xa8oPuPN5bQUYlVWVPYktbgG-WQPUIjGwlv0m8ZDprv4udQM37OpJFFPKkoExVzJuvxDK8fnqrc5mcxqgJV-4Pco5S_yOxUG3ZbyIMC13cqAxHLPABM_UydbBuzi5yV136jZ6bYfse2lCy4PKT7mk-GUSv3jyJgjhJMaXJ9k-2cfWdTYdxprTflYp5bvCVIaVw5xmDkehPjTB5Rp86AvQ" 
                      alt="Kale"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-sm line-clamp-1">Organic Curly Kale</p>
                      <p className="text-[11px] text-on-surface-variant">2 Packs x Rp 15.000</p>
                    </div>
                    <p className="font-bold text-sm">Rp 30.000</p>
                  </div>
                  {/* Item 2 */}
                  <div className="flex gap-4">
                    <img 
                      className="w-16 h-16 rounded-xl object-cover bg-neutral-100" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSNOUAJSxUvUKHYJrt0RQTGJxgeGYeH5v2X0Nk69ErIFWVCymL8r2MzTBz8SEczl8Auew8uunHRAMuIyOhSNeELgon7Hkgai9g1yjyVTztkRSAWtNRM0flVLWvSCIdDJo-QUKLtu5fjXKrvjRQ8gYyD4YG0GRmzPXXyIZemoCLAAPGlnojW5IoGVat0ybcZLVbKkoC54k9VBrXKgZEM8NHt2-Fi-7TQ347DxO0oDioZ6SWxfFS_Qko3T9IeatOAqCSa8HnLhn9ZhA" 
                      alt="Potatoes"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-sm line-clamp-1">Baby Potatoes Premium</p>
                      <p className="text-[11px] text-on-surface-variant">1 Kg x Rp 22.000</p>
                    </div>
                    <p className="font-bold text-sm">Rp 22.000</p>
                  </div>
                </div>
                
                <hr className="border-neutral-100 mb-6"/>
                
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm text-on-surface-variant">
                    <span>Subtotal (3 items)</span>
                    <span className="font-medium">Rp 52.000</span>
                  </div>
                  <div className="flex justify-between text-sm text-on-surface-variant">
                    <span>Shipping Fee</span>
                    <span className="font-medium">Rp 25.000</span>
                  </div>
                  <div className="flex justify-between text-sm text-on-surface-variant">
                    <span>Platform Service</span>
                    <span className="text-primary font-bold">Free</span>
                  </div>
                  <div className="flex justify-between items-center text-on-surface pt-4">
                    <span className="font-bold">Total Payment</span>
                    <span className="text-2xl font-bold text-primary">Rp 77.000</span>
                  </div>
                </div>

                {/* Pay Now Button */}
                <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
                  <Lock size={18} />
                  Pay Now
                </button>
                
                <p className="text-center text-[10px] text-neutral-400 mt-4 flex items-center justify-center gap-1">
                  <ShieldCheck size={14} className="text-green-500" />
                  Secure 256-bit SSL encrypted payment
                </p>
              </section>

              {/* Promotional Banner Small */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-amber-50 text-amber-900 p-4 rounded-2xl flex items-center gap-4 border border-amber-100"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Ticket className="text-amber-600" size={24} />
                </div>
                <div>
                  <p className="font-bold text-sm">Voucher Applied</p>
                  <p className="text-[10px] opacity-80">Free Shipping (max Rp 10.000)</p>
                </div>
              </motion.div>
            </div>
          </aside>
        </div>
      </main>

      {/* Bottom Shell (For Mobile Quick Action) */}
      <div className="md:hidden fixed bottom-24 left-0 w-full bg-white/90 backdrop-blur-md px-5 py-4 border-t border-neutral-100 z-40 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div>
          <p className="text-[10px] text-on-surface-variant font-medium">Total Payment</p>
          <p className="text-xl text-primary font-bold">Rp 77.000</p>
        </div>
        <button className="bg-primary text-white font-bold text-sm px-10 py-3.5 rounded-2xl active:scale-95 transition-all shadow-md">
          Pay Now
        </button>
      </div>

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
