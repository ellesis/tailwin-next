import React from 'react'
import Head from 'next/head'
import Layout from '@/layouts/LoginLayout'

export default function Register({ children }) {
  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <h1>Register</h1>
    </Layout>
  )
}
