import { ReactNode } from "react";
import "./globals.css"; // Import global CSS
import Header from "./components/Header";
import Footer from "./components/Footer";
import WalletProviderWrapper from "./WalletProviderWrapper";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <WalletProviderWrapper>
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            {/* Header Component */}
            <Header />

            {/* Main Content */}
            <main className="">{children}</main>

            <Footer />
          </div>
        </WalletProviderWrapper>
      </body>
    </html>
  );
}
