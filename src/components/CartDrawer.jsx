import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, Truck, Store, Check } from 'lucide-react';
import { storeInfo } from '../data/sweetsData';

export const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, onClearCart }) => {
  const [deliveryMethod, setDeliveryMethod] = useState('delivery'); // 'delivery' | 'pickup'
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  // Calculation
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = deliveryMethod === 'delivery' ? (subtotal >= 800 ? 0 : 50) : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;
    if (!customerName.trim() || !customerPhone.trim()) {
      setFormError('Please enter your name and phone number for delivery coordination.');
      return;
    }
    if (deliveryMethod === 'delivery' && !customerAddress.trim()) {
      setFormError('Please enter your delivery address in Jaipur.');
      return;
    }

    setFormError('');

    // Format WhatsApp Order Text
    let orderSummary = `*JAIPUR MITHAI HOUSE — NEW ORDER ENQUIRY*\n`;
    orderSummary += `------------------------------------\n`;
    orderSummary += `*Customer:* ${customerName}\n`;
    orderSummary += `*Phone:* ${customerPhone}\n`;
    orderSummary += `*Fulfillment:* ${deliveryMethod === 'delivery' ? 'Home Delivery in Jaipur' : 'Store Pickup (Johari Bazaar)'}\n`;
    if (deliveryMethod === 'delivery') {
      orderSummary += `*Delivery Address:* ${customerAddress}\n`;
    }
    if (notes.trim()) {
      orderSummary += `*Notes:* ${notes}\n`;
    }
    orderSummary += `\n*ITEMS ORDERED:*\n`;

    cartItems.forEach((item, index) => {
      orderSummary += `${index + 1}. *${item.name}* (${item.weight}) x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });

    orderSummary += `------------------------------------\n`;
    orderSummary += `*Subtotal:* ₹${subtotal}\n`;
    orderSummary += `*Delivery Fee:* ${deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}\n`;
    orderSummary += `*TOTAL AMOUNT:* ₹${grandTotal}\n`;
    orderSummary += `------------------------------------\n`;
    orderSummary += `Please confirm fresh availability and estimated delivery slot. Dhanyavaad!`;

    const encoded = encodeURIComponent(orderSummary);
    window.open(`https://wa.me/${storeInfo.whatsappNumber}?text=${encoded}`, '_blank');

    setOrderPlaced(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2500,
        background: 'rgba(32, 7, 2, 0.65)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          background: '#FFFDF9',
          boxShadow: '-10px 0 35px rgba(0,0,0,0.25)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#FFFFFF',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <ShoppingBag size={20} color="var(--color-kesar-primary)" />
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-terracotta)', margin: 0 }}>
              Your Sweet Cart ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--color-cream-warm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--color-terracotta)',
            }}
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {orderPlaced ? (
          /* Order Transmitted Confirmation */
          <div style={{ padding: '2.5rem 1.5rem', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#E7F5EA',
                color: '#2B8A3E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
                border: '2px solid #2B8A3E',
              }}
            >
              <Check size={36} />
            </div>

            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-terracotta)', marginBottom: '0.5rem' }}>
              Order Dossier Prepared!
            </h3>

            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
              Your order details for <strong>₹{grandTotal}</strong> have been formatted for our Johari Bazaar Halwai desk on WhatsApp.
            </p>

            <button
              onClick={() => {
                setOrderPlaced(false);
                onClearCart();
                onClose();
              }}
              className="btn-kesar"
            >
              Done & Clear Cart
            </button>
          </div>
        ) : cartItems.length === 0 ? (
          /* Empty Cart State */
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'var(--color-cream-warm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-kesar-light)',
                marginBottom: '1rem',
              }}
            >
              <ShoppingBag size={32} />
            </div>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--color-terracotta)', marginBottom: '0.4rem' }}>
              Your cart is currently empty
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', maxWidth: '280px', marginBottom: '1.75rem' }}>
              Add some freshly prepared Malai Ghewar, Mawa Kachori, or Motichoor Ladoos!
            </p>
            <button onClick={onClose} className="btn-kesar">
              Explore Fresh Sweets
            </button>
          </div>
        ) : (
          /* Cart List & Checkout Details */
          <>
            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.5rem' }}>
              {/* Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '0.85rem',
                      background: '#FFFFFF',
                      borderRadius: '10px',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                    />

                    <div style={{ flex: 1 }}>
                      <h5 style={{ fontSize: '0.94rem', color: 'var(--color-terracotta)', marginBottom: '0.15rem' }}>
                        {item.name}
                      </h5>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                        {item.weight} • ₹{item.price} each
                      </span>

                      {/* Stepper */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            background: 'var(--color-cream-warm)',
                            borderRadius: '4px',
                            border: '1px solid var(--color-border)',
                          }}
                        >
                          <button
                            onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                            style={{ padding: '0.2rem 0.45rem', cursor: 'pointer' }}
                            aria-label="Reduce quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span style={{ padding: '0 0.45rem', fontSize: '0.78rem', fontWeight: 800 }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                            style={{ padding: '0.2rem 0.45rem', cursor: 'pointer' }}
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--color-kesar-primary)' }}>
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      style={{ color: '#E03131', cursor: 'pointer', padding: '0.25rem' }}
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Delivery or Store Pickup Toggle */}
              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.76rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.45rem' }}>
                  Fulfillment Mode:
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('delivery')}
                    style={{
                      padding: '0.65rem 0.5rem',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      border: deliveryMethod === 'delivery' ? '1.5px solid var(--color-kesar-primary)' : '1px solid var(--color-border)',
                      background: deliveryMethod === 'delivery' ? 'var(--color-cream-warm)' : '#FFFFFF',
                      color: deliveryMethod === 'delivery' ? 'var(--color-kesar-primary)' : 'var(--color-text-main)',
                    }}
                  >
                    <Truck size={14} /> Home Delivery
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('pickup')}
                    style={{
                      padding: '0.65rem 0.5rem',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      border: deliveryMethod === 'pickup' ? '1.5px solid var(--color-kesar-primary)' : '1px solid var(--color-border)',
                      background: deliveryMethod === 'pickup' ? 'var(--color-cream-warm)' : '#FFFFFF',
                      color: deliveryMethod === 'pickup' ? 'var(--color-kesar-primary)' : 'var(--color-text-main)',
                    }}
                  >
                    <Store size={14} /> Store Pickup
                  </button>
                </div>
              </div>

              {/* Customer Delivery Fields */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '6px',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.85rem',
                    outline: 'none',
                    background: '#FFFFFF',
                  }}
                />

                <input
                  type="tel"
                  placeholder="WhatsApp Mobile Number *"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '6px',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.85rem',
                    outline: 'none',
                    background: '#FFFFFF',
                  }}
                />

                {deliveryMethod === 'delivery' && (
                  <textarea
                    rows="2"
                    placeholder="Delivery Address / Colony / Landmark in Jaipur *"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.6rem 0.85rem',
                      borderRadius: '6px',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.85rem',
                      outline: 'none',
                      background: '#FFFFFF',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                    }}
                  />
                )}

                <input
                  type="text"
                  placeholder="Any Special Requests (Optional)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '6px',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.85rem',
                    outline: 'none',
                    background: '#FFFFFF',
                  }}
                />
              </div>

              {formError && (
                <p style={{ color: '#E03131', fontSize: '0.78rem', marginBottom: '1rem' }}>
                  {formError}
                </p>
              )}
            </div>

            {/* Sticky Bottom Summary & WhatsApp Transmitter */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderTop: '1px solid var(--color-border)',
                background: '#FFFFFF',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.35rem' }}>
                <span>Subtotal:</span>
                <span style={{ fontWeight: 700, color: 'var(--color-text-main)' }}>₹{subtotal}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.65rem' }}>
                <span>{deliveryMethod === 'delivery' ? 'Jaipur Delivery Fee:' : 'Store Pickup:'}</span>
                <span style={{ fontWeight: 700, color: deliveryFee === 0 ? '#2B8A3E' : 'var(--color-text-main)' }}>
                  {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-terracotta)', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '0.65rem', marginBottom: '1rem' }}>
                <span>Grand Total:</span>
                <span style={{ color: 'var(--color-kesar-primary)' }}>₹{grandTotal}</span>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(37, 211, 102, 0.35)',
                }}
              >
                <MessageCircle size={18} />
                <span>Place Order via WhatsApp • ₹{grandTotal}</span>
              </button>

              <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                  *Instant order dispatch to our Johari Bazaar desk
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
