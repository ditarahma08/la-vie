import React, { Component } from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar/navbar.js'
import Header from '../components/header/header.js'
import About from '../components/about/about.js'
import Experiences from '../components/experiences/experiences.js'
import Writing from '../components/writing/writing.js'
import Contact from '../components/contact/contact.js'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      darkTheme: true
    }
  }

  switchTheme = () => {
    const darkTheme = this.state.darkTheme

    if (darkTheme) {
      this.setState({
        darkTheme: false
      })
      document.getElementById("myPage").setAttribute("data-theme", "light");
    } else {
      this.setState({
        darkTheme: true
      })
      document.getElementById("myPage").removeAttribute("data-theme")
    }
  }

  showSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (
      <div id="myPage">
        <Head>
          <title>Dita Rahma P. | Site</title>
          <meta name="description" content="A personal site by Dita Rahma P." />
          <link href="https://fonts.googleapis.com/css2?family=Katibeh&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;900&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar darkTheme={this.state.darkTheme} goToSection={this.showSection} changeTheme={this.switchTheme} />
        <div id="home" className="container-fluid">
          <Header darkTheme={this.state.darkTheme} />
        </div>
        <div id="aboutMe">
          <About />
        </div>
        <div id="myExperience">
          <Experiences darkTheme={this.state.darkTheme} />
        </div>
        <div id="myWriting">
          <Writing id="writing" />
        </div>
        <div id="myContact">
          <Contact id="contact" />
        </div>
      </div>
    )
  }
}

export default Home
