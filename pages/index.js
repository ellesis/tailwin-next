import Image from 'next/image'

export default function Home({posts}) {
  console.log(`>>>: getServerSideProps -> posts`, posts)

  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline">Hello Next & TailwindCss!</h1>
      </main>
    </div>
  )
}

// export const getServerSideProps = async () => {
//   // server side rendering
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
//   const posts = await res.json()
//   return {
//     props: {posts}
//   }
// }

export const getStaticProps = async () => {
  // server side rendering
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const posts = await res.json()
  return {
    props: {posts},
    revalidate: 20 // After 20 seconds regenerate data option
  }
}
