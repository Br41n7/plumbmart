// ─── Store Information ────────────────────────────────────────────────
export const STORE_NAME = "PlumbMart";
export const STORE_DESCRIPTION = "Quality Plumbing Materials at Wholesale Prices";
export const STORE_TAGLINE = "Your trusted source for plumbing supplies";

// ─── Nigerian States ─────────────────────────────────────────────────
export const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
  "Ekiti", "Enugu", "FCT - Abuja", "Gombe", "Imo", "Jigawa",
  "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
  "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun",
  "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
] as const;

// ─── Order Statuses ──────────────────────────────────────────────────
export const ORDER_STATUS_LABELS: Record<string, string> = {
  PENDING: "Pending",
  AWAITING_PAYMENT: "Awaiting Payment",
  PAID: "Paid",
  PROCESSING: "Processing",
  READY_FOR_DISPATCH: "Ready for Dispatch",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
  REFUNDED: "Refunded",
};

export const ORDER_STATUS_COLORS: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-800",
  AWAITING_PAYMENT: "bg-orange-100 text-orange-800",
  PAID: "bg-green-100 text-green-800",
  PROCESSING: "bg-blue-100 text-blue-800",
  READY_FOR_DISPATCH: "bg-indigo-100 text-indigo-800",
  SHIPPED: "bg-purple-100 text-purple-800",
  DELIVERED: "bg-emerald-100 text-emerald-800",
  CANCELLED: "bg-red-100 text-red-800",
  REFUNDED: "bg-gray-100 text-gray-800",
};

// ─── Navigation ──────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ─── Product Sort Options ────────────────────────────────────────────
export const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Name: A to Z", value: "name_asc" },
  { label: "Name: Z to A", value: "name_desc" },
  { label: "Best Selling", value: "best_selling" },
];

// ─── Pagination ──────────────────────────────────────────────────────
export const PRODUCTS_PER_PAGE = 12;
export const ORDERS_PER_PAGE = 10;
export const ADMIN_ITEMS_PER_PAGE = 20;

// ─── Delivery ────────────────────────────────────────────────────────
export const DELIVERY_OPTIONS = [
  {
    id: "standard",
    name: "Standard Delivery",
    description: "3-5 business days",
    priceInKobo: 250000, // ₦2,500
  },
  {
    id: "express",
    name: "Express Delivery",
    description: "1-2 business days",
    priceInKobo: 500000, // ₦5,000
  },
  {
    id: "pickup",
    name: "Store Pickup",
    description: "Pick up from our warehouse",
    priceInKobo: 0,
  },
];
