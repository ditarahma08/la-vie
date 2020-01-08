<template>
	<div
		id="siteNavbar"
		class="site-navbar-container navbar"
		:class="{ '--is-open': isSidebar }"
	>
		<div class="container is-fluid">
			<div class="--left">
				<div class="site-logo">
					<a href="#myHero">
						<img v-if="!isDarkMode" src="../../public/icons/rose-dark.svg" />
						<img v-else src="../../public/icons/rose-light.svg" />
					</a>

					<span>ditarahma.</span>
				</div>

				<div class="site-menus">
					<ul>
						<li><a href="#myBackground">Background</a></li>
						<li><a href="#myExperiences">Experiences</a></li>
						<li><a href="#myPublications">Publications</a></li>
						<li><a href="#myContacts">Reach me</a></li>
					</ul>
				</div>
			</div>

			<div class="--right">
				<img
					v-if="!isDarkMode"
					src="../../public/icons/moon-dark.svg"
					@click="toggleDarkMode"
				/>
				<img v-else src="../../public/icons/sun.svg" @click="toggleDarkMode" />

				<div class="navbar-toggle" @click="toggleSidebar">
					<span class="icon-bar --top"></span>
					<span class="icon-bar --mid"></span>
					<span class="icon-bar --bot"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isDarkMode: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			isSidebar: false,
		};
	},

	methods: {
		toggleSidebar() {
			this.isSidebar = !this.isSidebar;
		},
		toggleDarkMode() {
			this.$emit("change");
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../scss/navbar.scss";

.site-navbar-container {
	width: 100%;
	padding: 20px 0;
	background-color: var(--brand-basic);
	position: fixed;

	@media (max-width: 767px) {
		padding: 10px 0;
	}

	.container {
		display: flex;
		justify-content: space-between;
		width: 100%;

		.--left {
			display: flex;
			align-items: center;

			.site-logo {
				font-weight: bold;
				font-size: 40px;
				display: flex;
				align-items: center;
				margin-right: 35px;

				@media (max-width: 991px) {
					span {
						display: none;
					}
				}

				img {
					height: 46px;
					margin-right: 10px;
					margin-top: 15px;

					@media (max-width: 767px) {
						height: 35px;
					}
				}

				span {
					@media (max-width: 991px) {
						display: none;
					}
				}

				* {
					cursor: pointer;
				}
			}

			.site-menus {
				ul {
					list-style-type: none;
					display: flex;

					li {
						margin-right: 15px;
						cursor: pointer;

						a,
						a:hover {
							text-decoration: none;
							color: var(--brand-accent);
						}
					}
				}
			}
		}

		.--right {
			img {
				height: 30px;
				cursor: pointer;
				margin-top: 25px;

				@media (max-width: 767px) {
					margin-top: 22px;
					height: 25px;
					display: none;
				}
			}
		}
	}
}
</style>
