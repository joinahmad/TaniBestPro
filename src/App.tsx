import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Splash from './components/Splash';
import Onboarding from './components/Onboarding';
import Login from './components/Login';
import Register from './components/Register';
import VerifyAccount from './components/VerifyAccount';
import Marketplace from './components/Marketplace';
import Categories from './components/Categories';
import ProductDetail from './components/ProductDetail';
import Wishlist from './components/Wishlist';
import Chat from './components/Chat';
import Profile from './components/Profile';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

type AppState = 'splash' | 'onboarding' | 'login' | 'register' | 'verify' | 'marketplace' | 'categories' | 'productDetail' | 'wishlist' | 'chat' | 'profile' | 'cart' | 'checkout';

export default function App() {
  const [appState, setAppState] = useState<AppState>('splash');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setAppState('productDetail');
  };

  return (
    <div className="relative font-sans">
      <AnimatePresence mode="wait">
        {appState === 'splash' && (
          <Splash key="splash" onComplete={() => setAppState('onboarding')} />
        )}
        {appState === 'onboarding' && (
          <Onboarding 
            key="onboarding" 
            onComplete={() => setAppState('register')} 
            onLogin={() => setAppState('login')}
          />
        )}
        {appState === 'login' && (
          <Login 
            key="login" 
            onLogin={() => setAppState('marketplace')} 
            onRegisterLink={() => setAppState('register')}
          />
        )}
        {appState === 'register' && (
          <Register 
            key="register" 
            onRegister={() => setAppState('verify')} 
            onLoginLink={() => setAppState('login')}
          />
        )}
        {appState === 'verify' && (
          <VerifyAccount
            key="verify"
            onVerify={() => setAppState('marketplace')}
            onBack={() => setAppState('register')}
          />
        )}
        {appState === 'marketplace' && (
          <Marketplace 
            key="marketplace" 
            onNavigate={(id) => setAppState(id as any)} 
            onProductClick={handleProductClick}
          />
        )}
        {appState === 'categories' && (
          <Categories 
            key="categories" 
            onBack={() => setAppState('marketplace')} 
            onNavigate={(id) => setAppState(id as any)}
          />
        )}
        {appState === 'productDetail' && selectedProduct && (
          <ProductDetail 
            key="productDetail"
            product={selectedProduct}
            onBack={() => setAppState('marketplace')}
            onNavigate={(id) => setAppState(id as any)}
          />
        )}
        {appState === 'wishlist' && (
          <Wishlist 
            key="wishlist" 
            onBack={() => setAppState('marketplace')} 
            onNavigate={(id) => setAppState(id as any)}
          />
        )}
        {appState === 'chat' && (
          <Chat 
            key="chat" 
            onBack={() => setAppState('marketplace')} 
            onNavigate={(id) => setAppState(id as any)}
          />
        )}
        {appState === 'profile' && (
          <Profile 
            key="profile" 
            onBack={() => setAppState('marketplace')} 
            onNavigate={(id) => setAppState(id as any)}
          />
        )}
        {appState === 'cart' && (
          <Cart 
            key="cart" 
            onBack={() => setAppState('marketplace')} 
            onNavigate={(id) => setAppState(id as any)}
          />
        )}
        {appState === 'checkout' && (
          <Checkout 
            key="checkout" 
            onBack={() => setAppState('cart')} 
            onNavigate={(id) => setAppState(id as any)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
