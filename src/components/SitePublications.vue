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
          <span @click="openLink(publication.url)"
            >{{ publication.year }} {{ publication.title }}</span
          >
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
          year: "2023",
          title: "Managing Cleaner Git Branch",
          publisher: "DEV Community (self publications)",
          url: "https://dev.to/ditarahma08/dark-mode-with-css-variable-1p57",
        },
        {
          year: "2020",
          title: "Dark Mode with CSS Variable",
          publisher: "DEV Community (self publication)",
          url: "https://dev.to/ditarahma08/dark-mode-with-css-variable-1p57",
        },
        {
          year: "2020",
          title: "Make a Camera App in Web (Part 2): Capturing the image",
          publisher: "DEV Community (self publication)",
          url:
            "https://dev.to/ditarahma08/make-a-camera-app-in-web-part-2-capturing-the-image-289i",
        },
        {
          year: "2020",
          title: "Make a Camera App in Web (Part 1): Accessing the webcam",
          publisher: "DEV Community (self publication)",
          url:
            "https://dev.to/ditarahma08/make-a-camera-app-in-web-part-1-accessing-the-webcam-4a8n",
        },
        {
          year: "2018",
          title:
            "Teen's Social Media Adoption: An Empirical Investigation in Indonesia",
          publisher:
            "Journal Of Advanced Computer Science and Applications | Science & Information Sai Organization Ltd.",
          url:
            "https://thesai.org/Downloads/Volume9No2/Paper_52-Teens_Social_Media_Adoption.pdf",
        },
        {
          year: "2017",
          title:
            "Information Privacy Concerns on Teens as Facebook User in Indonesia",
          publisher: "Procedia Computer Science | Elsevier",
          url:
            "https://pdf.sciencedirectassets.com/280203/1-s2.0-S1877050917X00227/1-s2.0-S1877050917329678/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDY3764ykXKw7j5%2FNMcHq4D6UATnwBQlw%2FR6EdUbtQQpAiEAn%2F102D8295WURjgd8JeEU4wCSltU4fGjCA7D1HWEYycqswUIKBAFGgwwNTkwMDM1NDY4NjUiDOLNv6EyH%2BZogYs1MyqQBSv7Nx2a16g%2FaV1PCA1bLQXOfmo3Z0TvQMEbhtxhowilVZkVkSqjtvfKI2XJmIQ4ajXcg66i8ZY4%2BRC0yVOpzo3vx7z8TDHOcf1iEc9rjX0Flhus6qjIMvqZfkjT%2FFTph01QYwjN89fcdWS7uxuV3cOP6Z1TnV9dOB4Gj9wJ8HnANhA4ZtOdIFqZWWqESrVLIsXPeAobAuUQNhvSWHR9cWKisX%2Fsb43bv3XmeNN0dJuAweyPhl%2B%2BeNIUXJQ1dpkMhNWgilmD7Wpm95zN7Ri91NMWKB%2BO2Yig7TKctg8ZjPaGWkBJyeOS5WxZvKeB%2FiGD9HK5jherzMjv42OJr%2BVsjHLCHEX5szFezppzvkIud%2FH%2BECeksGGZe2B%2F%2BwufRovDvwExWlyQViXw4QkWN%2FFlHAjxd5nnt617wdPIIaz1jI0rcjmi3%2F83kiz7J8jICzjcZYN6y6U4qvMkCt0LuWInfnB9KmscGxJ23ddEJ0PD6u4BeHLRTDC%2FW6ZNzmYzC2bLldF4xrSkXrdhIiB1XxCfyXWP09uYlwJ6JwyyHOSi2s4BDAB8hpCy6arDs8LzlRTi%2FV59wnb0vsJ2EIYBFnn5ojrkaQbq%2Bwkiv%2Bm0%2F1FEhKze%2FzOzuxBOJVD8s9c%2F0BRSiXE42uWarVvpUKur6PAZ4MHDWnnZbpITBN9QmIrJ5%2FPpzgiEGoQVpHmmWxAjNq8uyrHo53GWZghYmuAOmdJo0ufYPL3%2BXZleWunaEueznyTsI8CkAARdaRAgCW%2BN2u8hBGKMi23bUpSq2IQki3Sb%2BnBsICfeiWsxW1AiTfRlZRn3kvoLOflu7t9yxlDUDAae2kvvhOzeGrqdCRr8ke0nAJuoWQ2MbnWilme%2BLGnyiS24MNmM4KsGOrEBF0%2FiKXS%2BXN3jREFzUHESuHQjXdPbgCmi6sShM2%2FUvgfWKW8qrxJwyirHkEngKUJkoqdKqEN9fMOJwv1YFwZh8XHBE526%2FzG5a8S3oO6D7nZidROOHZEfCzdgmfGbM0ikeRGPk3nJCCniCjZbuvEDIuiLMxDDPoCf%2F94QdZDF3M900JEo%2B9gsKC%2BGsaiBXMnkblXpmchlHtWuvaG%2BTzycqQCxTFDLMVZCf9GL5aURF9uW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231212T074705Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY3WA6XJTJ%2F20231212%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d6f50bf950b60ffeddc148b474c40835ecbdbb158ddaa778b13107cad408a096&hash=57113a8376a74a527b0b43febde5cd97309504fa368659319b73948fa06e3cae&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S1877050917329678&tid=spdf-8bc1ccbb-4b35-4f5a-8010-cf6b148322cd&sid=f4d150331242c64439186e73a928b37fc6c2gxrqb&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0f0b585c5550560554&rr=83445b766d3e449f&cc=id",
        },
        {
          year: "2016",
          title: "Facebook Privacy Concerns Among High-School Teens",
          publisher:
            "International Journal of Computer Science and Security | LJS Publishing",
          url:
            "https://d1wqtxts1xzle7.cloudfront.net/51650479/67_Paper_301116149_IJCSIS_Camera_Ready_569-583-libre.pdf?1486319464=&response-content-disposition=inline%3B+filename%3DFacebook_Privacy_Concerns_among_High_Sch.pdf&Expires=1702370778&Signature=ZFF5dooqs7NSBShcehL9n2rhk8uwADxWHzp4uznUz9V8BB9ALaFxGCmv0-yhfnddoT1pFWNoQC4K4GZcwRLegsF8VCCj6TA9kd1VwIFPwY-Nch~O3zZ-3CSmeokWcdq1MpIEASeADSGCyxAcOl3w~~8i9HpqVrlvSlALxd8cywyvt9VBJVm~TY9sxUB6c6cP7mT1hc0dPWEFxWmiCYOvy06ARBH4GWuPzI0xMWaEUD5VRXxhkpa8ZFTTogIuCkCeDgQOliXPgcaP0r4K4jDJ3TY61MdZM2fybqKJUVcgNGq2-gQT6jpNUBQ0aHgkwAKD7DaGEbpPVIF1Rt50Y-uqdg__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
        },
      ],
    };
  },

  methods: {
    openLink(url) {
      window.open(url, "_blank");
    },
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
      margin-bottom: 15px;

      @media (min-width: 768px) {
        width: 66.66%;
      }

      @media (max-width: 320px) {
        margin-bottom: 25px;
      }

      .pub-title {
        font-weight: bold;
        font-size: 20px;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }

        @media (max-width: 991px) {
          font-size: 18px;
        }

        @media (max-width: 425px) {
          font-size: 16px;
        }

        @media (max-width: 320px) {
          font-size: 14px;
          margin-bottom: 7px;
        }
      }

      .pub-journal {
        font-size: 16px;

        @media (max-width: 991px) {
          font-size: 14px;
        }

        @media (max-width: 425px) {
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
