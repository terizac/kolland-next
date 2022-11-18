// import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
// import { Web3AuthConnector } from '@web3auth/web3auth-wagmi-connector'
import { signIn } from 'next-auth/react';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect } from 'react';
import { useHandleWeb3Auth } from '../hooks/auth'

function SignIn() {
  const connectWallet = useHandleWeb3Auth()
  
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <div className="flex h-[100vh]">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <div className="flex items-center">
                <img
                  className="h-12 w-auto rounded-md"
                  src="/images/logo.png"
                  alt="Kolland"
                />
                <h2 className="ml-3 text-5xl font-bold tracking-tight text-gray-900">Kolland</h2>
              </div>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#f54e42] italic">Empower your impact!</h2>
            </div>

            <div className="mt-8">

              <div className="mt-6">
                <div>
                  <button
                    onClick={async () => await connectWallet(2)}
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-md font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-3"
                  >
                    Connect with WalletConnect
                  </button>
                  <button
                    onClick={async () => await connectWallet(1)}
                    className="w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-md font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-3 hidden sm:flex"
                  >
                    Connect with Metamask
                  </button>
                  <button
                    onClick={async () => await connectWallet(3)}
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-md font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Connect with Coinbase Wallet
                  </button>
                  
                  <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm mb-6">
                      <span className="bg-white px-2 text-gray-500">Create a wallet with an email</span>
                    </div>
                  </div>
                  <button
                    onClick={async () => await connectWallet(0)}
                    className="flex w-full justify-center rounded-md bg-transparent py-3 px-4 text-md text-black shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 border-2 border-black font-bold duration-100"
                  >
                    Connect with Your Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1603217039863-aa0c865404f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt=""
          />
          {/* https://images.unsplash.com/photo-1576827471288-0a8f6d6c937b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80 */}
        </div>
      </div>
    </>
  );
}


export default SignIn;