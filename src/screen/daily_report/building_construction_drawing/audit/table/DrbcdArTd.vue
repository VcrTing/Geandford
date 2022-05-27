<template>
    <div class="td pl-ip_icon">
        <div class="w-42">
            {{ one.name }}
        </div>
        <div class="w-32">
            {{ one.email }}
        </div>
        <div class="w-26">
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