<template>
  <div>
    <div class="form-control">
      <label>Add Team</label>
      <input
        v-model="teamName"
        type="text"
        placeholder="Team Name"
        required="true"
      />
    </div>

    <div class="form-control">
      <input
        v-model="power"
        type="text"
        placeholder="Basicpower"
        required="true"
      />
    </div>
    <div class="form-control">
      <input
        v-model="form"
        type="text"
        placeholder="Currentform"
        required="true"
      />
    </div>

    <div class="form-control">
      <input v-model="token" type="text" placeholder="Token" required="true" />
    </div>
    <input class="button button2" type="submit" @click="sendTeamToApi()" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      teamName: "",
      power: "",
      form: "",
      token: "",
    };
  },

  methods: {
    async sendTeamToApi() {
      let team = {
        name: this.teamName,
        basicPower: this.power,
        currentForm: this.form,
      };
      let headers = {
        "Content-Type": "application/json",
        token: this.token,
      };

      let result = await axios.post("http://localhost:8080/teams", team, {
        headers: headers,
      });

      console.log(result.status);
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}

div {
  margin-top: 200px;
}

.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

.button2:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>