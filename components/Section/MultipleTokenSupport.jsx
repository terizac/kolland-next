/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Link } from "@remix-run/react";
// import { useConnect } from "wagmi";
// import { Button } from "@chakra-ui/react";

// export default function MultipleTokenSupport() {
//   // const [{ data: connectData }, connect] = useConnect({ fetchEns: true });

//   return (
//     <div className="
//         w-100% relative z-3
//         bg-black bg-op-50
//         ma 
//         mb-0
//         py-50px px-5%
//         xl-pt-100px xl-px-105px xl-pb-115px

//         ">
//       <div className="
//         text-galaxy color-white text-left 
//         border-l-solid 
//         sm-text-size-36px 
//         xl-border-l-width-6 
//         xl-pl-25px
//         xl-mb-80px
//         border-l-width-3 
//         text-size-20px 
//         pl-15px
//         mb-40px
//         ">
//       Multiple Token Support
//       </div>
//       <div className="
//         scroller flex items-center xl-justify-center flex-wrap
//         xl-flex-nowrap  
//         justify-around
//         ">
//         <img
//           className="
//             circle
//             sm-w-70px sm-h-70px 
//             xl-mt-0
//             mx-30px
//             mt-40px
//             w-20vw h-20vw
//           "
//           src="imgs/crypto_currency/usdt.png"
//           alt=""
//         />
//         <img
//           className="
//             circle
//             sm-w-70px sm-h-70px 
//             xl-mt-0
//             mx-30px
//             mt-40px
//             w-20vw h-20vw
//           "
//           src="imgs/crypto_currency/eth.png"
//           alt=""
//         />
//         <img
//           className="
//             circle
//             sm-w-70px sm-h-70px 
//             xl-mt-0
//             mx-30px
//             mt-40px
//             w-20vw h-20vw
//           "
//           src="imgs/crypto_currency/busd.png"
//           alt=""
//         />
//         <img
//           className="
//             circle
//             sm-w-70px sm-h-70px 
//             xl-mt-0
//             mx-30px
//             mt-40px
//             w-20vw h-20vw
//           "
//           src="imgs/crypto_currency/usdc.png"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// }


export default function MultipleTokenSupport() {
  return (
    <div className="bg-indigo-200" id="tokens">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-indigo-900">
        Multiple Token Support
        </h2>
        <div className="mt-8 flow-root lg:mt-10">
          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img className="h-24" src="/images/crypto_currency/usdt.png" alt="Tuple" />
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img className="h-24" src="/images/crypto_currency/eth.png" alt="Mirage" />
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img
                className="h-24"
                src="/images/crypto_currency/busd.png"
                alt="StaticKit"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img
                className="h-24"
                src="/images/crypto_currency/usdc.png"
                alt="Transistor"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <img
                className="h-24"
                src="/images/crypto_currency/polygon.png"
                alt="Transistor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
