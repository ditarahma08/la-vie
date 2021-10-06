import React, { Component } from 'react'
import styles from './Header.module.scss'

class Header extends Component {
	constructor() {
		super()
		this.state = {
			hiText: ['H', 'i', '!'],
			ditaText: ['D', 'i', 't', 'a'],
			frontEndText: ['F', 'r', 'o', 'n', 't', '-', 'e', 'n', 'd'],
			developerText: ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
		}
	}
	render() {
		return (
			<div className={styles.header}>
				<div className={styles.row}>
					<div className={styles.compound}>
						{this.state.hiText.map(text => (
							<span className={`${styles.yellow} ${styles.letter}`} key={`${text}${text.index}`}>{ text }</span>
						))}
					</div>

					<div className={styles.compound}>
						<span className={`${styles.pink} ${styles.letter}`}>I</span>
						<span className={`${styles.pink} ${styles.letter}`}>'</span>
						<span className={`${styles.pink} ${styles.letter}`}>m</span>
					</div>

					<div className={styles.compound}>
						{this.state.ditaText.map(text => (
							<span className={`${styles.pink} ${styles.letter}`} key={`${text}${text.index}`}>{ text }</span>
						))}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.brace}>{ '<' }</div>
					<div className={styles.compound}>
						{this.state.frontEndText.map(text => (
							<span className={`${styles.orange} ${styles.letter}`} key={`${text}${text.index}`}>{ text }</span>
						))}
					</div>

					<div className={styles.compound}>
						{this.state.developerText.map(text => (
							<span className={`${styles.orange} ${styles.letter}`} key={`${text}${text.index}`}>{ text }</span>
						))}
					</div>
					<div className={styles.brace}>{ '/>' }</div>
				</div>
			</div>
		)
	}
}

export default Header