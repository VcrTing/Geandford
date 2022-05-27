<template>
    <div id="app">
        <layout></layout>
        <tookit-store></tookit-store>
    </div>
</template>

<script>
import TookitStore from './funcks/ui_tookit/check/TookitStore.vue'
import Layout from './Layout.vue'

    export default {
        components: { Layout, TookitStore },
        data() {
            return {
                shimmer: true, }
        },
        mounted() { this.init() },
        methods: {
            async init() {
                
            },
            _shimmer(v) { this.shimmer = v }
        },
        beforeDestroy() { },
    }
</script>

<style lang="sass">
@import "@/air/sass/base.sass"
</style>