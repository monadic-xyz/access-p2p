import Link from 'next/link'


export default function Footer() {
  return (
    <footer>
      <br/>
      <p>
        Are you interested in the program content and development? Sign up for updates from our organizers.
      </p>
      <br/>
      <a className="subscribe button" href="https://accessp2p.typeform.com/to/J4ahyX" target="_blank" rel="noopener noreferrer">
        Stay informed
      </a>
      <br/>
      <br/>
      <br/>
      <p>
        For more information, read our <Link href="/faq"><a>FAQ</a></Link>, follow us on <Link href="https://twitter.com/accessp2p"><a>Twitter</a></Link>  or feel free to <a href="mailto:hello@accessp2p.xyz">reach out</a>.
      </p>
    </footer>)
}
