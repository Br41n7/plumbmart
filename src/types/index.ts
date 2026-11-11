export interface CartProduct {
  id: string;
  name: string;
  slug: string;
  sku: string;
  priceInKobo: number;
  comparePriceInKobo?: number | null;
  stock: number;
  image?: string;
  brand?: string;
  category?: string;
}

export interface CartVariant {
  id: string;
  name: string;
  sku: string;
  priceInKobo: number;
  stock: number;
}

export interface CartItemData {
  id: string;
  product: CartProduct;
  variant?: CartVariant | null;
  quantity: number;
}

export interface CartState {
  items: CartItemData[];
  isLoading: boolean;
  sessionId: string | null;
  addItem: (product: CartProduct, quantity: number, variant?: CartVariant | null) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getItemCount: () => number;
  setSessionId: (id: string) => void;
}

export interface ProductWithRelations {
  id: string;
  name: string;
  slug: string;
  sku: string;
  description?: string | null;
  shortDescription?: string | null;
  priceInKobo: number;
  comparePriceInKobo?: number | null;
  stock: number;
  lowStockThreshold: number;
  weight?: number | null;
  isFeatured: boolean;
  isBestSeller: boolean;
  isActive: boolean;
  metaTitle?: string | null;
  metaDescription?: string | null;
  createdAt: Date;
  updatedAt: Date;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  brand?: {
    id: string;
    name: string;
    slug: string;
  } | null;
  images: {
    id: string;
    url: string;
    altText?: string | null;
    isPrimary: boolean;
    sortOrder: number;
  }[];
  variants: {
    id: string;
    name: string;
    sku: string;
    priceInKobo: number;
    stock: number;
    attributes?: Record<string, string> | null;
    isActive: boolean;
  }[];
  specifications: {
    id: string;
    name: string;
    value: string;
    sortOrder: number;
  }[];
  reviews?: {
    id: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    user: { name: string | null };
    createdAt: Date;
  }[];
  _count?: {
    reviews: number;
  };
}

export interface CategoryWithCount {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  image?: string | null;
  parentId?: string | null;
  isActive: boolean;
  _count: {
    products: number;
  };
  children?: CategoryWithCount[];
}

export interface BrandWithCount {
  id: string;
  name: string;
  slug: string;
  logo?: string | null;
  _count: {
    products: number;
  };
}

export interface ProductFilters {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  inStock?: boolean;
  sort?: string;
  page?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface OrderWithDetails {
  id: string;
  orderNumber: string;
  status: string;
  subtotalInKobo: number;
  deliveryFeeInKobo: number;
  discountInKobo: number;
  taxInKobo: number;
  totalInKobo: number;
  currency: string;
  note?: string | null;
  shippingAddress: Record<string, string> | null;
  createdAt: Date;
  updatedAt: Date;
  user?: {
    name: string | null;
    email: string;
  } | null;
  guestEmail?: string | null;
  items: {
    id: string;
    name: string;
    sku: string;
    quantity: number;
    priceInKobo: number;
    totalInKobo: number;
    product: {
      slug: string;
      images: { url: string }[];
    };
  }[];
  payments: {
    id: string;
    reference: string;
    status: string;
    amountInKobo: number;
    provider: string;
    paidAt?: Date | null;
  }[];
  delivery?: {
    status: string;
    trackingNumber?: string | null;
    carrier?: string | null;
    estimatedDate?: Date | null;
    deliveredDate?: Date | null;
  } | null;
}

export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  pendingOrders: number;
  totalCustomers: number;
  bestSellers: {
    product: { name: string; slug: string };
    totalSold: number;
  }[];
  lowStockProducts: {
    id: string;
    name: string;
    stock: number;
    lowStockThreshold: number;
  }[];
  recentOrders: OrderWithDetails[];
}
