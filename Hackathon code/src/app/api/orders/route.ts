// app/api/orders/route.ts
import { createClient } from '@sanity/client';
import { NextResponse } from 'next/server';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Create the order document in Sanity
    const result = await client.create({
      _type: 'order',
      userID: body.userID,
      customer: {
        firstName: body.firstName,
        lastName: body.lastName,
        companyName: body.companyName,
        email: body.email,
        phone: body.phone,
      },
      shippingAddress: {
        country: body.country,
        province: body.province,
        city: body.city,
        streetAddress: body.streetAddress,
        zipCode: body.zipCode,
      },
      orderProducts: body.orderProduct,
      paymentMethod: body.payment_method,
      paymentStatus: body.payment_status,
      orderStatus: 'pending'
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Order creation failed:', error);
    return NextResponse.json(
      { success: false, error: 'Order creation failed' },
      { status: 500 }
    );
  }
}