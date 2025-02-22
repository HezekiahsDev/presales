"use client";
import Link from "next/link";
import { FaTwitter, FaTelegram, FaGithub, FaDiscord } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Footer() {
  // Initialize AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-gradient-to-r from-gray-700 to-indigo-800 text-white py-8">
      <div className="container mx-auto px-4 py-4 justify-between items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-bold">SolaHash</h3>
            {/* <p className="text-gray-300">
              SolaHash is a decentralized platform for secure and efficient
              token sales. Join us and be part of the future of blockchain.
            </p> */}
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-300 hover:text-purple-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="BuyTokens"
                  className="text-gray-300 hover:text-purple-300 transition-colors"
                >
                  Buy Tokens
                </Link>
              </li>
              <li>
                <Link
                  href="#vesting"
                  className="text-gray-300 hover:text-purple-300 transition-colors"
                >
                  Vesting
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-gray-300 hover:text-purple-300 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/HezekiahsDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-300 transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://t.me/Hezekiahs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-300 transition-colors"
              >
                <FaTelegram className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/HezekiahsDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-300 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://discord.gg/0x0sola"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-300 transition-colors"
              >
                <FaDiscord className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with the latest news and updates from SolaHash.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 text-white rounded-l-lg p-2 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          
        </div>
 {/* Copyright Section */}
        <div
          className="py-8 text-center"
          data-aos="fade-up"
        >
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} SolaHash. All rights reserved.
          </p>
        </div>
       
      </div>
    </footer>
  );
}
