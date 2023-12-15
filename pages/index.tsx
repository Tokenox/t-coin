import { ThirdwebNftMedia, useContract, useNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { ContractAddress } from "./_app";
import Header from "../components/Header";
import Reviews from "../components/Reviews";

const Home: NextPage = () => {
  const { contract } = useContract(ContractAddress, "edition-drop");
  const { data: nfts, isLoading: loadingNfts } = useNFTs(contract);
  console.log("nfts", nfts);
  return (
    <>
      <Header />
      <Reviews />
      <div style={{ background: "#030326" }}>
        {!loadingNfts && nfts && (
          <div className={styles.grid}>
            {nfts.map((nft) => (
              <Link href={`/artwork/${nft.metadata.id}`} key={nft.metadata.id}>
                <div className={styles.artCard}>
                  <ThirdwebNftMedia metadata={nft.metadata} />
                  <div className={styles.cardContent}>
                    <h3>{nft.metadata.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
