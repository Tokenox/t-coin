import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import CustomButton from "./CustomButton";

export default function Navbar() {
  const address = useAddress();
  return (
    <div className={styles.container}>
      <div className="flex justify-between items-center py-5 w-[95%] mx-auto">
        <div>
          <Link href="/">
            <h3 className="text-2xl font-railway font-bold text-silver">
              <span className="text-purple">T</span>-COIN
            </h3>
          </Link>
        </div>
        <div>
          {!address ? (
            <ConnectWallet
              btnTitle="Login"
              className="border-none outline-none bg-blue-Violet px-3 py-2 text-base text-white font-bold lg:px-6  lg:text-lg"
            />
          ) : (
            <Link href={`/profile/${address}`}>
              <img
                src="https://avatars.githubusercontent.com/u/81866624?v=4"
                alt="avatar"
                className={styles.avatar}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
