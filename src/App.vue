<template>
    <div id="app">
        <layout></layout>
    </div>
</template>

<script>
import Layout from './Layout.vue'

    export default {
        components: { Layout },
        data() {
            return {
                shimmer: true, }
        },
        mounted() { this.init() },
        methods: {
            async init() {
                let res = 'A' // await this.net._admin()
                // this.$store.commit('change', [ 'token', res ]) 
            },
            _shimmer(v) { this.shimmer = v }
        },
        beforeDestroy() { },
    }
</script>

<style lang="sass">
@import "@/air/sass/base.sass"
</style>