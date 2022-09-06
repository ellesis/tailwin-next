import Head from 'next/head'
import BlackSideLayout from '@/layouts/BlackSideLayout'

export default function PageBlack() {
  return (
    <BlackSideLayout>
      <Head>
        <title>Lisa App-Black Layout</title>
      </Head>
      <h1 className="text-3xl font-bold ">BlackSideLayout Home</h1>
    </BlackSideLayout>
  )
}
