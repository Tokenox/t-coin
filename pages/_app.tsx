import type { AppProps } from "next/app";
import { ThirdwebProvider, paperWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const ContractAddress = "0xf94BC556ab0f133dFdbc2d0A6FFa793f3918f218";
export const ContractId = "46ea0f62-7f0b-4d95-b263-877a229e7767";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

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
      <Component {...pageProps} />
      <Footer />
    </ThirdwebProvider>
  );
}

export default MyApp;
