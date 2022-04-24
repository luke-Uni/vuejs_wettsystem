<template>
  <section id="home">
    <TheHeader
      @toggle-add-team="toggleAddTeam()"
      @toggle-add-event="toggleAddEvent()"
    />

    <TheFooter />
    <div v-if="showAddTeam">
      <CreateEvent />
    </div>
    <div v-else-if="showAddEvent">
      <CreateTeam />
    </div>
  </section>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import CreateTeam from "../components/CreateTeam.vue";
import CreateEvent from "../components/CreateEvent.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    CreateTeam,
    CreateEvent,
  },

  data() {
    return {
      showAddTeam: false,
      showAddEvent: false,
      showPlayGame: false,
    };
  },

  methods: {
    toggleAddTeam() {
      this.showAddTeam = true;
      this.showAddEvent = false;
      this.showPlayGame = false;
    },
    toggleAddEvent() {
      this.showAddEvent = true;
      this.showAddTeam = false;
      this.showPlayGame = false;
    },
  },
};
</script>
