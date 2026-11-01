export const storeInfo = {
  brandName: "Jaipur Mithai House",
  tagline: "Authentic Traditional Rajasthani Mithai & Namkeen",
  subheading: "Crafting timeless Desi Ghee delicacies since 1974 in the heart of Pink City.",
  phone: "+91 94140 82190",
  displayPhone: "+91 94140 82190",
  whatsappNumber: "919414082190",
  email: "orders@jaipurmithaihouse.in",
  address: "Shop 14-16, Johari Bazaar, Pink City, Jaipur, Rajasthan 302003",
  hours: "Monday – Sunday: 7:30 AM – 10:30 PM IST",
  established: "1974",
  purityBadge: "100% Shuddh Desi Ghee • Pure Vegetarian",
  demoNotice: "Personal Portfolio Showcase • Fictional Demo Sweet Shop"
};

export const categories = [
  { id: "all", name: "All Mithai & Snacks" },
  { id: "ghewar", name: "Royal Ghewar" },
  { id: "traditional", name: "Desi Ghee Sweets" },
  { id: "kaju", name: "Kaju & Dry Fruit" },
  { id: "bengali", name: "Fresh Chhena Sweets" },
  { id: "namkeen", name: "Rajasthani Namkeen" },
  { id: "boxes", name: "Festival Sampler Boxes" },
];

export const festivalSpecials = [
  {
    id: "sp-1",
    title: "Teej & Gangaur Royal Malai Ghewar",
    badge: "Jaipur Speciality",
    desc: "Crispy honeycomb disc soaked in saffron syrup, crowned with dense rabdi malai, sliced almonds, pistachios, and pure silver vark.",
    price: 440,
    unit: "per 500g disc",
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    id: "sp-2",
    title: "Jodhpur Shahi Mawa Kachori",
    badge: "Heritage Sweet",
    desc: "Golden crisp khasta crust stuffed with rich cardamom-scented mawa and dry fruits, gently dipped in fragrant sugar syrup.",
    price: 360,
    unit: "Box of 4 pcs",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    id: "sp-3",
    title: "Diwali Shuddh Desi Ghee Besan Chakki",
    badge: "Festive Favorite",
    desc: "Slow-roasted coarse gram flour simmered in pure Danedar Ghee, folded with khoya, cardamom, and melon seeds.",
    price: 380,
    unit: "per 500g box",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    inStock: true
  }
];

export const sweetsProducts = [
  {
    id: "m-1",
    name: "Jaipuri Malai Ghewar",
    category: "ghewar",
    tagline: "The Crown Jewel of Rajasthani Sweets",
    description: "Traditional honeycomb-textured disc drenched in saffron sugar syrup and layered with dense slow-cooked rabri malai and Iranian pistachio slivers.",
    prices: {
      "500g": 440,
      "1kg": 850
    },
    defaultWeight: "500g",
    rating: 4.9,
    reviewsCount: 382,
    badge: "Bestseller",
    shelfLife: "3 Days (Keep Refrigerated)",
    ingredients: "Refined Flour, Pure Cow Desi Ghee, Whole Milk Rabri, Saffron, Cardamom, Pistachio, Almonds",
    pureGhee: true,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-2",
    name: "Kesar Mitha Ghewar",
    category: "ghewar",
    tagline: "Crisp Sweet Saffron Disc",
    description: "Classic light and airy sweet ghewar soaked in authentic Kashmiri saffron syrup, topped with roasted dry fruit slivers without rabri.",
    prices: {
      "500g": 360,
      "1kg": 690
    },
    defaultWeight: "500g",
    rating: 4.8,
    reviewsCount: 215,
    badge: "Long Shelf Life",
    shelfLife: "15 Days (Room Temperature)",
    ingredients: "Refined Flour, Pure Desi Ghee, Sugar, Saffron Extract, Pistachios, Cardamom",
    pureGhee: true,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-3",
    name: "Jodhpur Shahi Mawa Kachori",
    category: "traditional",
    tagline: "Crispy Sugar Glazed Delicacy",
    description: "Authentic puffed khasta pastry filled with roasted khoya, crushed almonds, cashews, and aromatic jaiphal, soaked in aromatic sugar syrup.",
    prices: {
      "4 Pieces (approx 450g)": 360,
      "8 Pieces (approx 900g)": 700
    },
    defaultWeight: "4 Pieces (approx 450g)",
    rating: 4.9,
    reviewsCount: 410,
    badge: "Heritage Recipe",
    shelfLife: "7 Days",
    ingredients: "Refined Flour, Khoya / Mawa, Desi Ghee, Cashews, Almonds, Saffron, Sugar Syrup",
    pureGhee: true,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-4",
    name: "Desi Ghee Motichoor Ladoo",
    category: "traditional",
    tagline: "Tiny Golden Pearls of Pure Ghee",
    description: "Melt-in-the-mouth gram flour micro droplets fried in 100% pure desi ghee, steeped in saffron syrup and sprinkled with melon seeds.",
    prices: {
      "500g": 340,
      "1kg": 660
    },
    defaultWeight: "500g",
    rating: 4.9,
    reviewsCount: 520,
    badge: "Temple Prasaad Favorite",
    shelfLife: "10 Days",
    ingredients: "Gram Flour (Besan), Pure Cow Desi Ghee, Sugar, Melon Seeds, Saffron, Cardamom",
    pureGhee: true,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-5",
    name: "Shahi Kaju Katli",
    category: "kaju",
    tagline: "Finest Goan Cashew Diamond Cut",
    description: "Thin, smooth diamond cuts made from premium grade Goan cashews ground with pure cane sugar and scented with green cardamom.",
    prices: {
      "500g": 520,
      "1kg": 990
    },
    defaultWeight: "500g",
    rating: 5.0,
    reviewsCount: 680,
    badge: "Signature Quality",
    shelfLife: "20 Days",
    ingredients: "Grade W240 Cashews, Sugar, Silver Leaf (Vark), Cardamom",
    pureGhee: false,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1505253758473-96b3015f240a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-6",
    name: "Rajasthani Besan Chakki",
    category: "traditional",
    tagline: "Slow-Roasted Marwari Delicacy",
    description: "Traditional dense fudge crafted by slow roasting coarse gram flour in bhatti with pure desi ghee and folded with creamy khoya.",
    prices: {
      "500g": 380,
      "1kg": 740
    },
    defaultWeight: "500g",
    rating: 4.8,
    reviewsCount: 195,
    badge: "Traditional",
    shelfLife: "18 Days",
    ingredients: "Chana Dal Flour, Pure Desi Ghee, Mawa, Sugar, Almonds, Pistachios, Jaiphal",
    pureGhee: true,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-7",
    name: "Mathura / Jaipur Kesar Peda",
    category: "traditional",
    tagline: "Slow-Caramelized Khoya Peda",
    description: "Deep caramelised condensed milk pedas rolled by hand with saffron threads and green cardamom, stamped with traditional heritage floral motifs.",
    prices: {
      "500g": 360,
      "1kg": 700
    },
    defaultWeight: "500g",
    rating: 4.7,
    reviewsCount: 230,
    badge: "Handcrafted Daily",
    shelfLife: "14 Days",
    ingredients: "Fresh Buffalo Milk Khoya, Boora Sugar, Kashmiri Kesar, Cardamom Seeds",
    pureGhee: true,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-8",
    name: "Kaju Pista Roll",
    category: "kaju",
    tagline: "Cashew Cylinders Stuffed with Pistachio Paste",
    description: "Silky cashew paste rolls stuffed with an aromatic filling of freshly pounded pistachios and saffron, wrapped in silver foil.",
    prices: {
      "500g": 560,
      "1kg": 1080
    },
    defaultWeight: "500g",
    rating: 4.9,
    reviewsCount: 180,
    badge: "Premium Sweet",
    shelfLife: "18 Days",
    ingredients: "Cashew Nuts, Pistachios, Sugar, Saffron, Silver Leaf",
    pureGhee: false,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-9",
    name: "Royal Gulab Jamun (Desi Ghee)",
    category: "bengali",
    tagline: "Soft Mawa Spheres in Rose Syrup",
    description: "Melt-in-mouth dumplings made from fresh chhena and mawa, slow-fried in pure desi ghee and immersed in warm damask rose and cardamom syrup.",
    prices: {
      "500g (approx 8 pcs)": 320,
      "1kg (approx 16 pcs)": 620
    },
    defaultWeight: "500g (approx 8 pcs)",
    rating: 4.9,
    reviewsCount: 440,
    badge: "Served Warm",
    shelfLife: "5 Days (Refrigerate)",
    ingredients: "Fresh Cow Milk Chhena, Khoya, Desi Ghee, Sugar, Rose Water, Cardamom",
    pureGhee: true,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-10",
    name: "Jaipuri Pyaaz Kachori & Mirchi Vada Set",
    category: "namkeen",
    tagline: "Crisp Spicy Breakfast Favorite",
    description: "Puffed flaky crust brimming with spiced roasted onions, kalonji, fennel seeds, and hing, paired with sweet tamarind and spicy mint chutneys.",
    prices: {
      "Box of 4 Kachoris": 180,
      "Box of 8 Kachoris": 340
    },
    defaultWeight: "Box of 4 Kachoris",
    rating: 5.0,
    reviewsCount: 890,
    badge: "Fried Fresh Every Morning",
    shelfLife: "2 Days",
    ingredients: "Flour, Onions, Fennel, Kalonji, Asafoetida (Hing), Red Chili, Desi Oil",
    pureGhee: false,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-11",
    name: "Authentic Bikaneri Bhujia",
    category: "namkeen",
    tagline: "Crispy Moth Dal & Black Pepper Sev",
    description: "The pride of Rajasthan: ultra-crisp, savory bhujia crafted with stone-ground moth bean flour, fiery black pepper, and whole cloves.",
    prices: {
      "500g Pouch": 220,
      "1kg Box": 420
    },
    defaultWeight: "500g Pouch",
    rating: 4.9,
    reviewsCount: 610,
    badge: "GI Tag Origin Style",
    shelfLife: "60 Days",
    ingredients: "Moth Bean Flour, Besan, Edible Oil, Black Pepper, Cloves, Cardamom, Rock Salt",
    pureGhee: false,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-12",
    name: "Rajputana Shahi Sampler Box",
    category: "boxes",
    tagline: "Curated 4-Variety Heritage Sweet Box",
    description: "An elegant traditional box containing Shahi Kaju Katli, Desi Ghee Motichoor Ladoo, Mawa Peda, and Besan Chakki for celebrations and family gifting.",
    prices: {
      "800g Assorted Box": 680,
      "1.2kg Grand Box": 980
    },
    defaultWeight: "800g Assorted Box",
    rating: 4.9,
    reviewsCount: 340,
    badge: "Ideal For Gifting",
    shelfLife: "14 Days",
    ingredients: "Assortment of Cashews, Desi Ghee, Besan, Khoya, Saffron, Pistachios",
    pureGhee: true,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80"
  }
];

export const shopHighlights = [
  {
    title: "100% Shuddh Desi Ghee",
    desc: "Prepared exclusively with bilona-churned cow desi ghee. Zero palm oil, zero adulteration.",
    icon: "Flame"
  },
  {
    title: "Handcrafted Every Dawn",
    desc: "Batches prepared fresh each morning by 3rd-generation Marwari sweet masters (Halwais).",
    icon: "Clock"
  },
  {
    title: "Same-Day Jaipur Delivery",
    desc: "Express packaging with temperature control across all Jaipur locations within 3 hours.",
    icon: "Truck"
  },
  {
    title: "Eco-Friendly Traditional Boxes",
    desc: "Packed in food-grade tin containers and recyclable paper boxes sealed for freshness.",
    icon: "PackageCheck"
  }
];

