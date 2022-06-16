<template>
    <i @click="$emit('tap')">
        <div class="i-icing">
            <img v-if="_name == 'accident'" src="../../../assets/icon_img/danger/accident.png">
            <img v-else-if="_name == 'damage'" src="../../../assets/icon_img/danger/damage.png">
            <img v-else-if="_name == 'hazardous_incident'" src="../../../assets/icon_img/danger/hazardous_incident.png">
        </div>
    </i>
</template>

<script>
export default {
    props: {
        _name: {
            type: String,
            default: 'left'
        }
    }
}
</script>

<style lang="sass" scoped>

</style>