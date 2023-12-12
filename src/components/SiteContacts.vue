<template>
  <div id="myContacts" class="site-wrapper container is-fluid">
    <div class="site-title">
      <span>Reach Me</span>
    </div>

    <div class="site-content">
      <div class="item-content">
        <a
          v-for="(contact, index) in contacts"
          :href="contact.url"
          class="contact-item"
          target="_blank"
          :key="index"
          >{{ contact.name }}</a
        >
      </div>

      <div class="item-footer">
        <span>Site by </span>
        <span>ditarahma.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          name: "Email",
          url: "mailto:ditarahma08@gmail.com",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/dita-rahma-puspitasari-42897b91/",
        },
        { name: "Codepen", url: "https://codepen.io/ditarahma08" },
        { name: "DevTo", url: "https://dev.to/ditarahma08" },
        { name: "Github", url: "https://github.com/ditarahma08" },
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
    margin-top: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .item-content {
      display: flex;
      align-items: center;
      width: 100%;
      flex-direction: column;

      a,
      a:hover {
        text-decoration: none;
        color: var(--brand-accent);
        text-transform: uppercase;
        font-weight: 900;
        font-size: 58px;

        @media (max-width: 1199px) {
          font-size: 48px;
        }

        @media (max-width: 320px) {
          font-size: 40px;
        }
      }
    }

    .item-footer {
      font-size: 16px;
      padding: 10px;

      span:last-child {
        font-weight: bold;
      }
    }
  }
}
</style>
