import React, { Component } from 'react'
import Ribbon from '../ribbon/ribbon.js'
import styles from './Experiences.module.scss'

class Experiences extends Component {
	constructor() {
		super()
		this.state = {
			experienceList: [
				{
					value: 0,
					company: 'Otoklix',
					logo: '/otoklix.png',
					position: 'Front-end Engineer',
					jobType: 'full-time',
					joinDate: 'August 2021',
					exitDate: '',
					description: 'Collaborate with Back-end Engineers and Quality Assurance Engineers to deliver the products developed with Next.js and React.js.'
				},
				{
					value: 1,
					company: 'Mamikos',
					logo: '/mamikos.png',
					position: 'Front-end Engineer',
					jobType: 'full-time',
					joinDate: 'October 2017',
					exitDate: 'August 2021',
					description: 'Develop new features in Mamikos web using Vue.js and Nuxt.js, maintain Mamikos web time to time by writing unit test using Jest, and finding the best code implementation for better web with my team.'
				},
				{
					value: 2,
					company: 'Hacktiv8',
					logo: '/hacktiv.png',
					position: 'JavaScript Course Instructor',
					jobType: 'part-time',
					joinDate: 'January 2019',
					exitDate: 'January 2020',
					description: 'Teach how to build a simple website using JavaScript, JQuery, and CSS Framework to the beginners.'
				},
				{
					value: 3,
					company: 'Bitindo',
					logo: '/bitindo.png',
					position: 'React Native Developer',
					jobType: 'part-time',
					joinDate: 'June 2018',
					exitDate: 'October 2018',
					description: 'Develop a React Native application for managing digital monetary.'
				}
			]
		}
	}

	render() {
		return (
			<div className={styles.experiences}>
				<Ribbon text="experience" index={2} />
				<div className={styles.list}>
					{ this.state.experienceList.map(experience => (
						<div key={experience.value} className={styles.company}>
							<img src={experience.logo} alt={experience.company} />
							<h2>{ experience.company }</h2>
							<span>{ experience.position }</span>
							<span>{ experience.joinDate } - { experience.exitDate ? experience.exitDate : 'now'}</span>
							<p>{ experience.description }</p>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default Experiences