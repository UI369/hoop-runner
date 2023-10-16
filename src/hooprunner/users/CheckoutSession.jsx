import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

export default function StripeCheckoutButton() {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    // Load the Stripe.js asynchronously
    const loadStripeClient = async () => {
      const stripeClient = await loadStripe("your_public_stripe_key");
      setStripe(stripeClient);
    };

    loadStripeClient();
  }, []);

  const handleStripeCheckout = async () => {
    if (stripe) {
      // Make a POST request to create a Checkout Session on your server
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/create-checkout-session`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const sessionId = data.id;

          // Redirect the customer to the Stripe hosted payment page
          await stripe.redirectToCheckout({ sessionId });
        } else {
          console.error("Failed to create Checkout Session.");
        }
      } catch (error) {
        console.error("Error creating Checkout Session:", error);
      }
    }
  };

  return (
    <div>
      <button onClick={handleStripeCheckout}>Pay with Stripe</button>
    </div>
  );
}
