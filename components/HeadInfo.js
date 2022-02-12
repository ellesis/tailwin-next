import React from 'react'
import Head from 'next/head'

const HeadInfo = ({title, keyword, contents}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta name="description" content={contents} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

HeadInfo.defaultProps = {
  title: "Lisa's Next App",
  keyword: 'Lisa App',
  contents: 'Lisa Next & Tailwind'
}

export default HeadInfo
