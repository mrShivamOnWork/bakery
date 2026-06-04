export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  emoji: string;
  occasion?: string;
  productCount?: number;
};

export const categories: Category[] = [
  {
    slug: "yema-cakes",
    name: "Yema Cakes",
    description: "Our signature handcrafted yema cakes — the original heart of Lucia Dulce.",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&q=85&auto=format&fit=crop",
    emoji: "✨",
    occasion: "Everyday & Celebrations",
    productCount: 6,
  },
  {
    slug: "premium-cakes",
    name: "Premium Cakes",
    description: "Indulgent cakes crafted with premium ingredients for life's most special moments.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=85&auto=format&fit=crop",
    emoji: "🎂",
    occasion: "Birthdays & Milestones",
    productCount: 16,
  },
  {
    slug: "bento-cakes",
    name: "Bento Cakes",
    description: "Adorable 4-inch personal cakes — perfect gifts and individual treats.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=85&auto=format&fit=crop",
    emoji: "🎁",
    occasion: "Gifts & Personal Treats",
    productCount: 5,
  },
  {
    slug: "ensaymada",
    name: "Ensaymada",
    description: "Freshly baked Filipino brioche-style rolls in a variety of indulgent flavors.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=85&auto=format&fit=crop",
    emoji: "🥐",
    occasion: "Daily Merienda",
    productCount: 8,
  },
  {
    slug: "celebration-cakes",
    name: "Celebration Cakes",
    description: "Customizable cakes for every milestone — birthdays, weddings, graduations, and more.",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=85&auto=format&fit=crop",
    emoji: "🎉",
    occasion: "All Celebrations",
    productCount: 8,
  },
  {
    slug: "pastries",
    name: "Pastries & Rolls",
    description: "Freshly baked breads, rolls, and Filipino delicacies baked with love every day.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=85&auto=format&fit=crop",
    emoji: "🍞",
    occasion: "Everyday & Pasalubong",
    productCount: 22,
  },
];

export const occasionCategories = [
  {
    slug: "birthday-cakes",
    name: "Birthday Cakes",
    description: "Make their day unforgettable",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=85&auto=format&fit=crop",
    emoji: "🎂",
    filterSlug: "premium-cakes",
  },
  {
    slug: "wedding-cakes",
    name: "Wedding Cakes",
    description: "Celebrate your forever",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=85&auto=format&fit=crop",
    emoji: "💍",
    filterSlug: "celebration-cakes",
  },
  {
    slug: "graduation-gifts",
    name: "Graduation",
    description: "Honour every achievement",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=85&auto=format&fit=crop",
    emoji: "🎓",
    filterSlug: "bento-cakes",
  },
  {
    slug: "family-celebrations",
    name: "Family Celebrations",
    description: "Sweeten every gathering",
    image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&q=85&auto=format&fit=crop",
    emoji: "👨‍👩‍👧‍👦",
    filterSlug: "celebration-cakes",
  },
  {
    slug: "everyday-treats",
    name: "Everyday Treats",
    description: "Because every day deserves sweetness",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=85&auto=format&fit=crop",
    emoji: "☕",
    filterSlug: "ensaymada",
  },
];
