import React from 'react';
import { Flame, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { shopHighlights } from '../data/sweetsData';

export const Hero = ({ onExploreClick }) => {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #FFF5E6 0%, #FFFDF9 100%)',
        padding: '3.5rem 0 4.5rem 0',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Hero Content */}
          <div>
            <div style={{ display: 'inline-flex', marginBottom: '1rem' }}>
              <span className="section-tag">
                <Flame size={14} color="#D9480F" />
                Pure Desi Ghee Tradition Since 1974
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                marginBottom: '1.25rem',
                color: 'var(--color-terracotta)',
                letterSpacing: '-0.01em',
              }}
            >
              The Royal Taste of
              <br />
              <span style={{ color: 'var(--color-kesar-primary)' }}>
                Traditional Rajasthani Mithai
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.12rem',
                color: 'var(--color-text-muted)',
                lineHeight: '1.7',
                marginBottom: '2rem',
                maxWidth: '560px',
              }}
            >
              Handcrafted in copper bhattis with pure bilona cow ghee, rich khoya, and Kashmiri saffron.
              From our famous fresh <strong style={{ color: 'var(--color-terracotta)' }}>Malai Ghewar</strong> to crispy <strong style={{ color: 'var(--color-terracotta)' }}>Mawa Kachori</strong>, taste five decades of Johari Bazaar heritage.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#catalogue" className="btn-kesar" onClick={onExploreClick}>
                <Sparkles size={17} />
                <span>Order Fresh Sweets</span>
              </a>

              <a href="#festivals" className="btn-outline-kesar">
                <span>View Festival Ghewar</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Micro Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.86rem', color: 'var(--color-text-muted)' }}>
              <div style={{ display: 'flex', color: '#F59F00' }}>★★★★★</div>
              <span><strong>4.9 / 5</strong> rating from 3,400+ sweet lovers in Jaipur</span>
            </div>
          </div>

          {/* Right Visual Image Card */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(59, 18, 7, 0.16)',
                border: '4px solid #FFF',
                position: 'relative',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=1000&q=80"
                alt="Jaipur Malai Ghewar"
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />

              {/* Floating Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '16px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-kesar-primary)', textTransform: 'uppercase' }}>
                    <span className="veg-badge" /> Today's Fresh Special
                  </div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--color-terracotta)', marginTop: '0.2rem' }}>
                    Saffron Malai Ghewar
                  </h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block' }}>From</span>
                  <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-kesar-primary)' }}>₹440</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Purity Highlights Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginTop: '4rem',
            padding: '1.75rem 2rem',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {shopHighlights.map((hl, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--color-cream-warm)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-kesar-primary)',
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={20} />
              </div>
              <div>
                <h5 style={{ fontSize: '0.96rem', color: 'var(--color-terracotta)', marginBottom: '0.2rem' }}>
                  {hl.title}
                </h5>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: '1.45' }}>
                  {hl.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
