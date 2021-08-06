import Navbar from '../navbar/navbar.js'

function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main>{ children }</main>
		</>
		)
}

export default Layout