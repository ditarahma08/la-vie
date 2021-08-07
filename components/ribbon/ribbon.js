import React, { Component } from 'react'
import cn from 'classnames'
import styles from './Ribbon.module.scss'

class Ribbon extends Component {
	componentDidMount() {
		const titleTop = document.querySelectorAll(`.titleTop`)
		const titleBottom = document.querySelectorAll('.titleBottom')

		window.onscroll = () => {
			for (let i = 0; i < titleTop.length; i++) {
				this.handleOnScroll(titleTop[i], titleBottom[i])
			}
		}
	}

	handleOnScroll(top, bottom) {
		const pagePosition = window.scrollY
		top.style.left = `${pagePosition - 1600}px`
		bottom.style.right = `${pagePosition + 500}px`
	}

	render() {
		const text = [];
		for (let i = 0; i < 20; i++) {
			text.push(<span className={styles.text} key={i}>{ this.props.text }</span>)
		}

		return (
			<div className={styles.ribbon}>
				<div className={`${styles.title} ${styles.titleOrange}`}>
					<h5 className="titleTop">{ text }</h5>
				</div>
				<div className={`${styles.title} ${styles.titleYellow}` }>
					<h5 className="titleBottom">{ text }</h5>
				</div>
			</div>
		)
	}
}

export default Ribbon