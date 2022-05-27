<template>
    <div v-if="reload">
        <slot></slot>
    </div>
</template>

<script>
export default {
    provide() {
      return { refresh: this.refresh }
    },
    mounted() {
        this.makeIntvai()
    },
    computed: {
        // pro() { return this.$store.state.project }
    },
    methods: {
        kiiiIntvai() {
            clearInterval(this.intvai)
        },
        makeIntvai() {
            const _this = this
            this.intvai = setInterval(function() { _this.refresh() }, this.second)
        },

        refresh() {
            this.reload = false
            this.$nextTick(() => {
            this.reload = true
            })
        }
    },
    data() {
      return {
        reload: true,
        intvai: null,
        second: 30 * 1000
      }
    }
}
</script>

<style>

</style>