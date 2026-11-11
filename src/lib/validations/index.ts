import { z } from "zod";
import { NIGERIAN_STATES } from "@/lib/constants";

// ─── Auth Schemas ────────────────────────────────────────────────────

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    phone: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// ─── Address Schema ─────────────────────────────────────────────────

export const addressSchema = z.object({
  label: z.string().optional(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().optional(),
  address1: z.string().min(1, "Address is required"),
  address2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z
    .string()
    .refine((value) => NIGERIAN_STATES.includes(value as (typeof NIGERIAN_STATES)[number]), {
      message: "Please select a valid state",
    }),
  postalCode: z.string().optional(),
  phone: z.string().optional(),
  isDefault: z.boolean().optional(),
});

// ─── Checkout Schema ────────────────────────────────────────────────

export const checkoutSchema = z.object({
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().optional(),
  address1: z.string().min(1, "Address is required"),
  address2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().optional(),
  deliveryOption: z.string().min(1, "Please select a delivery option"),
  instructions: z.string().optional(),
  note: z.string().optional(),
  couponCode: z.string().optional(),
});

// ─── Product Schemas (Admin) ────────────────────────────────────────

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  sku: z.string().min(1, "SKU is required"),
  description: z.string().optional(),
  shortDescription: z.string().max(500).optional(),
  categoryId: z.string().min(1, "Category is required"),
  brandId: z.string().optional(),
  priceInKobo: z.number().int().positive("Price must be greater than zero"),
  comparePriceInKobo: z.number().int().positive().optional().nullable(),
  costPriceInKobo: z.number().int().positive().optional().nullable(),
  stock: z.number().int().min(0, "Stock cannot be negative"),
  lowStockThreshold: z.number().int().min(0).optional(),
  weight: z.number().positive().optional().nullable(),
  isFeatured: z.boolean().optional(),
  isBestSeller: z.boolean().optional(),
  isActive: z.boolean().optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().max(320).optional(),
});

export const categorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  description: z.string().optional(),
  parentId: z.string().optional().nullable(),
  image: z.string().optional(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
});

export const brandSchema = z.object({
  name: z.string().min(1, "Brand name is required"),
  logo: z.string().optional(),
  description: z.string().optional(),
  isActive: z.boolean().optional(),
});

export const couponSchema = z.object({
  code: z.string().min(1, "Coupon code is required").toUpperCase(),
  description: z.string().optional(),
  discountType: z.enum(["PERCENTAGE", "FIXED_AMOUNT"]),
  discountValue: z.number().int().positive("Discount value must be positive"),
  minOrderInKobo: z.number().int().positive().optional().nullable(),
  maxDiscountKobo: z.number().int().positive().optional().nullable(),
  maxUses: z.number().int().positive().optional().nullable(),
  isActive: z.boolean().optional(),
  validFrom: z.string().optional(),
  validUntil: z.string().optional().nullable(),
});

// ─── Newsletter Schema ──────────────────────────────────────────────

export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

// ─── Review Schema ──────────────────────────────────────────────────

export const reviewSchema = z.object({
  rating: z.number().int().min(1).max(5),
  title: z.string().optional(),
  comment: z.string().optional(),
});

// ─── Type Exports ───────────────────────────────────────────────────

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export type AddressInput = z.infer<typeof addressSchema>;
export type CheckoutInput = z.infer<typeof checkoutSchema>;
export type ProductInput = z.infer<typeof productSchema>;
export type CategoryInput = z.infer<typeof categorySchema>;
export type BrandInput = z.infer<typeof brandSchema>;
export type CouponInput = z.infer<typeof couponSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type ReviewInput = z.infer<typeof reviewSchema>;
