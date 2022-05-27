<template>
    <div class="td">
        <div class="w-32">{{ one.kiii }}</div>
        <div class="w-50">{{ one.accid }}</div>
        <div class="w-18">{{ one.date }}</div>
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