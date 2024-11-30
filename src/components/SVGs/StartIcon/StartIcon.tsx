import React from "react";
import { SVGIconProps } from "../svg.types";

const StartIcon = ({
  width = "24px",
  height = "22px",
  color = "black",
  ...otheProps
}: SVGIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      {...otheProps}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.285 0.764766L16.2147 6.45372L22.77 7.36851C23.9462 7.53161 24.4173 8.91922 23.5647 9.71412L18.8229 14.1011L19.9446 20.353C20.1464 21.4835 18.9044 22.3252 17.8629 21.801L11.9999 18.8886L6.13864 21.8405C5.09535 22.3647 3.85505 21.5226 4.05654 20.3925L5.17819 14.1407L0.435023 9.71498C-0.417072 8.92008 0.0537075 7.53264 1.22981 7.36936L7.78507 6.45458L10.7148 0.765625C11.2432 -0.261437 12.7611 -0.248676 13.285 0.764766Z"
      />
    </svg>
  );
};

export default StartIcon;
