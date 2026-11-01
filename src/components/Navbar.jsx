import React, { useState } from 'react';
import { ShoppingBag, Search, MessageCircle, Menu, X, Flame } from 'lucide-react';
import { storeInfo } from '../data/sweetsData';

export const Navbar = ({ cartCount = 0, cartTotal = 0, onOpenCart, onSearchClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Namaste Jaipur Mithai House! I would like to enquire about placing a fresh sweets order for home delivery in Jaipur.`
    );
    window.open(`https://wa.me/${storeInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Top Demo Ribbon */}
      <div className="demo-top-ribbon">
        <span className="badge">Portfolio Demo</span>
        <span>Original Concept Inspired by Heritage Sweet Shops of Jaipur • Fictional Business Demo</span>
      </div>

      {/* Main Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: '#FFFDF9',
          borderBottom: '1px solid var(--color-border)',
          boxShadow: '0 2px 12px rgba(59, 18, 7, 0.06)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '82px' }}>
          
          {/* Brand Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #E8590C, #D9480F)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF',
                boxShadow: '0 4px 12px rgba(217, 72, 15, 0.3)',
              }}
            >
              <Flame size={26} fill="#FFD43B" color="#FFF" />
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-heritage)',
                  fontSize: '1.45rem',
                  color: 'var(--color-terracotta)',
                  display: 'block',
                  lineHeight: 1.1,
                  letterSpacing: '0.02em',
                }}
              >
                Jaipur Mithai House
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'var(--color-kesar-primary)',
                  textTransform: 'uppercase',
                  display: 'block',
                }}
              >
                Shuddh Desi Ghee • Estd. 1974
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
            <a href="#catalogue" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-text-main)' }}>
              Sweets & Namkeen
            </a>
            <a href="#festivals" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-text-main)' }}>
              Festival Specials
            </a>
            <a href="#heritage" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-text-main)' }}>
              Our Halwai Story
            </a>
            <a href="#contact" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-text-main)' }}>
              Store Location
            </a>
          </nav>

          {/* Action Buttons: Search, WhatsApp & Cart */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button
              onClick={onSearchClick}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--color-cream-warm)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-terracotta)',
                cursor: 'pointer',
              }}
              title="Search sweets"
              aria-label="Search sweets catalogue"
            >
              <Search size={18} />
            </button>

            <button
              onClick={handleWhatsApp}
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 1rem',
                borderRadius: '50px',
                background: '#E7F5EA',
                color: '#2B8A3E',
                border: '1px solid #B2F2BB',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
              }}
              className="desktop-whatsapp"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Order</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.6rem 1.15rem',
                borderRadius: '50px',
                background: 'var(--color-kesar-primary)',
                color: '#FFF',
                fontWeight: 700,
                fontSize: '0.86rem',
                boxShadow: '0 4px 14px rgba(217, 72, 15, 0.35)',
                cursor: 'pointer',
                transition: 'var(--transition)',
              }}
              aria-label="View Shopping Cart"
            >
              <div style={{ position: 'relative' }}>
                <ShoppingBag size={18} />
                {cartCount > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-10px',
                      background: 'var(--color-ghee-gold)',
                      color: '#200702',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1.5px solid #FFF',
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </div>
              <span style={{ display: 'none' }} className="cart-text">
                {cartCount > 0 ? `₹${cartTotal}` : 'Cart'}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-terracotta)',
              }}
              className="mobile-toggle"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: '#FFFDF9',
              borderTop: '1px solid var(--color-border)',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <a
              href="#catalogue"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontWeight: 600, color: 'var(--color-text-main)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border-subtle)' }}
            >
              Sweets & Namkeen Catalogue
            </a>
            <a
              href="#festivals"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontWeight: 600, color: 'var(--color-text-main)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border-subtle)' }}
            >
              Festival Specials & Ghewar
            </a>
            <a
              href="#heritage"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontWeight: 600, color: 'var(--color-text-main)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border-subtle)' }}
            >
              Our Johari Bazaar Story
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontWeight: 600, color: 'var(--color-text-main)' }}
            >
              Store Location & Hours
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsApp();
              }}
              style={{
                marginTop: '0.5rem',
                padding: '0.75rem',
                borderRadius: '8px',
                background: '#2B8A3E',
                color: '#FFF',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <MessageCircle size={18} />
              <span>Direct WhatsApp Order</span>
            </button>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-whatsapp { display: inline-flex !important; }
          .cart-text { display: inline !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
};
