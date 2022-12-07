import { signIn } from 'next-auth/react';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useRouter } from 'next/router';
import axios from 'axios';

export const useHandleWeb3Auth = (callbackUrl: string = '/') => {
  const { connectAsync, connectors } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();

  return async (connectorIndex: number) => {
    if (isConnected) {
      await disconnectAsync()
    }

    const connector = connectors[connectorIndex]


    const { account, chain } = await connectAsync({
      connector
    })
    
    const userData = { address: account, chain: connector.name === 'web3Auth' ? '0x5' : chain.id, network: 'evm' }
    
    const { data } = await axios.post('/api/auth/get-signin-message', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const message = data.message

    const signature = await signMessageAsync({ message })

    // 這段拿到使用者的資料 web3AuthInstance 可以使用 Web3AuthCore 的方法
    let web3AuthData = {}
    let res
    if (connector.name === 'web3Auth') {
      const user = await connectors[0].web3AuthInstance.getUserInfo()
      web3AuthData = {
        email: user.email,
        name: user.name,
        avatar: user.profileImage,
        idToken: user.idToken
      }
      res = await signIn('credentials', {
        message,
        signature,
        ...web3AuthData,
        redirect: false,
        callbackUrl,
      })
      // https://web3auth.io/docs/sdk/node/usage
    } else {
      res = await signIn('credentials', {
        message,
        signature,
        redirect: false,
        callbackUrl,
      })
    }

    // redirect user after success authentication to '/user' page

    console.log(res, 'res')


    // TODO 儲存使用者資料到 DB
    
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    if (res.url) {
      push(res.url)
    }
  }
}