import React from 'react';
import { Flame, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { storeInfo } from '../data/sweetsData';

export const Footer = () => {
  return (
    <footer id="contact" style={{ background: '#200702', color: '#FFF3BF', padding: '4.5rem 0 2rem 0' }}>
      <div className="container">
        
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--color-kesar-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Flame size={20} color="#FFF" />
              </div>
              <span style={{ fontFamily: 'var(--font-heritage)', fontSize: '1.4rem', color: '#FFF' }}>
                Jaipur Mithai House
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#D9C5B2', lineHeight: '1.65', marginBottom: '1.25rem' }}>
              {storeInfo.subheading} Handcrafting authentic pure Desi Ghee Ghewar, Mawa Kachori, and festive sweets with uncompromised Rajasthani purity.
            </p>

            <span style={{ fontSize: '0.78rem', background: 'rgba(245, 159, 0, 0.2)', border: '1px solid #F59F00', color: '#FAB005', padding: '0.3rem 0.75rem', borderRadius: '20px', fontWeight: 700 }}>
              {storeInfo.purityBadge}
            </span>
          </div>

          {/* Col 2: Popular Specialties */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#FFF', marginBottom: '1.25rem', fontFamily: 'var(--font-heritage)' }}>
              Johari Bazaar Specialties
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#D9C5B2' }}>
              <li>Jaipuri Kesar Malai Ghewar</li>
              <li>Jodhpur Shahi Mawa Kachori</li>
              <li>Danedar Desi Ghee Besan Chakki</li>
              <li>Temple Motichoor Ladoo</li>
              <li>Goan Shahi Kaju Katli</li>
              <li>Crisp Pyaaz Kachori with Chutneys</li>
            </ul>
          </div>

          {/* Col 3: Store Address & Hours */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#FFF', marginBottom: '1.25rem', fontFamily: 'var(--font-heritage)' }}>
              Visit Our Sweet Shop
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: '#D9C5B2' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={18} color="#F59F00" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{storeInfo.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={18} color="#F59F00" style={{ flexShrink: 0 }} />
                <a href={`tel:${storeInfo.phone}`} style={{ color: '#FFF', fontWeight: 700 }}>{storeInfo.displayPhone}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Clock size={18} color="#F59F00" style={{ flexShrink: 0 }} />
                <span>{storeInfo.hours}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={18} color="#F59F00" style={{ flexShrink: 0 }} />
                <span>{storeInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Showcase Project Notice */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: 'rgba(59, 18, 7, 0.65)',
            border: '1px solid rgba(245, 159, 0, 0.3)',
            borderRadius: '10px',
            marginBottom: '2rem',
            fontSize: '0.78rem',
            color: '#D9C5B2',
            textAlign: 'center',
            lineHeight: '1.6',
          }}
        >
          <strong style={{ color: '#FAB005', display: 'block', marginBottom: '0.2rem', textTransform: 'uppercase' }}>
            Personal Portfolio Project Showcase • Fictional Demo Business
          </strong>
          Jaipur Mithai House is an original frontend e-commerce showcase application designed and developed by Lokesh Kumawat.
          All brand names, product catalogues, prices, and addresses are fictional demo data inspired by traditional Rajasthani sweet shops.
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '0.8rem',
            color: '#A99282',
          }}
        >
          <div>
            © 2026 Jaipur Mithai House. All rights reserved.
          </div>
          <div>
            Crafted with React + Vite by <strong style={{ color: '#FAB005' }}>Lokesh Kumawat</strong>
          </div>
        </div>

      </div>
    </footer>
  );
};
