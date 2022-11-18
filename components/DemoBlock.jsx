import { useMemo, useState, useEffect } from "react";
import {
  useAccount,
  useProvider,
  useWaitForTransaction,
  useBalance,
} from "wagmi";
import { utils } from "ethers";

import WAGMINFB from "../abi/wagmi-nfb";
import { mintErrorFormat } from "../hooks/errorFormat";
import { readContract, writeContract } from "../hooks/contract/helper";

import ConnectorButton from "./ConnectorButton";
import { Button } from "@chakra-ui/react";

export default function DemoBlock() {
  const provider = useProvider();
  const [isMintSuccess, setIsMintSuccess] = useState(false);
  const [isMintFailed, setIsMintFailed] = useState(false);
  const [{ data: accountData }] = useAccount();

  const main_contract = window.ENV?.main_contract;
  const demo_project = window.ENV?.demo_project_contract;
  const demo_kol_address = window.ENV?.demo_kol_address;

  // const { data: balanceOfUser, error: balanceOfError, isLoading, status } = useBalance({
  //   addressOrName: '0xBc51A8B45dd0F0724d00F0d1175f9438A155dFEA',
  //   // chainId: 1,
  //   token: '0x35552e3B5D478be198dA06e57Fe555e9ec61Bc88'
  // })

  // console.log(balanceOfUser, balanceOfError, status, 'balanceOfUser')

  // console.log(balanceOfUser, useBalance, accountData?.address, 'balanceOfUser')
  // console.log(window.ENV)
  const [{ data: balanceOfNFT }, readBalanceOf] = readContract({
    ...demo_project,
    method: "balanceOf",
    provider,
    args: accountData?.address,
  });

  // const [{ data: totalSupply }, readTotalSupply] = readContract({
  //   ...demo_project,
  //   method: 'totalSupply',
  //   provider,
  // })

  console.log(balanceOfNFT, "balanceOfNFT");

  const [{ data: mintResponse, error, loading }, mint] = writeContract({
    ...main_contract,
    method: "MainMint",
    provider,
  });

  const [{ data: valueOfKOL }, readKOLValue] = readContract({
    ...main_contract,
    method: "getKOLValue",
    provider,
    args: [
      demo_kol_address, // kolAddress,
      demo_project.address, // projectAddress,
    ],
  });

  const [{ data: projectConfig }, readProjectConfig] = readContract({
    ...main_contract,
    method: "getProjectConfig",
    provider,
    args: [
      demo_project.address, // projectAddress,
    ],
  });

  // console.log(utils.formatUnits(valueOfKOL), 'valueOfKOL')

  const [{ data: transactionData, loading: transactionLoading }] =
    useWaitForTransaction({
      hash: mintResponse?.hash,
    });

  useEffect(() => {
    if (transactionLoading) return;
    readBalanceOf();
    readKOLValue();
    readProjectConfig();
    // readTotalSupply()
  }, [accountData?.address, transactionLoading]);

  useMemo(() => {
    console.log(transactionData, "transactionData");
    switch (transactionData?.status) {
      case 0:
        return setIsMintFailed(true);
      case 1:
        return setIsMintSuccess(true);
    }
  }, [transactionData]);

  const handleMintNFT = () => {
    setIsMintSuccess(false);
    setIsMintFailed(false);
    if (transactionLoading) return;
    mint({
      args: [
        demo_project.address, // address projectAddress,
        accountData?.address, // address minter,
        demo_kol_address, // address kolAddress,
      ],
      overrides: {
        value: utils.parseEther("0.056"),
        gasLimit: 2030000,
        gasPrice: 60000000000,
      },
    });
  };

  return (
    <>
      <div className="demo-block flex justify-around xl-p-120px py-20px px-5% xl-flex-nowrap flex-wrap">
        <div className="rounded p-24px">
          {accountData ? (
            <div className="flex color-white items-center flex-col">
              <div>
                You Have：
                {balanceOfNFT
                  ? utils.formatUnits(balanceOfNFT, 0) + ' NFT'
                  : "Loading..."}
              </div>
              <div style={{ marginTop: 20 }}>
                {loading || transactionLoading ? (
                  "Minting..."
                ) : (
                  <Button
                    colorScheme="white"
                    variant="outline"
                    onClick={handleMintNFT}
                  >
                    Mint (0.056 ETH)
                  </Button>
                )}
              </div>
              {isMintFailed ? (
                <div style={{ marginTop: 20, color: "green" }}>
                  Mint Failed!
                </div>
              ) : null}
              {isMintSuccess ? (
                <div style={{ marginTop: 20, color: "green" }}>
                  Mint Success!
                </div>
              ) : null}
              {error ? (
                <div style={{ marginTop: 20, color: "red" }}>
                  {error ? mintErrorFormat(error) : null}
                </div>
              ) : null}
              {/* <div style={{ marginTop: 20 }}>
              已鑄造總數量：
              {totalSupply ? utils.formatUnits(totalSupply, 0) : '查詢中...'}
            </div> */}
            </div>
          ) : (
            <div>
              <ConnectorButton customText="Pls Connect Wallet First" />
            </div>
          )}
        </div>
        <div className="rounded p-24px color-white w-100% xl-w-auto">
          <div>The KOL You Belong Is: {demo_kol_address}</div>
          <div>
            The Value of KOL Already Has Contributed:{" "}
            {valueOfKOL && utils.formatUnits(valueOfKOL, 18)}ETH
          </div>
          <div>
            The KOL Has Earn { (projectConfig && valueOfKOL) ? `${Number(projectConfig[1] * utils.formatUnits(valueOfKOL, 18) / 100).toFixed(8)}ETH` : ''}
          </div>
        </div>
      </div>
      <div className="kol-list mt-80px">
        <div className="text-galaxy color-white text-center text-size-36px mb-40px">
          KOL Of This Project
        </div>
        <div className="table-head font-700 flex item-center color-white mb-20px">
          <div className="w-33.3% text-center">Wallet Address</div>
          <div className="w-33.3% text-center">Contribute Value</div>
          <div className="w-33.3% text-center">Social Account</div>
        </div>
        <div className="table-body font-400 h-60px flex items-center color-white xl-bg-op-40 xl-bg-black">
          <div className="w-33.3% text-center">{demo_kol_address}</div>
          <div className="w-33.3% text-center">
            {valueOfKOL && utils.formatUnits(valueOfKOL, 18)}ETH
          </div>
          <a
            href="https://boredapeyachtclub.com/"
            target="_blank"
            className="w-33.3% text-center flex items-center justify-center"
          >
            BAYC
          </a>
        </div>
      </div>
    </>
  );
}
