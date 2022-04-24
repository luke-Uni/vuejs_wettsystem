<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

export default {
  components: {
    Home,
    Admin,
    Login,
    Register,
  },
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  font-family: Montserrat;
}
</style>
