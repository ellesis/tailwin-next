import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import NavLayout from '@/layouts/NavLayout'
import HeadInfo from '../components/HeadInfo'

export default function About() {
  const router = useRouter()

  return (
    <NavLayout>
      <HeadInfo title="About" />
      <h1>About</h1>
    </NavLayout>
  )
}
