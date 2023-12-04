/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Home } from "../Home";

export const Header = () => {
  return (
    <div className="relative w-[1440px] h-[120px] bg-white shadow-[1px_1px_10px_transparent]">
      <div className="inline-flex items-center gap-[12px] absolute top-[27px] left-[80px]">
        <img
          className="relative w-[34.35px] h-[34.35px]"
          alt="Logo style guide top"
          src="https://c.animaapp.com/N6TzxAlK/img/logo-style-guide-top-1.svg"
        />
        <div className="relative w-[195px] mt-[-1.00px] [font-family:'MuseoModerno',Helvetica] font-bold text-black text-[46px] text-center tracking-[0] leading-[66px]">
          hounder
        </div>
      </div>
      <div className="flex w-[942px] h-[54px] items-start gap-[12px] absolute top-[30px] left-[412px]">
        <Home className="!flex-[0_0_auto]" property1="default" text="Product" />
        <Home className="!flex-[0_0_auto]" property1="default" text="Learn" />
        <Home className="!flex-[0_0_auto]" property1="default" text="Pricing" />
        <div className="inline-flex flex-col items-end gap-[10px] p-[10px] absolute top-[-3px] left-[768px]">
          <img
            className="relative w-[160px] h-[100px] mt-[-29.00px] mb-[-31.00px] ml-[-29.00px] mr-[-31.00px]"
            alt="Rectangle"
            src="https://c.animaapp.com/N6TzxAlK/img/rectangle-648-1.svg"
          />
          <div className="absolute top-[15px] left-[26px] [text-shadow:1px_1px_5px_#ffffff40] [font-family:'Inter',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[25.2px] whitespace-nowrap">
            Sign Up
          </div>
        </div>
        <div className="inline-flex flex-col items-end absolute top-[-3px] left-[878px]">
          <div className="inline-flex flex-col items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto]">
            <img
              className="relative w-[160px] h-[100px] mt-[-29.00px] mb-[-31.00px] ml-[-29.00px] mr-[-31.00px]"
              alt="Rectangle"
              src="https://c.animaapp.com/N6TzxAlK/img/rectangle-647-1.svg"
            />
            <div className="absolute w-[52px] h-[26px] top-[16px] left-[34px] [font-family:'Inter',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[25.2px] whitespace-nowrap">
              Log in
            </div>
          </div>
        </div>
        <Home className="!absolute !left-[640px] !top-0" property1="default" text="Contact" />
      </div>
    </div>
  );
};
