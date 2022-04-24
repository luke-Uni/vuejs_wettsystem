<template>
    <div>
        <!-- <ul>
            <h4>Nutzer</h4>
            <li v-for="user in users"
            :key="user.name"
            @click="user.showAge = true"
            :class="colorize(user.age) "
            >
                {{user.name}}
                <span v-if="user.showAge" >{{ user.age }}</span>
            </li>
        </ul> -->
    </div>
</template>

<script>

export default {
    data() {
        return {
            teams:[ ],
        };
    },

    methods: {
        getTeamsfromApi(){

            

        },
    },
};

</script>

<style lang="scss" scoped>

div ul {
  margin-top: 100px;
}

.red {
    color: red;
}

.blue {
    color: blue;
}

</style>