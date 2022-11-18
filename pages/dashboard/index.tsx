// import { useEffect, useState } from "react";
// import { useAccount, useProvider } from "wagmi";
// import { utils } from "ethers";
// import ProjectList from "../components/ProjectList";
// import AccountInfo from "../components/AccountInfo";
// import { readContract, writeContract } from "../utils/contract/helper";
// import { detail_account } from "../api/index.js";

// import {
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Stat,
//   StatLabel,
//   StatNumber,
//   StatHelpText,
//   StatArrow,
//   StatGroup,
// } from "@chakra-ui/react";

export function origin() {
  // const provider = useProvider();
  // const main_contract = window.ENV?.main_contract;
  // const demo_project = window.ENV?.demo_project_contract;
  // const demo_kol_address = window.ENV?.demo_kol_address;
  // const [{ data: accountData }] = useAccount();
  // const [account, setAccount] = useState([]);
  // const [{ data: valueOfKOL }, readKOLValue] = readContract({
  //   ...main_contract,
  //   method: "getKOLValue",
  //   provider,
  //   args: [
  //     demo_kol_address, // kolAddress,
  //     demo_project.address, // projectAddress,
  //   ],
  // });
  // const [{ data: projectConfig }, readProjectConfig] = readContract({
  //   ...main_contract,
  //   method: "getProjectConfig",
  //   provider,
  //   args: [
  //     demo_project.address, // projectAddress,
  //   ],
  // });
  // useEffect(() => {
  //   readKOLValue();
  //   readProjectConfig();
  //   // readTotalSupply()
  // }, [accountData?.address]);
  // useEffect(() => {
  //   const fetch_projects = async () => {
  //     try {
  //       const res = await detail_account();
  //       // 獲取當前網頁網址
  //       setAccount(res.data);
  //     } catch (e) {
  //       const res = {
  //         data: [
  //           {
  //             name: "project1",
  //             contract_address: "0x6887246668a3b87F54DeB3b94Ba47a6f63F32985",
  //             website_links: ["https://boredapeyachtclub.com/"],
  //           },
  //         ],
  //       };
  //       setAccount(res.data);
  //     }
  //   };
  //   fetch_projects();
  // }, []);
  // return (
  // <div className="dashboard-container pt-230px pr-0 pb-150px pl-0 bg-cover w-100% relative color-white">
  //   <div className="container-home">
  //     {(
  //       <>
  //         <StatGroup>
  //           <Stat>
  //             <StatLabel>Contribute Value</StatLabel>
  //             <StatNumber>
  //               <StatArrow type="increase" />
  //               {valueOfKOL && utils.formatUnits(valueOfKOL, 18)}ETH
  //               100 ETH
  //             </StatNumber>
  //             {/* <StatHelpText>
  //             </StatHelpText> */}
  //           </Stat>
  //           <Stat>
  //             <StatLabel>Earn Value</StatLabel>
  //             <StatNumber>
  //               <StatArrow type="increase" />
  //               {projectConfig && valueOfKOL
  //                 ? `${Number(
  //                     (projectConfig[1] * utils.formatUnits(valueOfKOL, 18)) /
  //                       100
  //                   ).toFixed(8)}ETH`
  //                 : ""}
  //                 100 ETH
  //             </StatNumber>
  //             <StatHelpText>
  //               <StatArrow type="decrease" />
  //               9.05%
  //             </StatHelpText>
  //           </Stat>
  //         </StatGroup>
  //         <Tabs>
  //           <TabList>
  //             <Tab>Project List</Tab>
  //             <Tab>Account Info</Tab>
  //           </TabList>
  //           <TabPanels>
  //             <TabPanel>
  //               <ProjectList />
  //             </TabPanel>
  //             <TabPanel>
  //             <AccountInfo />
  //           </TabPanel>
  //           </TabPanels>
  //         </Tabs>
  //       </>
  //     )}
  //   </div>
  // </div>
  // );
}

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          indigo: colors.indigo,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import type { NextPageWithLayout } from '../_app'
import type { ReactElement } from 'react'
import AdminPageLayout from '../../components/layouts/admin'
import { getSession } from 'next-auth/react';

import {
  ScaleIcon,
} from "@heroicons/react/24/outline";
import {
  BanknotesIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

const cards = [
  {
    name: "Total Contribute",
    href: "#",
    icon: ScaleIcon,
    amount: "$30,659.45",
  },
  { name: "Total Earn", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
];

const transactions = [
  {
    id: 1,
    name: "Your Downline 0xbc12... Has Mint 3 NFT at 0xff1...",
    href: "#",
    type: "revenue",
    amount: "300",
    currency: "USDT",
    status: "success",
    date: "Dec 11, 2022",
    datetime: "2022-11-11 15:00:03",
  },
  {
    id: 2,
    name: "Your Downline: 0xaeff... Has Mint 5 NFT at 0xff1...",
    href: "#",
    type: "revenue",
    amount: "500",
    currency: "USDT",
    status: "success",
    date: "Dec 11, 2022",
    datetime: "2022-11-11 14:00:03",
  },
  {
    id: 3,
    name: "Your Downline: 0x34fe... Has Mint 4 NFT at 0xff1...",
    href: "#",
    type: "revenue",
    amount: "400",
    currency: "USDT",
    status: "success",
    date: "Dec 11, 2022",
    datetime: "2022-11-11 14:00:03",
  },
  // More transactions...
];
const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-medium leading-6 text-gray-100">
          Overview
        </h2>
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card */}
          {cards.map((card) => (
            <div
              key={card.name}
              className="overflow-hidden rounded-lg bg-white shadow"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <card.icon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="truncate text-sm font-medium text-gray-500">
                        {card.name}
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          {card.amount}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <a
                    href={card.href}
                    className="font-medium text-indigo-700 hover:text-indigo-900"
                  >
                    View all
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-100 sm:px-6 lg:px-8">
        Recent activity
      </h2>

      {/* Activity list (smallest breakpoint only) */}
      <div className="shadow sm:hidden">
        <ul
          role="list"
          className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
        >
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <a
                href={transaction.href}
                className="block bg-white px-4 py-4 hover:bg-gray-50"
              >
                <span className="flex items-center space-x-4">
                  <span className="flex flex-1 space-x-2 truncate">
                    <BanknotesIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="flex flex-col truncate text-sm text-gray-500">
                      <span className="truncate">{transaction.name}</span>
                      <span>
                        <span className="font-medium text-gray-900">
                          {transaction.amount}
                        </span>{" "}
                        {transaction.currency}
                      </span>
                      <time dateTime={transaction.datetime}>
                        {transaction.datetime}
                      </time>
                    </span>
                  </span>
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <nav
          className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
          aria-label="Pagination"
        >
          <div className="flex flex-1 justify-between">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
              Next
            </a>
          </div>
        </nav>
      </div>

      {/* Activity table (small breakpoint and up) */}
      <div className="hidden sm:block">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 flex flex-col">
            <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Transaction
                    </th>
                    <th
                      className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Type
                    </th>
                    <th
                      className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Amount
                    </th>
                    <th
                      className="hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block"
                      scope="col"
                    >
                      Status
                    </th>
                    <th
                      className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="bg-white">
                      <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                        <div className="flex">
                          <a
                            href={transaction.href}
                            className="group inline-flex space-x-2 truncate text-sm"
                          >
                            <BanknotesIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            <p className="truncate text-gray-500 group-hover:text-gray-900">
                              {transaction.name}
                            </p>
                          </a>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                        <span className="font-medium text-gray-900">
                          {transaction.type}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                        <span className="font-medium text-gray-900">
                          {transaction.amount}
                        </span>
                        {transaction.currency}
                      </td>
                      <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                        <span
                          className={classNames(
                            statusStyles[transaction.status],
                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                          )}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                        <time dateTime={transaction.datetime}>
                          {transaction.datetime}
                        </time>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination */}
              <nav
                className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                aria-label="Pagination"
              >
                <div className="hidden sm:block">
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">10</span> of{" "}
                    <span className="font-medium">20</span> results
                  </p>
                </div>
                <div className="flex flex-1 justify-between sm:justify-end">
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminPageLayout>
      {page}
    </AdminPageLayout>
  )
}