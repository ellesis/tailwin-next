import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import HeadInfo from '../components/HeadInfo'

export default function About() {
  const router = useRouter()
  console.log(`>>>: About -> router`, router)

  return (
    <Layout>
      <HeadInfo title="About" />
      <h1>About</h1>
    </Layout>
  )
}
