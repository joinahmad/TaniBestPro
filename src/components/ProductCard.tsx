import { motion } from 'motion/react';
import { Plus, MapPin } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  origin: string;
  badge?: 'Fresh' | 'Top Pick';
  onClick?: () => void;
}

export default function ProductCard({ name, price, unit, image, origin, badge, onClick }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden flex flex-col group h-full cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {badge && (
          <div className="absolute top-2 left-2">
            <span className={`${
              badge === 'Fresh' ? 'bg-secondary' : 'bg-tertiary-container text-on-tertiary-container'
            } text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider`}>
              {badge}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-3 flex flex-col flex-grow">
        <span className="text-[10px] text-on-surface-variant mb-1 flex items-center gap-1 font-medium">
          <MapPin size={12} className="text-primary" /> {origin}
        </span>
        <h3 className="font-display font-bold text-sm text-on-surface line-clamp-2 leading-tight min-h-[2.5rem]">{name}</h3>
        
        <div className="mt-auto pt-2 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-primary text-base">Rp{price.toLocaleString()}</span>
            <span className="text-[10px] text-on-surface-variant font-medium">/{unit}</span>
          </div>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <Plus size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
