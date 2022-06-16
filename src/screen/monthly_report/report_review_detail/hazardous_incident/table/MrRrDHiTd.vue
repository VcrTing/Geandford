<template>
    <div class="td pl-ip_icon">
        <div class="w-28">{{ one.date }}</div>
        <div class="w-50">{{ one.description }}</div>
        <div class="w-22"></div>
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