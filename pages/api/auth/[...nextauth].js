import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth'
import Moralis from 'moralis'
import axios from 'axios'
import { post } from '../../../request/methods'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'MoralisAuth',
      credentials: {
        message: {
          label: 'Message',
          type: 'text',
          placeholder: '0x0',
        },
        signature: {
          label: 'Signature',
          type: 'text',
          placeholder: '0x0',
        },
      },
      // await signIn('credentials', { message, signature, redirect, callbackUrl}
      async authorize(credentials) {
        try {
          // "message" and "signature" are needed for authorization
          // we described them in "credentials" above
          const { message, signature, email, name, avatar, idToken } = credentials
          let res
          res = await post(`/users/web3login`, {
            message,
            signature,
            email, name, avatar, idToken
          })


          let user
          if (res.data) {
            user = res.data
          }
          // returning the user object and creating  a session
          return user
        } catch (e) {
          console.error(e.response)
          return null
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // adding user info to the user session object
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      session.user = token.user
      return session
    },
  },
})