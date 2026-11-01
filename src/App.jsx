import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FestivalSpecials } from './components/FestivalSpecials';
import { ProductCatalogue } from './components/ProductCatalogue';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { HalwaiStory } from './components/HalwaiStory';
import { Footer } from './components/Footer';

export function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('jaipur_mithai_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('LocalStorage error:', e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Persist Cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('jaipur_mithai_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [cartItems]);

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === item.id);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += item.quantity;
        return copy;
      }
      return [...prev, item];
    });
  };

  const handleUpdateQty = (itemId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartValue = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const focusSearch = () => {
    const el = document.getElementById('catalogue');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar with Live Cart count */}
      <Navbar
        cartCount={totalCartCount}
        cartTotal={totalCartValue}
        onOpenCart={() => setIsCartOpen(true)}
        onSearchClick={focusSearch}
      />

      {/* Main Page Flow */}
      <main style={{ flex: 1 }}>
        <Hero onExploreClick={focusSearch} />
        
        <FestivalSpecials onAddToCart={handleAddToCart} />
        
        <ProductCatalogue
          onAddToCart={handleAddToCart}
          onOpenDetail={(product) => setDetailProduct(product)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <HalwaiStory />
      </main>

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Detail Modal */}
      {detailProduct && (
        <ProductDetailModal
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Store Footer */}
      <Footer />
    </div>
  );
}

export default App;

