<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
@media (min-width: 480px) {
  .app div {
    width: "100%";
  }
}

@media (min-width: 1200px) {
  .app div {
    width: 70%;
    margin-left: 15%;
  }
}
</style>
