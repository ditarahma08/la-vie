import styles from './Header.module.scss'

function Header() {
	return (
		<div className={styles.header}>
			<div>
				<span className={styles.yellow}>Hi! </span><span className={styles.pink}>My name is Dita.</span>
			</div>
			<div>
				<span className={styles.orange}>I'm a Front-end Developer.</span>
			</div>
		</div>
	)
}

export default Header