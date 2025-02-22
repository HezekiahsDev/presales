import { FC } from "react";

type Props = {
  tokenAmount: number;
  setTokenAmount: (amount: number) => void;
};

const TokenSlider: FC<Props> = ({ tokenAmount, setTokenAmount }) => {
  return (
    <div
      className="max-w-lg mx-auto bg-purple-800 p-6 rounded-lg mb-8"
      data-aos="fade-up"
    >
      <label htmlFor="tokenAmount" className="block text-lg mb-4">
        Select Token Amount:
      </label>
      <input
        type="range"
        id="tokenAmount"
        min="100"
        max="3000000"
        step="100"
        value={tokenAmount}
        onChange={(e) => setTokenAmount(Number(e.target.value))}
        className="w-full h-2 bg-purple-600 rounded-lg appearance-none cursor-pointer"
      />
      <input
        type="number"
        id="tokenInput"
        min="100"
        max="3000000"
        step="100"
        value={tokenAmount}
        onChange={(e) => setTokenAmount(Number(e.target.value))}
        className="w-full mt-4 p-2 bg-purple-700 text-white rounded-lg border border-purple-500 text-center"
      />
      <div className="flex justify-between text-gray-300 mt-2">
        <span>100 Tokens</span>
        <span>3,000,000 Tokens</span>
      </div>
    </div>
  );
};

export default TokenSlider;
