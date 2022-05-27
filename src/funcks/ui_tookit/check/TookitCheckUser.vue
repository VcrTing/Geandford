<template>
  
</template>

<script>
export default {
    computed: {
        user() { return this.$store.state.user }
    },
    mounted() {
        this.check()
    },
    methods: {
        check() {
            const u = this.user
            if (u.id && u.email) { console.log(this.user, '已登录') } else { this.go('/login') }
        }
    }
}
</script>

<style>

</style>