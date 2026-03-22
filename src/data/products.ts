export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  ingredients: string[];
  benefits: string[];
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Verdure Conditioner",
    description: "For Smooth, Manageable & Well-Conditioned Hair with Rosemary & Thyme.",
    price: 18.00,
    category: "Hair",
    image: "https://bluehillbotanicals.com/wp-content/uploads/2025/08/Conditioner-1000x1000.webp",
    ingredients: ["Rosemary Extract", "Thyme Extract", "Natural Conditioners"],
    benefits: ["Smooths hair", "Improves manageability", "Deeply conditions"],
    rating: 4.8,
    reviews: 124,
    isBestseller: true
  },
  {
    id: "p2",
    name: "Verdure Bath Soap (Pack of 3)",
    description: "For Gentle Cleansing & Skin Comfort with Coconut & Olive Oils.",
    price: 22.00,
    category: "Body",
    image: "https://bluehillbotanicals.com/wp-content/uploads/2025/09/ChatGPT-Image-Feb-27-2026-03_12_40-PM-1000x1000.webp",
    ingredients: ["Coconut Oil", "Olive Oil", "Natural Glycerin"],
    benefits: ["Gentle cleansing", "Skin comfort", "Moisturizing"],
    rating: 4.6,
    reviews: 89
  },
  {
    id: "p3",
    name: "Verdure Hair Oil",
    description: "For Scalp Nourishment, Strong Roots & Healthy Hair with Bhringraj & 10+ Natural Ingredients.",
    price: 25.00,
    category: "Hair",
    image: "https://bluehillbotanicals.com/wp-content/uploads/2026/02/ChatGPT-Image-Feb-27-2026-12_22_17-PM-1000x1000.webp",
    ingredients: ["Bhringraj", "Amla", "Coconut Oil", "10+ Natural Herbs"],
    benefits: ["Nourishes scalp", "Strengthens roots", "Promotes healthy hair"],
    rating: 4.9,
    reviews: 210,
    isBestseller: true
  },
  {
    id: "p4",
    name: "Verdure Shampoo",
    description: "For Gentle Cleansing, Hair Strength & Scalp Balance with Biotin & Rice Bran Oil.",
    price: 20.00,
    category: "Hair",
    image: "https://bluehillbotanicals.com/wp-content/uploads/2025/09/Sham_poo-1000x1000.webp",
    ingredients: ["Biotin", "Rice Bran Oil", "Mild Surfactants"],
    benefits: ["Gentle cleansing", "Strengthens hair", "Balances scalp"],
    rating: 4.7,
    reviews: 156
  },
  {
    id: "p5",
    name: "Carrot Cake Body Butter",
    description: "For Deep Moisture, Soft Skin & Daily Comfort with Carrot & Shea Butter.",
    price: 28.00,
    category: "Body",
    image: "https://bluehillbotanicals.com/wp-content/uploads/2025/09/Body_Butter-1000x1000.webp",
    ingredients: ["Carrot Extract", "Shea Butter", "Cocoa Butter"],
    benefits: ["Deep moisture", "Softens skin", "Daily comfort"],
    rating: 4.8,
    reviews: 302,
    isNew: true
  },
  {
    id: "p6",
    name: "Carrot & Calendula Face Cream",
    description: "For Daily Moisture, Comfort & Sun Protection.",
    price: 35.00,
    category: "Face",
    image: "https://bluehillbotanicals.com/wp-content/uploads/2025/09/Face_cream-1000x1000.webp",
    ingredients: ["Carrot Extract", "Calendula Extract", "Natural Sunscreens"],
    benefits: ["Daily moisture", "Soothes skin", "Sun protection"],
    rating: 4.8,
    reviews: 415,
    isBestseller: true
  },
  {
    id: "p7",
    name: "Carrot & Vanilla Lip Balm",
    description: "For Soft, Nourished & Comfortable Lips with the goodness of Carrot extract, Vanilla extract & Coconut Butter.",
    price: 12.00,
    category: "Face",
    image: "https://bluehillbotanicals.com/wp-content/uploads/2025/09/Lip_Balm-1000x1000.webp",
    ingredients: ["Carrot Extract", "Vanilla Extract", "Coconut Butter"],
    benefits: ["Softens lips", "Nourishes", "Comfortable wear"],
    rating: 4.9,
    reviews: 188
  },
  {
    id: "p8",
    name: "Carrot & Hyaluronic Bi-Phase Serum",
    description: "For Hydration, Glow & Skin Comfort.",
    price: 42.00,
    category: "Face",
    image: "https://bluehillbotanicals.com/wp-content/uploads/2025/11/Bi_Phase_serum-1000x1000.webp",
    ingredients: ["Carrot Extract", "Hyaluronic Acid", "Vitamin C"],
    benefits: ["Deep hydration", "Radiant glow", "Skin comfort"],
    rating: 4.9,
    reviews: 250,
    isNew: true,
    isBestseller: true
  },
  {
    id: "p9",
    name: "Carrot & Vanilla Bath Soap (Pack of 3)",
    description: "For Moisturised, Comfortable Skin.",
    price: 22.00,
    category: "Body",
    image: "https://bluehillbotanicals.com/wp-content/uploads/2026/02/ChatGPT-Image-Feb-27-2026-05_05_46-PM-1000x1000.webp",
    ingredients: ["Carrot Extract", "Vanilla Extract", "Natural Oils"],
    benefits: ["Moisturizes skin", "Comfortable feel", "Gentle cleansing"],
    rating: 4.7,
    reviews: 112
  }
];

export const categories = ["All", "Face", "Body", "Hair"];
