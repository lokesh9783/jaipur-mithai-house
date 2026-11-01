import React from 'react';
import { Sparkles, ShoppingBag } from 'lucide-react';
import { festivalSpecials } from '../data/sweetsData';

export const FestivalSpecials = ({ onAddToCart }) => {
  return (
    <section id="festivals" className="section-wrapper" style={{ background: '#FFFDF9' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Sparkles size={14} color="#D9480F" />
            Seasonal Heritage Delicacies
          </span>
          <h2 className="section-title">Rajasthan Festival Specials</h2>
          <p className="section-subtitle">
            Crafted for sacred festivities, Teej, Gangaur, Diwali, and family celebrations across Jaipur.
          </p>
        </div>

        {/* Specials Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {festivalSpecials.map((item) => (
            <div
              key={item.id}
              className="mithai-card"
              style={{
                border: '1.5px solid var(--color-border)',
                background: '#FFFFFF',
              }}
            >
              <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
                
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'var(--color-kesar-primary)',
                    color: '#FFF',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.badge}
                </span>
              </div>

              <div style={{ padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                    <span className="veg-badge" />
                    <span style={{ fontSize: '0.78rem', color: '#2B8A3E', fontWeight: 600 }}>Pure Vegetarian</span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: 'var(--color-terracotta)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {item.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--color-border-subtle)',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)', display: 'block' }}>{item.unit}</span>
                    <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-kesar-primary)' }}>₹{item.price}</span>
                  </div>

                  <button
                    onClick={() =>
                      onAddToCart({
                        id: item.id,
                        name: item.title,
                        weight: item.unit,
                        price: item.price,
                        image: item.image,
                        quantity: 1,
                      })
                    }
                    className="btn-kesar"
                    style={{ padding: '0.65rem 1.25rem', fontSize: '0.84rem' }}
                  >
                    <ShoppingBag size={16} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
