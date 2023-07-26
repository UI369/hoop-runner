import { useState } from "react";
import { useEffect } from "react";
import HoopRunner from "./hooprunner/HoopRunner";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { optimism } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AuthProvider } from "react-auth-kit";

const { chains, publicClient } = configureChains(
  [optimism],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_ID }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "HoopRunner",
  projectId: "HOOPRUNNER_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

import "./App.css";
export default function App() {
  return (
    <div className="App">
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.domain.hostname}
        cookieSecure={false}
      >
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <ConnectButton />
            <HoopRunner />
          </RainbowKitProvider>
        </WagmiConfig>
      </AuthProvider>
    </div>
  );
}
