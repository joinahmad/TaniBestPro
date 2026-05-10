import { motion } from 'motion/react';
import { ArrowLeft, MessageCircle, Home, Grid2X2, Heart, User } from 'lucide-react';

interface ChatProps {
  onBack: () => void;
  onNavigate: (state: any) => void;
}

export default function Chat({ onBack, onNavigate }: ChatProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background font-sans"
    >
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 h-16 flex items-center px-5 max-w-screen-xl mx-auto w-full border-b border-neutral-100">
        <button onClick={onBack} className="text-primary p-2 -ml-2"><ArrowLeft size={24} /></button>
        <span className="ml-4 text-lg font-display font-bold text-primary">Messages</span>
      </header>

      <main className="max-w-screen-xl mx-auto px-5 py-20 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-secondary/5 rounded-full flex items-center justify-center mb-4">
          <MessageCircle size={40} className="text-secondary" />
        </div>
        <h2 className="text-xl font-bold text-on-surface">No messages yet</h2>
        <p className="text-on-surface-variant text-sm mt-1 max-w-[240px]">Questions about a product? Start a chat with the farmers directly.</p>
      </main>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-8 bg-white border-t border-neutral-100 shadow-2xl z-50">
        {[
          { id: 'marketplace', icon: <Home size={20} />, label: 'Home' },
          { id: 'categories', icon: <Grid2X2 size={20} />, label: 'Category' },
          { id: 'cart', icon: <ShoppingCart size={20} />, label: 'Cart' },
          { id: 'chat', icon: <MessageCircle size={20} fill="currentColor" />, label: 'Chat', active: true },
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
