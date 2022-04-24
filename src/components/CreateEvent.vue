<template>
  <div class="main-div">
    <div class="form-control">
      <label>Team A</label>
      <input type="text" placeholder="TeamABC" v-model="teamA" />
    </div>
    <div class="form-control">
      <label>Team B</label>
      <input type="text" placeholder="TeamXYZ" v-model="teamB" />
    </div>
    <div class="form-control">
      <label>Token</label>
      <input type="text" placeholder="h6bivd8dnvje" v-model="token" />
    </div>

    <button @click="sendEventToApi()">Create Event</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      teamA: "",
      teamB: "",
      token: "",
    };
  },
  methods: {
    async sendEventToApi() {
      let headers = { token: this.token };

      let uri = "http://localhost:8080/events/" + this.teamA + "/" + this.teamB;

      let res = await axios.post(
        uri,
        "Random Daten damit er nicht denkt das Headerdaten in den Bodx kommen",
        { headers: headers }
      );

      console.log(res.status);
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  height: 40px;
}

button {
  align-content: center;
  align-self: center;
  align-items: center;
}

.main-div {
  margin-top: 200px;
}

button {
  background-color: rgba(244, 213, 176, 0.511);
  margin-left: 100px;
  margin-top: 50px;
  height: 100px;
  width: 20%;
  font-size: 150%;
}

button :hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>