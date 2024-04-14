import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const getStripeSession = async (userId) => {
  const lineItems = [
    {
      price: process.env.STRIPE_PRODUCT_PRICE_ID,
      quantity: 1,
    },
  ];

  const checkoutSession = await stripe.checkout.sessions.create({
    line_items: lineItems,
    metadata: {
      userId: userId,
    },
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/payments/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/payments/failed`,
  });
  return checkoutSession.url;
};
