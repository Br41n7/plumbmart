import { NextResponse } from "next/server";

import { initializePaystackTransaction } from "@/lib/payments/paystack";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const amount = Number(body.amount ?? 0);
    const email = String(body.email ?? "");

    if (!email || !amount) {
      return NextResponse.json(
        { error: "Email and amount are required." },
        { status: 400 }
      );
    }

    const response = await initializePaystackTransaction({
      email,
      amount: Math.round(amount * 100),
      callback_url: process.env.NEXT_PUBLIC_APP_URL
        ? `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success`
        : undefined,
      metadata: {
        orderId: body.orderId ?? null,
        customerName: body.customerName ?? null,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Paystack error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
