import Head from 'next/head'
import { getSession } from 'next-auth/react';
import AppBar from "../AppBar";
import Footer from '../Footer'

export default function LandingPageLayout({ children }) {
  return (
    <>
      <Head>
        <title>Kolland | Home</title>
      </Head>
      <AppBar />
      <div className="flex min-h-screen flex-col justify-center bg-gray-900">
        {children}
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  console.log(session, 'session')

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
}
