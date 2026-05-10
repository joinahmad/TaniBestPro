import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Agriculture, Visibility, VisibilityOff, Verified } from './Icons';

interface LoginProps {
  onLogin: () => void;
  onRegisterLink: () => void;
}

export default function Login({ onLogin, onRegisterLink }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background flex flex-col items-center justify-center p-5 bg-[radial-gradient(circle_at_2px_2px,rgba(13,99,27,0.05)_1px,transparent_0)] bg-[length:24px_24px]"
    >
      {/* Brand Header */}
      <header className="mb-10 flex flex-col items-center">
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 bg-primary-container rounded-xl flex items-center justify-center mb-2 shadow-lg"
        >
          <Agriculture className="text-on-primary-container text-4xl" />
        </motion.div>
        <h1 className="text-3xl font-display font-extrabold text-primary">TaniBespro</h1>
        <p className="text-sm text-on-surface-variant font-medium">Direct from Earth to your doorstep.</p>
      </header>

      {/* Main Auth Canvas */}
      <main className="w-full max-w-md">
        <section className="bg-white rounded-xl shadow-xl p-8 border border-neutral-100 backdrop-blur-sm">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-xs font-bold text-on-surface-variant block mb-1 ml-1" htmlFor="email">
                Email Address
              </label>
              <input 
                id="email"
                type="email" 
                placeholder="name@example.com"
                required
                className="w-full h-12 px-4 rounded-lg border border-neutral-200 bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all underline-none text-sm"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold text-on-surface-variant block ml-1" htmlFor="password">
                  Password
                </label>
                <a href="#" className="text-xs font-bold text-primary hover:opacity-80 transition-opacity">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input 
                  id="password"
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password"
                  required
                  className="w-full h-12 px-4 rounded-lg border border-neutral-200 bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all underline-none text-sm"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                >
                  {showPassword ? <VisibilityOff size={20} /> : <Visibility size={20} />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <motion.button 
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full h-12 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary-container transition-all flex items-center justify-center"
              >
                Login
              </motion.button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-neutral-200"></div>
            <span className="mx-4 text-xs font-bold text-neutral-400">OR</span>
            <div className="flex-grow border-t border-neutral-200"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-4">
            <motion.button 
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={onLogin}
              className="w-full h-12 bg-secondary-container text-on-secondary-container font-bold rounded-lg hover:bg-secondary-container/80 transition-all flex items-center justify-center gap-3 border border-secondary"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrcPcnTetwwqcGNy0QiDZQdrf0aGQVFHgAbml9loESh_2mIkTshjrE5kbqo0swq53WDsr3RrKp730kr-XiTyBUQXb05mdKvGG9fvuU7XIaaScKpcJnCRUCjfFeqRZSCcYuAjGYuZ64u2-OszgO3uePQs4adbk2MKLI0smd2DaUa9NhfbxNvw-tIXldQRkm461tKhVBTCnSwnioSIrKSLeQ2bKq_9GpvdP0RNAXPLfm3KR5qYiioCEIUCVxH_4S4YdcSlCwsMfyGAw" 
                alt="Google" 
                className="w-5 h-5"
              />
              Sign in with Google
            </motion.button>
          </div>

          {/* Registration Link */}
          <div className="mt-8 text-center text-sm">
            <p className="text-on-surface-variant font-medium">
              New to TaniBespro? {' '}
              <button 
                onClick={onRegisterLink}
                className="text-primary font-bold hover:underline"
              >
                Register now
              </button>
            </p>
          </div>
        </section>

        {/* Footer Visual */}
        <div className="mt-12 flex flex-col items-center opacity-60">
          <div className="w-full h-24 rounded-lg overflow-hidden mb-2">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwCOfXVY6frCjIKG_XVwpRbEEynovTjtTNMwpKsJeWxFmWR0ZLZpUNZQqTlS9acYXEmltOu_s1vBaQVziOo9cCMJ8ecHigD2JOQ2mXl-8KX6pn8AH2xCsZvSfr-YXHXxC_d3L18Jn0m0p95OtKIuiY9zCCWybNXdMZZXoXDBSikVn3wGMQ148KVQ8yfUl665josdG9nzOm_2Ha0XEJ0uyA4AWKsvhLxR_NqquUt2BlVz4QdeHCStp6W4XA3EFomatB3aNgmAcWHHA" 
              alt="Fresh produce" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-1.5 grayscale">
            <Verified size={14} className="text-primary" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface">Supporting local farmers</span>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
