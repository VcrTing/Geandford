<template>
    <div class="menu-auth-card">
        <nav>

        </nav>

        <div class="fx-s">
            <img class="img round w-33" :src="user.avatar">
            <div class="w-67 pl_x">
                <div class="pb_t">{{ user.username }}</div>
                <span class="sus">{{ user.part }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        user() { return this.$store.state.user }
    },
}
</script>

<style lang="sass" scoped>
</style>