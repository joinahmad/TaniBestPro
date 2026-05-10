import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
  onLogin: () => void;
}

const SLIDES = [
  {
    id: 1,
    title: 'Fresh Products',
    description: 'Directly sourced from local farmers to your table, ensuring the peak of freshness and nutritional value.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpLlSqRh3LybIb8TTt7DBWQHK_Ynw51B6kt9JeU50HwfO1IvcMPHfPFoF8Cemo9Z81rs9sM371Lw_I-9ci-k21gQk6VKREjWtlRlxAheedk3kOsVk48KalYVoJaEJ1Z4_LydTZEdL6gwG_C0IaZRnscb2NAUjqe4OWzxjj3LsJr6GTV1oI93cwFKxi7RVswUFefouiphHcBvJ4bM5bTXBFEGGQjvd4WX8sA1OXZxaE36tC6Nmz19xu4nAahrjn5TaUpNSVhG87kHo',
    color: 'bg-secondary-container/30',
  },
  {
    id: 2,
    title: 'Fast Delivery',
    description: 'Our dedicated couriers guarantee that your organic groceries arrive within 60 minutes, farm-fresh and handled with care.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3B2EyYF4nTnv1SVnmqmGnLaj5MpwuIF0fLSUch_rl6pCMNvU1-Ba9iKF-97c7d2Nn3ap3FNxlVENbo5W4Su_8P6auiVWSyqM9iylL__7BzyhN2bYkccYnUzWTBU8g4iCodkvOka5eJcVV1nvrlwiBSvwgir3wXQGG4kzfli2Hbe8y6EnfTCGvNdHxmxQ0JwvDTPFaWpq1pupGxEjMJ-Q8-2LktaX_gS-d25FCIK7PSJCM5tw23X8QHeR9VBHIZqTfe1tZCYnfb3Y',
    color: 'bg-primary-container/20',
  },
  {
    id: 3,
    title: 'Easy Payment',
    description: 'Seamlessly pay with your favorite digital wallets or bank transfers with end-to-end encryption for every transaction.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz0d5-0frz9PruZwGfVNx9B9n9kA56dFkehaIoZNtJFjIZDilkgfS7mctM9YvdkPfNpSl-05yzdPjUjm2KUbIbNTUvHumDhgYS3a_Rom6kpIROiHVz8aOdzTGxQQjLm3upsvpAF-dF54zE75vks3vOOFok30fHSQN1bVw6x_fd7dz9xT-IOf71Np58sUBU3W9I3_wSBr89eleGqTOf9xFCzEnlVOXUhlnAl_KjEIkMd_RNL4Dl8mXMiFVw7ThOX2EfdXU3P4GKR5k',
    color: 'bg-tertiary-container/10',
  },
];

export default function Onboarding({ onComplete, onLogin }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < SLIDES.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 h-16 max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-display font-extrabold text-primary">TaniBespro</h1>
        <button 
          onClick={onComplete}
          className="text-on-surface-variant font-bold text-sm hover:opacity-80 transition-opacity"
        >
          Skip
        </button>
      </header>

      {/* Slide Content */}
      <main className="flex-1 flex flex-col items-center justify-center relative w-full pt-16">
        <AnimatePresence mode="wait">
          <motion.section
            key={currentSlide}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full flex flex-col items-center justify-center px-5 py-10"
          >
            <div className={`w-full max-w-sm aspect-square mb-10 rounded-full ${SLIDES[currentSlide].color} flex items-center justify-center relative`}>
              <motion.img 
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                src={SLIDES[currentSlide].image}
                alt={SLIDES[currentSlide].title}
                className="w-4/5 h-4/5 object-contain z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="text-center space-y-4 max-w-xs">
              <h2 className="text-3xl font-display font-bold text-primary">
                {SLIDES[currentSlide].title}
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                {SLIDES[currentSlide].description}
              </p>
            </div>
          </motion.section>
        </AnimatePresence>

        {/* Indicators */}
        <div className="flex gap-2 mb-10">
          {SLIDES.map((_, idx) => (
            <motion.span 
              key={idx}
              animate={{ 
                width: idx === currentSlide ? 32 : 8,
                backgroundColor: idx === currentSlide ? '#0d631b' : '#bfcaba'
              }}
              className="h-2 rounded-full"
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-5 w-full max-w-screen-xl mx-auto flex flex-col gap-4 pb-12">
        <motion.button 
          whileTap={{ scale: 0.98 }}
          onClick={handleNext}
          className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
        >
          {currentSlide === SLIDES.length - 1 ? 'Get Started' : 'Next'}
          <ArrowRight size={20} />
        </motion.button>
        
        <div className="flex justify-center items-center gap-2 text-on-surface-variant text-sm font-medium">
          <span>Already have an account?</span>
          <button 
            onClick={onLogin}
            className="text-primary font-bold hover:underline"
          >
            Login
          </button>
        </div>
      </footer>

      {/* Decoration */}
      <div className="fixed bottom-0 left-0 w-full h-24 pointer-events-none opacity-5">
        <Sparkles className="absolute bottom-10 right-10 text-primary w-24 h-24" />
      </div>
    </div>
  );
}
