import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Verified, Timer, Lightbulb } from 'lucide-react';

interface VerifyAccountProps {
  onVerify: () => void;
  onBack: () => void;
}

export default function VerifyAccount({ onVerify, onBack }: VerifyAccountProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(118); // 1:58
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.every(digit => digit !== '')) {
      onVerify();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background flex flex-col font-sans"
    >
      {/* Top Navigation */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 h-16 flex items-center px-5 max-w-screen-xl mx-auto w-full">
        <button 
          onClick={onBack}
          className="text-primary p-2 -ml-2 active:scale-95 transition-transform"
        >
          <ArrowLeft size={24} />
        </button>
        <span className="ml-4 text-lg font-display font-bold text-primary">TaniBespro</span>
      </header>

      <main className="flex-grow flex flex-col items-center px-5 py-10 max-w-lg mx-auto w-full">
        {/* Hero Illustration */}
        <div className="w-full mb-10">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
            <img 
              alt="Agricultural Growth" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASUi2EycRzdhTOPjUYrczOzlvuAlE2F3EOZogxJK9xeb8kyHv59ftCgyquxPG3t6kKYZzz04M6-hSpaDAWelrgGRZDMU7em0goW2hb9q7Vsu7yuefo999lK4SsVqExujU0kH__x1-S7ro7GUr65dL4zPq8usJl0bKchDxEgwjBmYZlxotyh0JcUInIGO1G2OIBVRrCBmj2ms-Mp2hRkyXmMBDifc-hbiMtCvoIdF3gW2HSDBrdSnfrPriRueRwUrcUi0m-8UVJnqk"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Security First
              </span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full text-center mb-8">
          <h1 className="text-3xl font-display font-bold text-on-surface mb-2">Verify Account</h1>
          <p className="text-base text-on-surface-variant max-w-[280px] mx-auto">
            We've sent a 6-digit verification code to <span className="font-bold text-on-surface">+62 812 •••• 9920</span>
          </p>
        </div>

        {/* OTP Input Grid */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-6 gap-2 mb-10">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={el => inputRefs.current[idx] = el}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className="w-full aspect-square text-center text-2xl font-bold bg-neutral-100 border border-neutral-200 rounded-xl text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="•"
              />
            ))}
          </div>

          {/* Timer & Resend */}
          <div className="flex flex-col items-center gap-2 mb-10">
            <div className="flex items-center gap-2 text-tertiary">
              <Timer size={20} />
              <span className="text-sm font-bold">{formatTime(timeLeft)}</span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Didn't receive the code? {' '}
              <button type="button" className="text-primary font-bold hover:underline">Resend Code</button>
            </p>
          </div>

          {/* Primary Action */}
          <div className="w-full space-y-4">
            <motion.button 
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary text-white h-14 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2"
            >
              Verify Now
              <Verified size={20} />
            </motion.button>
            <button 
              type="button"
              className="w-full bg-neutral-100 text-on-surface-variant h-12 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
            >
              Change Number
            </button>
          </div>
        </form>

        {/* Information Card */}
        <section className="mt-10 w-full">
          <div className="bg-secondary-container/30 border border-secondary-container p-4 rounded-xl flex gap-4 items-start">
            <div className="bg-secondary text-white p-2 rounded-lg">
              <Lightbulb size={20} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-secondary mb-1">Quick Tip</h4>
              <p className="text-[10px] text-on-surface-variant leading-tight">
                Make sure your signal is strong. Verification codes might take up to 2 minutes to arrive during peak harvest seasons.
              </p>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
