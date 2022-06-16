<template>
    <div class="td pl-ip_icon">
        <div class="w-24">{{ one.name }}</div>
        <div class="w-47">{{ one.email }}</div>
        <div class="w-20">{{ one.phone_no }}</div>
        <div class="w-10">
            
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'one' ]
}
</script>

<style>

</style>