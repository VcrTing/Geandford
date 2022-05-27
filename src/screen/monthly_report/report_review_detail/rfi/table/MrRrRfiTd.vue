<template>
    <div class="td">
        <div class="w-28">{{ one.name }}</div>
        <div class="w-30">{{ one.phone }}</div>
        <div class="w-24">{{ one.phone }}</div>
        <div class="w-18">{{ one.type }}</div>
    </div>
</template>

<script>
export default {
    props: {
        one: {
            type: Object,
            default() {
                return { }
            }
        }
    }
}
</script>

<style>

</style>