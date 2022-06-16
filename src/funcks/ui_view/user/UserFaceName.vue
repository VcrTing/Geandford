<template>
    <div class="fx-r" @click="auth">
        <!--img class="user-face hand" :src="user.avatar"-->
        <div class="user-name pl ttd hand t-cap">
            {{ user.username }}
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        user() { return this.$store.state.user }
    },
    methods: {
        auth() {
        }
    }
}
</script>

<style>

</style>