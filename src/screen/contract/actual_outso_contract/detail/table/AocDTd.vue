<template>
    <div class="td pl-ip_icon">
        <div class="w-38">{{ one.name }}</div>
        <div class="w-32">{{ one.c_name }}</div>
        <div class="w-30">{{ one.phone }}</div>
    </div>
</template>

<script>
export default {
    props: {
        one: {
            type: Object,
            default() {
                return {
                    name_ch: '張總',
                    name_en: 'Zhang',
                    phone: '+877 8888888'
                }
            }
        }
    }
}
</script>

<style>

</style>