/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'
import Image from 'next/image'

export default function EventItem({ evt }) {
  return (
    // <div className="flex justify-between items-center my-5 p-[13px] ">
    <div className="flex flex-row my-5 p-[13px] shadow-md">
      <div className="flex-none m-[10px]">
        <Image src={evt.image ? evt.image : '/images/event-default.png'} width={170} height={100} />
      </div>

      <div className="flex-auto">
        <span>
          {evt.date} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>

      <div>
        <Link href={`/events/${evt.slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  )
}
