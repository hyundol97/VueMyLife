<template>
  <div class="footer">
    COPYRIGHT © {{ new Date().getFullYear() }} gusqhdo00@gmail.com, All rights
    Reserved
  </div>
</template>

<script>
export default {
  name: "FootBar",
};
</script>

<style scoped>
.footer {
  display: table;
  width: 100%;
  height: 50px;
  margin-top: 15px;
  text-align: center;
  background: none;
  font-size: 14px;
}
</style>
