<template>
  <div>
    <TheFooter />
    <h3>Register</h3>

    <form>
      <fieldset>
        <legend>Login</legend>
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          v-model="username"
        />
        <br />
        <label for="password">Password</label>
        <input
          type="password"
          id="passsword"
          placeholder="Password"
          v-model="password"
        />
        <br />
        <button class="primary" @click="goToLogin($event)">Login</button>
        <button class="primary" @click="registerAcc($event)">Register</button>
      </fieldset>
    </form>
  </div>
</template>
<script>
import TheFooter from "../components/TheFooter.vue";
import axios from "axios";
export default {
  components: {
    TheFooter,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    goToLogin(event) {
      event.preventDefault();

      this.$router.push("/login");
    },

    async registerAcc(event) {
      event.preventDefault();

      let headers = { "Content-Type": "application/json" };

      let res = await axios.post(
        "http://localhost:8080/users",
        { username: this.username },
        {
          headers: headers,
        }
      );

      console.log(res.status);
    },
  },
};
</script>

<style scoped>
</style>