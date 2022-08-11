import axios from 'axios'

export default function Home({ posts }) {
  console.log(`>>>: getServerSideProps -> posts`, posts)

  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold">Home</h1>
        <h2 className="text-3xl font-bold">Hello Next & TailwindCss!</h2>
      </main>
    </div>
  )
}

// Guest

// Authorize User

// export const getServerSideProps = async () => {
//   // server side rendering
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
//   const posts = await res.json()
//   return {
//     props: {posts}
//   }
// }

export const getStaticProps = async () => {
  // static rendering
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    const posts = await res.data

    return {
      props: { posts },
      revalidate: 20 // After 20 seconds regenerate data option
    }
  } catch (err) {
    return { err }
  }
}
