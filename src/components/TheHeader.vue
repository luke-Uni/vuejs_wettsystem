<template>
  <header>
    <h5>Soccer Bets</h5>

    <router-link to="/login">
      <button>LOGIN</button>
    </router-link>
    <button
      id="btnTeam"
      :class="[isPressed ? 'pressed' : 'notPressed']"
      @click="$emit('toggle-add-team'), changecolor()"
    >
      Create a Team
    </button>
    <button id="btnEvent" @click="$emit('toggle-add-event'), changecolor()">
      Create an Event
    </button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      changeTo: "Create a Team",
      isPressed: false,
    };
  },
  methods: {
    changecolor() {
      this.isPressed = !this.isPressed;
    },
  },
};
</script>

<style lang="scss" >
header {
  background-color: rgba(0, 0, 0, 0.87);
  position: fixed;
  top: 0;
  color: white;
  width: 100%;
  margin-bottom: 5px;
  box-shadow: 0 3px 15px rgba(57, 63, 72, 0.1);

  h5 {
    text-align: center;
    font-size: 2.2rem;
    line-height: 0.8;
    font-weight: 900;
    margin-top: 40px;
  }
}

.notPressed {
  background-color: rgb(101, 118, 108);
  font-size: 150%;
  width: 150px;
  height: 100px;
  position: relative;
  margin-left: 50px;
}
.pressed {
  background-color: rgb(54, 209, 103);
  font-size: 150%;
  width: 150px;
  height: 100px;
  position: relative;
  margin-left: 50px;
}
</style>