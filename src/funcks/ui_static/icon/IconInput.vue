<template>
    <i @click="$emit('tap')">
        <div v-if="name == 'time'" class="i-icing">
            <img src="../../../assets/icon/calendar.png">
        </div>
        <div v-else-if="name == 'search'" class="i-icing">
            <img src="../../../assets/icon/search.png">
        </div>
    </i>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'time'
        }
    }
}
</script>

<style lang="sass" scoped>


</style>