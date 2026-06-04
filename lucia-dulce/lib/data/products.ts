export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  priceRange?: string;
  category: string;
  categorySlug: string;
  image: string;
  featured?: boolean;
  sizes?: { label: string; price: number }[];
  ingredients?: string;
  storage?: string;
  tags?: string[];
};

export const products: Product[] = [
  // YEMA CAKES
  {
    id: "yema-classic-rect",
    slug: "yema-classic-rectangle",
    name: "Yema Classic",
    description: "Light, fluffy chiffon cake topped with our signature rich and creamy yema frosting. A Lucia Dulce original that started it all.",
    price: 580,
    priceRange: "₱180 – ₱580",
    category: "Yema Cakes",
    categorySlug: "yema-cakes",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&q=80",
    featured: true,
    sizes: [
      { label: "Small", price: 180 },
      { label: "Round", price: 400 },
      { label: "Rectangle", price: 580 },
    ],
    ingredients: "Chiffon cake, eggs, sugar, butter, yema custard, vanilla",
    storage: "Keep refrigerated. Best consumed within 3 days.",
    tags: ["best-seller", "signature"],
  },
  {
    id: "yema-halaya-rect",
    slug: "yema-ube-halaya",
    name: "Yema Ube Halaya",
    description: "A modern twist on our classic yema cake — creamy yema custard meets rich ube halaya topping for a uniquely Filipino flavor.",
    price: 600,
    priceRange: "₱180 – ₱600",
    category: "Yema Cakes",
    categorySlug: "yema-cakes",
    image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=800&q=80",
    featured: true,
    sizes: [
      { label: "Small", price: 180 },
      { label: "Round", price: 420 },
      { label: "Rectangle", price: 600 },
    ],
    ingredients: "Chiffon cake, ube halaya, yema custard, butter",
    storage: "Keep refrigerated. Best consumed within 3 days.",
    tags: ["best-seller", "signature"],
  },

  // BENTO CAKES
  {
    id: "bento-red-velvet",
    slug: "bento-red-velvet",
    name: "Red Velvet Bento",
    description: "A perfectly portioned 4-inch red velvet bento cake. Moist, velvety layers with cream cheese frosting — perfect as a gift.",
    price: 250,
    category: "Bento Cakes",
    categorySlug: "bento-cakes",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    featured: true,
    tags: ["gift", "personal"],
  },
  {
    id: "bento-ube-moist",
    slug: "bento-ube-moist",
    name: "Ube Moist Bento",
    description: "Intensely purple ube moist cake in a cute 4-inch bento size. Rich, fragrant ube flavor in every bite.",
    price: 250,
    category: "Bento Cakes",
    categorySlug: "bento-cakes",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
    featured: false,
    tags: ["gift", "personal"],
  },
  {
    id: "bento-mango-graham",
    slug: "bento-mango-graham",
    name: "Mango Graham Bento",
    description: "Sweet Philippine mangoes layered with graham cracker crust and cream — sunshine in a box.",
    price: 200,
    category: "Bento Cakes",
    categorySlug: "bento-cakes",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
    featured: false,
    tags: ["seasonal", "gift"],
  },

  // PREMIUM CAKES
  {
    id: "premium-kitkat-nips",
    slug: "premium-kitkat-nips",
    name: "KitKat Nips",
    description: "Decadent chocolate cake wrapped in crispy KitKat bars and topped with colorful Nips chocolate candies. A celebration showstopper.",
    price: 700,
    category: "Premium Cakes",
    categorySlug: "premium-cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    featured: true,
    tags: ["premium", "showstopper"],
  },
  {
    id: "premium-ube-moist",
    slug: "premium-ube-moist",
    name: "Ube Moist Cake",
    description: "Our beloved ube moist cake — dense, fragrant, and deeply satisfying. Layered with ube cream and topped with purple swirls.",
    price: 550,
    priceRange: "₱500 – ₱550",
    category: "Premium Cakes",
    categorySlug: "premium-cakes",
    image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=800&q=80",
    featured: false,
    sizes: [
      { label: "Round", price: 500 },
      { label: "Square", price: 550 },
    ],
    tags: ["best-seller"],
  },
  {
    id: "premium-mango-graham",
    slug: "premium-mango-graham",
    name: "Mango Graham Cake",
    description: "Luscious Philippine mango mousse layered over a crunchy graham cracker base. Refreshing, tropical, and utterly irresistible.",
    price: 500,
    category: "Premium Cakes",
    categorySlug: "premium-cakes",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80",
    featured: true,
    tags: ["seasonal", "tropical"],
  },
  {
    id: "premium-black-forest",
    slug: "premium-black-forest",
    name: "Black Forest",
    description: "Classic Black Forest cake with layers of chocolate sponge, whipped cream, and cherry filling. Timeless and indulgent.",
    price: 550,
    category: "Premium Cakes",
    categorySlug: "premium-cakes",
    image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&q=80",
    featured: false,
    tags: ["classic"],
  },
  {
    id: "premium-red-velvet",
    slug: "premium-red-velvet",
    name: "Red Velvet",
    description: "Velvety crimson layers paired with silky cream cheese frosting. A visual masterpiece and a flavor revelation.",
    price: 650,
    category: "Premium Cakes",
    categorySlug: "premium-cakes",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    featured: false,
    tags: ["celebration"],
  },
  {
    id: "premium-belgian",
    slug: "premium-belgian-cake",
    name: "Belgian Cake",
    description: "Rich Belgian chocolate cake with ganache layers. For the true chocolate connoisseur.",
    price: 700,
    category: "Premium Cakes",
    categorySlug: "premium-cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    featured: false,
    tags: ["premium", "chocolate"],
  },
  {
    id: "premium-coffee-crumble",
    slug: "premium-coffee-crumble",
    name: "Coffee Crumble",
    description: "Coffee-infused moist cake with a buttery crumble topping. The perfect pairing for your morning or afternoon coffee.",
    price: 450,
    category: "Premium Cakes",
    categorySlug: "premium-cakes",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&q=80",
    featured: false,
    tags: ["coffee-lover"],
  },

  // ENSAYMADA
  {
    id: "ensaymada-creamcheese",
    slug: "ensaymada-creamcheese",
    name: "Cream Cheese Ensaymada",
    description: "Fluffy brioche-style ensaymada topped generously with cream cheese. Soft, pillowy, and absolutely addictive.",
    price: 40,
    category: "Ensaymada",
    categorySlug: "ensaymada",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    featured: true,
    tags: ["best-seller", "daily"],
  },
  {
    id: "ensaymada-ube-halaya",
    slug: "ensaymada-ube-halaya",
    name: "Ube Halaya Ensaymada",
    description: "Our classic ensaymada swirled with homemade ube halaya. A vibrant purple treat that's as beautiful as it is delicious.",
    price: 35,
    category: "Ensaymada",
    categorySlug: "ensaymada",
    image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=800&q=80",
    featured: false,
    tags: ["daily"],
  },
  {
    id: "ensaymada-chocnut",
    slug: "ensaymada-chocnut",
    name: "Chocnut Ensaymada",
    description: "Topped with crushed Chocnut — the nostalgic Filipino chocolate peanut candy. A childhood favorite, reimagined.",
    price: 35,
    category: "Ensaymada",
    categorySlug: "ensaymada",
    image: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=800&q=80",
    featured: false,
    tags: ["daily", "nostalgic"],
  },

  // CELEBRATION CAKES
  {
    id: "celebration-choco-moist",
    slug: "celebration-choco-moist",
    name: "Celebration Choco Moist",
    description: "Our richest chocolate moist cake, ready for your message and celebration. Perfect for birthdays, anniversaries, and milestones.",
    price: 780,
    category: "Celebration Cakes",
    categorySlug: "celebration-cakes",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
    featured: true,
    sizes: [
      { label: "Rectangle", price: 570 },
      { label: "Round", price: 400 },
      { label: "Large Choco Moist", price: 780 },
    ],
    tags: ["customizable", "celebration"],
  },

  // PASTRIES
  {
    id: "pastry-cinnamon-bun",
    slug: "cinnamon-bun",
    name: "Cinnamon Bun",
    description: "Warm, pillowy cinnamon bun with caramel swirls. Freshly baked daily.",
    price: 40,
    category: "Pastries & Rolls",
    categorySlug: "pastries",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    featured: false,
    tags: ["fresh-daily"],
  },
  {
    id: "pastry-cheese-bars",
    slug: "cheese-bars",
    name: "Cheese Bars",
    description: "Buttery, golden cheese bars. A crowd-pleaser for pasalubong or afternoon merienda.",
    price: 130,
    category: "Pastries & Rolls",
    categorySlug: "pastries",
    image: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=800&q=80",
    featured: false,
    tags: ["pasalubong", "snack"],
  },
  {
    id: "pastry-choco-crinkles",
    slug: "chocolate-crinkles",
    name: "Chocolate Crinkles",
    description: "Fudgy chocolate crinkle cookies dusted in powdered sugar. A Filipino Christmas staple all year round.",
    price: 100,
    category: "Pastries & Rolls",
    categorySlug: "pastries",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&q=80",
    featured: false,
    tags: ["cookie", "classic"],
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const getProductsByCategory = (categorySlug: string) =>
  products.filter((p) => p.categorySlug === categorySlug);

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
