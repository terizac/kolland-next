import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

// export default function Main() {
//   // const [{ data: connectData }, connect] = useConnect({ fetchEns: true });

//   return (
//     <div
//       className="
//       mt-0 mb-0 z-3 relative
//       items-center flex flex-wrap content-center
//       xl:w-[973px]
//       xl:mx-[130px]
//       xl:p-0
//       xl:min-h-screen
//       sm-min-h-[480px]
//       min-h-screen
//       pt-[40px]
//       w-[100%]
//       px-[5%]"
//     >
//       <div
//         className="
//         rainbow-text-1
//         text-galaxy
//         text-[700] w-[100%] mt-0 mr-a  ml-0
//         xl:text-left
//         xl:truncate
//         xl:text-[48px]
//         xl:mb-[32px]
//         hidden
//         xl:block
//        "
//       >
//         Empower your impact! A token <br />
//         back-focused system in Web3
//       </div>
//       <div
//         className="
//             rainbow-text-1
//             text-galaxy
//             text-[700] w-[100%] mt-0 mr-a  ml-0
//             xl:hidden
//             sm-text-[32px]
//             text-[20px]
//             text-left
//             mb-[32px]
//           "
//       >
//         Empower your impact!
//         <br />A token back-focused system in Web3
//       </div>
//       <div
//         className="
//         text-left
//         text-[300]
//         w-100%
//         text-[#fff]
//         mb-[56px]
//         xl:text-[32px]
//         text-[18px]
//         "
//       >
//         By using Kolland, Web3 Affiliate marketing is simple. Easily onboard
//         unlimited affiliates and manage their performance with built-in
//         reporting for Web3 projects across your brand ambassador, influencer and
//         affiliate programs.
//       </div>
//       <div
//         className="
//         flex
//         xl:justify-start
//         items-center
//         flex-wrap
//         justify-center
//         "
//       >
//         {/* <a
//           href="https://chrome.google.com/webstore/detail/kolland-web3-tool/khmaggbkaegnfbhcjoameccbandhioml"
//           target="_blank"
//           className="
//           btn primary
//           radius-btn
//           text-700
//           flex
//           justify-center
//           items-center
//           color-white
//           sm-mb-0
//           sm-mr-20px
//           xl:text-24px
//           xl:w-280px
//           xl:h-60px
//           text-18px
//           w-200px
//           h-45px
//           mb-20px
//           "
//         >
//           Download (Beta)
//         </a> */}
//         <Link
//           href="/demo"
//         >
//           <a className="
//           btn
//           b-2
//           btn primary
//           radius-btn
//           text-[700]
//           flex
//           justify-center
//           items-center
//           text-white
//           sm-ml-20px
//           xl:text-[24px]
//           xl:w-[280px]
//           xl:h-[60px]
//           text-[18px]
//           w-[200px]
//           h-[45px] ">
//             Build (Demo)
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// }

export default function Main() {
  return (
    <div className="relative overflow-hidden">
      <main>
        <div className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <a
                    href="#"
                    className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                  >
                    <span className="rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                      Beta Version
                    </span>
                    <Link href="/demo">
                      <span className="ml-4 text-sm">Visit Our Demo Page</span>
                    </Link>
                    <ChevronRightIcon
                      className="ml-2 h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Empower your impact!</span>
                    <span className="block text-indigo-400">
                      A token back-focused system in Web3
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    By using Kolland, Web3 Affiliate marketing is simple. Easily
                    onboard unlimited affiliates and manage their performance
                    with built-in reporting for Web3 projects across your brand
                    ambassador, influencer and affiliate programs.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <div className="sm:mx-auto sm:max-w-xl lg:mx-0">
                      <div className="sm:flex">
                        <div className="mt-3 sm:mt-0">
                          <a
                            href="https://www.surveycake.com/s/GeW34"
                            target="_blank"
                            className="block w-full rounded-md bg-indigo-500 py-3 px-8 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          >
                            Contact Us
                          </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <Link href="/demo">
                            <button className="block w-full rounded-md bg-teal-500 py-3 px-14 font-medium text-white shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-gray-900">
                              Try it (Demo)
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/images/illustration.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
