const PAYSTACK_API_URL = "https://api.paystack.co";

export type PaystackInitializePayload = {
  email: string;
  amount: number;
  reference?: string;
  callback_url?: string;
  metadata?: Record<string, unknown>;
};

export type PaystackInitializeResponse = {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
};

export async function initializePaystackTransaction(
  payload: PaystackInitializePayload
): Promise<PaystackInitializeResponse> {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;

  if (!secretKey) {
    throw new Error("PAYSTACK_SECRET_KEY is not configured.");
  }

  const response = await fetch(`${PAYSTACK_API_URL}/transaction/initialize`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Paystack initialize failed: ${text}`);
  }

  return (await response.json()) as PaystackInitializeResponse;
}

export async function verifyPaystackTransaction(reference: string) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;

  if (!secretKey) {
    throw new Error("PAYSTACK_SECRET_KEY is not configured.");
  }

  const response = await fetch(`${PAYSTACK_API_URL}/transaction/verify/${reference}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${secretKey}`,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Paystack verification failed: ${text}`);
  }

  return response.json();
}
