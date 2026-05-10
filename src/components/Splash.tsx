import { motion } from 'motion/react';
import { Tractor, Verified } from 'lucide-react';

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  return (
    <motion.main 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative w-full h-screen organic-bg flex flex-col items-center justify-center px-5 overflow-hidden"
    >
      {/* Background Organic Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primary-container blur-[80px]"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-secondary-container blur-[100px]"></div>
      </div>

      {/* Content Overlay */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center max-w-sm"
      >
        {/* Brand Mark */}
        <motion.div 
          initial={{ scale: 0.8, rotate: -5 }}
          animate={{ scale: 1, rotate: 3 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.4 
          }}
          className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-[2rem] flex items-center justify-center shadow-lg mb-6"
        >
          <Tractor size={48} className="text-primary" />
        </motion.div>

        {/* Brand Identity */}
        <div className="space-y-2 mb-10">
          <h1 className="text-5xl leading-tight text-white font-extrabold tracking-tighter">
            TaniBespro
          </h1>
          <p className="text-lg text-white/90 font-medium tracking-wide">
            Hasil Tani Segar Langsung ke Rumah
          </p>
        </div>

        {/* High-Impact Image */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-video relative group"
        >
          <img 
            alt="Fresh Organic Vegetables" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdhJeg7oS6xHB1lm6vrdLK1qq889q05Sx2aK4wc-a2-xpB0_MPwoxzI3rMdaYCQ7y4KB_SQNYArWAfVlTqUC-dMq8kl_MYDv-DxE8BhZCJ-_fjOWb73HyDa-vlPqGCO6Yj1_lbTB1PnTLH8YUKJnfaTqiA0M8hr_jTtQbZnHNLjhvoG9fI0N25XLWCYG6PnmFRW47XasiuM6W7C-b-8ja0AJ7SGLIiHxlzmVaGCrwtQwO61oYpsbxj4lHAG9l2vesBPLmPlVzXtQk"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
        </motion.div>

        {/* Loading / Progress Indicator */}
        <div className="w-full h-1 bg-white/20 rounded-full mt-10 overflow-hidden relative">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ 
              duration: 2.5, 
              ease: "easeInOut",
              repeat: 0
            }}
            onAnimationComplete={onComplete}
            className="absolute top-0 h-full w-1/2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          />
        </div>

        <div className="flex items-center gap-2 pt-6">
          <Verified size={16} className="text-on-primary-container" />
          <span className="text-xs text-on-primary-container uppercase tracking-widest font-bold">
            Premium Quality Guaranteed
          </span>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-10 left-0 w-full text-center px-5">
        <p className="text-xs text-white/60">
          © 2024 TaniBespro Agriculture Group. Semua Hak Dilindungi.
        </p>
      </div>
    </motion.main>
  );
}
