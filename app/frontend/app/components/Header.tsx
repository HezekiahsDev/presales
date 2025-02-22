"use client";
import { useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Header = () => {
  const { connected } = useWallet();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-purple-300 transition-colors"
            data-aos="fade-right"
          >
            SolaHash
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className="text-white hover:text-purple-300 transition-colors"
            data-aos="fade-down"
          >
            Home
          </Link>
          <Link
            href="/BuyTokens"
            className="text-white hover:text-purple-300 transition-colors"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Buy Tokens
          </Link>
          <a
            href="#vesting"
            className="text-white hover:text-purple-300 transition-colors"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Vesting
          </a>
        </nav>

        {/* Wallet Connection Button */}
        <div data-aos="fade-left">
          <WalletMultiButton className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors" />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-900">
          <a
            href="#home"
            className="block py-2 px-4 text-white hover:bg-purple-700"
          >
            Home
          </a>
          <a
            href="BuyTokens"
            className="block py-2 px-4 text-white hover:bg-purple-700"
          >
            Buy Tokens
          </a>
          <a
            href="#vesting"
            className="block py-2 px-4 text-white hover:bg-purple-700"
          >
            Vesting
          </a>
          <div className="py-2 px-4">
            <WalletMultiButton className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg w-full transition-colors" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
