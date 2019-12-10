import Link from 'next/link'
import Page from 'layouts/page'

export default function Index() {
  return (
    <Page>
      <div className="content">
        <h1>
          Protocol
        </h1>
        <p>Some stuff about the protocol</p>
        <Link href="/docs">
          <a>Read the docs</a>
        </Link>
      </div>
    </Page>
  )
}
