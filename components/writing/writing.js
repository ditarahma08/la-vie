import React, { Component } from 'react'
import Ribbon from '../ribbon/ribbon.js'
import styles from './Writing.module.scss'

class Writing extends Component {
	constructor() {
		super()
		this.state = {
			journals: [
				{
					value: 1,
					title: "Teen's Social Media Adoption: An Empirical Investigation in Indonesia",
					year: '2018',
					journal: 'Journal Of Advanced Computer Science and Applications',
					publisher: 'Science & Information Sai Organization Ltd.',
					url: 'https://thesai.org/Publications/ViewPaper?Volume=9&Issue=2&Code=IJACSA&SerialNo=52'
				},
				{
					value: 2,
					title: "Information Privacy Concerns on Teens as Facebook User in Indonesia",
					year: '2017',
					journal: 'Procedia Computer Science',
					publisher: 'Elsevier',
					url: 'https://www.sciencedirect.com/science/article/pii/S1877050917329678'
				},
				{
					value: 3,
					title: "Facebook Privacy Concerns Among High School Teens",
					year: '2016',
					journal: 'International Journal of Computer Science and Security',
					publisher: 'LJS Publishing',
					url: 'https://www.academia.edu/31243478/Facebook_Privacy_Concerns_among_High-School_Teens'
				}
			],
			writings: [
				{
					value: 1,
					title: 'Make a Camera App in Web (Part 1): Accessing the webcam',
					date: '6 Feb 2020',
					publisher: 'DEV Community',
					url: 'https://dev.to/ditarahma08/make-a-camera-app-in-web-part-1-accessing-the-webcam-4a8n'
				},
				{
					value: 2,
					title: 'Make a Camera App in Web (Part 2): Capturing the image',
					date: '12 Feb 2020',
					publisher: 'DEV Community',
					url: 'https://dev.to/ditarahma08/make-a-camera-app-in-web-part-2-capturing-the-image-289i'
				},
				{
					value: 3,
					title: 'Dark Mode with CSS Variable',
					date: '12 Nov 2020',
					publisher: 'DEV Community',
					url: 'https://dev.to/ditarahma08/dark-mode-with-css-variable-1p57'
				}
			]
		}
	}
	render() {
		return (
			<div className={styles.writing}>
				<Ribbon text="writing" index={3} />
				<div className={styles.category}>
					<div className={styles.type}>
						<h2>Journal</h2>
						<ul>
							{ this.state.journals.map(journal => (
								<li key={journal.value}>
									<a href={journal.url} target="_blank">{ journal.title }</a>
									<span>{ journal.year } { journal.journal }</span>
									<span>{ journal.publisher }</span>
								</li>
							))}
						</ul>
					</div>

					<div className={styles.type}>
						<h2>Technical Writing</h2>
						<ul>
							{ this.state.writings.map(writing => (
								<li key={writing.value}>
									<a href={writing.url} target="_blank">{ writing.title }</a>
									<span>published on { writing.date } on { writing.publisher }</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Writing