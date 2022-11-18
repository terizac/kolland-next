import Head from 'next/head'
import Footer from '../Footer'

export default function LoginLayout({ children }) {
  return (
    <>
      <Head>
        <title>Kolland | Login</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-white">
        {children}
        <Footer />
      </div>
    </>
  )
}