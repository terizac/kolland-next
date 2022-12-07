import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'
import { useSession, signOut } from "next-auth/react";
import LandingPageLayout from '../components/layouts/landing-page'
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'
import Select from '../components/form/select'
import NeedAuth from '../components/NeedAuth'

const kol_list = [
  { address: '0xBc51A8B45dd0F0724d00F0d1175f9438A155dFEA', contribute_value: '0.25', mint_count: '18', crypto: 'ETH' },
  // More people...
]

const current_smart_contract = {
  title: 'Azuki',
  desc: 'Price: 0.05 ETH',
  desc2: 'Mint Amount from Promote: 1029',
  source:
    'https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2022%2F05%2Fazuki-creator-zagabond-admits-failed-nft-projects-floor-price-0.jpg?w=960&cbr=1&q=90&fit=max',
}

const list = [
  {
    id: 1,
    name: 'ETH',
    avatar:
      '/images/crypto_currency/eth.png',
  },
  {
    id: 2,
    name: 'BUSD',
    avatar:
      '/images/crypto_currency/busd.png',
  },
  {
    id: 3,
    name: 'USDC',
    avatar:
      '/images/crypto_currency/usdc.png',
  },
  {
    id: 4,
    name: 'USDT',
    avatar:
      '/images/crypto_currency/usdt.png',
  },
  {
    id: 5,
    name: 'MATIC',
    avatar:
      '/images/crypto_currency/polygon.png',
  },
]

const Demo: NextPageWithLayout = () => {
  const { data: session, status } = useSession();
  return (
    <>
      <NeedAuth></NeedAuth>
      <div className="mx-auto w-[100%] lg:w-auto lg:max-w-6xl p-12 sm:px-6 lg:px-8">
        <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-1">
          <li className="relative">
            <div className="mt-6 flex space-x-3">
              {/* <Select list={list} /> */}
            </div>
            <h1 className="mt-2 text-xl font-semibold text-gray-200">Click "Mint The NFT", you will become downline and get two way promote rebate.
            </h1>
            <div className="group aspect-w-10 aspect-h-7 block w-full xl:w-[50%] mx-auto overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 mt-4">
              <img src={current_smart_contract.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
              {/* <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View details for {current_smart_contract.title}</span>
              </button> */}
            </div>
            <div className="w-full xl:w-[50%] mx-auto">
              <p className="pointer-events-none mt-2 block truncate text-md font-medium text-gray-100">{current_smart_contract.title}</p>
              <p className="pointer-events-none block text-md font-medium text-gray-300">{current_smart_contract.desc}</p>
              <p className="pointer-events-none block text-md font-medium text-gray-300">{current_smart_contract.desc2}</p>
              <button
                className="block w-full rounded-md bg-[#FD7A5D] py-2 font-medium text-white shadow hover:bg-[#e16d53] focus:outline-none focus:ring-2 focus:ring-[#fb846a] focus:ring-offset-2 focus:ring-offset-gray-900 mt-4"
              >
                Mint the NFT
              </button>
            </div>
          </li>
        </ul>
        <div className="w-[100%] mt-6">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-200">Topline KOL of this project is <span className="text-gray-400 text-sm">0xBc1243B45dd0F0724d...</span>
              </h1>
              <p className="mt-2 text-md text-gray-400">
                Promote Rebate: <span className="font-bold text-gray-50">15.53 ETH</span>
              </p>
              <p className="mt-2 text-md text-gray-400">
                Contribute Value of This NFT: <span className="font-bold text-gray-50">150.53 ETH</span>
              </p>
              <h1 className="mt-8 text-xl font-semibold text-gray-200">KOL of this project
              </h1>
              <p className="mt-2 text-md text-gray-400">
                When click "Mint The NFT", you will become the topline kols downline and get two way promote rebate.
              </p>
            </div>
          </div>
          <div className="mt-8 flex-col hidden xl:flex">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                          Kol of this project
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Contribute Value
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Rebate Earned
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {kol_list.map((kol, kol_idx) => (
                        <tr key={kol.address} className={kol_idx % 2 === 0 ? undefined : 'bg-gray-50'}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {kol.address}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{kol.contribute_value} {kol.crypto}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{kol.mint_count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 overflow-hidden bg-white shadow sm:rounded-md block xl:hidden">
            <ul role="list" className="divide-y divide-gray-200">
              {kol_list.map((kol) => (
                <li key={kol.address}>
                  <a href="#" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="truncate text-sm font-medium text-indigo-600">{kol.address}</p>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            Contribute Value:
                            {kol.contribute_value} {kol.crypto}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            Already Mint Nfts:
                            {kol.mint_count}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}


export default Demo

Demo.getLayout = function getLayout(page: ReactElement) {
  return (
    <LandingPageLayout>
      {page}
    </LandingPageLayout>
  )
}