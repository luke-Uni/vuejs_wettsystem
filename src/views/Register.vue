<template>
  <div class="top">
  </div>
  <div class="container">
    <form class="form">
      <fieldset>
        <img src="../assets/1.png" alt="HeNan" id="logo">
        <label for="username"></label>
        <input type="text" id="username" placeholder=" &nbsp;&nbsp;Username" v-model="username" />
        <br />
        <label for="password"></label>
        <input type="password" id="password" placeholder=" &nbsp;&nbsp;Password" v-model="password" />
        <br />
        <label for="username"></label>
        <input type="text" id="firstName" placeholder=" &nbsp;&nbsp;First name" v-model="firstName" />
        <br />
        <label for="password"></label>
        <input type="password" id="lastName" placeholder=" &nbsp;&nbsp;Last name" v-model="lastName" />
        <br />
        <label for="username"></label>
        <input type="text" id="birthdy" placeholder=" &nbsp;&nbsp;Birthdy" v-model="birthdy" />
        <br />
        <input type="radio" id="radio">i've read and accepted the <a href="">Privacy Policy</a>
        <br />
        <button class="primary" @click="goToLogin($event)" id="loginButton">Sign up</button>
        <span>Have an account?<a href="">Log in</a></span>
      </fieldset>
    </form>
  </div>
    <div class="footer">
    <div id="leftImg">
      <img src="../assets/河南师范大学.png" alt="">
    </div>
    <div id="rightImg">
      <img src="../assets/logo.svg" alt="">
    </div>
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
      firstName: "",
      lastName: "",
      birthdy: ""
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
#logo{
  margin-bottom: 30px;
}
#leftImg{
  /* background-color: black; */
  height: 40px;
  width: 20%;
  float: left;
}
#leftImg img{
  width: 65%;
  opacity: 0.7;
  
}
#rightImg img{
  width:65%;
}
#rightImg{
  /* background-color: blue; */
  height: 40px;
  width: 20%;
  float: right;
}
.top,.footer{
  height: 60px;
  background-color: aqua;
}
.container {
  border: 1px solid black;
  width: 400px;
  height: 550px;
  /* background-color: aqua; */
  border-radius: 60px;
  margin: 1.4% auto;
}

.form {
  /* padding: 40px 35px; */
  display: block;
  margin: 40px auto;
}

#birthdy {
  border-radius: 20px;
  margin-bottom: 20px;
  width: 300px;
  height: 40px;
  margin-left: 35px;
  box-shadow: 3px 3px 3px grey;
}

#username,#password,#firstName,#lastName {
  border-radius: 20px;
  margin-bottom: 20px;
  width: 300px;
  height: 40px;
  margin-left: 35px;
  box-shadow: 3px 3px 3px grey;
}

#loginButton {
  border-radius: 20px;
  margin-bottom: 20px;
  width: 300px;
  height: 40px;
  background-color: rgb(63, 218, 63);
  margin-left: 35px;
}
span{
  margin-left: 80px;
}

#registerButton{
  border-radius: 20px;
  margin-bottom: 40px;
  width: 200px;
  height: 40px;
  background-color: green;
  margin-left: 75px;
}
input{
  margin: 0 auto;
}
img{
  width: 300px;
  height: 50px;
  margin-bottom: 5px;
  margin-left: 35px;
}
.bottom{
  /* background-color: black; */
  width: 300px;
  height: 2px;
  margin-left: 35px;
  border-top: 2px solid black;
  margin-bottom: 20px;
}
#radio{
  margin-bottom: 15px;
  margin-left: 10px;
}
</style>
