// import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
// import { Web3AuthConnector } from '@web3auth/web3auth-wagmi-connector'
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
    
    // 這段拿到使用者的資料 web3AuthInstance 可以使用 Web3AuthCore 的方法
    if (connector.name === 'web3Auth') {
      const getUserInfo = await connectors[0].web3AuthInstance.getUserInfo()
      console.log(getUserInfo, 'getUserInfo')
    }
    const userData = { address: account, chain: connector.name === 'web3Auth' ? '0x5' : chain.id, network: 'evm' }
    
    const { data } = await axios.post('/api/auth/request-message', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const message = data.message

    const signature = await signMessageAsync({ message })

    // redirect user after success authentication to '/user' page
    const { url } = await signIn('credentials', {
      message,
      signature,
      redirect: false,
      callbackUrl,
    })
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url)
  }
}