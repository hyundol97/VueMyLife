<template>
  <div class="app">
    <app-bar />
    <router-view />
    <foot-bar />
  </div>
</template>

<script>
import AppBar from "@/components/AppBar";
import FootBar from "@/components/Footer";

export default {
  name: "App",
  components: { AppBar, FootBar },
};
</script>

<style>
/* @media (min-width: 480px) {
  .app div {
    width: "100%";
  }
}

@media (min-width: 1200px) {
  .app div {
    width: 70%;
    margin-left: 15%;
  }
} */
</style>
