<template>
    <div class="fx-r" @click="auth">
        <img class="user-face hand" :src="user.avatar">
        <div class="user-name pl ttd hand">
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
            this.$parent.change()
            console.log(this.$parent.down)
        }
    }
}
</script>

<style>

</style>