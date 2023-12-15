import type { AppProps } from "next/app";
import { ThirdwebProvider, paperWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
// import Navbar from "../components/Navbar";


export const ContractAddress = "0x0c4a1d5b2d49EB6990cD4ddcCCdB96f8b371ed80";
export const ContractId = "0a30bd0c-6adb-4ab6-9a6d-041b5615db35";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId="4f81c03584343520ce86ba9fa582ba59"
      activeChain={activeChain}
      supportedWallets={[
        paperWallet({
          paperClientId: "62523e76-d093-41df-b78d-bb8d3b8534e3",
        }),
      ]}
    >
      {/* <Navbar /> */}
     
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
