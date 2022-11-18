import Head from 'next/head'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import dynamic from "next/dynamic";
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const Web3AuthProvider = dynamic(
  () => {
    return import("../contexts/web3auth");
  },
  { ssr: false }
);

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  return <Web3AuthProvider>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {getLayout(<Component {...pageProps} />)}
  </Web3AuthProvider>
}