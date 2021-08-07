import React, { Component } from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar/navbar.js'
import Header from '../components/header/header.js'
import About from '../components/about/about.js'
import Experiences from '../components/experiences/experiences.js'

class Home extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Dita Rahma P. | Site</title>
          <meta name="description" content="A personal site by Dita Rahma P." />
          <link href="https://fonts.googleapis.com/css2?family=Katibeh&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;900&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <Header />
        <About />
        <Experiences />
      </>
    )
  }
}

export default Home
