<template>
  <div id="app">
    <site-navbar :is-dark-mode="isDarkMode" @change="toggleDarkMode" />
    <site-hero class="site-page" />
    <site-background class="site-page" />
    <site-experiences class="site-page" />
    <site-publications class="site-page" />
    <site-contacts class="site-page" />

    <div class="navbar-dark-mode" @click="toggleDarkMode">
      <img v-if="!isDarkMode" src="../public/icons/moon-dark.svg" />
      <img v-else src="../public/icons/sun.svg" />
    </div>
  </div>
</template>

<script>
import SiteNavbar from "./components/SiteNavbar";
import SiteHero from "./components/SiteHero";
import SiteBackground from "./components/SiteBackground";
import SiteExperiences from "./components/SiteExperiences";
import SitePublications from "./components/SitePublications";
import SiteContacts from "./components/SiteContacts";

export default {
  name: "app",
  components: {
    SiteNavbar,
    SiteHero,
    SiteBackground,
    SiteExperiences,
    SitePublications,
    SiteContacts,
  },

  data() {
    return {
      page: 1,
      isDarkMode: false,
      dataTheme: "",
    };
  },

  watch: {
    isDarkMode(val) {
      val
        ? document.getElementById("app").setAttribute("data-theme", "dark")
        : document.getElementById("app").removeAttribute("data-theme");
    },
  },

  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>

<style lang="scss">
:root {
  --brand-basic: #dee8f3;
  --brand-accent: #31456a;
  --brand-category: #fff;
}

[data-theme="dark"] {
  --brand-basic: #31456a;
  --brand-accent: #dee8f3;
  --brand-category: #142038;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--brand-accent);
  background-color: var(--brand-basic);
  margin: 0 auto;
  overflow: scroll;
  height: 100vh;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  .site-title {
    margin-top: 10px;
    margin-right: 35px;

    @media (max-width: 767px) {
      position: absolute;
      left: -30px;
      top: 75px;
      z-index: 1;
    }

    span {
      writing-mode: vertical-lr;
      transform: rotateZ(180deg);
      text-transform: uppercase;
      font-weight: bold;
      font-size: 35px;

      @media (max-width: 767px) {
        font-size: 65px;
        color: var(--brand-category);
      }
    }
  }

  .site-content {
    @media (max-width: 767px) {
      z-index: 2;
    }
  }

  .site-wrapper {
    @media (max-width: 767px) {
      padding-top: 82px;
    }
  }

  .site-page {
    scroll-snap-align: start;
  }

  .navbar-dark-mode {
    @media (min-width: 768px) {
      display: none;
    }

    position: fixed;
    padding: 15px;
    border-radius: 100%;
    right: 20px;
    bottom: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--brand-basic);
    z-index: 2;
    cursor: pointer;

    img {
      height: 25px;
    }
  }
}
</style>
