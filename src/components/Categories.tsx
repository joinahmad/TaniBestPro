import { motion } from 'motion/react';
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  Filter, 
  Leaf, 
  Grid2X2, 
  Heart, 
  MessageCircle, 
  User,
  ArrowRight,
  ArrowLeft,
  Sprout,
  Grape,
  Flame,
  Wheat,
  Activity,
  Tractor,
  Home
} from 'lucide-react';

interface CategoriesProps {
  onBack: () => void;
  onNavigate: (state: any) => void;
}

const CATEGORY_ITEMS = [
  {
    id: 'greens',
    title: 'Organic Greens',
    count: '12 Varieties Available',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVbYhtEfLsIGT6P9vO7GOVO-yG4JpMK5-Ss-MbOib5KJC6DDcKWH8MSD2UJBoQpx94lv7MT0fFkEsAubIOvPJ24OQEB-5r_H0VQGTw5nGjYWdyxeEUWZozp_0w-0eptJplYjwZZSgv7_Kd0FFkzYICw563RfYwp65usZi5wyaQQ44Wb6e4xwypnNv--avFwIV350TtzT5INhO5t8LMe0k7qQ3ckSD6ERfnFhjd9-doXCnAtowdN7nzKQ7xkTs7rOsQGAPfDy7NKrA',
    icon: <Leaf className="text-white" size={24} />,
    color: 'bg-primary/90',
    span: true
  },
  {
    id: 'roots',
    title: 'Root Veggies',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnPE_4qrFuKakeSkoh1FpUXzDkwDKIQlS8NEvNNeIHDZ8-sU1Lirlg4AQy48E08JCD26Dgf6cTLLdwXpcxO-nCnyIYPb-hbdFEQnUF5TjZCDzDW3w3Qj28pFJ5A_2dQBtEayIB36JFS4FBjKCxLygYR7OG9dn3Y0_e5OWSDgRUUkRowqeyUAaDzIhD52q4kTOE75KhLlLNQY8t6AOsErTQfakqElHY6Ne2kABppqZsfAFFs5jkdeV2dn_ACUbUGxIuItE-vgdBrr4',
    icon: <Sprout className="text-white" size={24} />,
    color: 'bg-secondary/90',
  },
  {
    id: 'fruits',
    title: 'Tropical Fruits',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAjw8H3kWs-MvDXS2oJWRzDswhHhx7OF0yjCL0OeuVE-7B9riXbr8TJyHfgjSgso3LobvRB4FWiW-qhPPqYnrx_P9fUOQcUsEcIYZmxuu_FotCjTwnjZTx19YudRb-QNqzPWo52hzBJPynYNkOXgj12FgD2jkXyeDckniq4X6m1aYVDA61JCf1pRv-I7T36RXlgx-OAbwCQSt9YO_o-J7wTnCIDemY18NXpnnl8JcMRFDdJF-zvnSAtEqYPptsqGBUQD7xAFcGg1c',
    icon: <Grape className="text-white" size={24} />,
    color: 'bg-tertiary-container',
  },
  {
    id: 'spices',
    title: 'Exotic Spices',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABJV2iGazmw3gfO2HtaLheYy8UOJoscBn_cYIWlpQxm9rVXqJ0UFPl0_uyNPN9hAblntbWigbPY-D-Kbbdk9-7rw_MRxqGckD-14V2zqlo3bZ95eoCqU0sWrgcN6rA1lQ96KqVaTvUI9y34kdlQ88ufI_2tgA89SAykH-B88I1tXw-hO5-TTYob2v7BGJgA2UYkZ1dPEEaFvIJZkHzbNh8ABiyheLTtJPOSk8PaZw_NkWMzNUcSVLnhCrUrzezTD292DF6u2A7ybM',
    icon: <Flame className="text-white" size={24} />,
    color: 'bg-red-500/80',
  },
  {
    id: 'herbs',
    title: 'Fresh Herbs',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxPst73L5MKy6KGbV34CpBvc7-AzrhEMQp45ghu9fqbjO4i9CFzHJModKLtriEtZB_ExbklHxfhJkenaSwKsLZs8CBVZKmKRaantXMRblTAjaUWIawCykpinVaapjfSQXys7krr7sP5S4PNZrWWq45LQE6Urh8Jxvs8j7npmoHUnhXIxp2QKaWIi-0vWkP3SNuVdwEeXrZTaEnlmM5Bgplx_CT1Ht2gmbV96qKXi_hBFowus9cptDBxoKI-vQZdVlGc0cC7RNmra4',
    icon: <Activity className="text-white" size={24} />,
    color: 'bg-primary-container',
  },
  {
    id: 'grains',
    title: 'Grains & Legumes',
    count: 'Wholesale & Retail Packs',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABJ4VtSenQbbtULHUMjfmpRwTeoZ-aviuCV9xAhbHAEDbuGwQZhPaePQOfa1QX3DCXJ_fgjrOuCx7SNPpGxaQm6u9xmE8rV8G9ySUE06iLNqXis_i9b_S0hoy7-u1WmZ6-IrEOnXRZe_7xSOYUZ2bn-xgchV0174KUdL5jVI2KSt3TvOIgI4GJy2aHFN2OxFUikTdUwNY0S6wWX5A6mNUrC54kt1t1mWmjizzU5GkA7ZTTmpe94tuHl3Qf3P9MowoSN0Q1XBiT-3I',
    icon: <Wheat className="text-white" size={24} />,
    color: 'bg-amber-900/80',
    wide: true
  },
  {
    id: 'mushrooms',
    title: 'Fungi & Mushrooms',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWDWUqjNmiN3PS_lLZdLM4JoMZU5nhoAvUrEc1vCs7ZoI57fy5Fkkz-dcquCqAmSMQyz_yXSUf-lrR--w_Qicxco0g0BgwyW0Bi8hTunytJ77cT1c_eEeVPF5EFRm5B6T42b--Iv6D96jzu4i92LImXctscNPgc0wiVlRfKPJUWJY2cfadaaCOs_k9iVNswx9cIAqkEth7E6OhzOVolJhl1nrU6ZzBQQCoILX-LAoIUAGMrla9aeMwV79u7n9EPHCmRESwIKkhohE',
    icon: <Sprout className="text-white" size={24} />,
    color: 'bg-neutral-800/80',
  }
];

export default function Categories({ onBack, onNavigate }: CategoriesProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background font-sans"
    >
      {/* TopAppBar */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 h-16 flex items-center px-5 max-w-screen-xl mx-auto w-full border-b border-neutral-100">
        <button 
          onClick={onBack}
          className="text-primary p-2 -ml-2 active:scale-95 transition-transform"
        >
          <ArrowLeft size={24} />
        </button>
        <span className="ml-4 text-lg font-display font-bold text-primary">TaniBespro</span>
        <div className="ml-auto">
          <button 
            onClick={() => onNavigate('cart')}
            className="text-primary p-2 active:scale-95 transition-transform"
          >
            <ShoppingCart size={24} />
          </button>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-5 pb-32">
        {/* Category Hero */}
        <section className="py-8">
          <h2 className="text-3xl font-display font-bold text-on-surface">Browse Categories</h2>
          <p className="text-base text-on-surface-variant mt-2">Premium fresh harvests directly from TaniBespro partner farms.</p>
        </section>

        {/* Search and Filters */}
        <div className="flex flex-col gap-4 mb-8 sticky top-16 bg-background/80 backdrop-blur-sm py-4 z-40">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
            <input 
              type="text" 
              placeholder="Search vegetables, fruits..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-neutral-200 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
            <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 whitespace-nowrap">
              <Filter size={16} /> All Categories
            </button>
            {['Best Sellers', 'New Arrivals', 'Organic Certified'].map((filter) => (
              <button 
                key={filter}
                className="bg-white border border-neutral-200 text-on-surface-variant px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap hover:bg-neutral-50 transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORY_ITEMS.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-xl bg-white shadow-sm cursor-pointer
                ${item.span ? 'col-span-2 md:col-span-1 aspect-[4/3] md:aspect-square' : 'aspect-square'}
                ${item.wide ? 'col-span-2 aspect-[21/9] md:aspect-[3/1]' : ''}
              `}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10`}></div>
              
              <div className={`absolute bottom-4 left-4 right-4 z-20 ${item.wide ? 'flex justify-between items-end' : ''}`}>
                <div>
                  <div className={`${item.color} w-10 h-10 rounded-lg flex items-center justify-center mb-2`}>
                    {item.icon}
                  </div>
                  <h3 className={`font-display font-bold text-white ${item.wide ? 'text-2xl' : 'text-lg'}`}>
                    {item.title}
                  </h3>
                  {item.count && (
                    <p className="text-white/80 text-[10px] font-medium">{item.count}</p>
                  )}
                </div>
                {item.wide && (
                  <button className="bg-white/20 backdrop-blur-md text-white border border-white/40 px-6 py-2 rounded-full text-xs font-bold hover:bg-white hover:text-primary transition-colors">
                    View All
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <section className="mt-10 p-8 rounded-2xl bg-secondary-container text-on-secondary-container flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-lg">
          <div className="relative z-10">
            <h3 className="text-2xl font-display font-bold">Can't find what you need?</h3>
            <p className="text-base opacity-80">Request a custom harvest batch directly from our farmers.</p>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-primary text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Submit Request <ArrowRight size={20} />
            </motion.button>
          </div>
          <div className="hidden md:block absolute -right-10 -top-10 opacity-10 transform rotate-12">
            <Tractor size={240} />
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-8 bg-white border-t border-neutral-100 shadow-2xl z-50">
        {[
          { id: 'marketplace', icon: <Home size={20} />, label: 'Home' },
          { id: 'categories', icon: <Grid2X2 size={20} fill="currentColor" />, label: 'Category', active: true },
          { id: 'cart', icon: <ShoppingCart size={20} />, label: 'Cart' },
          { id: 'chat', icon: <MessageCircle size={20} />, label: 'Chat' },
          { id: 'profile', icon: <User size={20} />, label: 'Profile' },
        ].map((item) => (
          <button 
            key={item.id}
            onClick={() => onNavigate(item.id as any)}
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
