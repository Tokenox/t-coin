import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useNFTs,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { ContractAddress } from "./_app";
import Header from "../components/Header";
import Reviews from "../components/Reviews";
import Image from "next/image";
import PaymentModal from "../components/PaymentModal";
import { useState } from "react";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const { contract } = useContract(ContractAddress, "edition-drop");
  const { data: nfts, isLoading: loadingNfts } = useNFTs(contract);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNft, setSelectedNft] = useState<number | null>(0);

  const address = useAddress();

  return (
    <>
      <Header />
      <Reviews />
      {modalOpen && (
        <PaymentModal
          setModalOpen={setModalOpen}
          nftId={selectedNft as number}
        />
      )}
      <div className={styles.container}>
        <div className={styles.offerContainer} id="offers">
          <div className={styles.textStyle}>Limited Time Offer</div>

          {!loadingNfts && nfts && (
            <div className={styles.grid}>
              {nfts.map((nft, idx) => (
                <div className={styles.cardbox} key={idx}>
                  <div className={styles.containImg}>
                    <div className={styles.cardContent}>
                      <div className={styles.bgImg}>
                        <Image
                          src={nft.metadata.image as string}
                          width={212}
                          height={212}
                          className={`${
                            idx === 0
                              ? "sm:w-[180px] sm:h-[180px] w-[140px] h-[140px]"
                              : idx === 1
                              ? "sm:w-[200px] sm:h-[200px] w-[150px] h-[150px]"
                              : "sm:w-[280px] sm:h-[220px] w-[210px] h-[170px]"
                          }`}
                          alt=""
                        />
                        <Image
                          src="/polygon.png"
                          width={29}
                          height={27}
                          alt=""
                          className="absolute left-3 bottom-3"
                        />
                      </div>
                      {address ? (
                        <button
                          className={styles.button}
                          onClick={() => {
                            setSelectedNft(idx);
                            setModalOpen(true);
                          }}
                        >
                          <span className={styles.btnText}>
                            {address ? "Buy Now " : "Connect Wallet"}
                            {idx === 0 ? "$500" : idx === 1 ? "$1000" : "$1500"}
                          </span>
                        </button>
                      ) : (
                        <ConnectWallet
                          btnTitle="Login To Buy"
                          style={{
                            backgroundColor: "#710cf6",
                            color: "#fff",
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
