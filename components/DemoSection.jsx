/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Link } from "@remix-run/react";
// import { useConnect } from "wagmi";
// import { Button } from "@chakra-ui/react";
import DemoBlock from "../components/DemoBlock";

export default function DemoSection() {
  // const [{ data: connectData }, connect] = useConnect({ fetchEns: true });
  //
  return (
    <div className="top-bg pr-0 pl-0 bg-cover w-100% relative">
      <div
        className="
        w-100% relative z-3
        bg-black bg-op-50
        ma 
        mb-0
        py-50px px-5%
        pt-120px xl-px-105px xl-pb-115px

        "
      >
        <div
          className="text-galaxy color-white text-left 
          border-l-solid 
          sm-text-size-36px 
          xl-border-l-width-6 
          xl-pl-25px
          xl-mb-60px
          border-white
          border-l-width-3 
          text-size-20px 
          pl-15px
          mb-20px
      "
        >
          Tutorial
        </div>
        <div className="text-white text-16px mb-40px">
          Kolland allows builders to call smart contracts though simply 3 steps.<br /><br />
          1. Enter your email and connect wallet <br />
          2. Minting test by using Rinkeby<br />
          3. Add these code in your contracts
        </div>
        <DemoBlock></DemoBlock>
      </div>
    </div>
  );
}
