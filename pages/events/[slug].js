import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import NavLayout from '@/layouts/NavLayout'
import { API_URL } from '@/config/index'

export default function EventsPage({ evt }) {
  console.log(`🚀: EventsPage -> evt`, evt)
  const deleteEvent = (e) => {
    console.log(object)
  }

  return (
    <NavLayout>
      <div className="relative pt-[40px]">
        <div className="absolute right-[30px] top-0">
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className="text-red-600 ml-5" onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>

        <span>
          {evt.date} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className="">
            <Image src={evt.image} width={960} height={600} />
          </div>
        )}

        <h3>Performers</h3>
        <p>{evt.performers}</p>
        <h3>Description</h3>
        <p>{evt.description}</p>
        <h3>Venue</h3>
        <p>{evt.venue}</p>

        <Link href={`/events`}>
          <a>{'<'} Go Back</a>
        </Link>
      </div>
    </NavLayout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()
  const paths = events.map((evt) => ({
    params: { slug: evt.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

// Server Error
// Error: getStaticPaths is required for dynamic SSG pages and is missing for '/events/[slug]'.
// Read more: https://nextjs.org/docs/messages/invalid-getstaticpaths-value
// This error happened while generating the page. Any console logs will be displayed in the terminal window.
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await res.json()

  return {
    props: {
      evt: events[0]
    },
    revalidate: 1
  }
}

// getServerSideProps
// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`)
//   const events = await res.json()

//   return {
//     props: {
//       evt: events[0]
//     }
//   }
// }
