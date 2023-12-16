import {
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useDisconnect,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { ContractAddress } from "../_app";
import Navbar from "../../components/Navbar";

export default function Profile() {
  const address = useAddress();

  const { contract } = useContract(ContractAddress, "edition-drop");

  const { data: ownedNfts, isLoading: loadingOwnedNfts } = useOwnedNFTs(
    contract,
    address
  );

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className="flex justify-between">
          <h1 className="text-white font-bold text-3xl mt-10">Profile</h1>
        </div>
        <h3 className="text-2xl text-white text-center mt-10 font-bold">
          Your Collectibles
        </h3>
        <div className="mt-10">
          {!loadingOwnedNfts && ownedNfts ? (
            ownedNfts.length > 0 ? (
              <div className={styles.grid}>
                {ownedNfts.map((nft) => (
                  <div className={styles.artCard} key={nft.metadata.id}>
                    <ThirdwebNftMedia metadata={nft.metadata} />
                    <div className={styles.cardContent}>
                      <h3 className="text-white text-center">
                        {nft.metadata.name}
                      </h3>
                      <p className="text-white text-center">
                        QTY: {nft.quantityOwned}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white mt-5">
                You dont own any collectibles yet
              </p>
            )
          ) : (
            <p className="text-white mt-5">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
