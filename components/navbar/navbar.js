import React, { Component } from 'react'
import styles from './Navbar.module.scss'

class Navbar extends Component {
	render() {
		return (
			<nav className={styles.navigation}>
				<div className={styles.title}>
					<h1>ditarahma</h1>
				</div>
				<div className={styles.menu}>
					<ul>
						<li onClick={() => this.props.goToSection('aboutMe')}>About me</li>
						<li onClick={() => this.props.goToSection('myExperience')}>Experience</li>
						<li onClick={() => this.props.goToSection('myWriting')}>Writing</li>
						<li onClick={() => this.props.goToSection('myContact')}>Contact</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar