import React, { useState, useMemo } from 'react';
import { ShoppingBag, Eye, Plus, Minus, Search, Star, Check, Flame } from 'lucide-react';
import { categories, sweetsProducts } from '../data/sweetsData';

export const ProductCatalogue = ({ onAddToCart, onOpenDetail, searchQuery = '', setSearchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedWeights, setSelectedWeights] = useState({});
  const [quantities, setQuantities] = useState({});
  const [addedItemNotice, setAddedItemNotice] = useState(null);

  // Handle Weight change
  const handleWeightChange = (productId, weightKey) => {
    setSelectedWeights((prev) => ({ ...prev, [productId]: weightKey }));
  };

  // Handle Quantity Change
  const updateQuantity = (productId, delta) => {
    setQuantities((prev) => {
      const current = prev[productId] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [productId]: next };
    });
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...sweetsProducts];

    // Category Filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.ingredients.toLowerCase().includes(q)
      );
    }

    // Sort By
    if (sortBy === 'price-low') {
      result.sort((a, b) => {
        const priceA = Object.values(a.prices)[0];
        const priceB = Object.values(b.prices)[0];
        return priceA - priceB;
      });
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => {
        const priceA = Object.values(a.prices)[0];
        const priceB = Object.values(b.prices)[0];
        return priceB - priceA;
      });
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleAdd = (product) => {
    const currentWeight = selectedWeights[product.id] || product.defaultWeight || Object.keys(product.prices)[0];
    const unitPrice = product.prices[currentWeight];
    const qty = quantities[product.id] || 1;

    onAddToCart({
      id: `${product.id}-${currentWeight}`,
      productId: product.id,
      name: product.name,
      weight: currentWeight,
      price: unitPrice,
      image: product.image,
      quantity: qty,
    });

    setAddedItemNotice(product.name);
    setTimeout(() => setAddedItemNotice(null), 2200);
  };

  return (
    <section id="catalogue" className="section-wrapper" style={{ background: '#FFFDF9' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">
            <Flame size={14} color="#D9480F" /> Authentic Mithai & Namkeen
          </span>
          <h2 className="section-title">The Royal Johari Bazaar Catalogue</h2>
          <p className="section-subtitle">
            Explore handcrafted ghewar, traditional laddoos, pure cashew sweets, fresh chhena delicacies, and savory snacks.
          </p>
        </div>

        {/* Search & Sort Controls Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '2rem',
            padding: '1rem 1.5rem',
            background: '#FFFFFF',
            borderRadius: '14px',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {/* Search Box */}
          <div style={{ position: 'relative', flex: '1 1 280px' }}>
            <Search
              size={18}
              color="var(--color-text-muted)"
              style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search Ghewar, Peda, Kaju Katli, Bhujia..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.75rem',
                borderRadius: '50px',
                border: '1px solid var(--color-border)',
                background: 'var(--color-cream-warm)',
                fontSize: '0.88rem',
                outline: 'none',
                color: 'var(--color-text-main)',
              }}
            />
          </div>

          {/* Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
              Sort By:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '50px',
                border: '1px solid var(--color-border)',
                background: '#FFFFFF',
                fontSize: '0.86rem',
                color: 'var(--color-text-main)',
                fontWeight: 600,
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="featured">Featured & Popular</option>
              <option value="rating">Highest Customer Rating</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '3rem',
            justifyContent: 'center',
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: '50px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  background: isSelected ? 'var(--color-kesar-primary)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--color-terracotta)',
                  border: isSelected ? '1px solid var(--color-kesar-dark)' : '1px solid var(--color-border)',
                  boxShadow: isSelected ? '0 4px 14px rgba(217, 72, 15, 0.3)' : 'none',
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Added to cart toast */}
        {addedItemNotice && (
          <div
            style={{
              position: 'fixed',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3000,
              background: '#2B8A3E',
              color: '#FFF',
              padding: '0.85rem 1.75rem',
              borderRadius: '50px',
              fontSize: '0.88rem',
              fontWeight: 700,
              boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Check size={18} />
            <span>Added "{addedItemNotice}" to shopping cart!</span>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>
              No sweets or namkeen found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="btn-kesar"
              style={{ marginTop: '1rem' }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
              gap: '2rem',
            }}
          >
            {filteredProducts.map((product) => {
              const currentWeight = selectedWeights[product.id] || product.defaultWeight || Object.keys(product.prices)[0];
              const currentPrice = product.prices[currentWeight];
              const qty = quantities[product.id] || 1;

              return (
                <div key={product.id} className="mithai-card">
                  {/* Image & Quick View Overlay */}
                  <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />

                    {/* Badge */}
                    <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                      <span
                        style={{
                          background: 'rgba(59, 18, 7, 0.85)',
                          color: '#FFF3BF',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {product.badge}
                      </span>
                    </div>

                    {/* Quick View Button */}
                    <button
                      onClick={() => onOpenDetail(product)}
                      style={{
                        position: 'absolute',
                        bottom: '0.75rem',
                        right: '0.75rem',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-terracotta)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                        cursor: 'pointer',
                      }}
                      title="Quick Details"
                      aria-label="View product ingredients and details"
                    >
                      <Eye size={17} />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      {/* Dietary & Rating */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span className="veg-badge" />
                          <span style={{ fontSize: '0.72rem', color: '#2B8A3E', fontWeight: 600 }}>Pure Veg</span>
                          {product.pureGhee && (
                            <span style={{ fontSize: '0.68rem', background: 'var(--color-cream-warm)', color: 'var(--color-kesar-dark)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontWeight: 700 }}>
                              Desi Ghee
                            </span>
                          )}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                          <Star size={13} fill="#F59F00" color="#F59F00" />
                          <span>{product.rating}</span>
                        </div>
                      </div>

                      <h4 style={{ fontSize: '1.22rem', color: 'var(--color-terracotta)', marginBottom: '0.25rem' }}>
                        {product.name}
                      </h4>

                      <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                        {product.tagline}
                      </p>

                      {/* Weight Selector */}
                      <div style={{ marginBottom: '1.25rem' }}>
                        <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
                          Select Pack / Weight:
                        </span>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          {Object.keys(product.prices).map((weightKey) => {
                            const isCurrent = currentWeight === weightKey;
                            return (
                              <button
                                key={weightKey}
                                type="button"
                                onClick={() => handleWeightChange(product.id, weightKey)}
                                style={{
                                  padding: '0.35rem 0.75rem',
                                  borderRadius: '6px',
                                  fontSize: '0.76rem',
                                  fontWeight: 700,
                                  cursor: 'pointer',
                                  border: isCurrent ? '1.5px solid var(--color-kesar-primary)' : '1px solid var(--color-border)',
                                  background: isCurrent ? 'var(--color-cream-warm)' : '#FFFFFF',
                                  color: isCurrent ? 'var(--color-kesar-primary)' : 'var(--color-text-main)',
                                }}
                              >
                                {weightKey}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Area: Price, Quantity & Add button */}
                    <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                        <div>
                          <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', display: 'block' }}>Price</span>
                          <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-kesar-primary)' }}>
                            ₹{currentPrice}
                          </span>
                        </div>

                        {/* Quantity Stepper */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            background: 'var(--color-cream-warm)',
                            borderRadius: '50px',
                            border: '1px solid var(--color-border)',
                            padding: '0.2rem',
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, -1)}
                            style={{
                              width: '26px',
                              height: '26px',
                              borderRadius: '50%',
                              background: '#FFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                            }}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span style={{ padding: '0 0.6rem', fontSize: '0.85rem', fontWeight: 800 }}>
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, 1)}
                            style={{
                              width: '26px',
                              height: '26px',
                              borderRadius: '50%',
                              background: '#FFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                            }}
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => handleAdd(product)}
                        className="btn-kesar"
                        style={{ width: '100%', padding: '0.7rem', fontSize: '0.85rem' }}
                      >
                        <ShoppingBag size={16} />
                        <span>Add To Cart • ₹{currentPrice * qty}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
