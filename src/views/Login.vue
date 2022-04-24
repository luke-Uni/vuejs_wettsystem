<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css"
  />
  <div class="container">
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
        <button class="primary" @click="checkCredentials($event)">Login</button>
        <button class="primary" id="registerBtn" @click="goToRegister($event)">
          Register
        </button>
      </fieldset>
    </form>
    <p>{{ feedback }}</p>
    <p>Feedback...</p>
    <ul>
      <li v-for="user in users" :key="user.name">
        <a @click="changeUser(user.name)"> {{ user.name }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      currentUser: "flo",
      feedback: "",
    };
  },

  methods: {
    checkPassword(password) {
      return this.users.filter((user) => password === user.password);
    },

    checkCredentials(event) {
      event.preventDefault();

      if (
        this.username === this.currentUser &&
        this.checkPassword(this.password).length !== 0
      ) {
        this.feedback = "Korrekte Credentaials";
      } else {
        this.feedback = "Falsche Credentials";
      }
    },
    changeUser(name) {
      this.currentUser = name;
    },
    goToRegister(event) {
      event.preventDefault();
      this.$router.push("register");
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 10%;
}
.primary {
  width: 25%;
}
#registerBtn {
  margin-left: 30%;
}
</style>