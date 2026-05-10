import { motion } from 'motion/react';
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  Leaf, 
  Sparkles, 
  ChevronRight, 
  Home, 
  Grid2X2,
  Heart, 
  MessageCircle, 
  User,
  ArrowRight
} from 'lucide-react';
import ProductCard from './ProductCard';

const CATEGORIES = [
  { id: 'all', name: 'Greens', icon: <Leaf size={16} /> },
  { id: 'roots', name: 'Roots', icon: <Sparkles size={16} /> },
  { id: 'fruits', name: 'Fruits', icon: <Sparkles size={16} /> },
  { id: 'spices', name: 'Spices', icon: <Sparkles size={16} /> },
];

const PRODUCTS = [
  {
    id: '1',
    name: 'Baby Spinach Bundle',
    price: 12500,
    unit: '250g',
    origin: 'Sukabumi Farm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw45oNhdUtsLy037zGYh2TbrZOFv4CRayJK3864Uzeh9CoP19HArykR7KlTTCg9wSQgVEBn8kKzNpdSEhYcHxDlrFNFV5dZx-2_29CjDdoJevmXpb7slE3fCkkYINVm7yPXDzPelcsFm42Ie25d09GIHtFnPEt_iwWRSuBjf4D8spGiPtkiCdjuDBDQCVMUWOViOQQAJ1RCjgVvTYKzoJ2de3Rz5v_mNl23VryW_iMRZsPeoWNPCkIp-_niZfdsyOz7kDzTuLbnns',
    badge: 'Fresh' as const
  },
  {
    id: '2',
    name: 'Mountain Heirloom Carrots',
    price: 18000,
    unit: '500g',
    origin: 'Lembang Hills',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARXUT8FbpILJUrG9NFc3mHCHc44Y0uueCTVvHaS6avJv22wdMnboLy6S8VHJtDLSTIBdUrdoVawB09mVM2gs9_Ab1_-Y8SZGVLvi-Bw0EqDf6298G9sSntImCGM-vzQG16vXWdpC_eJ1y2m7Ezg2AUjHIuSJVDS6yzEVvaX92e5QogvCYGKZDik4B5hTOXNPrHrzq4Sv6Cmqr33DYOuy4ckSYWlyzlz_VsjRagjm3js-s6IukS4dd34do-IOtlIbXBQB3DVzFoDGs',
    badge: 'Top Pick' as const
  },
  {
    id: '3',
    name: 'Kale Organik Kriting',
    price: 15000,
    unit: 'ikat',
    origin: 'Malang',
    image: 'https://images.unsplash.com/photo-1524179524661-0c0183303497?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '4',
    name: 'Tomat Merah Super',
    price: 9000,
    unit: '250g',
    origin: 'Lembang',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?auto=format&fit=crop&q=80&w=400',
  },
];

interface MarketplaceProps {
  onNavigate?: (id: string) => void;
  onProductClick?: (product: any) => void;
}

export default function Marketplace({ onNavigate, onProductClick }: MarketplaceProps) {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* TopAppBar */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center px-5 h-16 w-full max-w-screen-xl mx-auto border-b border-neutral-100">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate?.('categories')}
            className="active:scale-95 transition-transform text-primary"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-display font-bold text-primary">TaniBespro</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant">
            <Search size={22} />
          </button>
          <div className="relative">
            <button 
              onClick={() => onNavigate?.('cart')}
              className="text-on-surface-variant cursor-pointer"
            >
              <ShoppingCart size={22} />
            </button>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">2</span>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto">
        {/* Hero Promo Section */}
        <section className="px-5 mt-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full h-[200px] rounded-2xl overflow-hidden shadow-lg group"
          >
            <img 
              alt="Fresh Farm Morning" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK7Db21JbeQBmU-9kGP5w7F0tYb_d7aXR537lbB-JHFuVm-YTUFb2KX3XAKrClwMyGjI3zA8Gv1-HIlrbIabY-wkmBJZO30ufiwVgrLfY957-pRHbAmUCphfbggjY264CDYeFMlh2o7o9Fc_G73UnsOuxOE8jqBfFDXX8qWO-5egrz9Xo2p3ahFVqiCvL-mthC4h_B-h1VFMDFQnBud4nunClwfeH13XFYStvs4QT9w4l5vn0qoUXqicJrsSgmh7g9Gz8GfltKuNc" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-5">
              <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-[10px] font-bold self-start mb-2 uppercase tracking-tight">Exclusive Offer</span>
              <h2 className="text-white font-display text-2xl font-bold leading-tight">Fresh Harvest Sale</h2>
              <p className="text-white/90 text-sm">Get up to 30% off on all organic greens today.</p>
            </div>
          </motion.div>
        </section>

        {/* Category Pills */}
        <section className="mt-6 overflow-x-auto hide-scrollbar">
          <div className="flex gap-3 px-5">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => onNavigate?.('categories')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all whitespace-nowrap text-xs font-bold
                  ${cat.id === 'all' 
                    ? 'bg-secondary-container text-on-secondary-container border-secondary-container' 
                    : 'bg-white text-on-surface-variant border-neutral-200'
                  }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Fresh Today Section */}
        <section className="mt-10 px-5">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="font-display text-xl text-on-surface font-bold">Fresh Today</h3>
              <p className="text-on-surface-variant text-sm">Harvested at dawn, delivered by dusk.</p>
            </div>
            <button 
              onClick={() => onNavigate?.('categories')}
              className="text-primary font-bold text-xs flex items-center gap-1 hover:underline"
            >
              View All <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {PRODUCTS.map((product) => (
              <ProductCard 
                key={product.id} 
                {...product}
                onClick={() => onProductClick?.(product)}
              />
            ))}
          </div>
        </section>

        {/* Farmer Picks Section */}
        <section className="mt-10 px-5 pb-10">
          <div className="mb-6">
            <h3 className="font-display text-xl text-on-surface font-bold">Farmer Picks</h3>
            <p className="text-on-surface-variant text-sm">Directly from our community's best producers.</p>
          </div>
          <div className="space-y-4">
            {/* Farmer Feature Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-primary/5 rounded-2xl p-4 border border-primary/10 flex gap-4 items-center"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img 
                  alt="Farmer Portrait" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG-VNvQ1MlJ-LKuNV8cS5XfD-YNe8KAIra8Pcm6mL1NVNdiKj8S5VckSKRQbeiDgszt2FhfQd4vDjh1Ax7basG1XSqgMWDPZR6ufuv_Zt4tKphkigqZTlYaCYMrd88ph8LejxmO4fcRsFDzpxsIvZtyqacJB5xdLa9AarRfiX2e9d-s29wx0sVLfy-VupQDUntfWSK1g4LU66GvyZXuyoiqAXUhkECVXipf-2vK7V1j-v_zuXJqlm41PMwDMIwGI2K332XvOz6eRQ" 
                />
              </div>
              <div className="flex-1">
                <h4 className="font-display text-lg font-bold text-on-surface">Pak Budi's Garden</h4>
                <p className="text-[10px] leading-relaxed text-on-surface-variant mb-2">Specializing in organic bell peppers and leafy brassicas since 2005.</p>
                <div className="flex gap-2">
                  <span className="bg-white/80 text-primary text-[8px] font-bold px-2 py-0.5 rounded border border-primary/20 uppercase">Certified Organic</span>
                  <span className="bg-white/80 text-primary text-[8px] font-bold px-2 py-0.5 rounded border border-primary/20 uppercase">Lembang</span>
                </div>
              </div>
              <button className="text-primary p-1">
                <ChevronRight size={20} />
              </button>
            </motion.div>

            {/* Featured Product Banner */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-md group"
            >
              <img 
                alt="Chili Selection" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlmHeVlj7hK8cXhU7bQQiGqvyhTlJIX4ADAUv2p8NJMYw7l2M9KN0zze64iNQVqnrVDl5uVZtZ7biShWGfMZkKLHyZj3p8Sh9kavrRtLAiYtwNAluSn_oQGdd1a2ey7BjjPs3bSBU1cfRrLw7qE7wnrZDfqX1G4ZdBZn7i-TU0xhcnrnjo52BICHOAmp1YMGitzq3_2jdu4GA1aXnausIvRet726ak7OSRi9I6668_ELY0PD80D75xUcFR0bN9l6y7quU5q6852Yo" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent flex flex-col justify-center p-6">
                <p className="text-primary-fixed font-bold text-[10px] mb-1 uppercase tracking-widest">New Arrival</p>
                <h3 className="text-white font-display text-2xl font-bold max-w-[200px] leading-tight">Spicy Season Specials</h3>
                <button className="mt-4 bg-primary text-white w-fit px-6 py-2 rounded-full font-bold text-xs active:scale-95 transition-transform">
                  Shop The Heat
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FAB */}
      <motion.button 
        whileTap={{ scale: 0.9 }}
        onClick={() => onNavigate?.('categories')}
        className="fixed bottom-24 right-5 bg-primary-container text-on-primary-container w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-40 cursor-pointer"
      >
        <Leaf size={30} fill="currentColor" />
      </motion.button>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-8 bg-white border-t border-neutral-100 shadow-2xl z-50">
        {[
          { id: 'marketplace', icon: <Home size={20} fill="currentColor" />, label: 'Home', active: true },
          { id: 'categories', icon: <Grid2X2 size={20} />, label: 'Category' },
          { id: 'cart', icon: <ShoppingCart size={20} />, label: 'Cart' },
          { id: 'chat', icon: <MessageCircle size={20} />, label: 'Chat' },
          { id: 'profile', icon: <User size={20} />, label: 'Profile' },
        ].map((item, idx) => (
          <button 
            key={idx}
            onClick={() => onNavigate?.(item.id)}
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
    </div>
  );
}
