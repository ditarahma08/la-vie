<template>
  <div id="myBackground" class="site-wrapper container is-fluid">
    <div class="site-title">
      <span>Background</span>
    </div>

    <div class="site-content">
      <div class="content-item">
        <p>
          I am a Front-end Web Engineer based in Indonesia, come from a city
          between mountains and sea, Yogyakarta, now I live in a metropolis
          Jakarta.
        </p>
      </div>

      <div class="content-item">
        <p>
          In my early career I used to work with <b>VueJS</b> framework and a
          little bit of <b>AngularJS</b>. I also got a little bit experience
          with <b>React Native</b> when working in Bitindo. After a while, I
          mostly working with <b>NuxtJS</b> for around two years.
        </p>
      </div>

      <div class="content-item">
        <p>
          When I move from Mamikos to Otoklix, I switched the language to mostly
          <b>NextJS</b> and <b>ReactJS</b>. But I still use the same unit
          testing, which is <b>Jest</b>. In this company I also got a little bit
          experience with iOS development using <b>Swift</b>.
        </p>
      </div>

      <div class="content-item">
        <p>
          Now I am switching from <b>JavaScript</b> to <b>TypeScript</b> while
          still using NextJS to develop website in my current company, Sequis
          Life. Beside the broad stacks that filling up my working experience
          above, I also got familiarity developing components using
          <b>Storybook</b>.
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
