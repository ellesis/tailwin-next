import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'

import NavLayout from '@/layouts/NavLayout'
import HeadInfo from '@/components/HeadInfo'

export default function Photos({ photos }) {
  return (
    <NavLayout>
      <HeadInfo title="My photos" />
      <h1>My Photos</h1>
      <ul className="grid grid-cols-4 gap-4">
        {photos.map((photo) => (
          <li key={photo.id}>
            <Link href={`/photos/${photo.id}`}>
              <a>
                <Image
                  loader={() => `${photo.thumbnailUrl}?w=${100}&q=${100}`}
                  src={photo.thumbnailUrl}
                  width={100}
                  height={100}
                  alt={photo.title}
                />
                <span className="flex flex-col">{photo.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </NavLayout>
  )
}

export const getStaticProps = async () => {
  // static rendering
  // const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`)
  // const photos = await res.json()
  // return {
  //   props: {photos}
  // }
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`)
    const photos = await res.data
    return {
      props: { photos }
    }
  } catch (err) {
    return { err }
  }
}
