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
  width: 100vw;
  height: 100vh;
  background-size: cover;
}

#home-section-text {
  color: black;
  font-size: 32px;
  margin: 0 auto;
  text-align: center;
}
</style>
