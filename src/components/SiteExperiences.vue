<template>
	<div id="myExperiences" class="site-wrapper container is-fluid">
		<div class="site-title">
			<span>Experiences</span>
		</div>

		<div class="site-content">
			<div
				v-for="(experience, index) in experiences"
				class="item-content"
				:key="index"
			>
				<div class="exp-title">
					<span>{{ experience.title }}</span>
					<span>{{ experience.subTitle }}</span>
				</div>

				<div class="exp-desc">
					<p>{{ experience.desc }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			experiences: [
				{
					title: "Mamikos",
					subTitle: "Front-end Developer (full-time) | October 2017 - now",
					desc:
						"Develop new features in Mamikos web using Vue JS, maintain Mamikos web time to time, and finding the best code implementation for better web with my team.",
				},
				{
					title: "Hacktiv8",
					subTitle:
						"JavaScript Course Instructor (part-time) | January 2019 - January 2020",
					desc:
						"Teach how to build a simple website using JavaScript, JQuery, and CSS Framework to the beginners.",
				},
				{
					title: "Bitindo",
					subTitle:
						"React Native Developer (part-time) | June 2018 - October 2018",
					desc:
						"Develop a React Native application for managing digital monetary.",
				},
			],
		};
	},
};
</script>

<style lang="scss"></style>

<style lang="scss" scoped>
.site-wrapper {
	height: 100vh;
	padding-top: 120px;
	display: flex;

	.site-content {
		display: flex;
		flex-direction: column;

		.item-content {
			display: flex;
			flex-direction: column;
			line-height: 1.5;
			margin-bottom: 20px;

			@media (max-width: 425px) {
				margin-bottom: 15px;
			}

			.exp-title {
				display: flex;
				flex-direction: column;
				margin-bottom: 15px;

				@media (max-width: 425px) {
					margin-bottom: 10px;
				}

				span:first-child {
					font-size: 25px;
					text-transform: uppercase;
					font-weight: bold;

					@media (max-width: 991px) {
						font-size: 20px;
					}
				}

				span:last-child {
					font-size: 16px;
					font-weight: lighter;

					@media (max-width: 991px) {
						font-size: 14px;
					}

					@media (max-width: 320px) {
						font-size: 12px;
					}
				}
			}

			.exp-desc {
				font-size: 18px;

				@media (min-width: 768px) {
					width: 66.66%;
				}

				@media (max-width: 991px) {
					font-size: 16px;
				}

				@media (max-width: 425px) {
					font-size: 14px;
				}

				@media (max-width: 320px) {
					font-size: 12px;
				}
			}
		}
	}
}
</style>
