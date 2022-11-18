import type { ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'




import { Web3AuthConnector } from '@web3auth/web3auth-wagmi-connector'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
// import dynamic from "next/dynamic";
import '../styles/globals.css'


const { provider, webSocketProvider, chains } = configureChains(defaultChains, [publicProvider()]);
const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
  connectors: [
    new Web3AuthConnector({
      chains: ['goerli'],
      options: {
        enableLogging: true,
        clientId: 'BGr8gtjO01Be55tkljpYQFezrNPmsX2HWkbQb7AVIMuwAJopinjr-opENMExFz1ycYBqsPD2mzO7D030dezssM0', // Get your own client id from https://dashboard.web3auth.io
        network: 'testnet', // web3auth network
        chainId: '0x5', // chainId that you want to connect with
      },
    }),
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      options: {
        qrcode: true,
      },
    }),
    new CoinbaseWalletConnector({
      options: {
        appName: 'localhost:3000',
      },
    }),
  ]
});

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  return <WagmiConfig client={client}>
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  </WagmiConfig>
}