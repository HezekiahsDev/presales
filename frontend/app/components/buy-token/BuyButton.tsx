import { FC } from "react";

type Props = {
  onClick: () => void;
};

const BuyButton: FC<Props> = ({ onClick }) => {
  return (
    <button
      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg glow-on-hover transition-all mb-8"
      data-aos="fade-up"
      data-aos-delay="200"
      onClick={onClick}
    >
      Buy Tokens
    </button>
  );
};

export default BuyButton;
