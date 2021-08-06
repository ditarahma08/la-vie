import Head from 'next/head'
// import Layout from '../components/layout/layout.js'
import Navbar from '../components/navbar/navbar.js'
import Header from '../components/header/header.js'
import About from '../components/about/about.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dita Rahma P. | Site</title>
        <meta name="description" content="A personal site by Dita Rahma P." />
        <link href="https://fonts.googleapis.com/css2?family=Katibeh&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Header />
        <About />
      </main>
    </div>
  )
}
