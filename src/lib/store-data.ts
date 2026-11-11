export type StoreCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  accent: string;
};

export type StoreProduct = {
  id: string;
  name: string;
  slug: string;
  sku: string;
  brand: string;
  category: string;
  shortDescription: string;
  description: string;
  priceInKobo: number;
  comparePriceInKobo?: number;
  stock: number;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  specs: { label: string; value: string }[];
};

export const categories: StoreCategory[] = [
  {
    id: "pipes",
    name: "Pipes & Fittings",
    slug: "pipes-fittings",
    description: "Durable piping systems for residential and commercial water networks.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    accent: "from-sky-100 to-blue-50",
  },
  {
    id: "valves",
    name: "Valves & Controls",
    slug: "valves-controls",
    description: "Precision shut-off and flow control for high-performance systems.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
    accent: "from-cyan-100 to-sky-50",
  },
  {
    id: "pumps",
    name: "Pumps & Motors",
    slug: "pumps-motors",
    description: "Efficient water transfer and pressure solutions for every load.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    accent: "from-emerald-100 to-teal-50",
  },
  {
    id: "sanitary",
    name: "Sanitary Ware",
    slug: "sanitary-ware",
    description: "Modern, dependable fixtures for bathrooms, kitchens and utility rooms.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
    accent: "from-indigo-100 to-violet-50",
  },
];

export const products: StoreProduct[] = [
  {
    id: "pvc-pressure-pipe",
    name: "PVC Pressure Pipe",
    slug: "pvc-pressure-pipe",
    sku: "PVC-200-32",
    brand: "AquaFlow",
    category: "Pipes & Fittings",
    shortDescription: "High-pressure pipe for clean water distribution and irrigation networks.",
    description:
      "Built to handle demanding flow rates with excellent corrosion resistance and dimensional stability, this pressure pipe is ideal for supply lines, irrigation, and domestic plumbing installations.",
    priceInKobo: 235000,
    comparePriceInKobo: 280000,
    stock: 142,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    reviewCount: 98,
    badge: "Top Rated",
    isFeatured: true,
    isBestSeller: true,
    specs: [
      { label: "Material", value: "UPVC" },
      { label: "Diameter", value: "32 mm" },
      { label: "Pressure", value: "PN 10" },
      { label: "Length", value: "6 m" },
    ],
  },
  {
    id: "ball-valve-1",
    name: "Brass Ball Valve",
    slug: "brass-ball-valve",
    sku: "VAL-110-01",
    brand: "FlowMaster",
    category: "Valves & Controls",
    shortDescription: "Full-port control valve for clean shutoff and reliable flow management.",
    description:
      "Precision-machined brass body and stainless internals provide dependable shutoff, lower friction loss, and long service life in residential, commercial, and industrial systems.",
    priceInKobo: 165000,
    comparePriceInKobo: 195000,
    stock: 84,
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    reviewCount: 64,
    badge: "Trade Pick",
    isFeatured: true,
    specs: [
      { label: "Material", value: "Brass" },
      { label: "Size", value: "1 inch" },
      { label: "Seal", value: "EPDM" },
      { label: "Max Temp", value: "90°C" },
    ],
  },
  {
    id: "submersible-pump",
    name: "Submersible Pump",
    slug: "submersible-pump",
    sku: "PMP-310-7",
    brand: "HydroForce",
    category: "Pumps & Motors",
    shortDescription: "High-output pump for efficient water transfer and pressure boosting.",
    description:
      "This robust submersible pump is engineered for consistent output, quiet operation, and durable performance in utility, irrigation, and residential applications.",
    priceInKobo: 420000,
    comparePriceInKobo: 485000,
    stock: 26,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewCount: 111,
    badge: "Best Seller",
    isBestSeller: true,
    specs: [
      { label: "Power", value: "0.75 kW" },
      { label: "Head", value: "28 m" },
      { label: "Flow", value: "30 L/min" },
      { label: "Phase", value: "Single" },
    ],
  },
  {
    id: "ceramic-basin",
    name: "Ceramic Basin Set",
    slug: "ceramic-basin-set",
    sku: "SAN-420-01",
    brand: "NexaBath",
    category: "Sanitary Ware",
    shortDescription: "Contemporary wash basin system built for durability and easy cleaning.",
    description:
      "Featuring a smooth ceramic finish, strong glaze, and compact form, this basin set elevates residential baths while standing up to heavy daily use.",
    priceInKobo: 310000,
    comparePriceInKobo: 360000,
    stock: 39,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
    reviewCount: 54,
    specs: [
      { label: "Material", value: "Ceramic" },
      { label: "Finish", value: "Gloss White" },
      { label: "Mount", value: "Wall" },
      { label: "Drain", value: "Included" },
    ],
  },
  {
    id: "pex-tubing-kit",
    name: "PEX Tubing Kit",
    slug: "pex-tubing-kit",
    sku: "PIP-530-02",
    brand: "AquaFlow",
    category: "Pipes & Fittings",
    shortDescription: "Flexible and corrosion-resistant tubing for efficient water distribution.",
    description:
      "This flexible PEX system offers easier installation, fewer joints, and better thermal performance while reducing noise and maintenance in plumbing systems.",
    priceInKobo: 148000,
    comparePriceInKobo: 175000,
    stock: 210,
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
    rating: 4.5,
    reviewCount: 41,
    specs: [
      { label: "Type", value: "PEX-A" },
      { label: "Diameter", value: "20 mm" },
      { label: "Color", value: "Blue/Red" },
      { label: "Length", value: "100 m" },
    ],
  },
  {
    id: "gate-valve",
    name: "Industrial Gate Valve",
    slug: "industrial-gate-valve",
    sku: "VAL-905-12",
    brand: "FlowMaster",
    category: "Valves & Controls",
    shortDescription: "Heavy-duty valve designed for larger volume pipelines and utility systems.",
    description:
      "Made for high durability and smooth isolation, this gate valve supports demanding pipelines where reliable shutoff and low maintenance matter most.",
    priceInKobo: 520000,
    comparePriceInKobo: 610000,
    stock: 17,
    image:
      "https://images.unsplash.com/photo-1619995b0d3b7?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewCount: 33,
    badge: "Pro Grade",
    specs: [
      { label: "Material", value: "Cast Steel" },
      { label: "Size", value: "2 inch" },
      { label: "End Type", value: "Flanged" },
      { label: "Pressure", value: "Class 150" },
    ],
  },
  {
    id: "domestic-water-pump",
    name: "Domestic Water Pump",
    slug: "domestic-water-pump",
    sku: "PMP-220-12",
    brand: "HydroForce",
    category: "Pumps & Motors",
    shortDescription: "Compact pressure booster for steady domestic and mixed-use flow.",
    description:
      "Ideal for homes and light commercial properties, this pump provides stable pressure, low power draw, and dependable operation with minimal upkeep.",
    priceInKobo: 278000,
    comparePriceInKobo: 325000,
    stock: 58,
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    reviewCount: 120,
    badge: "Home Favorite",
    specs: [
      { label: "Power", value: "1.0 HP" },
      { label: "Pressure", value: "45 psi" },
      { label: "Connection", value: "1 inch" },
      { label: "Use", value: "Domestic" },
    ],
  },
  {
    id: "toilet-suite",
    name: "Luxury Toilet Suite",
    slug: "luxury-toilet-suite",
    sku: "SAN-888-10",
    brand: "NexaBath",
    category: "Sanitary Ware",
    shortDescription: "Sleek water-saving WC suite with soft-close seat and efficient flushing.",
    description:
      "The modern one-piece design reduces cleaning effort while improving comfort and efficiency across residential and hospitality projects.",
    priceInKobo: 355000,
    comparePriceInKobo: 405000,
    stock: 44,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    reviewCount: 77,
    specs: [
      { label: "Type", value: "One-piece" },
      { label: "Flow", value: "6 L flush" },
      { label: "Seat", value: "Soft close" },
      { label: "Finish", value: "White gloss" },
    ],
  },
];

export const brands = [
  "AquaFlow",
  "FlowMaster",
  "HydroForce",
  "NexaBath",
  "UltraPipe",
  "Atlas Valve",
];

export const testimonials = [
  {
    name: "Ngozi Okafor",
    role: "Project Manager, Starlight Estates",
    quote:
      "PlumbMart consistently delivers on time and helps us stay within budget without sacrificing quality on our plumbing installs.",
  },
  {
    name: "Tunde Adebisi",
    role: "Facility Lead, Aster Clinics",
    quote:
      "Their technical guidance and reliable stock availability have made them our preferred plumbing supplier for all maintenance work.",
  },
  {
    name: "Mariam Yusuf",
    role: "Homeowner, Lekki Phase 1",
    quote:
      "The quality of the products and the customer support were excellent from first order to final delivery. Highly recommended.",
  },
];

export const formatCurrency = (valueInKobo: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(valueInKobo / 100);
