import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
import AppBar from "../AppBar";
import Footer from '../Footer'
import request from "../../request";
import NeedAuth from '../NeedAuth'


export default function LandingPageLayout({ children }) {
  return (
    <>
      <Head>
        <title>Kolland | Home</title>
      </Head>
      <NeedAuth />
      <AppBar />
      <div className="flex min-h-screen flex-col justify-center bg-gray-900">
        {children}
      </div>
      <Footer />
    </>
  )
}