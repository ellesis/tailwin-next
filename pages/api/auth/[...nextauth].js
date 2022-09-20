import NextAuth from 'next-auth'
import { Pool } from 'pg'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import PostgresAdapter from '../../../lib/adapter'

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
})

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
    // ...add more providers here
  ],
  adapter: PostgresAdapter(pool),
  secret: process.env.NEXTAUTH_SECRET
})
