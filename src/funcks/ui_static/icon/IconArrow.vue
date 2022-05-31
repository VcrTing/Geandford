<template>
    <i>
        <div v-if="name == 'left'" class="i-icing">
            <img src="../../../assets/icon/left.png">
        </div>
        <div v-else-if="name == 'right'" class="i-icing fan">
            <img src="../../../assets/icon/left.png">
        </div>
        <div v-else-if="name == 'menu'" class="i-icing">
            <img src="../../../assets/icon/expand_more.png">
        </div>
    </i>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'left'
        }
    }
}
</script>

<style lang="sass" scoped>
.fan
    transform: rotate(-180deg)

</style>