import ButtonWrapper from "./Button.style";

import buttonHoverShapeBlack from "../../assets/images/icon/button-hover-shape.svg";
import buttonHoverShapeWhite from "../../assets/images/icon/hov_shape_s.svg";

const Button = ({ children, ...props }) => {
  return (
    <ButtonWrapper type="submit" className="suiduckz-btn" {...props}>
      {children}

      <img
        src={buttonHoverShapeWhite}
        className="hover-shape shape-left shape-white"
        alt="suiduckz nft button hover shape"
      />
      <img
        src={buttonHoverShapeWhite}
        className="hover-shape shape-right shape-white"
        alt="suiduckz nft button hover shape"
      />
      <img
        src={buttonHoverShapeBlack}
        className="hover-shape shape-left shape-black"
        alt="suiduckz nft button hover shape"
      />
      <img
        src={buttonHoverShapeBlack}
        className="hover-shape shape-right shape-black"
        alt="suiduckz nft button hover shape"
      />
    </ButtonWrapper>
  );
};

export default Button;
