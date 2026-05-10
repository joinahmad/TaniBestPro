import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Share2, 
  ShoppingCart, 
  Star, 
  Heart, 
  MapPin, 
  Info, 
  Truck, 
  ShieldCheck, 
  MessageCircle,
  PlusCircle,
  Leaf,
  Clock
} from 'lucide-react';

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    price: number;
    unit: string;
    origin: string;
    image: string;
    badge?: 'Fresh' | 'Top Pick';
  };
  onBack: () => void;
  onNavigate?: (state: any) => void;
}

export default function ProductDetail({ product, onBack, onNavigate }: ProductDetailProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock additional images
  const images = [
    product.image,
    "https://images.unsplash.com/photo-1524179524661-0c0183303497?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background font-sans pb-32"
    >
      {/* TopAppBar */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="flex justify-between items-center px-5 h-16 w-full max-w-screen-xl mx-auto">
          <button 
            onClick={onBack}
            className="text-primary active:scale-95 transition-transform"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-display font-bold text-primary">TaniBespro</h1>
          <div className="flex gap-4">
            <button className="text-on-surface-variant active:scale-95">
              <Share2 size={22} />
            </button>
            <button 
              onClick={() => onNavigate?.('cart')}
              className="text-primary active:scale-95"
            >
              <ShoppingCart size={22} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto">
        {/* Product Image Slider */}
        <section className="relative w-full aspect-square md:aspect-video bg-neutral-100 overflow-hidden">
          <div className="flex h-full w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar">
            {images.map((img, idx) => (
              <div key={idx} className="flex-none w-full h-full snap-center">
                <img 
                  src={img} 
                  alt={`Product view ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* Indicator Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <div 
                key={idx}
                className={`h-2 rounded-full transition-all ${idx === currentImage ? 'w-4 bg-primary' : 'w-2 bg-white/50'}`}
              />
            ))}
          </div>
        </section>

        {/* Product Core Info */}
        <section className="px-5 pt-8">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              {product.badge && (
                <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full mb-2 uppercase tracking-tight">
                  {product.badge}
                </span>
              )}
              <h2 className="text-3xl font-display font-bold text-on-surface leading-tight">
                Fresh {product.name}
              </h2>
              <div className="flex items-center gap-1 mt-2 flex-wrap">
                <div className="flex items-center gap-0.5 text-amber-500">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-bold text-on-surface ml-0.5">4.9</span>
                </div>
                <span className="text-xs text-on-surface-variant">(120 Reviews)</span>
                <span className="mx-2 text-neutral-200">|</span>
                <span className="text-xs text-on-surface-variant font-medium">500+ Sold</span>
              </div>
            </div>
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-3 rounded-full shadow-sm active:scale-90 transition-all ${isFavorite ? 'bg-red-50 text-red-500' : 'bg-neutral-100 text-on-surface-variant'}`}
            >
              <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-3xl font-display font-bold text-primary">Rp{product.price.toLocaleString()}</span>
            <span className="text-sm text-on-surface-variant font-medium">/ {product.unit} bundle</span>
          </div>

          <div className="mt-4 flex items-center gap-2 py-2 px-3 bg-neutral-50 rounded-lg w-fit">
            <Info size={14} className="text-secondary" />
            <span className="text-xs text-on-surface-variant font-medium">
              Stock: <span className="font-bold text-on-surface">45 items left</span>
            </span>
          </div>
        </section>

        {/* Farmer Information Card */}
        <section className="px-5 mt-10">
          <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow-md border border-neutral-100">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary-fixed" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuADBfqHcVQPoVf69-GATgm7Hv-CRlCTDc7kFR4VDPj85-damghw_e62dBdNcTqE9kHyBgadHBeb8oziY1DBWSEvUrVOTDPoJ-up5lipBzQy88w5qWp1fWY-wzLd2S7wcVNWQnQtXRxW7KyLeU9WbBvE_xua5lrCSn7IUDWZgA92gzPm3n5UMKXd_R8fbQmfF10XT6WqYSJ9ShZd_tWEeDB4_pxTVQYaZWluvFvcaJOibZRESTTncFPcljeE7a5H9MzbxuVnCbLCrdw" 
                  alt="Farmer"
                />
                <div className="absolute -bottom-1 -right-1 bg-primary text-white p-0.5 rounded-full border-2 border-white">
                  <ShieldCheck size={10} />
                </div>
              </div>
              <div>
                <h4 className="font-display font-bold text-on-surface lowercase first-letter:uppercase">Pak Budi's Farm</h4>
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <MapPin size={12} />
                  <span className="text-xs">{product.origin}, Indonesia</span>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 text-primary border border-primary rounded-lg text-xs font-bold active:scale-95 transition-all">
              View Profile
            </button>
          </div>
        </section>

        {/* Description Section */}
        <section className="px-5 mt-10">
          <h3 className="text-lg font-display font-bold text-on-surface mb-4">Product Description</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed text-neutral-600">
            Grown with love in the volcanic soils of {product.origin}, our organic {product.name} is harvested daily to ensure maximum crunch and nutrient density. Perfect for green smoothies, healthy chips, or fresh salads. No chemical pesticides used. 100% Non-GMO.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-3 bg-white border border-neutral-100 rounded-xl shadow-sm">
              <Leaf className="text-primary mb-2" size={20} />
              <h5 className="text-xs font-bold text-on-surface">Certified Organic</h5>
              <p className="text-[10px] text-on-surface-variant">Eco-friendly farming</p>
            </div>
            <div className="p-3 bg-white border border-neutral-100 rounded-xl shadow-sm">
              <Clock className="text-primary mb-2" size={20} />
              <h5 className="text-xs font-bold text-on-surface">Harvested Daily</h5>
              <p className="text-[10px] text-on-surface-variant">Picked at peak ripeness</p>
            </div>
          </div>
        </section>

        {/* Delivery & Service */}
        <section className="px-5 mt-10 pb-10">
          <div className="border-t border-neutral-100 pt-8 space-y-4">
            <div className="flex items-center gap-4">
              <Truck size={20} className="text-on-surface-variant" />
              <div>
                <p className="text-sm font-bold text-on-surface">Express Delivery</p>
                <p className="text-xs text-on-surface-variant">Arrives in 2-4 hours (Local area)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ShieldCheck size={20} className="text-on-surface-variant" />
              <div>
                <p className="text-sm font-bold text-on-surface">Freshness Guarantee</p>
                <p className="text-xs text-on-surface-variant">100% money back if not fresh</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-neutral-100 px-5 py-4 z-50">
        <div className="max-w-screen-xl mx-auto flex gap-3 items-center">
          {/* Chat Seller */}
          <button className="flex flex-col items-center justify-center min-w-[64px] h-12 text-on-surface-variant active:scale-90 transition-transform">
            <MessageCircle size={22} />
            <span className="text-[10px] font-bold">Chat</span>
          </button>
          {/* Add to Cart */}
          <motion.button 
            whileTap={{ scale: 0.98 }}
            className="flex-1 h-12 bg-secondary-container text-on-secondary-container rounded-lg font-bold flex items-center justify-center gap-2"
          >
            <PlusCircle size={18} />
            <span>Add to Cart</span>
          </motion.button>
          {/* Buy Now */}
          <motion.button 
            whileTap={{ scale: 0.98 }}
            className="flex-1 h-12 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20"
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
