// Extended Mock Data for Admin Control Room

export const INITIAL_CUSTOMERS = [
  { id: 'usr-1', name: 'Ramesh Kumar', email: 'user@offersnow.in', phone: '+91 98765 00112', city: 'Hyderabad', plan: '₹9 Ad-Free', status: 'Active', joined: '12 Oct 2026', totalClaims: 14 },
  { id: 'usr-2', name: 'Priya Sharma', email: 'priya.s@gmail.com', phone: '+91 98112 33445', city: 'Bengaluru', plan: 'Free Plan', status: 'Active', joined: '20 Oct 2026', totalClaims: 6 },
  { id: 'usr-3', name: 'Venkatesh Rao', email: 'venkat.rao@yahoo.com', phone: '+91 94401 99887', city: 'Hyderabad', plan: '₹9 Ad-Free', status: 'Active', joined: '02 Nov 2026', totalClaims: 22 },
  { id: 'usr-4', name: 'Anita Verma', email: 'anita.v@outlook.com', phone: '+91 91234 44556', city: 'Mumbai', plan: 'Free Plan', status: 'Suspended', joined: '15 Sep 2026', totalClaims: 2 }
];

export const INITIAL_MERCHANTS = [
  {
    id: 'mch-1',
    businessName: 'Sri Sai Mobiles',
    owner: 'Suresh Verma',
    phone: '+91 98765 43210',
    email: 'suresh@srisaipmobiles.in',
    city: 'Hyderabad',
    category: 'Mobiles',
    plan: '₹499/mo Merchant Pass',
    status: 'Verified',
    joined: '05 Aug 2026',
    activeOffersCount: 1,
    totalViews: '12.4K',
    callsReceived: 482
  },
  {
    id: 'mch-2',
    businessName: 'Trends Fashion & Boutique',
    owner: 'Meena Kapoor',
    phone: '+91 91234 56789',
    email: 'contact@trendsfashion.in',
    city: 'Hyderabad',
    category: 'Fashion',
    plan: '₹499/mo Merchant Pass',
    status: 'Verified',
    joined: '18 Aug 2026',
    activeOffersCount: 1,
    totalViews: '8.2K',
    callsReceived: 310
  },
  {
    id: 'mch-3',
    businessName: 'Fresh Supermart & Organics',
    owner: 'G. Narayana',
    phone: '+91 94401 23456',
    email: 'sales@freshsupermart.com',
    city: 'Hyderabad',
    category: 'Grocery',
    plan: '₹1,299/Quarterly',
    status: 'Verified',
    joined: '01 Sep 2026',
    activeOffersCount: 1,
    totalViews: '15.1K',
    callsReceived: 620
  },
  {
    id: 'mch-4',
    businessName: 'The Royal Spice Restaurant',
    owner: 'Mohammed Altaf',
    phone: '+91 98850 11223',
    email: 'info@royalspicehyd.com',
    city: 'Hyderabad',
    category: 'Dining',
    plan: '₹499/mo Merchant Pass',
    status: 'Pending Review',
    joined: '17 Nov 2026',
    activeOffersCount: 1,
    totalViews: '3.1K',
    callsReceived: 95
  }
];

export const INITIAL_FRANCHISES = [
  {
    id: 'frc-1',
    zone: 'Zone #04: Hyderabad Central & West',
    city: 'Hyderabad',
    operatorName: 'K. R. Mohan (Franchise Head)',
    phone: '+91 98480 12345',
    email: 'franchise.hyd@offersnow.in',
    status: 'Active',
    registeredStores: 84,
    monthlyEarnings: '₹1,25,430',
    commissionCut: '30%',
    payoutStatus: 'Settled'
  },
  {
    id: 'frc-2',
    zone: 'Zone #02: Bengaluru East & Tech Park',
    city: 'Bengaluru',
    operatorName: 'David Christopher',
    phone: '+91 98801 54321',
    email: 'franchise.blr@offersnow.in',
    status: 'Active',
    registeredStores: 62,
    monthlyEarnings: '₹98,200',
    commissionCut: '30%',
    payoutStatus: 'Settled'
  },
  {
    id: 'frc-3',
    zone: 'Zone #01: South Mumbai & Bandra',
    city: 'Mumbai',
    operatorName: 'Vikramaditya Singhania',
    phone: '+91 98200 67890',
    email: 'franchise.mum@offersnow.in',
    status: 'Active',
    registeredStores: 110,
    monthlyEarnings: '₹1,64,800',
    commissionCut: '30%',
    payoutStatus: 'Processing'
  },
  {
    id: 'frc-4',
    zone: 'Zone #06: Delhi NCR & Gurgaon Hub',
    city: 'Delhi NCR',
    operatorName: 'Sanjay Malhotra',
    phone: '+91 98100 23456',
    email: 'franchise.del@offersnow.in',
    status: 'Under Audit',
    registeredStores: 45,
    monthlyEarnings: '₹68,500',
    commissionCut: '30%',
    payoutStatus: 'On Hold'
  }
];

export const ADMIN_METRICS = {
  totalRevenue: '₹14,86,400',
  monthlyGrowth: '+28.4%',
  totalCustomers: '48,290',
  activeShops: '301',
  activeFranchises: '12 Cities',
  pendingDealApprovals: 4,
  systemUptime: '99.98%'
};

// Initial Approval Requests Queues (Populated from Signups)
export const INITIAL_SHOP_REQUESTS = [
  {
    id: 'req-shop-1',
    businessName: 'Vibe Footwear & Sneakers',
    owner: 'Arjun Mehta',
    phone: '+91 98190 44556',
    email: 'arjun@vibefootwear.in',
    city: 'Hyderabad',
    category: 'Fashion',
    address: 'Shop #14, Road #36, Jubilee Hills',
    plan: '₹499/mo Merchant Pass',
    discount: '35% OFF',
    requestedAt: '10 Mins ago',
    status: 'Pending',
    notes: 'Inauguration discount for sneakers & running shoes.'
  },
  {
    id: 'req-shop-2',
    businessName: 'Cafe Aromas & Bakery',
    owner: 'Fatima Zaid',
    phone: '+91 98450 77889',
    email: 'contact@cafearomas.in',
    city: 'Hyderabad',
    category: 'Dining',
    address: 'Near Cyber Towers, Hitec City',
    plan: '₹499/mo Merchant Pass',
    discount: '25% OFF',
    requestedAt: '1 Hour ago',
    status: 'Pending',
    notes: 'Weekend brunch and coffee combo offer.'
  }
];

export const INITIAL_FRANCHISE_REQUESTS = [
  {
    id: 'req-frc-1',
    applicantName: 'Vikram Choudhury',
    zone: 'Zone #08: Gachibowli & Financial District',
    city: 'Hyderabad',
    phone: '+91 98860 12345',
    email: 'vikram.c@franchisepartner.in',
    aadharNumber: '8765 4321 0987',
    panNumber: 'ABCDE9876K',
    bankAccount: '50100456789123',
    ifscCode: 'HDFC0001890',
    bankName: 'HDFC Bank Ltd.',
    experience: '5 Years retail FMCG distribution',
    requestedAt: '25 Mins ago',
    status: 'Pending'
  },
  {
    id: 'req-frc-2',
    applicantName: 'Suresh B. Nair',
    zone: 'Zone #03: Whitefield & Marathahalli Hub',
    city: 'Bengaluru',
    phone: '+91 99001 88776',
    email: 'suresh.nair@blrhub.in',
    aadharNumber: '9123 4567 8901',
    panNumber: 'BNMPL5432Q',
    bankAccount: '00290156789012',
    ifscCode: 'ICIC0000029',
    bankName: 'ICICI Bank',
    experience: '8 Years franchise logistics operator',
    requestedAt: '3 Hours ago',
    status: 'Pending'
  }
];

export const INITIAL_OFFER_REQUESTS = [
  {
    id: 'req-ofr-1',
    shopName: 'Sri Sai Mobiles',
    title: 'Festival Mega Sale: 50% Off on All 5G Smartphones',
    category: 'Mobiles',
    discount: '50%',
    city: 'Hyderabad',
    submittedBy: 'Suresh Verma',
    submittedAt: '30 Mins ago',
    description: 'Flat 50% off on premium smartphone accessories & ₹3,000 instant cashback on 5G devices.',
    validTill: '31 Dec 2026',
    status: 'Pending',
    bannerImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'req-ofr-2',
    shopName: 'Trends Fashion & Boutique',
    title: 'Winter Clearance: Buy 1 Get 1 Free on Designer Kurtas',
    category: 'Fashion',
    discount: 'BOGO',
    city: 'Hyderabad',
    submittedBy: 'Meena Kapoor',
    submittedAt: '2 Hours ago',
    description: 'Buy 1 Get 1 Free on all designer ethnic wear and handloom sarees. Valid till stock lasts.',
    validTill: '25 Dec 2026',
    status: 'Pending',
    bannerImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80'
  }
];
