<template>
	<div id="myPublications" class="site-wrapper container is-fluid">
		<div class="site-title">
			<span>Publications</span>
		</div>

		<div class="site-content">
			<div
				v-for="(publication, index) in publications"
				class="item-content"
				:key="index"
			>
				<div class="pub-title">
					<span>{{ publication.year }} {{ publication.title }}</span>
				</div>

				<div class="pub-journal">
					<span>{{ publication.publisher }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			publications: [
				{
					year: "2018",
					title:
						"Teen's Social Media Adoption: An Empirical Investigation in Indonesia",
					publisher:
						"Journal Of Advanced Computer Science and Applications | Science & Information Sai Organization Ltd.",
				},
				{
					year: "2017",
					title:
						"Information Privacy Concerns on Teens as Facebook User in Indonesia",
					publisher: "Procedia Computer Science | Elsevier",
				},
				{
					year: "2016",
					title: "Facebook Privacy Concerns Among High-School Teens",
					publisher:
						"International Journal of Computer Science and Security | LJS Publishing",
				},
			],
		};
	},
};
</script>

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
			margin-bottom: 35px;

			@media (min-width: 768px) {
				width: 66.66%;
			}

			@media (max-width: 320px) {
				margin-bottom: 25px;
			}

			.pub-title {
				font-weight: bold;
				font-size: 25px;
				margin-bottom: 10px;
				text-transform: uppercase;

				@media (max-width: 991px) {
					font-size: 20px;
				}

				@media (max-width: 425px) {
					font-size: 18px;
				}

				@media (max-width: 320px) {
					font-size: 16px;
					margin-bottom: 7px;
				}
			}

			.pub-journal {
				font-size: 18px;

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
