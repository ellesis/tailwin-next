import React from 'react'
import Head from 'next/head'

export default function Photos() {
  return (
    <div>
      <h1>My Photos</h1>
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
//   const photos = res.json()

//   return {
//     props: {photos}
//   }
// }
