<template>
  <div id="myHero" class="site-hero-container container is-fluid">
    <div class="site-hero-banner">
      <span>Hello.</span>
      <span>My name is Dita.</span>
      <span>I am a Front-end Engineer.*</span>
    </div>

    <div class="site-hero-notes">
      <span>*at least that what they write on my nametag</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-hero-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  .site-hero-banner {
    display: flex;
    flex-direction: column;
    font-weight: 900;
    font-size: 68px;

    @media (max-width: 991px) {
      font-size: 58px;
    }

    @media (max-width: 767px) {
      font-size: 48px;
    }

    @media (max-width: 425px) {
      font-size: 38px;
    }
  }

  .site-hero-notes {
    font-weight: 900;
    font-size: 16px;
    margin-top: 25px;

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
}
</style>
