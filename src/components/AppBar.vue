<template>
  <div>
    <div class="home-app-bar">
      <div>
        <router-link to="/" style="text-decoration: none">
          <img src="@/assets/main_logo_noBG.png" class="home-app-bar-img" />
        </router-link>
      </div>

      <div class="home-app-bar-menu">
        <router-link to="/introduce" class="menu-items"
          >Introduction</router-link
        >
        <router-link to="/diary" class="menu-items">Diary</router-link>
        <router-link to="/manage" class="menu-items">Manage</router-link>
        <router-link to="/config" class="menu-items">Config</router-link>
      </div>
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
  background: none;
  font-size: 18px;
}
/* .home-app-bar-wrapper {
  display: table-cell;
  vertical-align: middle;
} */
.home-app-bar-img {
  max-width: 60px;
  max-height: 60px;
}

.home-app-bar-menu {
}

.menu-items {
  text-decoration: none;
  color: black;
  margin: 10px;
}
</style>
