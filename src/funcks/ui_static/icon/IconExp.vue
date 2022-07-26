<template>
    <div>
        <i class="i-icing">
            <img v-if="_name == 'drop_down'" src="../../../assets/icon/drop_down.png">
            <img v-else-if="_name == 'home'" src="../../../assets/icon/home.png">
        </i>
    </div>
</template>

<script>
export default {
    props: {
        _name: {
            type: String,
            default: 'drop_down'
        }
    }
}
</script>

<style>

</style>