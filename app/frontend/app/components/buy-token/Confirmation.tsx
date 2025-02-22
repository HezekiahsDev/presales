import { FC } from "react";
import { animated } from "react-spring";

type Props = {
  style: any;
};

const Confirmation: FC<Props> = ({ style }) => {
  return (
    <animated.div
      style={style}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg"
    >
      <p className="text-lg">🎉 Purchase Successful!</p>
    </animated.div>
  );
};

export default Confirmation;
