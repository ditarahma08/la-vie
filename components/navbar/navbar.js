import React, { Component } from 'react'
import cn from 'classnames'
import styles from './Navbar.module.scss'

class Navbar extends Component {
	constructor() {
		super()
		this.state = {
			showSidebar: false
		}
	}

	openSidebar = () => {
		const sidebarOpened = this.state.showSidebar
		this.setState({ showSidebar: !sidebarOpened })
	}

	render() {
		return (
			<nav className={styles.navigation}>
				<div onClick={() => this.props.goToSection('home')} className={styles.title}>
					<h1>d<span className={styles.desktop}>itarahma</span><span className={styles.mobile}>.</span></h1>
				</div>

				<div className={`${styles.menu} ${cn({
					[styles.opened]: this.state.showSidebar
				})}`}>
					<ul>
						<li onClick={() => this.props.goToSection('aboutMe')}>About me</li>
						<li onClick={() => this.props.goToSection('myExperience')}>Experience</li>
						<li onClick={() => this.props.goToSection('myWriting')}>Writing</li>
						<li onClick={() => this.props.goToSection('myContact')}>Contact</li>
						<li onClick={() => this.props.changeTheme()}>
						{ this.props.darkTheme
							? <img src="/sun.svg" alt="Light Theme" />
							: <img src="/moon-dark.svg" alt="Dark Theme" />
						}
						</li>
					</ul>
				</div>

				<div onClick={() => this.openSidebar()} className={`${styles.bars} ${cn({
					[styles.cross]: this.state.showSidebar
				})}`}>
					<div className={cn({
					[styles.top]: this.state.showSidebar
				})}></div>
					<div className={cn({
					[styles.mid]: this.state.showSidebar
				})}></div>
					<div className={cn({
					[styles.bottom]: this.state.showSidebar
				})}></div>
				</div>
			</nav>
		)
	}
}

export default Navbar