<template>
	<div id="myBackground" class="site-wrapper container is-fluid">
		<div class="site-title">
			<span>Background</span>
		</div>

		<div class="site-content">
			<div class="content-item">
				<p>
					I am a front-end web developer based in Indonesia, live in a city
					between mountains and sea, Yogyakarta where I... peacefully* code.
				</p>
				<span>*if developers can get any peace</span>
			</div>

			<div class="content-item">
				<p>
					I attended University of Brawijaya majoring in Information Systems.
					There I learn programming through my 3.5 years of college since 2013.
					I graduated in 2017 then joined front-end web dev team in Mamikos
					(psst... I still work there).
				</p>
			</div>

			<div class="content-item">
				<p>
					In my last year in college, I manage to work on three international
					journals under Information Privacy and Security topics (which I kind
					of proud of). And you can peek them at the publications menu above.
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.site-wrapper {
	height: 100vh;
	padding-top: 120px;
	display: flex;

	.site-content {
		@media (min-width: 768px) {
			width: 66.66%;
		}

		.content-item {
			margin-bottom: 20px;
			line-height: 2;

			p {
				font-size: 20px;
				font-weight: bold;

				@media (max-width: 991px) {
					font-size: 16px;
				}

				@media (max-width: 767px) {
					font-size: 14px;
				}

				@media (max-width: 320px) {
					font-size: 12px;
				}
			}

			span {
				font-size: 16px;

				@media (max-width: 991px) {
					font-size: 12px;
				}

				@media (max-width: 320px) {
					font-size: 10px;
				}
			}
		}
	}
}
</style>
