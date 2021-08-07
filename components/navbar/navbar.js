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
						<li>About me</li>
						<li>Experiences</li>
						<li>Publications</li>
						<li>Contact</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar