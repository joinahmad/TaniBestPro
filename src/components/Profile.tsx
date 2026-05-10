import { motion } from 'motion/react';
import { ArrowLeft, User, Home, Grid2X2, Heart, MessageCircle, Settings, LogOut, ChevronRight } from 'lucide-react';

interface ProfileProps {
  onBack: () => void;
  onNavigate: (state: any) => void;
}

export default function Profile({ onBack, onNavigate }: ProfileProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background font-sans"
    >
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 h-16 flex items-center px-5 max-w-screen-xl mx-auto w-full border-b border-neutral-100">
        <button onClick={onBack} className="text-primary p-2 -ml-2"><ArrowLeft size={24} /></button>
        <span className="ml-4 text-lg font-display font-bold text-primary">My Profile</span>
      </header>

      <main className="max-w-screen-xl mx-auto px-5 pb-32">
        <section className="py-8 flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary-container shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" 
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-xl font-bold text-on-surface">Ahmad Rizki</h2>
          <p className="text-on-surface-variant text-sm">ahmadrizki@example.com</p>
          <button className="mt-4 px-6 py-2 bg-primary/5 text-primary text-xs font-bold rounded-lg border border-primary/10">
            Edit Profile
          </button>
        </section>

        <section className="space-y-2">
          {[
            { icon: <Settings size={18} />, label: 'Settings', color: 'text-on-surface' },
            { icon: <LogOut size={18} />, label: 'Logout', color: 'text-error' },
          ].map((item, idx) => (
            <button key={idx} className="w-full h-14 flex items-center px-4 bg-white rounded-xl border border-neutral-100 active:scale-[0.98] transition-all">
              <div className="w-8 h-8 rounded-lg bg-neutral-50 flex items-center justify-center text-on-surface-variant">
                {item.icon}
              </div>
              <span className={`ml-4 font-bold text-sm ${item.color}`}>{item.label}</span>
              <ChevronRight size={18} className="ml-auto text-neutral-300" />
            </button>
          ))}
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-8 bg-white border-t border-neutral-100 shadow-2xl z-50">
        {[
          { id: 'marketplace', icon: <Home size={20} />, label: 'Home' },
          { id: 'categories', icon: <Grid2X2 size={20} />, label: 'Category' },
          { id: 'cart', icon: <ShoppingCart size={20} />, label: 'Cart' },
          { id: 'chat', icon: <MessageCircle size={20} />, label: 'Chat' },
          { id: 'profile', icon: <User size={20} fill="currentColor" />, label: 'Profile', active: true },
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
