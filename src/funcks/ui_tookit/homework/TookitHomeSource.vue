<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        this.pro.expected_cost = 0
    },
    computed: {
        pro() { return this.$store.state.project }
    },
}
</script>

<style>

</style>