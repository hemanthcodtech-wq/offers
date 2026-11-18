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
