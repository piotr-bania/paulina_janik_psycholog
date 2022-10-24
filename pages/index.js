import Head from 'next/head'

import Hero from '../components/Hero'

export default function Home() {
return (
<div>

  <Head>
    <title>Paulina Janik | Psycholog | Psychoterapeuta Psychodynamiczny</title>
    <meta name="description" content="Paulina Janik | Psycholog | Psychoterapeuta Psychodynamiczny" />
    <link rel="icon" href="/favicon.svg" />
  </Head>

  <main>
    <Hero />
  </main>

  <footer></footer>

</div>
)
}