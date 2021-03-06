import Update from 'layouts/update'

export const meta = {
  releaseDate: new Date(2020, 1, 26),
  title: 'Social P2P by Emily Woods'
}

export default function Index() {
  return (
    <Update meta={meta}>
      <sub>The following blog post was written by Emily Woods, a member of the AccessP2P cohort. She's graciously allowed us to repost it here, but the original can be found on her <a href="https://emilywoods.me/blog/social-p2p/">blog</a>.</sub>

      <br/>
      <br/>
      <br/>

      <p> In November 2019, I attended <a href="https://accessp2p.xyz/why">AccessP2P</a>. This was formed as a series of lectures, aimed at introducing a group of people to peer-to-peer (P2P) technologies and concepts.</p>

      <p>The topic of Social Peer-to-Peer was lecture #3 in the AccessP2P series.</p>

      <p>The very first lecture had been an introduction to P2P. It delved into the “person-to-person” aspects of P2P, as a zoom out from the potentially techno-centric focus of P2P. The Social P2P lecture was an appropriate follow-up. In this lecture, we gained an introduction to social networks, peer-to-peer (P2P)-based network paradigms, and the concept of trust.</p>

      <p>This lecture was presented by <a href="https://isthisa.com/">Sarah Friend</a>, an artist and software engineer. It provided an opportunity to learn more about the structure and development of social networks, to find out what are some P2P social networks we can become part of, and, if we wished, to start P2P-ing with <a href="https://scuttlebutt.nz/">Scuttlebutt</a>!</p>

      <h3>A social network</h3>

      <p>A “social network” is a familiar concept to most of us these days. When hearing the term, what pops into your head? It’s likely to be the image of a small blue bird or white “f” on a deep blue background. While social media networks may have seized the term somewhat, in its essence a social network is a network of interconnected humans, online or offline. Many of the social networks we log onto every day, are intended to mirror the way that people interact in the “real-world”: social media networks coerce real-life connections into something quantifiable.</p>

      <div className="img_wrapper">
        <img src="https://emilywoods.me/assets/images/social_p2p/network.png"/>
      </div>

      <p>Before delving into social networks, it helps to know what is meant by “a network”. A network is a graph, meaning there are entities (nodes) which have connections between them (edges). A graph can be directed or undirected, which means a connection goes one-way or both ways. To illustrate this, Sarah referred to the way users interact on Twitter, where one person follows another and that person does not need to follow back (directed graph), and compared it with how users interact on a platform like Facebook, where “friending” an individual requires consent by both individuals (undirected graph).</p>

      <div className="img_wrapper">
        <img src="https://emilywoods.me/assets/images/social_p2p/graph_direction.png"/>
      </div>

      <p>Sarah then continued by describing a couple of specific types of networks: <a href="https://en.wikipedia.org/wiki/Small-world_network">small world</a> and <a href="https://en.wikipedia.org/wiki/Scale-free_network">scale-free</a>. In a small world graph, some nodes are “hubs” meaning that they have a higher number of connections than others. As a result of having a number of highly connected nodes, these small world networks can provide shorter paths between nodes. Sarah likened this to having an extroverted person in the network: someone with a lot of friends and who does a lot of the social heavy-lifting, who as a consequence, will reduce the number of connections between other individuals. For ease of understanding, Sarah suggested a lattice as the opposite of a small world graph, given that each node has an evenly distributed number of neighbours, ie. connections.</p>

      <div className="img_wrapper">
        <img src="https://emilywoods.me/assets/images/social_p2p/small_world.png"/>
      </div>

      <p>A scale-free network, can also be referred to as a power-law network, given that this type of network asymptotically follows a power-law distribution. This describes the relationship between the number of nodes and the number of connections a node will have, and demonstrates the fraction of nodes which are likely to have a particular degree of connectivity. A characteristic of scale-free networks, it is that it can be relatively common for nodes to have a number of connections, which exceeds the average number of connections i.e. a small number of well-
      connected nodes may dominate the network and result in a centralised structure. Social networks can be scale-free.</p>

      <div className="img_wrapper">
        <img src="https://emilywoods.me/assets/images/social_p2p/scale_free.png"/>
      </div>

      <p>In summary, social networks are just another type of graph, where the nodes are people and the edges are the means by which they connect. While this may seem relatively simple to understand, there is a lot more that goes on within social media platforms, beyond the user interface and the relationship-graphs we can visualise for ourselves. [Aside: while carrying out an exercise in threat modelling of a P2P network during the <a href="https://www.youtube.com/watch?v=wkrWhEFABrA&feature=youtu.be">Access P2P Security lecture</a>, it provided a little context into what kind of information which can be deduced from relationships in a network, if someone wants to take advantage of it.]</p>

      <h3>What can a P2P-based social network look like?</h3>

      <p>Most applications use a client-server relationship: we (the client) make a request to the server and the server fulfils it. With P2P, peers are connected to each other, without a central server. Protocols such as <a href="https://www.datprotocol.com/">Dat</a> and <a href="http://scuttlebot.io/more/protocols/secure-scuttlebutt.html">Secure Scuttlebutt</a> provide a means of achieving this. In a P2P network, nodes connect and form a (social) network.</p>

      <p>P2P social networks can take many forms. For example, the PGP web of trust and key-signing parties can be considered a form of social network. At a key-signing party, participants sign each others’ keys, which acknowledges this person is who they say they are (via government issued documentation or otherwise), to extend the web of trust. The party itself follows a specific protocol. One of the concepts which comes out of PGP is a strong set, referring to the biggest collection of connected keys. Any two keys within this strong set have a path of connections between them and are part of the global web of trust. However it is possible that isolated islands form, separate from this strong set. Understanding the existence of this <a href="https://en.wikipedia.org/wiki/Web_of_trust#Strong_set">strong set</a> and isolated islands, we can identify a potentially malicious group. A malicious group may be an island of users who all trust each other and support each others’ content, but remain unconnected to the strong set. This could be evidence of a <a href="https://en.wikipedia.org/wiki/Sybil_attack">Sybil attack</a> taking place - whereby a large number of false users is created by an attacker to gain influence.</p>

      <p>Some commonly-known P2P social network applications are Scuttlebutt, Mastodon and Bittorrent. In the lecture, Sarah honed in on Scuttlebutt! So what did we learn about it? Well, Scuttlebutt is a social network which makes use of the <a href="http://scuttlebot.io/more/protocols/secure-scuttlebutt.html">Secure Scuttlebutt Protocol</a>. It has a number of different clients which you can use to connect to the protocol, such as <a href="https://github.com/ssbc/patchwork">Patchwork</a> and <a href="https://github.com/ssbc/patchbay">Patchbay</a>. The network uses gossip protocols as a way to disseminate information between peers. Most messages in Scuttlebutt are plain text and publicly visible, but private messages are also possible. Private messages are encrypted and sent through the people you’re connected to, but can only be decrypted with your intended recipient’s PGP key! One of the neat things about Scuttlebutt is that it is local-first! The story goes that this is because many of the developers and original creators of Scuttlebutt spend a lot of time on boats, and naturally still wanted to be able to connect to their friends. (This is also good to know, since I, too, have had many, many fantasy conversations about beginning a nomadic life on a boat and/or van in recent years). The potential downside of local-first is that you will always store more than you can access or see. In Scuttlebutt, trust is directed, i.e. it goes one way.</p>

      <h3>How we trust</h3>

      <p>In P2P (and other forms of digital social networks) trust is usually binary: you’re friends with someone or you’re not, you follow someone or you don’t. This only partially reflects relationships in reality - in the “real world” we trust people with varying degrees of certainty.</p>
      <p>Two core results of trust are “trust as identity” and “trust as reputation”. While these are interconnected and similar, they are not necessarily the same. There are also different ways of characterising trust: global versus local, centralised versus decentralised, policy-based versus reputation-based.</p>

      <p>Sarah also explored the concept of anonymity in P2P networks, and the question appeared: “What does anonymity even mean?” Anonymity is never truly guaranteed. And even if it appears that you are anonymous now, there are things which may be used to identify you over time, such as relationships or patterns of behaviour. Anonymity, insofar as it goes, is mostly beyond your control and is really limited by the lengths that somebody can go to in order to uncover your identity. And, even if this is difficult to uncover now, who’s to say what will be possible in the future. Anonymity (probably) won’t last forever.</p>

      <h3>Concluding Thoughts</h3>

      <p>Sarah’s lecture was an interesting journey through graph theory, P2P protocols, and trust.Every segment of her talk included references to complementary research or applications, so even afterwards, there was much to explore and follow up on. With regards to trying out social P2P applications, I haven’t yet set myself up Scuttlebutt, but I would like to give it a try!</p>

      <h4>Links and references</h4>

      <ul className="list">
      <li>A recording of the lecture as well as many of the supporting lecture materials, can be found <a href="http://accessp2p.xyz/resources">here</a>.</li>
      <li>Here is a helpful guide for getting started with <a href="https://docs.datproject.org/docs/intro">Dat</a>.</li>
      </ul>
      <br />
      <h4>Acknowledgements</h4>
      <p>Thank you to <a href="https://twitter.com/angedupre">Ange</a> for reviewing this post, and also for the wonderful work she did with overseeing the entire AccessP2P programme.</p>
      <p>Thank you to <a href="https://isthisa.com/">Sarah</a> for reviewing this post and for sharing her knowledge on social P2P!</p>

    </Update>
  )
}
