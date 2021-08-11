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
		const BASE_POSITION_LEFT = 1000;
		const BASE_POSITION_RIGHT = 500;
		const PAGE_POSITION = window.scrollY
		top.style.left = `${PAGE_POSITION - (this.props.index * BASE_POSITION_LEFT)}px`
		bottom.style.right = `${PAGE_POSITION + (this.props.index * BASE_POSITION_RIGHT)}px`
	}

	render() {
		const text = [];
		for (let i = 0; i < 25 * this.props.index; i++) {
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