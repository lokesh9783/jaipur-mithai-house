import React, { useState } from 'react';
import { X, Star, ShoppingBag, Plus, Minus, ShieldCheck, Check, Clock } from 'lucide-react';

export const ProductDetailModal = ({ product, onClose, onAddToCart }) => {
  const [selectedWeight, setSelectedWeight] = useState(
    product ? product.defaultWeight || Object.keys(product.prices)[0] : ''
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const currentPrice = product.prices[selectedWeight] || Object.values(product.prices)[0];

  const handleAdd = () => {
    onAddToCart({
      id: `${product.id}-${selectedWeight}`,
      productId: product.id,
      name: product.name,
      weight: selectedWeight,
      price: currentPrice,
      image: product.image,
      quantity,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2500,
        background: 'rgba(32, 7, 2, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#FFFDF9',
          borderRadius: '20px',
          maxWidth: '680px',
          width: '100%',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
          border: '1.5px solid var(--color-border)',
          position: 'relative',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--color-terracotta)',
          }}
          aria-label="Close details"
        >
          <X size={20} />
        </button>

        {/* Scrollable Container */}
        <div style={{ overflowY: 'auto' }}>
          {/* Product Image Banner */}
          <div style={{ position: 'relative', height: '260px' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                background: 'var(--color-kesar-primary)',
                color: '#FFF',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              {product.badge}
            </div>
          </div>

          {/* Details Section */}
          <div style={{ padding: '2rem' }}>
            {/* Dietary & Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span className="veg-badge" />
                <span style={{ fontSize: '0.8rem', color: '#2B8A3E', fontWeight: 700 }}>100% Pure Vegetarian</span>
              </div>
              {product.pureGhee && (
                <span style={{ fontSize: '0.75rem', background: 'var(--color-cream-warm)', color: 'var(--color-kesar-dark)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                  Shuddh Desi Ghee
                </span>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.82rem', color: 'var(--color-text-muted)', marginLeft: 'auto' }}>
                <Star size={14} fill="#F59F00" color="#F59F00" />
                <strong>{product.rating}</strong> ({product.reviewsCount} reviews)
              </div>
            </div>

            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-terracotta)', marginBottom: '0.4rem' }}>
              {product.name}
            </h3>

            <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              {product.description}
            </p>

            {/* Inclusions & Shelf-life Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                background: 'var(--color-cream-warm)',
                padding: '1.25rem',
                borderRadius: '12px',
                border: '1px solid var(--color-border)',
                marginBottom: '1.75rem',
              }}
            >
              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
                  <Clock size={12} /> Shelf Life & Storage
                </span>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-terracotta)' }}>
                  {product.shelfLife}
                </span>
              </div>

              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
                  <ShieldCheck size={12} /> Ingredients
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-main)' }}>
                  {product.ingredients}
                </span>
              </div>
            </div>

            {/* Weight Picker */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                Choose Pack / Weight
              </label>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {Object.keys(product.prices).map((wKey) => {
                  const isPicked = selectedWeight === wKey;
                  return (
                    <button
                      key={wKey}
                      type="button"
                      onClick={() => setSelectedWeight(wKey)}
                      style={{
                        padding: '0.6rem 1.25rem',
                        borderRadius: '8px',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        border: isPicked ? '2px solid var(--color-kesar-primary)' : '1px solid var(--color-border)',
                        background: isPicked ? 'var(--color-cream-warm)' : '#FFFFFF',
                        color: isPicked ? 'var(--color-kesar-primary)' : 'var(--color-text-main)',
                      }}
                    >
                      {wKey} • ₹{product.prices[wKey]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity and Add CTA Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              {/* Stepper */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'var(--color-cream-warm)',
                  borderRadius: '50px',
                  border: '1px solid var(--color-border)',
                  padding: '0.3rem 0.6rem',
                }}
              >
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span style={{ padding: '0 0.85rem', fontSize: '0.95rem', fontWeight: 800 }}>
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Total & Button */}
              <button
                onClick={handleAdd}
                className="btn-kesar"
                style={{ flex: 1, padding: '0.85rem' }}
              >
                {added ? (
                  <>
                    <Check size={18} /> Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    <span>Add to Cart • ₹{currentPrice * quantity}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
