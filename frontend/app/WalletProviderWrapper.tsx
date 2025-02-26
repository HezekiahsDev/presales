"use client"; // Mark this as a Client Component

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { ReactNode, useMemo } from "react";

// Import Solana wallet styles
import "@solana/wallet-adapter-react-ui/styles.css";

interface WalletProviderWrapperProps {
  children: ReactNode;
}

export default function WalletProviderWrapper({ children }: WalletProviderWrapperProps) {
  // Configure the Solana network and wallets
  const network = WalletAdapterNetwork.Devnet; // Change to Mainnet for production
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}