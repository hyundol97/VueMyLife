<template>
  <div>
    <div v-for="(bgImage, idx) in sectionImages" :key="idx">
      <div
        class="home-section"
        :style="{
          backgroundImage: 'url(' + require(`@/assets/${bgImage}`) + ')',
          opacity: 0.4,
        }"
      >
        <p v-if="idx === 0" id="home-section-text">Section 1</p>
        <p v-if="idx === 1" id="home-section-text">Section 2</p>
        <p v-if="idx === 2" id="home-section-text">Section 3</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  data() {
    return {
      sectionImages: ["home_img1.png", "home_img2.png", "home_img3.png"],
    };
  },

  components: {},
};
</script>

<style scoped>
.home-section {
  background-size: 100% 100%;
  line-height: 100vh;
  text-align: center;
  vertical-align: middle;
}

#home-section-text {
  color: black;
  font-size: 32px;
  margin: 0 auto;
  transform: translate3d(0px, 50px, 0px);
  animation: 0.5s ease-in-out 0.5s 1 normal forwards running;
}
</style>
