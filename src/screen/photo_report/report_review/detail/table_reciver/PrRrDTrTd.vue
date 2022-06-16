<template>
    <div class="td">
        <div class="w-28">
            {{ one.name }}
        </div>
        <div class="w-32">
            {{ one.email }}
        </div>
        <div class="w-24">
            {{ one.phone }}
        </div>
        <div class="w-16">
            {{ one.job_function }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        one: {
            type: Object
        }
    }
}
</script>

<style>

</style>