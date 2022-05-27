<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('这里做 HTML 界面要刷新做的事情')
        this.pro.expected_cost = 0
    },
    computed: {
        pro() { return this.$store.state.project }
    },
}
</script>

<style>

</style>