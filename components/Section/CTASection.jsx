import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { get, post } from '../../request/methods'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export default function CTA({showAlert}) {
  const { data: session, status } = useSession();
  const [isEmailInput, setEmailInput] = useState(false);
  const [email, setEmail] = useState('');
  const handleSubscribe = async () => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailformat)) {
      showAlert({
        title: 'Email is not valid.',
        desc: 'Please Confirm your email format and try again.',
        type: 'fail'
      })
      setEmail('')
      return
    }
    try {
      const res = await post(`/users/update/${session?.user?.address}`, {
        email: email
      });
      if (res.email) {
        setEmail('')
        showAlert({
          title: 'Subscribe Success!',
          desc: 'We will send you the news in the future.',
          type: 'success'
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    const fetchUserInfo = async (address) => {
      try {
        const res = await get(`/users/${address}`);
        setEmailInput(res.data?.user.owned_wallet_type === "self");
      } catch (e) {
        if (e.response.status === 401) {
          signOut({ callbackUrl: "/" });
        }
      }
    };
    if (session?.user?.address) {
      fetchUserInfo(session?.user?.address);
    }
  }, [session]);
  return (
    <div className="relative bg-white py-16">
      <div
        className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl bg-indigo-600 lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div
              className="absolute inset-x-0 h-1/2 bg-gray-50 hidden"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0 pt-8">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img
                  className="rounded-3xl object-cover object-center shadow-2xl"
                  src="https://images.unsplash.com/photo-1584945514960-421bb14083e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="relative bg-indigo-600 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
            <div
              className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
              aria-hidden="true"
            >
              <svg
                className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
                      className="text-indigo-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
              <svg
                className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
                      className="text-indigo-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
              <h2
                className="text-3xl font-bold tracking-tight text-white"
                id="join-heading"
              >
                Empower your impact!
              </h2>
              <p className="text-lg text-white">
                By using Kolland, Web3 Affiliate marketing is simple. Easily
                onboard unlimited affiliates and manage their performance with
                built-in reporting for Web3 projects across your brand
                ambassador, influencer and affiliate programs.
              </p>

              <a
                className="block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-indigo-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto"
                href="https://www.surveycake.com/s/GeW34"
                target="_blank"
              >
                Contact Us
              </a>
              <Link href="/demo">
                <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white hover:bg-gray-900 sm:ml-3 w-full ml-0 sm:w-auto">
                  Try it (Demo)
                </button>
              </Link>
              {isEmailInput && (
                <form className="mt-5 sm:flex sm:items-center">
                  <div className="w-full sm:max-w-xs">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md py-3 px-2"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <div
                      onClick={handleSubscribe}
                      target="_blank"
                      className="block w-full rounded-md bg-red-500 py-3 px-8 font-medium text-white shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:ring-offset-gray-900 text-center xl:ml-5 cursor-pointer"
                    >
                      Subscribe
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
