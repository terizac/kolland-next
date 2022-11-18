// /* eslint-disable jsx-a11y/anchor-is-valid */
// // import { Link } from "@remix-run/react";
// // import { useConnect } from "wagmi";
// // import { Button } from "@chakra-ui/react";

// export function desc() {
//   // const [{ data: connectData }, connect] = useConnect({ fetchEns: true });

//   return (
//     <div
//       className="
//       w-100% relative z-3
//       bg-white
//       ma 
//       mb-0
//       py-50px px-5%
//       xl-pt-100px xl-px-105px xl-pb-115px"
//     >
//       <div
//         className="text-galaxy color-black text-left 
//       border-l-solid 
//       sm-text-size-36px 
//       xl-border-l-width-6 
//       xl-pl-25px
//       xl-mb-143px
//       border-black
//       border-l-width-3 
//       text-size-20px 
//       pl-15px
//       mb-40px
//       "
//       >
//         Next Generations in Web3 Marketing <br />
//         and token-backed system
//       </div>
//       <div className="flex items-center justify-between flex-wrap">
//         <div className="xl-w-47% w-100% flex items-center mb-90px xl-flex-nowrap flex-wrap">
//           <div
//             className="
//               min-w-120px
//               min-h-120px
//               xl-m-0
//               xl-mr-20px
//               m-auto
//               mb-20px
//               bg-#676767
//               circle
//               overflow-hidden
//               bg-linear-1
//               shadow-xl
//             "
//             src=""
//             alt=""
//           />
//           <div>
//             <div
//               className="
//               font-bold
//               text-black
//               xl-text-32px
//               text-24px
//               mb-10px
//             "
//             >
//               User Growth in Web3
//             </div>
//             <div className="text-black text-16px">
//               Kolland system will help blockchain startups quickly reach key
//               users, save market launch expenses and reduce customer acquisition
//               costs. Drive e-commerce, projects growth from influencer &
//               affiliate marketing programs.
//             </div>
//           </div>
//         </div>
//         <div className="xl-w-47% w-100% flex items-center mb-90px xl-flex-nowrap flex-wrap">
//           <div
//             className="
//               min-w-120px
//               min-h-120px
//               xl-m-0
//               xl-mr-20px
//               m-auto
//               mb-20px
//               bg-#676767
//               circle
//               overflow-hidden
//               bg-linear-2
//               shadow-xl
//             "
//             src=""
//             alt=""
//           />
//           <div>
//             <div
//               className="
//               font-bold
//               text-black
//               xl-text-32px
//               text-24px
//               mb-10px
//             "
//             >
//               Easy for integration
//             </div>
//             <div className="text-black text-16px">
//               Easily connect your NFT, Marketplace, Web3 e-commerce platform or
//               any other DApps. Do not need to spend a lot of time to deal
//               complicated smart contracts. Only need to be focus on your own
//               business, arts, products to create better value for your users.
//             </div>
//           </div>
//         </div>
//         <div className="xl-w-47% w-100% flex items-center mb-90px xl-flex-nowrap flex-wrap">
//           <div
//             className="
//               min-w-120px
//               min-h-120px
//               xl-m-0
//               xl-mr-20px
//               m-auto
//               mb-20px
//               bg-#676767
//               circle
//               overflow-hidden
//               bg-linear-3
//               shadow-xl
//             "
//             src=""
//             alt=""
//           />
//           <div>
//             <div
//               className="
//               font-bold
//               text-black
//               xl-text-32px
//               text-24px
//               mb-10px
//             "
//             >
//               Transparent and trust
//             </div>
//             <div className="text-black text-16px">
//               Custom commissions with Kolland, direct and multiple-chain options
//               to build trust with your affiliates. Track sales streamlined
//               management included and transparent.
//             </div>
//           </div>
//         </div>
//         <div className="xl-w-47% w-100% flex items-center mb-90px xl-flex-nowrap flex-wrap">
//           <div
//             className="
//               min-w-120px
//               min-h-120px
//               xl-m-0
//               xl-mr-20px
//               m-auto
//               mb-20px
//               bg-#676767
//               circle
//               overflow-hidden
//               bg-linear-4
//               shadow-xl
//             "
//             src=""
//             alt=""
//           />
//           <div>
//             <div
//               className="
//               font-bold
//               text-black
//               xl-text-32px
//               text-24px
//               mb-10px
//             "
//             >
//               Affiliate Discovery
//             </div>
//             <div className="text-black text-16px">
//               Grow your DApps sales with Kolland Affiliate Solutions and connect
//               with the most compatible and profitable Web3 affiliate partners.
//               Discovery premium content publishers in Web3, to build powerful
//               affiliate relationships that drive new revenue to grow your Web3
//               business.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import {
  BoltIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "User Growth in Web3",
    description:
      `Kolland system will help blockchain startups quickly reach key
      users, save market launch expenses and reduce customer acquisition
      costs. Drive e-commerce, projects growth from influencer &
      affiliate marketing programs.`,
    icon: GlobeAltIcon,
  },
  {
    name: "Easy for integration",
    description:
      `Easily connect your NFT, Marketplace, Web3 e-commerce platform or
      any other DApps. Do not need to spend a lot of time to deal
      complicated smart contracts. Only need to be focus on your own
      business, arts, products to create better value for your users.`,
    icon: ScaleIcon,
  },
  {
    name: "Transparent and trust",
    description:
      `Custom commissions with Kolland, direct and multiple-chain options
      to build trust with your affiliates. Track sales streamlined
      management included and transparent.`,
    icon: BoltIcon,
  },
  {
    name: "Affiliate Discovery",
    description:
      `Grow your DApps sales with Kolland Affiliate Solutions and connect
      with the most compatible and profitable Web3 affiliate partners.
      Discovery premium content publishers in Web3, to build powerful
      affiliate relationships that drive new revenue to grow your Web3
      business.`,
    icon: EnvelopeIcon,
  },
];

export default function DescSection() {
  return (
    <div className="overflow-hidden bg-gray-50" id="features">
      <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Next Generations in Web3 Marketing and token-backed system
            </h2>
            {/* <h3 className="text-xl text-gray-300 sm:text-xl">
              Kolland system will help blockchain startups quickly reach key
              users, save market launch expenses and reduce customer acquisition
              costs. Drive e-commerce, projects growth from influencer &
              affiliate marketing programs.
            </h3> */}
          </div>
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
