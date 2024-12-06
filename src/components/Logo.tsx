// import { ReactComponent as LogoSrc } from '../assets/gggm_logo_2.svg';

import LogoSrc from '../assets/gggm_logo_2.svg?react';

interface CustomIconProps {
  width: number;
  height: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
}
const Logo = (props: CustomIconProps) => {
  const { width, height, fill, stroke, strokeWidth } = props;
  const handleClick = () => alert('SVG clicked');

  return (
    // <img
    //   src={LogoSrc}
    //   alt="Icon"
    //   width={width}
    //   height={height}
    //   style={{
    //     border: `3px solid ${color}`,
    //   }}
    // ></img>
    <>
      <LogoSrc
        width={width}
        height={height}
        fill={fill}
        onClick={handleClick}
        stroke={stroke}
        strokeWidth={strokeWidth}
      ></LogoSrc>
    </>
  );
};

export default Logo;
