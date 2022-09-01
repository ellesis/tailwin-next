import React from 'react'
import Link from 'next/link'
import NavLayout from '@/layouts/NavLayout'
import Eventitem from '@/components/Eventitem'
import { API_URL } from '@/config/index'

export default function EventsPage({ events }) {
  console.log(`🚀: EventsHome -> events`, events)
  return (
    <NavLayout>
      <div className="">
        <h1 className="flex row">Events</h1>
        {events.length === 0 && <h3>No events to show</h3>}
        {events.map((evt) => (
          <Eventitem key={evt.id} evt={evt} />
        ))}
      </div>
      <Link href="/">Go Back Home</Link>
    </NavLayout>
  )
}

// export async function getServerSideProps() {
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: { events },
    revalidate: 1 // 1 second
  }
}
