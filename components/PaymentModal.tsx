import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import Modal from "@mui/material/Modal";
import { useAddress, usePaperWalletUserEmail } from "@thirdweb-dev/react";
import { CheckoutWithCard } from "@paperxyz/react-client-sdk";
import { useRouter } from "next/router";
import { ContractId } from "../pages/_app";

interface PaymentModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  nftId: number;
}
const PaymentModal = ({ setModalOpen, nftId }: PaymentModalProps) => {
  const address = useAddress();
  const email = usePaperWalletUserEmail();
  const router = useRouter();
  const [paymentSuccesful, setPaymentSuccesful] = useState(false);

  const handlePaymentSuccess = () => {
    setPaymentSuccesful(true);
  };

  return (
    <>
      {address && email && (
        // create a modal component using tailwindcss
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full px-10 pt-8">
              {!paymentSuccesful && (
                <CheckoutWithCard
                  configs={{
                    contractId: ContractId,
                    walletAddress: address,
                    contractArgs: {
                      tokenId: nftId,
                    },
                    email: email.data,
                  }}
                  onPaymentSuccess={handlePaymentSuccess}
                  onReview={(result) => console.log(result)}
                  options={{
                    colorBackground: "#ffffff",
                    colorPrimary: "#99e0ff",
                    colorText: "#363636",
                    borderRadius: 6,
                    inputBackgroundColor: "#ffffff",
                    inputBorderColor: "#b0b0b0",
                  }}
                />
              )}
              {paymentSuccesful && (
                <h1 className="mb-5 text-xl">Payment Successful</h1>
              )}
              <div className="bg-gray-50 py-3 sm:flex sm:flex-row-reverse">
                {paymentSuccesful && (
                  <button
                    onClick={() => {
                      setModalOpen(false);
                      router.push(`/nft/${ContractId}/${nftId}`);
                    }}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    View NFT
                  </button>
                )}
                <button
                  onClick={() => {
                    setModalOpen(false);
                  }}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentModal;
