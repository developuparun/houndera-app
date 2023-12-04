/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Home = ({ property1, className, text = "Home" }) => {
  return (
    <div
      className={`inline-flex items-center gap-[8px] px-[24px] py-[18px] rounded-[4px] justify-end relative ${
        property1 === "variant-2" ? "border border-solid" : ""
      } ${property1 === "variant-2" ? "border-neutral-colorscolor-600" : ""} ${
        property1 === "variant-2" ? "bg-neutral-colorswhite" : ""
      } ${className}`}
    >
      <button className="font-text-single-200-regular w-fit mt-[-1.00px] tracking-[var(--text-single-200-regular-letter-spacing)] text-[length:var(--text-single-200-regular-font-size)] [font-style:var(--text-single-200-regular-font-style)] text-black font-[number:var(--text-single-200-regular-font-weight)] text-center whitespace-nowrap leading-[var(--text-single-200-regular-line-height)] relative all-[unset] box-border">
        {text}
      </button>
    </div>
  );
};
