<template>
    <div class="td pl-ip_icon">
        <div class="w-28">{{ one.injury_count }}</div>
        <div class="w-30">{{ one.accident_count }}</div>
        <div class="w-42">{{ one.date }}</div>
    </div>
</template>

<script>
export default {
    props: {
        one: {
            type: Object,
            default() {
                return {
                }
            }
        }
    }
}
</script>

<style>

</style>