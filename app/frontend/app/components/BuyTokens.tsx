"use client";
import { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTitle from "./buy-token/PageTitle";
import TokenSlider from "./buy-token/TokenSlider";
import PriceCalculator from "./buy-token/PriceCalculator";
import BuyButton from "./buy-token/BuyButton";
import Confirmation from "./buy-token/Confirmation";

const BuyTokens = () => {
  const [tokenAmount, setTokenAmount] = useState(100);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentPhase, setCurrentPhase] = useState("Private Sale");
  const [tokenPrice, setTokenPrice] = useState(0.05);

  const totalPrice = tokenAmount * tokenPrice;

  const confirmationAnimation = useSpring({
    opacity: showConfirmation ? 1 : 0,
    transform: showConfirmation ? "translateY(0)" : "translateY(-20px)",
    config: { tension: 300, friction: 20 },
  });

  const handlePurchase = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  useEffect(() => {
    // Simulate phase change based on time
    const phases = [
      { name: "Private Sale", price: 0.05, duration: 40 },
      { name: "Pre-Sale Phase 1", price: 0.07, duration: 30 },
      { name: "Pre-Sale Phase 2", price: 0.09, duration: 25 },
      { name: "Pre-Sale Phase 3", price: 0.12, duration: 20 },
    ];

    let currentTime = 0;
    let currentPhaseIndex = 0;

    const interval = setInterval(() => {
      currentTime += 1;
      if (currentTime >= phases[currentPhaseIndex].duration) {
        currentTime = 0;
        currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
        setCurrentPhase(phases[currentPhaseIndex].name);
        setTokenPrice(phases[currentPhaseIndex].price);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <PageTitle />
        <TokenSlider
          tokenAmount={tokenAmount}
          setTokenAmount={setTokenAmount}
        />
        <PriceCalculator
          tokenAmount={tokenAmount}
          totalPrice={totalPrice}
          currentPhase={currentPhase}
        />
        <BuyButton onClick={handlePurchase} />
        {showConfirmation && <Confirmation style={confirmationAnimation} />}
      </div>
    </section>
  );
};

export default BuyTokens;
