import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

/**
 * UnclaimedProperty AI: Stripe Checkout
 * 
 * Target: Mass market consumers who just found out the state owes them money.
 * Price Point: $29 flat fee to generate the PDF claim forms. High conversion rate because ROI is immediate.
 */

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const PROPERTY_FEE_CENTS = 2900; // $29.00

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const { userEmail, foundAmount } = req.body;

    console.log(`[Property-Billing] 💳 Initiating $29 Unlock Fee for ${userEmail}`);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'apple_pay', 'google_pay'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `State Escheatment Claim Packet`,
              description: `Autonomous generation of notarized state claim forms to unlock $${foundAmount} in seized property.`,
            },
            unit_amount: PROPERTY_FEE_CENTS,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/scanner?canceled=true`,
      customer_email: userEmail,
      metadata: {
        service: 'PROPERTY_UNLOCK',
        projectedPayout: foundAmount
      }
    });

    console.log(`[Property-Billing] ✅ Stripe Session Created: ${session.id}`);

    return res.status(200).json({ url: session.url });

  } catch (error) {
    console.error("[Property-Billing] Stripe Checkout Failure:", error);
    return res.status(500).json({ error: 'Failed to initialize checkout.' });
  }
}
