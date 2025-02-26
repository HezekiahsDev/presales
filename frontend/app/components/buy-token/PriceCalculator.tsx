import { FC } from "react";

type Props = {
  tokenAmount: number;
  totalPrice: number;
  currentPhase: string;
};

const PriceCalculator: FC<Props> = ({
  tokenAmount,
  totalPrice,
  currentPhase,
}) => {
  return (
    <div
      className="max-w-lg mx-auto bg-purple-800 p-6 rounded-lg mb-8"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h2 className="text-xl font-bold mb-4">Price Calculation</h2>
      <p className="text-gray-300">
        Current Phase:{" "}
        <span className="text-white font-bold">{currentPhase}</span>
      </p>
      <p className="text-gray-300">
        You are purchasing:{" "}
        <span className="text-white font-bold">{tokenAmount} Tokens</span>
      </p>
      <p className="text-gray-300">
        Total Price:{" "}
        <span className="text-white font-bold">${totalPrice.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default PriceCalculator;
