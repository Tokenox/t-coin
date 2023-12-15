import React from "react";
import CustomButton from "./CustomButton";
import Navbar from "./Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-[url('/header/background.svg')] bg-cover ">
      <Navbar />
      <div className="pb-10">
        <div className="w-[75%] text-white mx-auto flex  flex-col gap-10 pt-14 lg:w-[55%]">
          <div className="flex flex-col gap-5 pb-3">
            <div className="px-5 lg:px-10">
              <h1 className="text-base font-bold text-center font-space md:text-lg lg:text-5xl ">
                EXPLORE tHE ELITE WORLD OF T NFT
              </h1>
            </div>
            <p className=" text-base text-center px-5 lg:text-lg ">
              Step into the world of T NFTs, where simplicity meets
              sophistication. Explore unique pieces with golden T symbols, each
              telling a story of digital elegance and artistic charm.
            </p>
          </div>
          <div className="flex  justify-center items-center gap-3 md:gap-8  ">
            <CustomButton
              btnText="Connect"
              className="bg-blue-Violet text-lg px-6 py-1 md:px-11 md:py-3"
            />
            <CustomButton
              btnText="LearnMore"
              className="border border-blue-Violet text-lg px-6 py-1 md:px-11 md:py-3"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/header/header.svg"
            alt=""
            height={100}
            width={100}
            className="h-[591px] w-[938px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
