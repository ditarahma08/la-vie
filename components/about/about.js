import React, { Component } from 'react'
import Ribbon from '../ribbon/ribbon.js'
import styles from './About.module.scss'

class About extends Component {
	render() {
		return (
			<div className={styles.about}>
				<Ribbon text="about me" />
				<div className={styles.description}>
					<p>Dita Rahma is an web engineer based in Yogyakarta, Indonesia. She attended University of Brawijaya majoring in Information Systems and graduated in 2017. In her university time, she managed to published 3 international journal under Information Privacy topics. Now she is working full-time as a Front-end Developer in Otoklix.</p>
				</div>
			</div>
		)
	}
}

export default About