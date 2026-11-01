# 🪔 Jaipur Mithai House — Authentic Traditional Rajasthani Sweets & Namkeen

> A professional traditional Indian mithai storefront web application inspired by iconic sweet shops of Jaipur such as Kesar Sweets. Built as an original, fully responsive personal portfolio showcase by **Lokesh Kumawat**.

---

## ✨ Features & Functionality

- **Traditional Rajasthani Mithai Branding**:
  - Warm saffron, danedar cow ghee gold, and terracotta tones reflecting 50 years of Johari Bazaar sweetmaking heritage.
  - Authentic green vegetarian dot marks and 100% Shuddh Desi Ghee badges.
- **Rich Product Catalogue & Categories**:
  - *Royal Ghewar*: Famous Jaipuri Malai Ghewar, Kesar Mitha Ghewar.
  - *Desi Ghee Sweets*: Jodhpur Shahi Mawa Kachori, Motichoor Ladoo, Rajasthani Besan Chakki, Mathura Kesar Peda.
  - *Kaju & Dry Fruit*: Goan Shahi Kaju Katli, Kaju Pista Roll.
  - *Chhena Sweets*: Desi Ghee Gulab Jamun, Rasgulla.
  - *Rajasthani Namkeen*: Jaipuri Pyaaz Kachori & Mirchi Vada, Authentic Bikaneri Bhujia.
  - *Festival Sampler Boxes*: Rajputana Shahi Assorted Gift Box.
- **Interactive Weight & Variant Pricing**:
  - Live weight toggle (e.g., `500g` vs `1kg`) with instant unit price recalculation.
- **Quantity Controls & Steppers**:
  - Dynamic `+` / `-` quantity adjustments directly on catalogue cards and in modals.
- **Product Details Modal**:
  - High-res imagery, shelf life, refrigeration instructions, and complete ingredient lists.
- **Slide-out Shopping Cart Drawer**:
  - Itemized cart summary, persistent storage via browser `localStorage` (`jaipur_mithai_cart`).
  - Delivery mode toggle: **Home Delivery across Jaipur** (free above ₹800) vs **Store Pickup at Johari Bazaar**.
- **Instant WhatsApp Order Transmitter**:
  - Compiles customer name, phone, Jaipur address, selected items, weights, quantities, and final total into a clean, pre-formatted WhatsApp order message.
  - Opens direct WhatsApp order confirmation to the store desk (`wa.me`).
- **Interactive Search & Sorting**:
  - Real-time search across sweet names and ingredients.
  - Sort by Popularity, Customer Rating, and Price (Low to High / High to Low).
- **Johari Bazaar Halwai Heritage Story**:
  - The tradition of wood-fired copper bhattis, pure bilona cow ghee, and fresh morning milk since 1974.

---

## 🛠️ Technology Stack

- **Frontend**: React 19 + Vite 8 (JavaScript / JSX)
- **Icons**: Lucide React
- **Styling**: Vanilla CSS with modern custom variables, flexbox, grid, and glassmorphic touches
- **State & Storage**: React State + `localStorage`
- **Typography**: Rozha One, Cinzel, Plus Jakarta Sans

---

## 🚀 Local Development Setup

To run this application locally:

```bash
# 1. Navigate to project directory
cd projects/jaipur-mithai-house

# 2. Install dependencies (if independent)
npm install

# 3. Start local development server
npm run dev
```

The application will run at `http://localhost:5175/`.

---

## 📦 Production Build & Testing

```bash
npm run build
```

Generates optimized, production-ready static assets in the `dist/` directory.

---

## 🌐 Deploy to Netlify / Vercel

### Repository Name: `jaipur-mithai-house`

#### Option A: Netlify
1. Create a new GitHub repository named `jaipur-mithai-house` and push this directory.
2. Log in to Netlify > **Add new site** > **Import an existing project**.
3. Select `jaipur-mithai-house`.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy**.

#### Option B: Vercel
1. In Vercel, import repository `jaipur-mithai-house`.
2. Framework Preset: **Vite**.
3. Click **Deploy**.

---

## ⚖️ Portfolio & Demo Notice

*This project is an original creative work built strictly for educational and personal portfolio demonstration purposes. All business identities, sample pricing, reviews, and contact addresses are fictional. Inspired by traditional Rajasthani sweet shops.*

