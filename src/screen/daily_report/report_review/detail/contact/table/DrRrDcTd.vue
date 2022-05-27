<template>
    <div class="td pl-ip_icon">
        <div class="w-43">
            {{ one.name }}
        </div>
        <div class="w-33">
            {{ one.email }}
        </div>
        <div class="w-24">
            {{ one.phone }}
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