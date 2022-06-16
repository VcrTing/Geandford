<template>
    <div class="td pl-ip_icon">
        <div class="w-82">{{ one.damage_count }}</div>
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