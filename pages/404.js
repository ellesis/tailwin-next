import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link'
import NavLayout from '@/layouts/NavLayout'

function NotFoundPage() {
  return (
    <NavLayout>
      <div className="">
        <h1 className="flex row">
          <FaExclamationTriangle /> 404
        </h1>
      </div>
      <h4>Sorry, there is nothing here</h4>
      <Link href="/">Go Back Home</Link>
    </NavLayout>
  )
}

export default NotFoundPage
