import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { get, post } from '../../request/methods'


export default function Main() {
  const router = useRouter()
  const { data: session, status } = useSession();
  const [isEmailInput, setEmailInput] = useState(false);
  const [email, setEmail] = useState('');
  const handleSubscribe = async () => {
    const res = await post(`/dev/users/update/${session?.user?.address}`, {
      email: email
    });
    console.log(res)
  }
  useEffect(() => {
    const fetchUserInfo = async (address) => {
      try {
        const res = await get(`/dev/users/${address}`);
        setEmailInput(res.data?.user.owned_wallet_type === "self");
      } catch (e) {
        if (e.response.status === 401) {
          signOut({ callbackUrl: "/" });
        }
      }
    };
    if (session?.user?.address) {
      console.log(session.user)
      fetchUserInfo(session?.user?.address);
    }
  }, [session]);
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
                            className="block w-full rounded-md bg-indigo-500 py-3 px-8 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900 text-center"
                          >
                            Contact Us
                          </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <Link href="/demo">
                            <button className="block w-full rounded-md bg-teal-500 py-3 px-14 font-medium text-white shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-gray-900 text-center">
                              Try it (Demo)
                            </button>
                          </Link>
                        </div>
                      </div>
                      {
                        isEmailInput && (<form className="mt-5 sm:flex sm:items-center">
                        <div className="w-full sm:max-w-xs">
                          <label htmlFor="email" className="sr-only">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md py-3 px-2"
                            placeholder="you@example.com"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0">
                          <div
                            onClick={handleSubscribe}
                            className="block w-full rounded-md bg-red-500 py-3 px-8 font-medium text-white shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:ring-offset-gray-900 text-center xl:ml-5"
                          >
                            Subscribe
                          </div>
                        </div>
                      </form>)
                      }
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
