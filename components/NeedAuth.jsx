// NeedAuth.tsx
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { setToken } from '../request/methods'

const NeedAuth = () => {
  const router = useRouter()
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="loading" />
  }

  if (status === 'unauthenticated' && router.pathname !== '/') {
    router.push('/signin')
    return
  }
  
  if (status === 'authenticated') {
    setToken(session.user.access_token)
  }

  // if (router.pathname === '/auth/login' && session.status === 'authenticated') {
  //   router.push('/admin')
  // }

  return <></>
}

export default NeedAuth