import React, { Component } from 'react'
import Ribbon from '../ribbon/ribbon.js'
import styles from './Contact.module.scss'

class Contact extends Component {
	constructor() {
		super()
		this.state = {
			contacts: [
				{
					name: "Email",
					url: "mailto:ditarahma08@gmail.com",
				},
				{
					name: "LinkedIn",
					url: "https://www.linkedin.com/in/dita-rahma-puspitasari-42897b91/",
				},
				{ name: "Codepen", url: "https://codepen.io/ditarahma08" },
				{ name: "DevTo", url: "https://dev.to/ditarahma08" },
				{ name: "Twitter", url: "https://twitter.com/ditarahma08" },
				{ name: "Instagram", url: "https://Instagram.com/ditaarahmap" },
			],
		}
	}

	render() {
		return (
			<div className={styles.contact}>
				<Ribbon text="contact" index={4} />
				<div className={styles.item}>
					{ this.state.contacts.map(contact => (
						<a href={contact.url} target="_blank" key={contact.name}>{ contact.name }</a>
					))}
				</div>
				<div className={styles.footer}>
					<span>Site by <b>ditarahma.</b></span>
				</div>
			</div>
		)
	}
}

export default Contact