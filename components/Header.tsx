import React from "react";
import CustomButton from "./CustomButton";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-[url('/header/background.svg')] bg-cover  h-screen">
      <Navbar />
      <div className="w-[50%] border text-white mx-auto flex  flex-col gap-10 py-10">
        <div className="flex flex-col gap-5 pb-5">
          <div className="px-10">
            <h1 className="text-5xl font-bold text-center  font-space ">
              EXPLORE tHE ELITE WORLD OF T NFT
            </h1>
          </div>
          <p className="text-center px-5">
            Step into the world of T NFTs, where simplicity meets
            sophistication. Explore unique pieces with golden T symbols, each
            telling a story of digital elegance and artistic charm.
          </p>
        </div>
        <div className="flex justify-center items-center gap-8">
          <CustomButton btnText="Connect" className="bg-blue-Violet" />
          <CustomButton
            btnText="LearnMore"
            className="border border-blue-Violet"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
