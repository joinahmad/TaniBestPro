import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Agriculture, Visibility, VisibilityOff, ArrowRight, Verified } from './Icons';
import { Mail, User, Phone, Lock } from 'lucide-react';

interface RegisterProps {
  onRegister: () => void;
  onLoginLink: () => void;
}

export default function Register({ onRegister, onLoginLink }: RegisterProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background flex flex-col antialiased"
    >
      {/* Top Hero Illustration Section */}
      <div className="relative w-full h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-10"></div>
        <img 
          alt="Fresh Farm Morning" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK7Db21JbeQBmU-9kGP5w7F0tYb_d7aXR537lbB-JHFuVm-YTUFb2KX3XAKrClwMyGjI3zA8Gv1-HIlrbIabY-wkmBJZO30ufiwVgrLfY957-pRHbAmUCphfbggjY264CDYeFMlh2o7o9Fc_G73UnsOuxOE8jqBfFDXX8qWO-5egrz9Xo2p3ahFVqiCvL-mthC4h_B-h1VFMDFQnBud4nunClwfeH13XFYStvs4QT9w4l5vn0qoUXqicJrsSgmh7g9Gz8GfltKuNc"
        />
      </div>

      {/* Registration Canvas */}
      <main className="flex-1 flex flex-col px-5 -mt-12 relative z-20">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-t-[32px] p-6 shadow-[0_-8px_30px_rgba(46,125,50,0.05)] flex-1"
        >
          {/* Logo and Header */}
          <header className="flex flex-col items-center mb-10 text-center">
            <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <Agriculture className="text-on-primary-container text-4xl" />
            </div>
            <h1 className="text-3xl font-display font-bold text-on-surface mb-1">Join TaniBespro</h1>
            <p className="text-sm text-on-surface-variant max-w-[280px]">Create an account to start shopping fresh from farmers.</p>
          </header>

          {/* Form Section */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-on-surface-variant ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-300 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm placeholder:text-neutral-300" 
                  placeholder="John Doe" 
                  type="text"
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-on-surface-variant ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-300 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm placeholder:text-neutral-300" 
                  placeholder="john@example.com" 
                  type="email"
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-on-surface-variant ml-1">Phone Number</label>
              <div className="relative group">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-300 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm placeholder:text-neutral-300" 
                  placeholder="+62 812 3456 7890" 
                  type="tel"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-on-surface-variant ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-300 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  className="w-full pl-10 pr-12 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm placeholder:text-neutral-300" 
                  placeholder="••••••••" 
                  type={showPassword ? "text" : "password"}
                  required
                />
                <button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-300 hover:text-on-surface transition-colors" 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff size={20} /> : <Visibility size={20} />}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <motion.button 
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-[0_4px_12px_rgba(46,125,50,0.2)] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 mt-6" 
              type="submit"
            >
              Register
              <ArrowRight size={20} />
            </motion.button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-neutral-100"></div></div>
            <div className="relative flex justify-center text-xs font-bold">
              <span className="bg-white px-4 text-neutral-400">OR</span>
            </div>
          </div>

          {/* Social Signup */}
          <motion.button 
            whileTap={{ scale: 0.98 }}
            onClick={onRegister}
            className="w-full bg-white border border-neutral-200 text-on-surface font-bold py-3.5 rounded-xl flex items-center justify-center gap-3 hover:bg-neutral-50 transition-colors"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrcPcnTetwwqcGNy0QiDZQdrf0aGQVFHgAbml9loESh_2mIkTshjrE5kbqo0swq53WDsr3RrKp730kr-XiTyBUQXb05mdKvGG9fvuU7XIaaScKpcJnCRUCjfFeqRZSCcYuAjGYuZ64u2-OszgO3uePQs4adbk2MKLI0smd2DaUa9NhfbxNvw-tIXldQRkm461tKhVBTCnSwnioSIrKSLeQ2bKq_9GpvdP0RNAXPLfm3KR5qYiioCEIUCVxH_4S4YdcSlCwsMfyGAw" 
              alt="Google" 
              className="w-5 h-5"
            />
            Sign up with Google
          </motion.button>

          {/* Footer Link */}
          <footer className="mt-8 pb-10 text-center">
            <p className="text-sm text-on-surface-variant font-medium">
              Already have an account? {' '}
              <button onClick={onLoginLink} className="text-primary font-bold hover:underline">Login</button>
            </p>
          </footer>
        </motion.div>
      </main>

      {/* Bottom Visual Decoration */}
      <div className="fixed bottom-0 left-0 w-full h-24 overflow-hidden pointer-events-none opacity-10">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
          <path d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,128C672,117,768,139,864,165.3C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#0d631b" fillOpacity="1"></path>
        </svg>
      </div>
    </motion.div>
  );
}
