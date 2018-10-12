# Radicle

> ... because 'tis the Origin of the Root... The Radicle is likewise called the
> seminal Root.

<cite>&mdash; Vallemont, Curiosities of nature and art in husbandry and gardening
(1707)</cite>

Radicle is a peer-to-peer stack for creating open source software together.  A
collaboration environment that’s designed to be:

* **Offline first**: all data, including issues, comments and other social
  artifacts is yours & lives on your machine.
* **Peer-to-peer**: with no central server or intermediary in control.
* **Cryptographically secure**: user data that is tamper-proof & unforgeable,
  using public key cryptography.
* **Programmable**: developers can program the way in which they collaborate.
* **Interoperable & open**: reflecting the values of the open source community.

Radicle integrates with distributed version control systems like git and
includes a high-level language with reprogrammable semantics, P2P networking
for sharing application state, and flexible command line tools. Inspired by P2P
protocols like [secure scuttlebutt], radicle connects distributed version control
with peer-to-peer networking and extends the idea of replicated logs to fully
re-programmable state machines we call *chains*.

Today we’re releasing a core component of the radicle stack, an implementation
of the radicle language, along with a [technical paper] describing its formal
semantics.

[technical paper]: http://about:blank
[secure scuttlebutt]: https://www.scuttlebutt.nz/

## The radicle stack

The radicle language is the basis for a stack of components that together
compose a fully featured collaborative programming environment.

**radicle**: Language for specifying, interpreting, and dynamically modifying
the semantics of arbitrary state machines.

**radicle-p2p**: Peer-to-peer gossip and state replication layer for publishing
and subscribing to updates from other collaborators.

**radicle-lib**: Library of collaboration primitives, including repos, orgs,
revisions, issues, comments, feeds, plus tools for creating and
manipulating chains.

In the coming months we’ll be sharing more details about these components and
making an initial release available for developers, along with tutorials on how
to get started.

## The radicle language

Radicle is a universal re-programmable state machine. More precisely, it's a
domain specific language for creating replicated state machines that can
dynamically modify their semantics.

Not only can radicle programs evolve as they advance, this sequential
evaluation produces a chain of deterministic state transitions. Chains can
represent simple issue logs or more complex structures such as full review
flows or testing suites. Because radicle chains store histories of verifiable
instructions, they can also be safely replicated across machines. The result is
an interactive paradigm, where developers can write collaborative programs that
describe their working process as it unfolds.

The radicle language features a number of design choices intended specifically
for the above use-case:

* High-level, LISP dialect in the flavor of [Black].
* Ability to redefine the `eval` function, changing the semantics of the
  language.
* Lexically scoped with a hyperstatic global environment, i.e. free variable
  resolution takes place at definition-site rather than call-site.
* First-class functions for side-effect free computation on chain.
* Immutable by default.
* Deterministic effects system for managing state.
* Syntax closely resembling Clojure.

[Black]: http://pllab.is.ocha.ac.jp/~asai/Black/

For a more in-depth overview of the radicle language, refer to our [paper].

## New ways to collaborate on code

Radicle makes collaboration a primitive -- starting with git and building up an
entirely peer-to-peer developer experience that encourages experimentation
around how we write software together. In other words, radicle lets developers
program the process of writing code, shaping their workflow around a specific
project or context.

Like many P2P systems, radicle uses an offline-first model. Issues, comments,
and other social artifacts are stored locally as a log of events and synced
automatically with your collaborators. While git repositories are already
portable, social artifacts are not - radicle aims to change this. Radicle
also allows you to define entirely new message types: projects, feature
requests, releases, etc., each with their own event streams, metadata, and
access control policies. All of this information is completely portable
and self-amending in situ.

Making any kind of semantic modification to a decentralized data structure is
typically difficult to coordinate and prone to forks, but radicle’s
programmable evaluator makes this process straightforward, safe, and immediate.
Additionally, built-in aggregate signatures allow for the definition of
custom security models to read or modify each chain, even to revise an access
control policy.

Finally, radicle comes with sensible defaults, ensuring you can be productive
right away, while also giving programmers a flexible system for rolling their
own software collaboration workflow. Inspired in many ways by [Emacs], radicle
is designed as an extensible system, where developers can share their programs
with one another and extend their revision control environment however they
like.

[Emacs]: https://www.gnu.org/software/emacs/

We’re very excited to open-source the radicle language and soon the full
radicle stack.

October 12, 2018

<p style="font-size: 300%; margin: 0.5em 0">✌️</p>