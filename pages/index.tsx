import { ThirdwebNftMedia, useContract, useNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { ContractAddress } from "./_app";
import Image from "next/image";

const Home: NextPage = () => {
  const { contract } = useContract(ContractAddress, "edition-drop");
  const { data: nfts, isLoading: loadingNfts } = useNFTs(contract);

  return (
    <div className={styles.container}>
      <div className={styles.offerContainer}>
        <div className={styles.textStyle}>Limited Time Offer</div>
        {!loadingNfts && nfts && (
          <div className={styles.grid}>
            {nfts.map((nft) => (
              <div className={styles.cardbox}>
                <Link
                  href={`/artwork/${nft.metadata.id}`}
                  key={nft.metadata.id}
                >
                  <div className={styles.containImg}>
                    <div className={styles.cardContent}>
                      <div className={styles.bgImg}>
                        <Image
                          src={`/svg/offers-svg/coin 1.svg`} //this will set dynamically through coming nft data
                          alt="t-nft"
                          height={335}
                          width={348}
                        />
                      </div>
                      <button className={styles.button}>
                        <span className={styles.btnText}>Buy Now $999</span>
                      </button>{" "}
                      {/* this price will be set dynamically through coming nft.metadeta value */}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

