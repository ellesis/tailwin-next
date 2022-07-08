import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
// import {useRouter} from 'next/router'

function Index({ photo }) {
  // const router = useRouter()
  // console.log(`>>>: Index -> router`, router)

  const { title, url } = photo

  return (
    <div>
      <h2>Image {title}</h2>
      {/* <h3>image {router.query.id}</h3> */}
      <Image loader={() => `${url}?w=${500}&q=${500}`} src={url} width={500} height={500} alt={title} />
      <Link href="/photos">
        <a>go back</a>
      </Link>
    </div>
  )
}

export const getStaticProps = async (context) => {
  try {
    const { id } = context.params
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const photo = await res.data
    return {
      props: { photo }
    }
  } catch (err) {
    return { err }
  }
}

export const getStaticPaths = async () => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`)
    const photos = await res.data
    const ids = photos.map((photo) => photo.id)
    const paths = ids.map((id) => {
      return {
        params: { id: id.toString() }
      }
    })

    return {
      paths,
      fallback: false //'blocking'
    }

    // return {
    //   paths: [
    //     {
    //       params: {id: '1'}
    //     },
    //     {
    //       params: {id: '2'}
    //     },
    //     {
    //       params: {id: '3'}
    //     }
    //   ],
    //   // fallback: 'blocking'
    //   fallback: false //'blocking'
    // }
  } catch (err) {
    return { err }
  }
  // return {
  //   paths: [
  //     {
  //       params: {id: 1}
  //     }
  //   ],
  //   fallback: false // 'blocking'
  // }
}

export default Index
