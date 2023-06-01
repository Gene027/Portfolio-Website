/* eslint-disable no-unused-vars */
import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

type UserId = string

declare module 'next-auth/jwt' {  //global fallback type
  interface JWT {
    id: UserId
  }
}

declare module 'next-auth' {  //global fallback type
  interface Session {
    user: User & {
      id: UserId
    }
  }
}

//declared types used for sessions in auth.ts 