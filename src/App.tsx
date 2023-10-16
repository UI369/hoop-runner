import RouteComponent from "./hooprunner/routes/RouteComponent";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";

const stripePromise = loadStripe("pk_test_YDQ9eXZherXOjd3TF3W9JyDO");

export default function App() {
  // const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch(`${import.meta.env.VITE_API_URL}/create-payment-intent`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  // const appearance: { theme: "stripe" | "night" | "flat" } = {
  //   theme: "stripe",
  // };

  // const options = {
  //   clientSecret,
  //   appearance,
  // };

  return (
    <div>
      {
        /* {clientSecret && ( */
        // <Elements options={options} stripe={stripePromise}> */
        <RouteComponent />
        //  </Elements>)}
      }
    </div>
  );
}
