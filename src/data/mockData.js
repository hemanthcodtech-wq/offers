// Mock data representing offers, categories, user details, franchise stats, and business data
export const OFFERS_DATA = [
  {
    id: 'sri-sai-mobiles',
    title: 'Sri Sai Mobiles',
    tag: 'Special Offer',
    badge: '50% OFF',
    discount: '50%',
    description: 'Upto 50% Off on All Mobiles',
    longDescription: 'Get Flat 50% Off on All Mobiles for this weekend only. Exchange bonuses and zero down payment options available on latest flagship smartphones.',
    category: 'Mobiles',
    distance: '1.2 km',
    validTill: '30 Nov 2026',
    phone: '+91 98765 43210',
    location: 'Ameerpet, Hyderabad',
    lat: 17.4375,
    lng: 78.4482,
    rating: 4.8,
    reviews: 240,
    bannerImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    storeFrontImage: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80',
    terms: ['Valid on selected mobile brands only', 'One redemption per customer per visit', 'Cannot be clubbed with existing in-store promotions']
  },
  {
    id: 'trends-fashion',
    title: 'Trends Fashion',
    tag: 'Mega Sale',
    badge: 'Flat 40% OFF',
    discount: '40%',
    description: 'Flat 40% Off on Fashion & Apparel',
    longDescription: 'Revamp your wardrobe with the grand season clearance. Flat 40% discount across men, women, and kids ethnic and western collections.',
    category: 'Fashion',
    distance: '2.5 km',
    validTill: '05 Dec 2026',
    phone: '+91 91234 56789',
    location: 'Banjara Hills, Road No. 12, Hyderabad',
    lat: 17.4156,
    lng: 78.4350,
    rating: 4.6,
    reviews: 180,
    bannerImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    storeFrontImage: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80',
    terms: ['Applies on fresh arrivals and selected collections', 'Show the Offers NOW coupon code at the counter before billing']
  },
  {
    id: 'fresh-supermart',
    title: 'Fresh Supermart & Organics',
    tag: 'Weekend Dhamaka',
    badge: '30% OFF',
    discount: '30%',
    description: 'Flat 30% Off on Groceries & Fruits',
    longDescription: 'Premium organic fruits, farm-fresh vegetables, and monthly pantry essentials at 30% flat discount.',
    category: 'Grocery',
    distance: '0.8 km',
    validTill: '28 Nov 2026',
    phone: '+91 94401 23456',
    location: 'SR Nagar, Hyderabad',
    lat: 17.4430,
    lng: 78.4440,
    rating: 4.9,
    reviews: 310,
    bannerImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    storeFrontImage: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80',
    terms: ['Minimum purchase of ₹500 required', 'Valid till stocks last']
  },
  {
    id: 'spice-kitchen',
    title: 'The Royal Spice Restaurant',
    tag: 'Chef Special',
    badge: 'BOGO',
    discount: 'Buy 1 Get 1',
    description: 'Buy 1 Biryani Get 1 Free',
    longDescription: 'Authentic Hyderabadi Dum Biryani and Tandoor delights. Order one special Biryani and receive another absolutely free with Offers NOW pass.',
    category: 'Dining',
    distance: '3.1 km',
    validTill: '15 Dec 2026',
    phone: '+91 98850 11223',
    location: 'Jubilee Hills, Hyderabad',
    lat: 17.4320,
    lng: 78.4070,
    rating: 4.7,
    reviews: 520,
    bannerImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    storeFrontImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
    terms: ['Dine-in only', 'Valid all week except Sunday dinner rush']
  }
];

export const CATEGORIES = ['All', 'Mobiles', 'Fashion', 'Grocery', 'Dining', 'Electronics'];

export const INITIAL_USER = {
  name: 'Ramesh Kumar',
  email: 'user@offersnow.in',
  phone: '+91 98765 00112',
  plan: '₹9 Plan Active',
  planDesc: 'Ad-Free Experience',
  role: 'User', // 'User' | 'Business' | 'Franchise'
  location: 'Hyderabad'
};

export const FRANCHISE_DATA = {
  area: 'Kukatpally & Ameerpet Zone',
  totalEarnings: '₹1,25,430',
  monthlyBreakdown: {
    businessPosts: '₹64,430',
    googleAds: '₹42,000',
    directAds: '₹19,000'
  },
  metrics: {
    registeredBusinesses: 84,
    activeAreaOffers: 142,
    totalViews: '3.8 Lakh',
    leadConversions: '14,200'
  },
  recentPartners: [
    { name: 'Sri Sai Mobiles', plan: 'Gold Merchant (₹499/mo)', date: 'Today, 2:30 PM', status: 'Live' },
    { name: 'Royal Tiffins', plan: 'Basic (₹299/mo)', date: 'Yesterday', status: 'Live' },
    { name: 'Trends Fashion', plan: 'Featured Spot', date: '3 days ago', status: 'Live' }
  ]
};
