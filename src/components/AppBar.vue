<template>
  <div>
    <div class="home-app-bar">
      <router-link to="/">
        <img src="@/assets/main_logo.png" class="home-app-bar-img" />
      </router-link>

      <router-link to="/introduce">메뉴1</router-link>
      <router-link to="/diary">메뉴2</router-link>
      <router-link to="/manage">메뉴3</router-link>
      <router-link to="/config">메뉴4</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBar",

  components: {},
};
</script>

<style scoped>
.home-app-bar {
  display: table;
  width: 100%;
  height: 6px;
  justify-content: space-between;
  text-align: center;
  margin: 0 auto;
  background: red;
}
/* .home-app-bar-wrapper {
  display: table-cell;
  vertical-align: middle;
} */
.home-app-bar-img {
  max-width: 60px;
  max-height: 60px;
}
</style>
