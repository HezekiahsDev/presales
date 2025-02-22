"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Initialize AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Countdown timer logic
  useEffect(() => {
    const targetDate = new Date("2023-12-31T23:59:59").getTime(); // Set your presale end date here

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white pt-24">
      <div className="container mx-auto px-4 text-center">
        {/* Hero Title */}
        <h1
          className="text-5xl md:text-6xl font-bold mb-6"
          data-aos="fade-down"
        >
          Welcome to <span className="text-purple-400">SolaHash</span>
        </h1>

        {/* Hero Subtitle */}
        <p
          className="text-lg md:text-xl mb-8 text-gray-300"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Join the future of decentralized finance with SolaHash. Participate in
          our token presale today!
        </p>

        {/* Presale Countdown */}
        <div
          className="flex justify-center space-x-4 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-purple-800 p-4 rounded-lg">
            <span className="text-3xl font-bold">{timeLeft.days}</span>
            <span className="block text-sm text-gray-300">Days</span>
          </div>
          <div className="bg-purple-800 p-4 rounded-lg">
            <span className="text-3xl font-bold">{timeLeft.hours}</span>
            <span className="block text-sm text-gray-300">Hours</span>
          </div>
          <div className="bg-purple-800 p-4 rounded-lg">
            <span className="text-3xl font-bold">{timeLeft.minutes}</span>
            <span className="block text-sm text-gray-300">Minutes</span>
          </div>
          <div className="bg-purple-800 p-4 rounded-lg">
            <span className="text-3xl font-bold">{timeLeft.seconds}</span>
            <span className="block text-sm text-gray-300">Seconds</span>
          </div>
        </div>

        {/* Token Sale Statistics */}
        <div
          className="bg-purple-800 p-6 rounded-lg mb-8 inline-block"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-xl font-bold mb-2">Token Sale Progress</h2>
          <p className="text-gray-300">$1,234,567 Raised of $5,000,000 Goal</p>
        </div>

        {/* Buy Tokens Button */}
        <Link href="/BuyTokens">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg glow-on-hover transition-all"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Buy Tokens
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
