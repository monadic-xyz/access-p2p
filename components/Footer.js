
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <h2>Get involved</h2>
          <p>
              Radicle is free and open source software, we welcome all contributors.
          </p>
          <ul>
            <li>Follow us on <a href="https://twitter.com/radicle_xyz">twitter</a>.</li>
            <li>Contribute to the development on <a href="https://github.com/radicle-dev">github</a>.</li>
            <li>Join the conversation on <a href="https://radicle.community">discourse</a>.</li>
            <li>Drop in the <a href="irc://freenode:1/radicle">#radicle</a> channel on freenode.</li>
          </ul>
        </div>
        <div>
          <h2>Stay up to date</h2>
          <p>If you'd like to be informed of progress, hand us your e-mail and we'll keep you in the loop.</p>
          <form action="https://formspree.io/xrgbwygl" method="POST" className="input">
            <input type="email" name="email" placeholder="E-mail" required />
            <button type="submit">Subscribe</button>
            <input type="hidden" name="_subject" value="Subscription" />
            <input type="hidden" name="_format" value="plain" />
            <input type="hidden" name="_next" value="https://radicle.xyz/subscribed" />
          </form>
        </div>
      </div>
      <div id="monadic">
        <pre><code>--.., supported by </code></pre><a href="https://monadic.xyz">monadic.xyz</a><pre><code> --'`,---..-.--+--.,,-,,..._.--..-._.---.--..,___.--,--'`,---..-.--+--.,,-,,..._.--..-._.---.--..,___.--,--'`,---..-.--+--.,,-,,..._.--..-._.---..,,-,,..._.--..-._.---.--..,___.--,--'`,---..-.--+--.,,-,,..._.--..-._.---.--..,___.--,--'`,---..-.--+--.,,-,,..._.--..-._.---.</code></pre>
      </div>
    </footer>)
}
