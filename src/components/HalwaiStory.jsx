import React from 'react';
import { Flame, ShieldCheck, Award } from 'lucide-react';

export const HalwaiStory = () => {
  return (
    <section id="heritage" className="section-wrapper" style={{ background: '#FFF5E6' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Visual Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <img
              src="https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80"
              alt="Halwai preparing Ghewar"
              loading="lazy"
              style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '16px' }}
            />
            <img
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
              alt="Mawa Kachori bhatti"
              loading="lazy"
              style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '16px', marginTop: '1.5rem' }}
            />
          </div>

          {/* Story Text */}
          <div>
            <span className="section-tag">
              <Award size={14} color="#D9480F" /> 50 Years of Sweet Mastery
            </span>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
              The Sacred Craft of Traditional Marwari Sweetmaking
            </h2>

            <p style={{ fontSize: '1.02rem', color: 'var(--color-text-main)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              Founded in 1974 in Johari Bazaar under the shadow of the Hawa Mahal, <strong>Jaipur Mithai House</strong> has preserved the sacred heritage of authentic Rajputana confectionary across three generations of master Halwais.
            </p>

            <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', lineHeight: '1.65', marginBottom: '2rem' }}>
              Our morning ritual begins at 4:30 AM when fresh, pure cow milk arrives from trusted rural dairy co-operatives in Shekhawati.
              Simmered slowly in heavy copper kadhais over wood-fired bhattis, our rabri, khoya, and sugar syrups are seasoned exclusively with wild saffron threads from Pampore and green cardamoms from Idukki.
            </p>

            {/* 3 Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: '#FFFFFF', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-kesar-primary)', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.2rem' }}>
                  <Flame size={16} /> 100% Danedar Ghee
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                  Zero trans fats, zero palm oils, pure aromatic bilona cow ghee.
                </p>
              </div>

              <div style={{ padding: '1rem', background: '#FFFFFF', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-kesar-primary)', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.2rem' }}>
                  <ShieldCheck size={16} /> Zero Preservatives
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                  Freshness sealed naturally with centuries-old sugar crystallization methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
