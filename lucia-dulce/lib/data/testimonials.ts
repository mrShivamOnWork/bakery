export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  product?: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Maria Santos",
    location: "Davao City",
    rating: 5,
    text: "The Yema Classic is absolutely divine! My whole family is obsessed. We order every birthday and celebration. The frosting is so creamy and the chiffon is perfectly light. Nothing beats Lucia Dulce!",
    product: "Yema Classic",
  },
  {
    id: "t2",
    name: "Joanna Reyes",
    location: "Tagum City",
    rating: 5,
    text: "I ordered the KitKat Nips cake for my daughter's 7th birthday and it was a total showstopper! Every guest was asking where I got it. The quality is premium and the taste is even better. Absolutely worth every peso.",
    product: "KitKat Nips",
  },
  {
    id: "t3",
    name: "Crisanto Dela Cruz",
    location: "Digos City",
    rating: 5,
    text: "Their ensaymadas are the best I've ever tasted — better than any mall bakery. The cream cheese variant is my morning addiction. Fresh every day, reasonably priced, and so, so good.",
    product: "Cream Cheese Ensaymada",
  },
  {
    id: "t4",
    name: "Rhea Villanueva",
    location: "Davao City",
    rating: 5,
    text: "Lucia Dulce is my go-to for all special occasions. The Mango Graham cake for my parents' anniversary was stunning and incredibly delicious. The team was so accommodating with my requests. 10/10 every time!",
    product: "Mango Graham Cake",
  },
  {
    id: "t5",
    name: "Angelo Mercado",
    location: "Tagum City",
    rating: 5,
    text: "Ordered bento cakes as gifts for my team and everyone loved them! So cute and delicious. The Red Velvet bento was a hit. Will definitely order again for future celebrations.",
    product: "Red Velvet Bento",
  },
  {
    id: "t6",
    name: "Liezl Fernandez",
    location: "Santa Cruz, Davao Del Sur",
    rating: 5,
    text: "The Yema Ube Halaya is a masterpiece. You can taste the love and craftsmanship in every slice. This bakery truly lives by their motto — every day IS a celebration when you have their cakes!",
    product: "Yema Ube Halaya",
  },
];
